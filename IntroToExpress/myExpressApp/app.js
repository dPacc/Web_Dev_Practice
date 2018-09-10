var express = require('express');

var app = express();

app.get("/", function(req, res) {
  res.send("Hi there! Welcome to my app!!");
});

app.get("/speak/:name", function(req, res) {
  var animal = req.params.name.toLowerCase();
  var sounds = {
    cow: "Moo",
    dog: "Woof Woof",
    pig: "Oink",
    cat: "I hate you hooman",
    goldfish: "..."
  }
  var sound = sounds[animal];

  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:string/:num", function(req, res) {
  var number = req.params.num;
  var strings = req.params.string;
  result = " ";
  for(var i = 0; i < number; i++) {
    result += strings + " ";
  }
  res.send(result);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?")
});

app.listen(8081, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Server running on port 8081!");
  }
});
