const Score = require("../models/score.model");

exports.createScoreRecord = async (req, res) => {
  try {
    const { riderId } = req.body;
    const score = new Score({ riderId });
    await score.save();
    return { code: 201, data: { message: "Created!", score } };
  } catch (error) {
    return { code: 442, data: { error: error.message } };
  }
};

exports.updateScore = async (req, res) => {
  try {
    const { riderId, criterion, value } = req.body;
    if (value < 0) return { code: 422, data: { message: "Negative value" } };
    const riderCurrentScore = await Score.findOne({ riderId });
    if (riderCurrentScore) {
      //* Handle only sum for positive numbers
      const { metrics } = riderCurrentScore;
      metrics[criterion] = metrics[criterion] + value;
      await riderCurrentScore.updateOne({ metrics });
      return {
        code: 200,
        data: { message: "Score Updated!", riderScore: riderCurrentScore },
      };
    } else {
      return { code: 422, data: { message: "Failed to update!", score: {} } };
    }
  } catch (error) {
    return { code: 442, data: { error: error.message } };
  }
};
