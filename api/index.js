const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const flash = require("connect-flash");
const MySQLStore = require("express-mysql-session")(session);
const { database } = require("./keys");
const BodyParser = require("body-parser");

const register_animal = require("./src/Routes/register_animal/register_animal.route");
const types_specie = require("./src/Routes/Catalogue/types_specie");
//INITALIZATIONS
const app = express();

//settings
app.set("port", process.env.PORT || 6000);

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

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.use(BodyParser.json({ limit: "15mb" }));
app.use(
  BodyParser.urlencoded({
    limit: "15mb",
    extended: true,
  })
);
//app.use(flash());
app.use(morgan("dev"));
//app.use(passport.initialize());
//app.use(passport.session());

//GLOBAL VARIABLES

//ROUTES
app.use("/i/register-animal", register_animal);

app.use("/i/ctlg/types-specie", types_specie);
// PUBLIC

//STARTING THE SERVER
async function main() {
  console.clear();
  console.log("\n▀█▀ ");
  console.log("▄█▄SAAC");
  await app.listen(app.get("port"));
  console.log("\nSERVER ON PORT " + app.get("port"));
}

main();
