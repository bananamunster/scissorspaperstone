//definitions
var userName = "";
var gameMode = "waiting for username";
var choices = ["stone", "paper", "scissors"];
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var currentGameMode = "regular";
//computer randomly generates scissors / paper / stone
var computerRandomPlay = function () {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("it worked!");
  console.log(computerChoice);
  return computerChoice;
};

//main
var main = function (input) {
  var myOutputValue = "";
  //if the user did not enter scissor, paper or stone
  if (input != "stone" && input != "paper" && input != "scissors") {
    return (myOutputValue = `To start, please enter "scissors", "paper" or "stone" for the current game mode - <b>${currentGameMode}<b>`);
  } else {
    // if user has entered correct inputs, let's play SPS!
    // tie condition
    var computerResult = computerRandomPlay();
    if (input == computerResult) {
      myOutputValue = `The computer chose ${computerResult}. <br> You chose ${input} <br><br>It's a tie!`;
    }
    // won condition
    if (
      (input == "paper" && computerResult == "stone") ||
      (input == "stone" && computerResult == "scissors") ||
      (input == "scissors" && computerResult == "paper")
    ) {
      myOutputValue = `The computer chose ${computerResult} <br> You chose ${input} <br> *drum rolls* <br> <br> You won!`;
    }
    // lost condition
    if (
      (input == "scissors" && computerResult == "stone") ||
      (input == "paper" && computerResult == "scissors") ||
      (input == "stone" && computerResult == "paper")
    ) {
      myOutputValue = `The computer chose ${computerResult} <br> You chose ${input} </br> You lost! :( <br><br> Better luck next round?`;
    }
    return myOutputValue;
  }
};
