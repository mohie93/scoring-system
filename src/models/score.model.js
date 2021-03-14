const mongoose = require("mongoose");
const { Schema } = mongoose;

const score = new Schema({
  riderId: { type: String, required: true },
});

module.exports = mongoose.model("score", score);
