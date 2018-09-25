var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/associations");

// POST SCHEMA
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("post", postSchema);

// USER SCHEMA
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("user", userSchema);

//
// // CREATING A NEW USER
// var newUser = new User({
//   email: "rupert@gmail.com",
//   name: "Rupert Murdoch"
// });

// newUser.posts.push({
//   title: "The Rickety Right",
//   content: "The Rickest Rick of 'em all!!'"
// });
//
// newUser.save(function(err, user) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// // CREATING A NEW POST
// var newPost = new Post({
//   title: "The Lord of the Rings",
//   content: "Betty had some butter, the butter was bitter, Betty bought some better butter to make the bitter butter better"
// });

// newPost.save(function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Another way of creating a new post

User.findOne({name: "Deepak Kumar"}, function(err, user) {
  if(err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "Twenty Shades of Matt",
      content: "Hickety hockety lickety split!"
    });
    user.save(function(err, user) {
      if(err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
