const httpStatus = require('http-status');
const Teacher = require("../model/Teachers");
const { teacherService } = require("../services");

//Get all Teacher
const teacher_all = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.send(teachers);
  } catch (error) {
    res.send({ message: error });
  }
};
//Singler Teacher
const teacher_details = async (req, res) => {};
//Add New Teacher
const teacher_create = async (req, res) => {
  try {
    const teachers = await teacherService.createTeacher(req.body);
    res.status(httpStatus.CREATED).send(teachers);
  } catch (error) {
   console.log(error);
    res.status(500).send({ error: "error" });
  }
};
//Update Product
const teacher_update = async (req, res) => {
  // try{
  //     const teacher = {
  //         name: reg.body.name,
  //         email: reg.body.email,
  //         password: reg.body.password
  //         //name: reg.body.name
  //     }
  //     const updateTeacher = await Teacher.findByIdAndUpdate(
  //         { _id = reg }
  //     )
  // }
};
//Delete Product
const teacher_delete = async (req, res) => {};

module.exports = {
  teacher_all,
  teacher_details,
  teacher_create,
  teacher_update,
  teacher_delete,
};
