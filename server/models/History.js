const mongoose = require("mongoose");
const { Schema } = mongoose;

const HistorySchema = new Schema(
  {
    user_id: String,
    level: String,
    time: String,
    score: String,
    answer: {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("History", HistorySchema);
