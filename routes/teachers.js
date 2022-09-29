
const express = require('express');
const { teacherController } = require("../controllers/index");

const router = express.Router();

router.route("/").get(teacherController.teacher_all)
router.route("/").post(teacherController.teacher_create)
router.route("/:id").get(teacherController.teacher_details)
router.route("/:id").put(teacherController.teacher_update)
router.route("/:id").delete(teacherController.teacher_delete)

module.exports = router;