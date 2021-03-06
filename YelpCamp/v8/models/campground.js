// Setting up the Campgrounds SCHEMA
var mongoose = require("mongoose");

var campgroundsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

module.exports = mongoose.model("campgrounds", campgroundsSchema);
