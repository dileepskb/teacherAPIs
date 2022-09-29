
const Teacher = require("../model/Teachers");
//const GetTeacher = require("../model/GetTeacher");
//Get all Teacher
const teacher_all = async (req, res) => {
    Teacher.find()
   .then(result=>{
      res.status(200).json({
         allTeacher:result
      })
   })
   .catch(err=>{
      console.log(err);
      req.status(500).json({
         error:err
      })
   })
};
//Singler Teacher
const teacher_details = async (req, res) => {
   Teacher.findById(req.params.id)
   .then(result=>{
      res.status(200).json({
         teacher:result
      })
   })
   .catch(err=>{
      console.log(err);
      req.status(500).json({
         error:err
      })
   })
};
//Add New Teacher
const teacher_create = async (req, res) => {
   const teacher =new Teacher({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
   })
   teacher.save()
   .then(result=>{
      res.status(200).json({
         newTeacher:result
      })
   })
   .catch(err=>{
      console.log(err);
      req.status(500).json({
         error:err
      })
   })
};
//Update Product
const teacher_update = async (req, res) => {
   
   Teacher.findOneAndUpdate({_id:req.params.id},{
      $set:{
         name:req.body.name,
         email:req.body.email,
         password:req.body.password
      }
   })
   .then(result=>{
      res.status(200).json({
         message:result
      }) 
   })
   .catch(err=>{
      console.log(err);
      req.status(500).json({
         error:err
      })
   })
};
//Delete Product
const teacher_delete = async (req, res) => {
   Teacher.remove({_id:req.params.id})
   .then(result=>{
      res.status(200).json({
         message:result+'teacher deleted'
      })
   })
   .catch(err=>{
      console.log(err);
      req.status(500).json({
         error:err
      })
   })
};

module.exports = {
  teacher_all,
  teacher_details,
  teacher_create,
  teacher_update,
  teacher_delete,
};
