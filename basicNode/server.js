var express = require('express');

var app = express();

function enteringBangaBorder(req, res, next) {
  if (req.params.name === 'ok') {
    next();
  } else {
    res.json('Nope!');
  }
}

app.get('/', function(req, res, next) {
  console.log('Welcome to the homepage!!');
  res.json('Welcome');
});

function enteringBangaBorder(req, res, next){
    if(req.params.name === "ok") {
      next();
    } else {
      res.redirect()
    }
}

app.get('/Bangalore/:name', enteringBangaBorder, function(req, res, next) {
  res.json('You have crossed the border!!');
});

app.listen(8000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Running on port 8000!!");
  }
});
