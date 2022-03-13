// Variables going to need for the game
let playerTurn = 1;
let ballPossessionTeam = 1;

// Arrays for the game
const pitchTiles = document.querySelectorAll(".football-pitch__tile");

// Add listener to each of the football pitch tiles so that aware if one has been selected
pitchTiles.forEach(e => {
  e.addEventListener("click", tileSelected, false);
});

// TBC
function tileSelected() {
  
}