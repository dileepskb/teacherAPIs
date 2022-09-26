//express call for router
// const router = require("express").Router();
//  const teacherController = require("../controllers/teacherController");
//data get post types
// router.post("/");
// router.get("/", teacherController.teacher_all);
// router.get("/:teacherID");
// router.put("/:teacherID");
// router.delete("/:teacherID");

// module.exports = router;

const express = require('express');
const teacherController = require("../controllers/teacherController");
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
// const userController = require('../../controllers/user.controller');

const router = express.Router();

router.route("/").get(teacherController.teacher_all)
router.route("/").post(teacherController.teacher_create)

// router
//   .route('/')
//   .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;