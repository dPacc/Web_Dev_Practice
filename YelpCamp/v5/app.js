// Requiring the libraries
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

var Campground = require("./models/campground");
var comment = require("./models/comment");
var seedDb = require("./seed");

var app = express();

// Configuration
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDb();


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
      res.render("campgrounds/index", {campgrounds: obj});
    }
  });
});

// NEW ROUTE
app.get("/campgrounds/new", function(req, res) {
  res.render("campgrounds/new");
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
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      console.log(foundCampground);
      res.render("campgrounds/show", {showCamp: foundCampground});
    }
  });
});

//COMMENT ROUTE
// COMMENT NEW
app.get("/campgrounds/:id/comments/new", function(req, res) {
  Campground.findById(req.params.id, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
       res.render("comments/new", {cg: obj});
    }
  })
});

// COMMENT CREATE
app.post("/campgrounds/:id/comments", function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      comment.create(req.body.comment, function(err, obj) {
        if(err) {
          console.log(err);
        } else {
          campground.comments.push(obj);
          campground.save();
          res.redirect("/campgrounds/" + campground._id);
        }
      });
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
