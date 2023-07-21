// const option = ["rock", "paper", "scissor"];

// const getComputerChoice = () => {
//   const choice = option[Math.floor(Math.random() * option.length)];
//   return choice;
//   //   console.log("--->", choice, option[choice]);
// };

// const checkWinner = (playerSelection, computerSelection) => {
//   if (computerSelection == playerSelection) {
//     return "Tie";
//   } else if (
//     (playerSelection == "rock" && computerSelection == "scissors") ||
//     (playerSelection == "scissors" && computerSelection == "paper") ||
//     (playerSelection == "paper" && computerSelection == "rock")
//   ) {
//     return "Player";
//   } else {
//     return "Computer";
//   }
// };

// function playRound(playerSelection, computerSelection) {
//   console.log("vjvjvj", playerSelection, computerSelection);
//   const result = checkWinner(playerSelection, computerSelection);
//   if (result == "Tie") {
//     return "Its a tie";
//   } else if (result == "Player") {
//     return "You won";
//   } else if (result == "Computer") {
//     return "You Lose";
//   }
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

const options = ["rock", "paper", "scissor"];

const getComputerChoice = () => {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
  console.log(choice);
};

const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
};

const playRound = (playerSelection, computerSelection) => {
  const result = checkWinner(playerSelection, computerSelection);
  console.log("--->", result);
  if (result == "Tie") {
    return "It's a tie ";
  } else if (result == "Player") {
    return `You won ${playerSelection} beats ${computerSelection}`;
  } else if (result == "Computer") {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  }
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
