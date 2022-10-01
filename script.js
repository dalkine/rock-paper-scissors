const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN = 2;
const LOSE = 1;
const DRAW = 0;
const wintable = ["draw", "lose", "win"];
const rps = ["rock", "paper", "scissors"];
const icons = ["👊", "👋", "✌"];
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
pla = document.querySelector(".playerChoice");
console.log(pla);
function getplayerSelection(choice) {
  let pl = rps.indexOf(choice);

  return pl;
}
function setRound(e) {
  playerSelection = getplayerSelection(this.id);
  computerSelection = getComputerChoice(3);

  const pchoose = document.querySelector("#playerIcon");
  pchoose.textContent = icons[playerSelection];

  const cchoose = document.querySelector("#computerIcon");
  cchoose.textContent = icons[computerSelection];

  let roundResult = playRound(playerSelection, computerSelection);

  recordScore(roundResult);
  if (computerScore == 5 || playerScore == 5) {
    displayResults(roundResult);
    const newgame = document.createElement("button");
    newgame.classList = "btnIcon";
    newgame.textContent = "restart";
    newgame.addEventListener("click", restart);
    Ngame.appendChild(newgame);

    //remove events
  }
}
function restart() {
  playerScore = 0;
  computerScore = 0;
  displayResults(0);
}
function recordScore(roundResult) {
  switch (roundResult) {
    case DRAW:
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

  return;
}
function displayResults(result) {
  const res = document.querySelector(".round-results");
  res.textContent = "You " + wintable[result] + " this round.";
  const total_score = document.querySelector(".choose-results");
  total_score.textContent =
    convertNumbertoRPS(playerSelection) +
    "  " +
    wintable[result] +
    "  " +
    convertNumbertoRPS(computerSelection);

  const scores = document.querySelector(".score");
  scores.textContent = playerScore + " - " + computerScore;
}
let computerScore = 0;
let playerScore = 0;
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", setRound);
});

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
function game2() {
  let playerScore = 0;
  let computerScore = 0;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
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
/* 
console.log("computer choose " + convertNumbertoRPS(computerSelection));
console.log("you choose " + convertNumbertoRPS(playerSelection));
console.log(game());
 */
