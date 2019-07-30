const express = require("express");
const app = express();
const keys = require("./config/keys");
//Routes
const auth = require("./routes/auth.routes");
const stripe = require("./routes/billing.routes");
const survey = require("./routes/survey.routes");
//models
require("./models/Users");
require("./models/Survey");
//Services
require("./services/passport");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const path = require("path");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {
  console.log("mongodb connected");
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use("/auth", auth);
app.use("/api/stripe", stripe);
app.use("/api/survey", survey);
app.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/api/current_user", (req, res) => {
  res.json(req.user);
});
//serve static assests
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is working on PORT: ${PORT}`);
});
