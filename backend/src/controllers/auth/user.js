const userAuth = {};
const db = require("../../../database");
const { encryptPassword, decryptPassword } = require("../../helpers/password");
const { generateToken, validationToken } = require("../../helpers/token");

userAuth.verificationUser = async (req, res) => {
  const { username, password } = req.body;

  const dataUser = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (dataUser.length > 0 ) {
    const verifyPassword = await decryptPassword(
      password,
      dataUser[0].password
    );
    if (verifyPassword) {
      console.log(await generateToken(username));
      res.status(200).json({ messa: "ok" });
    }
  } else {
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
      await generateToken(username);

      res.status(200).json({ message: "ok" });
  } else {
    res.status(401).json({ message: "email or username already exist" });
  }
};


userAuth.authenticateToken = async (req, res) =>{
  await validationToken(req, res);
  await generateToken(req, res);
  res.status(200).json({message:"ok"});
}



module.exports = userAuth;
