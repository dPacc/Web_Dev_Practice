var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/blogprac");


var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
})

var Blog = mongoose.model("blog", blogSchema);

app.get("/", function(req, res) {
  res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
      res.render("index", {foundBlog: obj});
    }
  });
});

// NEW ROUTE
app.get("/blogs/new", function(req, res) {
  res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res) {
  Blog.create(req.body.blog, function(err, obj) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/blogs");
    }
  });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
  Blog.findById(req.params.id, function(err, obj) {
    if(err) {
      res.redirect("/blogs");
    } else {
      res.render("show", {showBlog: obj});
    }
  });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
  Blog.findById(req.params.id, function(err, obj) {
    if(err) {
      res.redirect("/blogs");
    } else {
      res.render("edit", {editBlog: obj});
    }
  });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res) {
  Blog.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs");
    }
  });
});

app.listen(7171, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("The server is running on port 7171");
  }
});
