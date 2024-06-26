const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  people: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  collected: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      date: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
