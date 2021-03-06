/*

S.K.A.T.E SCOREBOARD
Thomas Bell

Play S.K.A.T.E with 2 people (for now)

*/


var playerOneScore = 5;
var playerTwoScore = 5;

$(document).ready(function() {

  //set up scoreboard
  startUp ();

  // start function on p1 button click
  $('#p1').click(clickedPOne);

  // start function on p2 button click
  $('#p2').click(clickedPTwo);

});

function startUp(){
  console.log("Start");
  console.log("p1: "+playerOneScore);
  console.log("p2: "+playerTwoScore);
  $('.score').append("-");
}

function clickedPOne() {
  console.log("Ltr for Player 1");

  playerOneScore--;
  console.log("p1: "+playerOneScore);

  if (playerOneScore == 4) {
    $('#p1score').empty();
    $('#p1score').append("S");
  }
  else if (playerOneScore == 3) {
    $('#p1score').append("K");
  }
  else if (playerOneScore == 2) {
    $('#p1score').append("A");
  }
  else if (playerOneScore == 1) {
    $('#p1score').append("T");
  }
  else if (playerOneScore == 0) {
    $('#p1score').append("E");
    restartScreen();
  }
}

function clickedPTwo() {
  console.log("Ltr for Player 2");

  playerTwoScore--;
  console.log("p2: "+playerTwoScore);

  if (playerTwoScore == 4) {
    $('#p2score').empty();
    $('#p2score').append("S");
  }
  else if (playerTwoScore == 3) {
    $('#p2score').append("K");
  }
  else if (playerTwoScore == 2) {
    $('#p2score').append("A");
  }
  else if (playerTwoScore == 1) {
    $('#p2score').append("T");
  }
  else if (playerTwoScore == 0) {
    $('#p2score').append("E");
    restartScreen();
  }
}

function restartScreen() {
  $('.player').hide();
  $('.restart').show();
  $('.restart').click(restart);
}

function restart() {
  playerOneScore = 5;
  playerTwoScore = 5;
  $('.score').empty();
  $('.restart').hide();
  $('.player').show();
  $('.score').append("-");
}
