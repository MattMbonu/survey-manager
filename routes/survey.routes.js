const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const express = require("express");
const Router = express.Router();
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/email-template/surveyTemplate");
const Survey = require("../models/Survey");
const _ = require("lodash");
const { URL } = require("url");
const { Path } = require("path-parser");

Router.get("/:surveyId/:choice", (req, res) => {
  res.send("thanks for voting!!");
});

Router.get("/", requireLogin, async (req, res) => {
  const surveys = await Survey.find({ _user: req.user.id }).select(
    "-recipients"
  );
  res.send(surveys);
});

Router.post("/", requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map(email => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now()
  });

  const mailer = new Mailer(survey, surveyTemplate(survey));
  try {
    await mailer.send();
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (error) {
    return res
      .status(422)
      .send({ error: ` sorry something went wrong ${error.message}` });
  }
});

Router.post("/webhooks", (req, res) => {
  const p = new Path("/api/survey/:surveyId/:choice");

  const clickEvents = _.chain(req.body)
    .map(({ email, url }) => {
      const match = p.test(new URL(url).pathname);
      if (match) {
        const { surveyId, choice } = match;
        return { email, surveyId, choice };
      }
    })
    .compact()
    .uniqBy("email", "surveyId")
    .each(({ surveyId, email, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { "recipients.$.responded": true },
          lastResponded: new Date()
        }
      ).exec();
    })
    .value();
  res.send({});
});

Router.delete("/:id", requireLogin, async (req, res) => {
  try {
    await Survey.findOneAndDelete({ _id: req.params.id });
    res.send("survey deleted");
  } catch (error) {
    console.error(error);
    return res.status(500).send("something went wrong");
  }
});

module.exports = Router;
