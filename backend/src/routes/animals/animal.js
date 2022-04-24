const express = require("express");
const router = express.Router();

const {
  getAllAnimals,
  getIdAnimal,
  getIdLocation,
  getIdTypeSpecie,
  getIdScientificName,
} = require("../../controllers/animals/animal.controller");

router.route("/").get(getAllAnimals);

router.route("/:id").get(getIdAnimal);

router.route("/location/:location").get(getIdLocation);

router.route("/type-specie/:typeSpecie").get(getIdTypeSpecie);

router.route("/scientific-name/:scientificName").get(getIdScientificName);

module.exports = router;
