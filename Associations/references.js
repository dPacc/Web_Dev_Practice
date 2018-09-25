var mongoose = require("mongoose");
var Post = require("./models/posts");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/associations_2");


//
// Post.create({
//   title: "The random right - 3",
//   content: "AHHHHHHHHHHHHH Blah Blah Blahhhhhhhhhhhhh"
// }, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     User.findOne({name: "Bob Belcher"}, function(err, user) {
//       if(err) {
//         console.log(err);
//       } else {
//         user.posts.push(post);
//         user.save(function(err, data) {
//           if(err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

// User.create({
//   email: "lol@gmail.com",
//   name: "Bob Belcher"
// });
