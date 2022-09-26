
const { Teacher } = require('../model/index');


const createTeacher = async (body) => {
  console.log(body);
  return Teacher.create(body);
};

module.exports = { createTeacher }