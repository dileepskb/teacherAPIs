// const mongoose = require("mongoose");

// const teacherSchema =  new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// });
// module.exports = mongoose.model("teacher",teacherSchema);



const mongoose = require('mongoose');

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
    }
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef property
 */
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;