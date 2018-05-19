// THIS CODE RUNS UPON PAGE LOAD
// ============================================================================== 
window.onload = function () {
  // Keep the countdown timer from starting
  stop();
  // Set the header statement to the instructions
  var startHeader1 = "Hit the START button to begin the 1980's Major League Baseball quiz.";
  var startHeader2 = "Answer the questions before the timer runs out.";
  var startHeader3 = "Hit the FINISHED button when you're done. GOOD LUCK!";
  $(".intro").html("<h1>" + startHeader1 + "</h1><br><br><h1>" + startHeader2 + "</h1><br><br><h1>" + startHeader3 + "</h1>");
  // Hide the timer info, questions, and finished button
  $("#timeRemaining").hide();
  $("#timer").hide();
  $(".questionRow").hide();
  $("#btnDone").hide();
};
// ==============================================================================

// VARIABLES
// ==============================================================================

// Create a variable to hold the beginning timer
var timerNumber = 100;

// Create a variable that will hold the timer's interval ID when run function is executed.
var intervalId;

// Start the score at 0.
var score = 0;

// Create an array to hold the users answer choices
var answerArray = [];

var questions = [{
    question: "Considered the strongest of the decade, this team won the 1986 World Series:",
    answerChoices: ["Boston Red Sox", "Los Angeles Dodgers", "New York Mets", "Atlanta Braves"],
    correctAnswer: 2
  },
  {
    question: "This team won the most games in the 80s, but didn't win the World Series during the decade:",
    answerChoices: ["New York Mets", "Baltimore Orioles", "New York Yankees", "San Diego Padres"],
    correctAnswer: 2
  },
  {
    question: "This third baseman hit the most home runs during the 80s:",
    answerChoices: ["Mike Schmidt", "Don Mattingly", "Fernando Valenzuela", "Dale Murphy"],
    correctAnswer: 0
  },
  {
    question: "How many times did players hit 40 or more home runs during the 80s?:",
    answerChoices: ["35", "22", "13", "7"],
    correctAnswer: 2
  },
  {
    question: "This team won the most World Series titles during the 80s:",
    answerChoices: ["Boston Red Sox", "Los Angeles Dodgers", "New York Mets", "Atlanta Braves"],
    correctAnswer: 1
  },
  {
    question: "This team lost the most games of any major league franchise during the 80s:",
    answerChoices: ["Oakland Athletics", "Chicago Cubs", "San Francisco Giants", "Seattle Mariners"],
    correctAnswer: 3
  },
  {
    question: "In what year was the World Series postponed due to an earthquake in the San Francisco bay area?:",
    answerChoices: ["1989", "1987", "1985", "1983"],
    correctAnswer: 0
  },
  {
    question: "In 1982, Rickey Henderson set the single season stolen base record by successfully swiping how many bases?:",
    answerChoices: ["130", "118", "95", "82"],
    correctAnswer: 0
  },
  {
    question: "In 1987, the Minnesota Twins defeated St. Louis Cardinals in the first World Series played in a:",
    answerChoices: ["Football Stadium", "Shopping Mall", "Amusement Park", "Domed Stadium"],
    correctAnswer: 3
  },
  {
    question: "In 1986, a now infamous ground ball was misplayed by this first baseman, leading to a Boston Red Sox World Series game loss:",
    answerChoices: ["Bill Buckner", "Carney Lansford", "Wade Boggs", "Tony Gwynn"],
    correctAnswer: 0
  },
];

// FUNCTIONS
// ==============================================================================

// TIMER FUNCTIONS
//
// Set an interval with a run function
function run() {
  // clear the intervalID to eliminate multiple instances
  clearInterval(intervalId);
  // run the decrement function once per second
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  timerNumber--;
  // Place the timerNumber in the timer id
  $("#timer").html("<h2>" + timerNumber + "</h2>");
  if (timerNumber === 0) {
    stop();
    alert("Time's Up!");
    results();
  }
}

function stop() {
  clearInterval(intervalId);
}

// TEST QUESTION FUNCTIONS
//

// Start the game when the button is pressed
$("#btnBegin").click(function () {
  $("#timeRemaining").show();
  $("#timer").show();
  $(".questionRow").show();
  $("#btnDone").show();

  var introHeader = "Answer the questions below about 1980's Major League Baseball before the timer runs out. Hit the FINISHED button when you're done. GOOD LUCK!";
  $(".intro").html("<h4>" + introHeader + "</h4>");

  $("#btnBegin").hide();

  // Post the test questions to the user
  testQuestions();
  // Start the countdown timer
  run();
});

function testQuestions() {

  // Post the test questions to the user
  for (var i = 0; i < questions.length; i++) {
    var questionRow = $(".questionRow");
    var questionElement = $("<p></p>");
    var question = questions[i].question;
    console.log(questions[i].question);

    questionElement.text(question);
    questionRow.append(questionElement);

    // Post the answer choices to the user in the form of vertical radio buttons
    for (var j = 0; j < questions[i].answerChoices.length; j++) {
      var choiceDiv = $("<div>");
      var choiceLabel = $("<label></label>")
      var choiceInput = $("<input>")
      var choice = questions[i].answerChoices[j];

      choiceDiv.addClass("radio");
      choiceInput.attr("type", "radio");
      choiceInput.attr("name", "10" + i);
      choiceInput.attr("value", j);
      choiceInput.attr("id", "radio" + i + j);
      choiceLabel.attr("for", "radio" + i + j);

      choiceLabel.text(choice);
      console.log(questions[i].answerChoices[j]);
      questionRow.append(choiceDiv);
      choiceDiv.append(choiceInput, choiceLabel);
    }
  }
}

// Get the radio button values and calculate the score when the button is clicked
$("#btnDone").click(function () {
  for (var i = 0; i < questions.length; i++) {
    var ansValue = $("input[name=10" + i + "]:checked").val();
    answerArray.push(ansValue);
  }
  console.log(answerArray);
  results();
});

function results() {

  var answerKey = [2, 2, 0, 2, 1, 3, 0, 0, 3, 0];

  //Calculate the score by comparing the user's answer array to the answer key array
  for (var i = 0; i < answerArray.length; i++) {
    if (answerArray[i] == answerKey[i]) {
      score++;
    }
  }
  console.log(score);

  stop();

  $("#timeRemaining").hide();
  $("#timer").hide();
  $(".questionRow").hide();
  $("#btnDone").hide();

  var resultsHeader = "YOUR RESULTS"
  $(".intro").html("<h1>" + resultsHeader + ":   " + score + "  correct!</h1>");

  var resultsText = "";
  var image = $("<img>");

  if (score <= 3) {
    resultsText = "Like Jose's mustache, your results are thin on correct answers...";
    image.attr("src", "assets/images/JoseCanseco.jpg");
  } else if (score <= 6) {
    resultsText = " Bo knows you can do better than that...";
    image.attr("src", "assets/images/BoJackson.jpg");
  } else if (score <= 9) {
    resultsText = "Like Cal Ripken's streak of 2,632 consecutive games played, that score is impressive.";
    image.attr("src", "assets/images/CalRipken.jpg");
  } else {
    resultsText = "Wow, perfect score!  Mike Witt (perfect game in 1984) is impressed with your 80s baseball knowledge...";
    image.attr("src", "assets/images/MikeWitt.jpg");
  }

  $(".resultStatement").html("<p>" + resultsText + "</p>");
  $(".image").append(image);

}

// MAIN PROCESS
// ==============================================================================