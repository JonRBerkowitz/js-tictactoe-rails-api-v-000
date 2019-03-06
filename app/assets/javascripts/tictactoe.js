// Code your JavaScript / jQuery solution here
const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]

var turn = 0;

function player() {
  if (turn == 0 || turn % 2 == 0) {
    return "X";
  } else {
    return "O";
  }}

function updateState(square) {
  square.innerHTML = player();
}

function setMessage(message) {
  $('#message').html(message);
}

function checkWinner() {
  let grid = $('td').toArray();
  WIN_COMBINATIONS.some(function(array) {
    if( grid[array[0].innerHTML == grid[array[1].innerHTML && grid[array[0].innerHTML == grid[array[2].innerHTML ) {
      return true;
    }
  });
}


function doTurn(square) {
  updateState(square)
  checkWinner();
  turn += 1;
}

$(function () {
  $('#save').on('click', function(event) {
    event.preventDefault();
    alert("we r hakerz");
  });
});
