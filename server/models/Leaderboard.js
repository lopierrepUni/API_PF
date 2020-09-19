const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaderboardSchema = new Schema(
  {
    user_name: String,
    score: Number,
    time: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
