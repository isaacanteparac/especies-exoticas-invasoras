const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { database } = require("./keys");
const BodyParser = require("body-parser");


const animal = require("./src/routes/animals/animal");
const animalRegister = require("./src/routes/animals/register");
const comment = require("./src/routes/animals/commet");

const user = require("./src/routes/register/user");
const userAuth = require("./src/routes/auth/user");

const catalogue = require("./src/routes/catalogue/index");


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
app.use("/i/users", user);

app.use("/i/users/auth", userAuth);

app.use("/i/animal", animal);

app.use("/i/animal/register", animalRegister);

app.use("/i/comment", comment);

app.use("/i/ctlg", catalogue);


//STARTING THE SERVER
async function main() {
  await app.listen(app.get("port"));
  console.log("ON PORT " + app.get("port"));
}

main();
