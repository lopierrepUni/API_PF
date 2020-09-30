const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaderboardSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    score: Number,
    time: Number,
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
