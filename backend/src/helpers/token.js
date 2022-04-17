const jwt = require("jsonwebtoken");
const token = {}
const key = "iii1iiii1iiii1iii1"

token.generateToken = async (data) =>{
    return await jwt.sign(data, key);
}

token.validationToken = async (req, res, next) =>{
    const xToken = req.header("x-token");
    if(!xToken){
        return res.status(401).json({message:"no token"});
    }
    try{
        const { name, lastname, email, username} = await jwt.verify(xToken, key);
        req.name = name;
        req.lastname = lastname;
        req.email = email;
        req.username = username;
    }
    catch(error){
        return res.status(401).json({message:"tokenless validation"});
    }
    next();
}

module.exports = token;
