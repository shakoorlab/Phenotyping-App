// models/ActiveUser.js
const mongoose = require("mongoose");

const activeUserSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  signedInAt: { type: Date, default: Date.now },
  signedOutAt: { type: Date },
  imageUrl: { type: String },
});

module.exports = mongoose.model("ActiveUser", activeUserSchema);
