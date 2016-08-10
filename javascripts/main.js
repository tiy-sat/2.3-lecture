// 2.3 Lecture
// Working with Scope
'use strict';

// Global scope var creation
var score = 0;

var that = this;

function addScore(){
  // Defining the score var to increase
  //   Private var (because I used `var`)
  // var score = 0;
  // Increasing score var
  //  Explicitly using scope above this function
  this.score++;
  console.log(this, "add score");
}

function decreaseScore(){
  // Increasing score var
  this.score--;
}

this.addScore();
this.addScore();
this.decreaseScore();
this.decreaseScore();
this.decreaseScore();





/*
  Private variable (encapsulate information)
*/

// Immediately invoked function expression
// "iffy" IIFE
// 'use strict' will force you to not use `this` keyword inside
//   of this IIFE
(function(){
  var score = 10;

  // addScore
  // decreaseScore
  console.log(this, "anon");
}());

console.log(score);

// Function to call & ms of time
setTimeout(function(){
  console.log(this, "timeout happened!");

  function newScope(){
    console.log(this, "new scope");
    console.log(that, "new scope");
  }

  newScope();
}, 1000);



var weather = {
  monday: "100",
  tuesday: "101",
  wednesday: "110",
  thursday: "101",
  friday: "100"
}

// With for...in loops
//   Create var to represent each key
//

for(var dayKey in weather){
  switch(weather[dayKey]){
    case "101":
      console.log("its freaking hot on " + dayKey);
      break;
    case "110":
      console.log("seriously should not go outside on " + dayKey);
      break;
    default:
      console.log("its probably still warm outside, be careful");
  }
}

console.log(this, "this global");
console.log(that, "that global");
