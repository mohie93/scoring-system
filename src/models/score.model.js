const mongoose = require("mongoose");
const { Schema } = mongoose;

const score = new Schema({
  riderId: { type: String, required: true },
  metrics: {
    type: Object,
    required: false,
    default: {
      JoinDateScore: 0,
      JobsCompletedScore: 0,
      AcceptanceScore: 0,
      CancellationScore: 0,
      ArrivalTimeScore: 0,
      JobDurationScore: 0,
      UserFeedbackScore: 0,
      InternalFeedbackScore: 0,
    },
  },
});

module.exports = mongoose.model("score", score);
