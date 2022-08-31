const express = require('express');
var cors = require('cors');
const app = express();
// var favicon = require('serve-favicon');
// const engine = require('ejs-mate');
var ejs = require("ejs");
const path = require('path');
// const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
// const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');


global.appRoot = path.resolve(__dirname);
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/resources',express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
// const { url } = require('./config/database.js');
var allowedOrigins = ['http://localhost:3000',
                      'https://naz-d.com','https://www.naz-d.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
/*
mongoose.connect(url, {
	// useMongoClient: true
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    // useFindAndModify: false, 
    // serverApi: ServerApiVersion.v1
}).then(() => {
    
}).catch((err)=> {console.log("Hubo un error: "+ err)});


*/
app.set('port', process.env.PORT || 3000);
/*    app.listen(app.get('port'), () => {
        console.log('server on port ', app.get('port'));
    });



app.get('/', (req, res) => {
    res.end('Hola, Bienvenido...')
});*/
// require('./config/passport')(passport);

// settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
// app.engine('ejs', engine);
app.set('view engine', 'ejs');
// middlewares
// app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: false}));
// required for passport
// app.use(session({
// 	secret: 'faztwebtutorialexample',
// 	resave: false,
// 	saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// routes
app.use('/',  require('./app/routes'));
// require('./app/routes.js')(app, passport);

// static files
// app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});