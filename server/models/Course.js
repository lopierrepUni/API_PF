const mongoose = require('mongoose')
const { Schema } = mongoose

const CourseSchema = new Schema(
  {
    name: String,
    professor: String,
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Course', CourseSchema)