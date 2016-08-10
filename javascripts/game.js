// Game.js

// Invoke (wrap) all in IIFE
(function() {
  'use strict';
  // Define all vars...
  //  - Constants
  //  - Things to keep track of outside
  //   of loops

  var students = ["adam", "Ernesto", "Lauren", "Max"];
  var score = 2;

  // Rest of code goes here

  //  All of the functions
    // Private vars inside
    // Private functions inside

  function sortStudents(){
    // redefine students based on sorted array
    students = students.sort();
  }

  function testingCallbacks(callbackFunction){
    var score = 101;
    // invoking function passed as argument
    callbackFunction();
  }

  // Invoke functions here
  //   "startGame()" || "initializeGame()"
  sortStudents();

  console.log(score, "IIFE");
  console.log(this, "this scope");
  testingCallbacks(function(){
    console.log("callbacks!?!?!!");
    console.log(this, "callback score");
  });

}());
