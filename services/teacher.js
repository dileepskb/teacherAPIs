// const httpStatus = require('http-status');
const { teacher } = require('../model/Teachers');

/**
 * Create a createteacher
 * @param {Object} teacherBody
 * @returns {Promise<teacher>}
 */
const createteacher = async (teacherBody) => {
  console.log("test "+teacherBody+teacher)
 // return teacher.create(teacherBody);
};



module.exports = {
  createteacher
 
  
};