var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/yelp_camp");


// Setting up the SCHEMA

var campgds = new mongoose.Schema({
  name: String,
  image: String,
  description: String
}, function(err, cgobject) {
  if(err) {
    console.log(err);
  } else {
    console.log(cgobject);
  }
});

var Campground = mongoose.model("campgrounds", campgds);

// Campground.create({
//   name: "Mountain Goat's Rest",
//   image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg",
//   description: "This is a huge mountain with a lot of goats around. We also have campfire!"
// }, function(err, obj) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(obj);
//   }
// });


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: obj});
    }
  });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCamp = {name: name, image: image, description: desc};
  Campground.create(newCamp, function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(9090, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Running on port 9090!");
  }
});
