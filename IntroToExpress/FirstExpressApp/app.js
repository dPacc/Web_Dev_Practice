var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there!");
});

app.get("/r/:subRedditName", function(req, res) {
  var subreddit = req.params.subRedditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " SubReddit");
});

app.get("/r/:subReddit/comments/:id/:title", function(req, res) {
  console.log(req.params);
  res.send("Welcome to the comments page!");
});

app.get("/bye", function(req, res) {
  res.send("Goodbye!")
});

app.get("/dog", function(req, res) {
  console.log("Someone made a request to /dog!")
  res.send("Meow!")
});

app.get("*", function(req, res) {
  res.send("You are a star!!!")
});

app.listen(8080, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Running on port 8080!");
  }
});
