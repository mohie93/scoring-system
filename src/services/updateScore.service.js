const Score = require("../models/score.model");

//@TODO: @mohie93: in future add more attributes for better tracking and reporting
exports.call = async (data) => {
  try {
    const { riderId, criterion, value } = data;
    if (!riderId || !criterion || !value)
      return { success: false, message: "Invalid payload" };

    if (value < 0) return { success: false, message: "Negative value" };

    const riderCurrentScore = await Score.findOne({ riderId });
    if (riderCurrentScore) {
      // ? Handle only sum for positive numbers
      const newValue = riderCurrentScore[criterion] + value;
      await riderCurrentScore.updateOne({ [criterion]: newValue });
      return { success: true, message: "Score updated" };
    } else {
      return { success: false, message: "No rider found!" };
    }
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};
