const jwt = require("jsonwebtoken");
const token = {};
const key = "iii1iiii1iiii1iii1";

token.generateToken = async (data) => {
  return await jwt.sign(
    data,
    key,
    {
      expiresIn: "2h",
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

token.validationToken = async (req, res, next) => {
  const xToken = req.header("x-token");
  if (!xToken) {
    return res.status(401).json({ message: "no token" });
  }
  try {
    const { username } = await jwt.verify(xToken, key);
    req.username = username;
  } catch (error) {
    return res.status(401).json({ message: "tokenless validation" });
  }
  next();
};

module.exports = token;
