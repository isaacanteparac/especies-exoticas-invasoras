


const { encryptPassword, decryptPassword } = require("../../helpers/password");
const { generateToken } = require("../../helpers/token");
const db = require("../../../database");
const userAuth = {};

userAuth.login = async (req, res) => {
  const { username, password } = req.body;

  const dataUser = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  try {
    if (dataUser.length > 0) {
      const verifyPassword = await decryptPassword(
        password,
        dataUser[0].password
      );
      if (verifyPassword) {
        const userToken = {
          name: dataUser.name,
          lastname: dataUser.lastname,
          username: dataUser.username,
          email: dataUser.email,
        };
        const token = generateToken(userToken);
        res.status(200).json({ message: "ok", token: token, user: userToken });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Wrong username or password" });
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
  try {
    if (verifyEmail.length < 1 && verifyUsername.length < 1) {
      password = await encryptPassword(password);
      let newUser = {
        name,
        lastname,
        email,
        username,
        password,
      };
      await db.query("INSERT INTO users set ?", [newUser]);
      const userToken = {
        name,
        lastname,
        email,
        username,
      };
      const token = generateToken(userToken);

      res.status(200).json({ message: "ok", token: token, user:userToken });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "email or username already exist" });
  }
};

userAuth.revalidationToken =  (req, res) => {
  const userToken = {
    name: req.name,
    lastname: req.lastname,
    username: req.username,
    email: req.email,
  };
  const token = generateToken(userToken);
  res(200).json({message:"ok", token: token, user:userToken });
}


module.exports = userAuth;
