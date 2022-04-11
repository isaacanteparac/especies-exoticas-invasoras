const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const {database} = require('./keys');


const passport = require('passport');
const register_animal = require("./src/Routes/register_animal/register_animal.route");

//INITALIZATIONS
const app = express();
//require('./src/lib/auth.passport');

//settings
app.set('port', process.env.PORT || 6000);


//MIDDLEWARES
app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));

app.use(cors({
  origin: "http://localhost:3000", // <-- location of the react app were connecting to
  credentials: true,
}));


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(flash());
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());





//GLOBAL VARIABLES

//ROUTES
/*app.use('/wv', indexwv);
app.use('/login/wv' , login);
app.use('/sign-up/wv', signup);
app.use('/comment/wv', comment);
app.use('/logout/wv', logout);*/
app.use('/api/register-animal', register_animal);

// PUBLIC

//STARTING THE SERVER
async function main(){
    console.clear();
    console.log("\n▀█▀ ");
    console.log("▄█▄SAAC");
    await app.listen(app.get('port'));
    console.log('\nSERVER ON PORT '+ app.get('port'));
};

main();