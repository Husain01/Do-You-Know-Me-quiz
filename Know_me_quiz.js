var readlineSync = require('readline-sync');

var score = 0;

var questionOne = "Am I older than 25? ";
var answerOne = "no";



function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(question);

  console.log("You entered " + userAnswer);

  // processing
  if (userAnswer === answer) {
    // output
    console.log("You are right!");
    score = score + 1;
    console.log("Score is: " + score)
  } else {
    // output
    console.log("You are wrong!");
    score = score - 1;
    console.log("Score is: " + score)
  }
}

play(questionOne, answerOne)





var questionTwo = "Am I from the city Mumbai? ";
var answerTwo = "no";

play(questionTwo, answerTwo)
