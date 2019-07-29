const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");
const keys = require("../config/keys");
const Router = express.Router();
const stripe = require("stripe")(keys.stripeSecretKey);
const User = require("../models/Users");

Router.post("/", async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: `5 dollars for 5 credits payed by ${req.body.card.name}`,
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
  }
});

module.exports = Router;
