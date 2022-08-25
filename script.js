const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN = 2;
const LOSE = 1;
const DRAW = 0;
const wintable = ["draw", "lose", "win"];
const rps = ["rock", "paper", "scissors"];
function convertNumbertoRPS(num) {
  switch (num) {
    case ROCK:
      choice = "rock";
      break;
    case PAPER:
      choice = "paper";
      break;

    case SCISSORS:
      choice = "scissors";
      break;

    default:
      break;
  }
  return choice;
}
function getComputerChoice(max) {
  let ran = Math.floor(Math.random() * max);
  return ran;
}
function getplayerSelection() {
  let choose = prompt("Choose a option");
  choose = choose.toLowerCase();

  let pl = rps.indexOf(choose);

  return pl;
}
function displayResults(result) {
  console.log("You " + wintable[result] + " this round.");
  console.log(
    convertNumbertoRPS(playerSelection) +
      "  " +
      wintable[result] +
      "  " +
      convertNumbertoRPS(computerSelection)
  );
}
function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = DRAW;
  } else {
    if (playerSelection === ROCK && computerSelection === PAPER) {
      result = LOSE;
    } else {
      if (playerSelection === PAPER && computerSelection === SCISSORS) {
        result = LOSE;
      } else {
        if (playerSelection === SCISSORS && computerSelection === ROCK) {
          result = LOSE;
        } else {
          result = WIN;
        }
      }
    }
  }
  return result;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = getplayerSelection();
    computerSelection = getComputerChoice(3);
    let roundResult = playRound(playerSelection, computerSelection);
    switch (roundResult) {
      case DRAW:
        playerScore++;
        computerScore++;
        break;
      case LOSE:
        computerScore++;
        break;
      case WIN:
        playerScore++;
      default:
        break;
    }
    displayResults(roundResult);
    console.log(
      "SCORE: " + "Player:" + playerScore + " - " + "Ai:" + computerScore
    );
  }
  if (playerScore > computerSelection) {
    console.log("YOU WIN");
  } else {
    console.log("YOU LOSE");
  }
}
/* playerSelection = getplayerSelection();
computerSelection = getComputerChoice(3);
console.log("computer choose " + convertNumbertoRPS(computerSelection));
console.log("you choose " + convertNumbertoRPS(playerSelection));
console.log(game());
 */
