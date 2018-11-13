const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

var app = express();

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("The server is running on port 3000..");
  }
})
