const scientific_name = {};

const db = require("../../../database");

scientific_name.getAllScientificName = async (req, res) => {
  try {
    const allspecie = await db.query("SELECT * FROM ctlg_scientific_name");
    res.status(200).json(allspecie);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

scientific_name.getIdScientificName = async (req, res) => {
  try {
    const idtype = await db.query(
      "SELECT * FROM ctlg_scientific_name WHERE id = ?",
      [req.params.id]
    );
    res.status(200).json(idtype);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = scientific_name;
