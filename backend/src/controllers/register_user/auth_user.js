const userAuth = {};
const db = require("../../../database");
const { encryptPassword, decryptPassword } = require("../../lib/helpers");

userAuth.verifyUser = async (req, res) => {
  const { username, password } = req.body;

  const dataUser = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (dataUser.length > 0) {
    const verifyPassword = await decryptPassword(
      password,
      dataUser[0].password
    );
    if (verifyPassword) {
      console.log(dataUser[0]);
      res.status(200).json({ messa: "ok" });
    } else {
      res.status(400).json({ message: "password incorrecto" });
    }
  } else {
    res.status(400).json({ message: "ususario incorrecto" });
  }
};

userAuth.createUser = async (req, res) => {
  let { name, lastname, email, username, password } = req.body;

  const verifyEmail = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  const verifyUsername = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );

  if (verifyEmail.length < 1) {
    if (verifyUsername.length < 1) {
      password = await encryptPassword(password);
      let newUser = {
        name,
        lastname,
        email,
        username,
        password,
      };
      await db.query("INSERT INTO users set ?", [newUser]);
      res.status(200).json({ message: "Post user" });
    } else {
      res.status(400).json({ message: "Username ya existe" });
    }
  } else {
    res.status(400).json({ message: "Email ya existe" });
  }
};

module.exports = userAuth;
