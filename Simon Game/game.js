var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;
var checker = 0;
var temp = 0;

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  setTimeout( function (){
    randomVariable = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomVariable];
    gamePattern.push(randomChosenColour);
  
    var selectedButton = $("#" + randomChosenColour);
    $(selectedButton).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
  
    userClickedPattern = [];
  },1000);

  
}
//to start game
$(document).keydown(function () {
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

/* //alternate
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  makeSound(userChosenColour);
  buttonAnimation(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(i) {

    if (gamePattern[i] === userClickedPattern[i]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      gameOver();
    }
}

*/

//detects click on color
$(".btn").click(function () {
  if (started) {
    userClickedPattern.push(this.id);
    makeSound(this.id);
    buttonAnimation(this.id);
    // console.log(userClickedPattern);
    // console.log(gamePattern);
    // console.log(level);
    
    if (userClickedPattern[temp] !== gamePattern[temp]){
        gameOver();
        
    }
    temp++;
    if (temp === level && temp !== 0) {
        temp = 0;
        nextSequence();
      }
    
  }
});

//audio
function makeSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//button clicked animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("#" + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//gameover
function gameOver() {
  $("#level-title").text("Game over. Press any key to restart.");
  makeSound("wrong");
  var gameIsOver = document.querySelector("body");
  gameIsOver.classList.add("game-over");
  setTimeout(function () {
    gameIsOver.classList.remove("game-over");
  }, 100);
  started = false;
  level = 0;
  gamePattern = [];
}