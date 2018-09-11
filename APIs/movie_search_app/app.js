var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var ejs = require("ejs");

var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  var query = req.query.movieRes;
  var url = "http://www.omdbapi.com/?apikey=f3fc9ea3&s=" + query;
  request(url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("results", {data: data});
    }
  });
});

app.get("*", function(req, res) {
  res.render("invalid");
});



app.listen(0911, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Server running on port 0911");
  }
});
