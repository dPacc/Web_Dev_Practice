var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX ROUTE
router.get("/", function(req, res) {
  Campground.find({}, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: obj});
    }
  });
});

// NEW ROUTE
router.get("/new", isLoggedIn, function(req, res) {
  res.render("campgrounds/new");
});

// CREATE ROUTE
router.post("/", isLoggedIn, function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCamp = {name: name, image: image, description: desc, author: author};
  Campground.create(newCamp, function(err, newlyCreated) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

// SHOW ROUTE
router.get("/:id", function(req, res) {
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      console.log(foundCampground);
      res.render("campgrounds/show", {showCamp: foundCampground});
    }
  });
});

// Middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
