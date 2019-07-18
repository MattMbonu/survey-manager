const passport = require("passport");
const express = require("express");
const Router = express.Router();

Router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

Router.get("/google/callback", passport.authenticate("google"));

Router.get("/api/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

Router.get("/api/current_user", (req, res) => {
  res.json(req.user);
});

module.exports = Router;
