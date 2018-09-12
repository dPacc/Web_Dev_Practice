var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ejs = require('ejs');
var engine = require('ejs-mate');

var app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  res.render('home');
});

app.get('/about', function(req, res, next) {
  res.render('about');
});

app.listen(8080, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("Server Running at 8080!")
  }
})
