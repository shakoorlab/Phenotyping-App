// model for getting images from database
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

module.exports = mongoose.model("Image", imageSchema);
