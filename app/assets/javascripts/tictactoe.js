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

$(document).ready(function() {
  attachListeners();
});

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
  let win = false;

  WIN_COMBINATIONS.some(function(array) {
    if (grid[array[0]].innerHTML != "" && grid[array[0]].innerHTML == grid[array[1]].innerHTML && grid[array[0]].innerHTML == grid[array[2]].innerHTML) {
      setMessage(`Player ${grid[array[0]].innerHTML} Won!`);
      return win = true;
    }
  });

  return win;
}

function doTurn(square) {
  updateState(square)
  turn += 1;
  if (checkWinner()) {
    resetGame();
  } else if (turn == 9) {
    setMessage("Tie game.");
    resetGame();
  }
}

function resetGame() {
  $('td').html("");
  turn = 0;
}

function attachListeners() {
  $('td').on('click', function() {
    if (this.text == "") {
    doTurn(this);
    }
  });
  $('#save').on('click', function() {
    saveGame();
  });
  $('#clear').on('click', function() {
    clearBoard();
  });
  $('#previous').on('click', function() {
    previousGames();
  });
}

function saveGame() {

}

function clearBoard() {

}

function previousGames() {

}
