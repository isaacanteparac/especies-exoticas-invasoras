const newRegisterAnimalCtrl = {};
const db = require("../../../database");
//const fs = require('fs');
//const path = require('path');



newRegisterAnimalCtrl.postRegister = async (req, res) => {
  const {
    name,
    photo,
    location,
    sound,
    description,
    id_ctlg_scientic_name,
    id_ctlg_type_specie,
    id_users,
  } = req.body;
  try{
    //const blobPhoto = fs.readFileSync(path.join(__dirname, '../filesData'+ req.photo.filedname));
   //photo = blobPhoto;
    //console.log(photo);
    const newRegisterAnimal = {
      name,
      photo,
      location,
      sound,
      description,
      id_ctlg_scientic_name,
      id_ctlg_type_specie,
      id_users,
    };
    console.log(newRegisterAnimal);
    await db.query("INSERT INTO animals set ?", [newRegisterAnimal]);
    return res.status(200).json({ message: true });
  }
  catch(error){
    return res.status(400).json({message:error});
  }
  
};

newRegisterAnimalCtrl.deleteIdRegister = async (req, res) => {
  try {
    await db.query("DELETE FROM animals WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = newRegisterAnimalCtrl;
