const danger_level = {};

const db = require("../../../database");

danger_level.getDangerLevel= async (req, res) => {
  try {
    const allspecie = await db.query("SELECT * FROM ctlg_danger_level");
    res.status(200).json(allspecie);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

danger_level.getIdDangerLevel = async (req, res) => {
  try {
    const idtype = await db.query(
      "SELECT * FROM danger_level WHERE id = ?",
      [req.params.id]
    );
    res.status(200).json(idtype);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = danger_level;
