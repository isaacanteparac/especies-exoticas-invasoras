const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { database } = require("./keys");
const BodyParser = require("body-parser");

const register_animal = require("./src/routes/register_animal/register_animal.route");
const register_user = require("./src/routes/register_user/register_user.route");
const types_specie = require("./src/routes/Catalogue/types_specie");


//INITALIZATIONS
const app = express();


//settings
app.set("port", process.env.PORT || 6060);

//MIDDLEWARES
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);


app.use(express.json());

app.use(BodyParser.json({ limit: "15mb" }));
app.use(
  BodyParser.urlencoded({
    limit: "15mb",
    extended: true,
  })
);
app.use(morgan("dev"));



//GLOBAL VARIABLES

//ROUTES
app.use("/i/users", register_user);
app.use("/i/register-animal", register_animal);
app.use("/i/ctlg/types-specie", types_specie);


//STARTING THE SERVER
async function main() {
  console.clear();
  await app.listen(app.get("port"));
  console.log("\API ON PORT " + app.get("port"));
}

main();
