const express = require('express');
const { teacherController } = require('../controllers/index')

const router = express.Router();

router.route('/create').post(teacherController.teacher_create);

module.exports = router;