const passport = require("passport");
const express = require("express");
const Router = express.Router();

Router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

Router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/dashboard");
});

module.exports = Router;
