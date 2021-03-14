const Score = require("../models/score.model");

exports.createRecord = async (req, res) => {
  try {
    const { riderId } = req.body;
    const score = new Score({ riderId });
    await score.save();
    return { code: 201, data: { message: "Created!", score } };
  } catch (error) {
    return { code: 442, data: { error: error.message } };
  }
};
