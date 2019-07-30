const mongoose = require("mongoose");
const recipientSchema = require("./Recipient");

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

const Survey = mongoose.model("surveys", surveySchema);
module.exports = Survey;
