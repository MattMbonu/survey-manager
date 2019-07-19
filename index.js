const express = require("express");
const app = express();
const keys = require("./config/keys");
//Routes
const auth = require("./routes/auth.routes");
//models
require("./models/Users");
//Services
require("./services/passport");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");

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

app.use("/auth", auth);
app.get("/api/current_user", (req, res) => {
  res.json(req.user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is working on PORT: ${PORT}`);
});
