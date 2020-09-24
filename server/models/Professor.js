const mongoose = require('mongoose')
const { Schema } = mongoose

const ProfessorSchema = new Schema(
  {
    name: String,
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Professor', ProfessorSchema)