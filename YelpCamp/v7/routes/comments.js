var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var comment = require("../models/comment");

// COMMENTS NEW
router.get("/new", isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
       res.render("comments/new", {cg: obj});
    }
  });
});

// COMMENT CREATE
router.post("/", isLoggedIn, function(req, res) {
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

// Middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
