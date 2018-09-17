var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var campgrounds = [
  {name: "Salmon Creek", image: "http://www.visiteppingforest.org/imageresizer/?image=%2Fdbimgs%2Fcamping_inner001.jpg&action=PageHeader"},
  {name: "Granite Hill", image: "http://www.visiteppingforest.org/imageresizer/?image=%2Fdbimgs%2Fcamping_inner001.jpg&action=PageHeader"},
  {name: "Mountains Rest", image: "http://www.visiteppingforest.org/imageresizer/?image=%2Fdbimgs%2Fcamping_inner001.jpg&action=PageHeader"},
];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCamp = {name: name, image: image};
  campgrounds.push(newCamp);
  res.redirect("campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.listen(9090, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Running on port 9090!");
  }
});
