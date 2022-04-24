const express = require("express");
const router = express.Router();

const {
  getTypesSpecie,
  getIdTypesSpecie,
} = require("../../controllers/catalogue/types_specie.controller");

const {
  getAllScientificName,
  getIdScientificName,
} = require("../../controllers/catalogue/scientific_name.controller");

const {
  getDangerLevel,
  getIdDangerLevel,
} = require("../../controllers/catalogue/danger_level.controller");

//TITLE: types-specie
router.route("/types-specie").get(getTypesSpecie);

router.route("/types-specie/:id").get(getIdTypesSpecie);

//TITLE: scientific-name
router.route("/scientific-name").get(getAllScientificName);

router.route("/scientific-name/:id").get(getIdScientificName);

//TITLE: danger-level
router.route("/danger-level").get(getDangerLevel);

router.route("/danger-level/:id").get(getIdDangerLevel);

module.exports = router;
