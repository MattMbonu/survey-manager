const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const express = require("express");
const Router = express.Router();

const Survey = mongoose.model("surveys");

Router.post("/", requireLogin, requireCredits, (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map(email => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now()
  });
});

module.exports = Router;
