// Variables going to need for the game
let playerTurn = 1;
let ballPossessionTeam = 1;
/*
User state variable to keep track of the current state of the user's actions
STATES (will add more as necessary)
Active - looking to select a player
Selected - player selected and must now choose a tile for further options
Options - awaiting the user to decide what the selected player will do
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

// Turn Button code
const turnButton = document.getElementById("turn-button");
turnButton.addEventListener("click", switchTurn, false);
// Function to enable us to switch between who the active player is - for testing
function switchTurn() {
  // Do not allow the player to switch if they currently have a selected player as they need to complete the move first
  if (playerTurn == 1) {
    if (teamState[1] != "Selected" && teamState[1] != "Options") {
      turnButton.textContent = "Player 2";
      playerTurn = 2;
    }
  } else if (playerTurn == 2) {
    if (teamState[2] != "Selected" && teamState[2] != "Options") {
      turnButton.textContent = "Player 1";
      playerTurn = 1;
    }
  }
}

// Add listener to each of the football pitch tiles so that aware if one has been selected
pitchTiles.forEach(e => {
  e.addEventListener("click", tileSelected, false);
});

// User selects a tile - have they selected a player, if so, do they now wish to pass,shoot,mark,tackle
function tileSelected() {
  // Check if the selected pitch tile contains a player and that they are in the active state
  if (this.querySelector("[data-player]") && teamState[playerTurn] == "Active") {
    // User has selected a player and are active - is it one of the user's players that has been selected?
    let tilePlayer = this.querySelector("[data-player]");
    if (tilePlayer.dataset.player == playerTurn) {
      // It is one of the user's players - select them
      this.classList.add("football-pitch__tile--selected");
      teamState[playerTurn] = "Selected";
    }
  } else if (teamState[playerTurn] == "Selected") {
    // User has a player already selected, and now they are choosing a pitch tile. Present option(s) based on whether they are ball possesor, etc.
    // Get the selected player - i.e. the player who is completing the move as they have been previously selected by the user
    let selectedPlayerTile = document.querySelector(".football-pitch__tile--selected");
    // Every player has the option to move if the space is free
    if (!this.querySelector("[data-player]")) {
      createButton("move");
    }
    // Is the selected player in possession of the ball?
    if (selectedPlayerTile.querySelector(".football-pitch__ball")) {
      // User is in possession of the ball - they can shoot in the direction chosen (prbably amend this later if idea progresses!)
      createButton("shoot");
      // If the tile contains a teammate, pass option available
      if (this.querySelector("[data-player='" + playerTurn + "']")) {
        createButton("pass");
      }
    } else if (playerTurn != ballPossessionTeam) {
      // User is not in possession of the ball - if chossing an opposition player have the option to mark
      if (this.querySelector("[data-player='" + ballPossessionTeam + "']")) {
        createButton("mark");
        // Opposition player in the tile chosen - if they have the ball can also have option of tackle
        if (this.querySelector(".football-pitch__ball")) {
          createButton("tackle");
        }
      }
    }
  }
}

// Create move buttons
function createButton(buttonType) {
  let button = document.createElement("button");
  button.classList.add("player-turn__box-button");
  button.addEventListener("click", moveButtonSelected, false);
    button.textContent = buttonType;
  let turnBox;
  if (playerTurn == 1) {
    turnBox = document.getElementById("player-1-turn-box");
  } else {
    turnBox = document.getElementById("player-2-turn-box");
  }
  turnBox.appendChild(button);
  teamState[playerTurn] = "Options";
}

// Move button pressed
function moveButtonSelected() {
  // Get the selected player to log their move choice
  let selectedPlayerTile = document.querySelector(".football-pitch__tile--selected");
  let selectedPlayer = selectedPlayerTile.querySelector("[data-player]");
  // Log move choice for processing when game move complete
  if (this.textContent == "pass") {
    
  } else if (this.textContent == "shoot") {

  } else if (this.textContent == "mark") {
    
  } else if (this.textContent == "tackle") {
    
  } else if (this.textContent == "move") {
    
  }
}

// Turn completion