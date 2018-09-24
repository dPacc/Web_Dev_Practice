// Requiring the libraries
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

var app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

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

// RESTful ROUTES
app.get("/", function(req, res) {
  res.render("landing");
});

//INDEX ROUTE
app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: obj});
    }
  });
});

// NEW ROUTE
app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

// CREATE ROUTE
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

// SHOW ROUTE
app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      res.render("show", {showCamp: foundCampground});
    }
  });
});

// EDIT ROUTE
app.get("/campgrounds/:id/edit", function(req, res) {
  Campground.findById(req.params.id, function(err, obj) {
    if(err) {
      res.redirect("/campgrounds");
    }
    else {
      res.render("edit", {editCamp: obj});
    }
  });
});

// UPDATE ROUTE
app.put("/campgrounds/:id", function(req, res) {
  Campground.findByIdAndUpdate(req.params.id, req.body.camp, function(err, obj) {
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

// DELETE ROUTE
app.delete("/campgrounds/:id", function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  });
});

// LOCALHOST
app.listen(9090, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Running on port 9090!");
  }
});
