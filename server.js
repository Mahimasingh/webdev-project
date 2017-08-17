var app = require('./express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan');

var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(session({
    secret:  "secret",
    //process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(app.express.static(__dirname));

var connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/webdev_project'; // for local
mongoose.connect(connectionString);
require('./server/app');


app.listen(process.env.PORT || 3000);

console.log('App started on port: ' + (process.env.PORT || 3000));