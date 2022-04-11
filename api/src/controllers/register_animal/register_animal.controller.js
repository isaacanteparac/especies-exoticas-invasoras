const newRegisterAnimalCtrl = {};

const db = require("../../../database");



newRegisterAnimalCtrl.getRegister = async (req, res) => {
  const allFile = await db.query("SELECT * FROM register_animal");
  res.json(allFile);
};

newRegisterAnimalCtrl.postRegister = async (req, res) => {
  const {
    name,
    photo,
    location,
    sound,
    description,
    scientificName,
    typeSpecie,
  } = req.body;
  const newRegisterAnimal = {
    name,
    photo,
    location,
    sound,
    description,
    scientificName,
    typeSpecie,
  };

  console.log(newRegisterAnimal.media_content);
  await db.query("INSERT INTO register_animal set ?", [newRegisterAnimal]);
  console.log("create: successful PUBLIACTIONN");
};

newRegisterAnimalCtrl.deleteIdRegister = async (req, res) => {
  console.log("delete: successful");
};

module.exports = newRegisterAnimalCtrl;
