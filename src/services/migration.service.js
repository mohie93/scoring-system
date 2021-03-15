const Score = require("../models/score.model");

async function updateScoresRecord(params) {
  try {
    const { name, defaultValue } = params;
    const scores = await Score.find({});
    scores.forEach(async (score) => {
      const { metrics } = score;
      const updatedMetrics = { ...metrics, [name]: defaultValue };
      await score.updateOne({ metrics: updatedMetrics });
    });
    return { success: true, message: "Migrated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function deleteMetricFromAllRecords(params) {
  try {
    const { name } = params;
    const scores = await Score.find({});
    scores.forEach(async (score) => {
      const { metrics } = score;
      delete metrics[name];
      await score.updateOne({ metrics });
    });
    return { success: true, message: "Migrated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

module.exports = {
  updateScoresRecord,
  deleteMetricFromAllRecords,
};
