const types_specie = {};

const db = require("../../../database");

types_specie.getTypesSpecie = async (req, res) => {
  try {
    const allspecie = await db.query("SELECT * FROM ctlg_type_specie");
    res.status(200).json(allspecie);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

types_specie.getIdTypesSpecie = async (req, res) => {
  try {
    const idtype = await db.query(
      "SELECT * FROM ctlg_type_specie WHERE id = ?",
      [req.params.id]
    );
    res.status(200).json(idtype);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = types_specie;
