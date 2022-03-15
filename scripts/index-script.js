// Variables going to need for the game
let playerTurn = 1;
let ballPossessionTeam = 1;
/*
User state variable to keep track of the current state of the user's actions
STATES (will add more as necessary)
Active - looking to select a player
Selected - player selected and must now choose what to do with that player
Waiting - turn completed and waiting other player's move
*/
let teamState = [];
// I'm saving to index position 1 and 2 so that it matches the team numbers
teamState[1] = "Active";
teamState[2] = "Active";

// Arrays for the game
const pitchTiles = document.querySelectorAll(".football-pitch__tile");
let teamPlayers = [];
teamPlayers[1] = document.querySelectorAll("[data-player='1']");
teamPlayers[2] = document.querySelectorAll("[data-player='2']");
teamPlayers[1].forEach(e => {
  e.addEventListener("click", playerSelected, false);
});
teamPlayers[2].forEach(e => {
  e.addEventListener("click", playerSelected, false);
});

// Turn Button code
const turnButton = document.getElementById("turn-button");
turnButton.addEventListener("click", switchTurn, false);
// Function to enable us to switch between who the active player is - for testing
function switchTurn() {
  // Do not allow the player to switch if they currently have a selected player as they need to complete the move first
  if (playerTurn == 1 && teamState[1] != "Selected") {
    turnButton.textContent = "Player 2";
    playerTurn = 2;
  } else if (playerTurn == 2 && teamState[2] != "Selected") {
    turnButton.textContent = "Player 1";
    playerTurn = 1;
  }
}

// Add listener to each of the football pitch tiles so that aware if one has been selected
pitchTiles.forEach(e => {
  e.addEventListener("click", tileSelected, false);
});

// User Active - if user player selected trigger move
function playerSelected() {
  // If active state - has the user selected a player?
  if (teamState[playerTurn] == "Active") {
    // User has selected a player - is it of the user's players that has been selected?
    if (this.dataset.player == playerTurn) {
      // It is one of the user's players - select them
      this.parentElement.classList.add("football-pitch__tile--selected");
      teamState[playerTurn] = "Select";
    }
  }
}

// User has selected a player and then selects a pitch - determine what they wish to do - pass,shoot,mark,tackle
function tileSelected() {
  if (teamState[playerTurn] == "Select") {
    teamState[playerTurn] = "Selected";
  } else {
    if (teamState[playerTurn] == "Selected") {
      // Get the selected player
      let selectedPlayer = document.querySelector(".football-pitch__tile--selected");
      // Is the selected player in possession of the ball?
      if (selectedPlayer.lastChild.classList.contains("football-pitch__ball")) {
        // User is in possession of the ball - therefore pass or shoot
        
      } else {
        // User is not in possession of the ball - therefore mark or tackle
        
      }
    }
  }
}

// User waiting

// Turn completion