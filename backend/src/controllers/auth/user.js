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
        const user = {
          id: dataUser[0].id,
          name: dataUser[0].name,
          lastname: dataUser[0].lastname,
          username: dataUser[0].username,
          email: dataUser[0].email,
        };
        const token = await generateToken(user);
        return res.status(200).json({ ok: true, token: token, user: user });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: false, message: "Wrong username or password" });
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
      //TITLE: HACER CONSULTA PARA TRAER EL ID 
      const user = {
        name,
        lastname,
        email,
        username,
      };
      const token = await generateToken(user);
      res.status(200).json({ ok: true, token: token, user: user });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ ok: false, message: "email or username already exist" });
  }
};

userAuth.revalidationToken = async (req, res) => {
  try {
    const userToken = {
      name: req.name,
      lastname: req.lastname,
      username: req.username,
      email: req.email,
    };
    const token = await generateToken(userToken);
    res(200).json({ ok: true, token: token, user: userToken });
    
  } catch (error) {
    res(401).json({ ok: false, message: "no revalidation"});
  }
};

module.exports = userAuth;
