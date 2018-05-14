// Need to create a start button to kick the game off
// Start button may come from work we did on the Slideshow activity

// This start button will change the start area from one that contains a welcome note and the button to one that contains the questions and a timer

// A timer needs to be displayed at the top of the page showing the count down of time left to answer all questions
// May come from the work we did on the Interval activity
// Create a variable to hold the beginning timer number
var number = 120;

// Create a variable that will hold the interval ID when run function is executed
var intervalId;

// Set an interval with a run function
function run() {
  // clear the intervalID to eliminate multiple instances
  clearInterval(intervalId);
  // run the decrement function once per second
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  // Place the number in the timer id
  $("#timer").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

run();