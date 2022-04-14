const user = {};

const db = require("../../../database");
const {encryptPassword} = require("../../lib/helpers");


user.getUser = async (req, res) => {
  const allUser = await db.query("SELECT * FROM users");
  res.json(allUser);
};

user.postUser = async (req, res) => {
  let {
    name,
    lastname,
    email,
    username,
    password,
    photo
  } = req.body;
  password = encryptPassword(password);
  //MIERDA: problema el la funcion encrytPassword no me retorna el hash 
  let newUser = {
    name,
    lastname,
    email,
    username,
    password,
    photo
  };
  await db.query("INSERT INTO users set ?", [newUser]);
  res.json({ message: "Post user" });
};

user.deleteIdUser = async (req, res) => {
  await db.query("DELETE FROM users WHERE id = ?", [req.params.id]);
  res.json({ message: "Delete id user" });
};

user.getIdUser = async (req, res) => {
  const idUser = await db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id]
  );
  res.json(idUser);
};


module.exports = user;
