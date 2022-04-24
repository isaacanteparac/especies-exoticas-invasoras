const animalCtrl = {};

const { json } = require("express/lib/response");
const db = require("../../../database");

animalCtrl.getAllAnimals = async (req, res) => {
  try {
    const allanimal = await db.query(
      "SELECT animals.name AS nameAnimal, animals.location, animals.id"+
      ",animals.description, animals.photo AS animalPhoto, animals.sound AS animalSound,"+
      "ctlg_type_specie.name AS typeSpecie, ctlg_scientific_name_animal.name AS scientificName "+
      ",users.name, users.lastname,users.username, users.photo FROM (((animals INNER JOIN users ON animals.id_users = users.id)"+
      "INNER JOIN ctlg_type_specie  ON animals.id_ctlg_type_specie  = ctlg_type_specie.id)"+
      "INNER JOIN ctlg_scientific_name_animal ON animals.id_ctlg_scientic_name   = ctlg_scientific_name_animal.id)"
    );
    res.status(200).json(allanimal);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

animalCtrl.getIdAnimal = async (req, res) => {
  try {
    const idanimal = await db.query("SELECT * FROM animals WHERE id = ?", [
      req.params.id,
    ]);
    res.status(200).json(idanimal);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

animalCtrl.getIdLocation = async (req, res) => {
  try {
    const animalsLocation = await db.query(
      "SELECT * FROM animals WHERE location = ?",
      [req.params.location]
    );
    res.status(200).json(animalsLocation);
  } catch (error) {
    res.status(400), json({ message: error });
  }
};

animalCtrl.getIdTypeSpecie = async (req, res) => {
  try {
    const animalTypeSpecie = await db.query(
      "SELECT animals.name AS nameAnimal, animals.location, animals.id"+
      ",animals.description, animals.photo AS animalPhoto, animals.sound AS animalSound,"+
      "ctlg_type_specie.name AS typeSpecie, ctlg_scientific_name_animal.name AS scientificName "+
      ",users.name, users.lastname,users.username, users.photo FROM (((animals INNER JOIN users ON animals.id_users = users.id)"+
      "INNER JOIN ctlg_type_specie  ON animals.id_ctlg_type_specie  = ctlg_type_specie.id)"+
      "INNER JOIN ctlg_scientific_name_animal ON animals.id_ctlg_scientic_name   = ctlg_scientific_name_animal.id) WHERE animals.id_ctlg_type_specie = ? ",
      [req.params.id]
    );
    res.status(200).json(animalTypeSpecie);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

animalCtrl.getIdScientificName = async (req, res) => {
  try {
    const animalScientific = await db.query(
      "SELECT animals.name AS nameAnimal, animals.location, animals.id"+
      ",animals.description, animals.photo AS animalPhoto, animals.sound AS animalSound,"+
      "ctlg_type_specie.name AS typeSpecie, ctlg_scientific_name_animal.name AS scientificName "+
      ",users.name, users.lastname,users.username, users.photo FROM (((animals INNER JOIN users ON animals.id_users = users.id)"+
      "INNER JOIN ctlg_type_specie  ON animals.id_ctlg_type_specie  = ctlg_type_specie.id)"+
      "INNER JOIN ctlg_scientific_name_animal ON animals.id_ctlg_scientic_name   = ctlg_scientific_name_animal.id) WHERE animals.id_ctlg_scientic_name = ? ",
      [req.params.id]
    );
    res.status(200).json(animalScientific);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = animalCtrl;
