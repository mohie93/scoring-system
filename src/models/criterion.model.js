const mongoose = require("mongoose");
const { Schema } = mongoose;

const criterion = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  defaultValue: { type: Number, required: true },
});

module.exports = mongoose.model("criterion", criterion);
