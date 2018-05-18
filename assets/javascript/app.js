// Need to create a start button to kick the game off
// Start button may come from work we did on the Slideshow activity

// This start button will change the start area from one that contains a welcome note and the button to one that contains the questions and a timer


// A timer needs to be displayed at the top of the page showing the count down of time left to answer all questions
// Create a variable to hold the beginning timer
var timerNumber = 120;

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
  timerNumber--;
  // Place the timerNumber in the timer id
  $("#timer").html("<h2>" + timerNumber + "</h2>");
  if (timerNumber === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

// run();

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
    question: "In 1987, the Minnesota Twins defeated St. Louis Cardinals in the first World Series played in correctAnswer:",
    answerChoices: ["Football Stadium", "Shopping Mall", "Amusement Park", "Domed Stadium"],
    correctAnswer: 3
  },
  {
    question: "In 1986, a now infamous ground ball was misplayed by this first baseman, leading to a Boston Red Sox World Series game loss:",
    answerChoices: ["Bill Buckner", "Carney Lansford", "Wade Boggs", "Tony Gwynn"],
    correctAnswer: 0
  },
];

// Start the score at 0.
var score = 0;

function testQuestions() {

  for (var i = 0; i < questions.length; i++) {
    var questionRow = $(".questionRow");
    var questionElement = $("<p></p>");
    var question = questions[i].question;
    console.log(questions[i].question);

    questionElement.text(question);
    questionRow.append(questionElement);

    for (var j = 0; j < questions[i].answerChoices.length; j++) {
      var choiceDiv = $("<div></div>");
      var choiceInput = $("<input>")
      var choiceLabel = $("<label></label>")
      var choice = questions[i].answerChoices[j];

      choiceDiv.addClass("form-check");
      choiceInput.attr("name", "10" + i);
      choiceInput.attr("type", "radio");
      choiceInput.attr("value", j);
      choiceInput.addClass("with-gap");
      choiceInput.attr("id", "radio" + i + j);
      choiceLabel.attr("for", "radio" + i + j);

      choiceLabel.text(choice);
      console.log(questions[i].answerChoices[j]);
      questionRow.append(choiceDiv, choiceInput, choiceLabel);
    }
  }
}

//this doesn't work yet, need to correct so that array populates correctly
$(document).ready(function(){
  $('#btnGetValue').click(function() {
    var answerArray = [];
    for (var i = 0; i < questions.length; i++) {
      var selValue = $('input[type=radio]:checked').val();
      answerArray.push(selValue);
    }  
    // var selValue = $('input[name=100]:checked').val(); 
      // $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
      console.log(answerArray);
  });
});

// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
// renderQuestion();
// updateScore();
run();
testQuestions();