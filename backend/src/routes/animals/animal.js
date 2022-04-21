const express = require("express");
const router = express.Router();

const {
  getAllAnimals,
  getIdAnimal,
  getLocation,
  getTypeSpecie,
  getScientificName,
} = require("../../controllers/animals/animal.controller");

router.route("/").get(getAllAnimals);

router.route("/:id").get(getIdAnimal);

router.route("/location/:location").get(getLocation);

router.route("/type-specie/:typeSpecie").get(getTypeSpecie);

router.route("/scientific-name/:scientificName").get(getScientificName);

module.exports = router;
