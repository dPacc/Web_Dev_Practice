var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ejs = require('ejs');
var engine = require('ejs-mate');
var passport = require('passport');

var mongoStore = require('connect-mongo')(session);

var app = express();

mongoose.connect('mongodb://root:abc123@ds125402.mlab.com:25402/mongoosetestdpac', function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUnitialized: true,
  secret: "Ahem",
  store: new  mongoStore({ url: 'mongodb://root:abc123@ds125402.mlab.com:25402/mongoosetestdpac', autoReconnect: true})
}));

app.get('/', function(req, res, next) {
  res.json('home');
});

app.get('/login', function(req, res, next) {
  if(req.user) return res.redirect('/')
  res.render('login');
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

app.get('/profile', function(req, res, next) {
  res.json('profile');
});

app.listen(8080, function(err){
  if(err){
    console.log(err);
  } else{
    console.log("Running on port 8080");
  }
});
