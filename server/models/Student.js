const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "History",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", StudentSchema);
