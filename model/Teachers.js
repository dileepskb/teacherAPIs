const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
      default: 0,
    },
    password: {
      type: String,
      required: false,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef property
 */
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
