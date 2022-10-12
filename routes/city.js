
const express = require('express');
const { cityController } = require("../controllers/index");

const router = express.Router();

router.route("/importCities").get(cityController.cityCreate);
router.route("/getAllCities").get(cityController.getAllCities);
router.route("/findCity").post(cityController.findCity);

module.exports = router;