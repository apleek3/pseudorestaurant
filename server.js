// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Open Tables
var tables = [
    {
      name: "",
      phone: 0,
      email: "",
      id: 0
    }
    // {
    //   routeName: "darthmaul",
    //   name: "Darth Maul",
    //   role: "Sith Lord",
    //   age: 200,
    //   forcePoints: 1200
    // },
    // {
    //   routeName: "obiwankenobi",
    //   name: "Obi Wan Kenobi",
    //   role: "Jedi Master",
    //   age: 55,
    //   forcePoints: 1350
    // }
  ];
  var waitlist = [
    {
      name: "",
      phone: 0,
      email: "",
      id: 0
    }
    // {
    //   routeName: "darthmaul",
    //   name: "Darth Maul",
    //   role: "Sith Lord",
    //   age: 200,
    //   forcePoints: 1200
    // },
    // {
    //   routeName: "obiwankenobi",
    //   name: "Obi Wan Kenobi",
    //   role: "Jedi Master",
    //   age: 55,
    //   forcePoints: 1350
    // }
  ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  

// =============================================================
  // Displays all reservations 
  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });
  

// =============================================================
  // Displays a single reservation, or returns false 
  app.get("/api/reservations/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });
  
// =============================================================
  // Create New Reservations - takes in JSON input 
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
// =============================================================
    // Using a RegEx Pattern to remove spaces from newCharacter 
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(tables);
  });