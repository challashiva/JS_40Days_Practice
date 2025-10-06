 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------

/* ## 1. Change the RPS Project
Change the if-else to switch-case as asked in the video(at 15:42). */
/* The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game. */

//Assumptions
//1. Take prompts from user
//2. Selecct random option from computer
//3. compare user inut with computer selected value
//4. Declare rools and based on rules announce winner
//5 . Ask user to countinue or not

function rockPaperScissorsGame() {
    console.log("Rock 🪨, Paper 🧻, or Scissors ✂️ Game");

    const userInputPrompt=prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️ options");
    const userSelectedValue=userInputPrompt.toLowerCase();

    console.log("user selected option", userSelectedValue);

    const computerRandomValue = Math.floor(Math.random() * 3) +1;
    let compuerSelectedValue="";

    switch(computerRandomValue) {
        case 1:
            compuerSelectedValue="rock";
            break;
        case 2:
            compuerSelectedValue="paper";
            break;
        case 3:
            compuerSelectedValue="scissors";
            break;
        default:
            console.log("No value is selected");
    }

    console.log("Computer selected value ",compuerSelectedValue);

    if(
        (userSelectedValue === 'rock' && compuerSelectedValue === 'scissors') ||
        (userSelectedValue === 'paper' && compuerSelectedValue === 'rock') ||
        (userSelectedValue === 'scissors' && compuerSelectedValue === 'paper')
    ) {
        console.log("User wins the game")
    } else if(userSelectedValue === compuerSelectedValue) {
        console.log("Game is tied!");
    } else if(
        (userSelectedValue === 'rock' && compuerSelectedValue === 'paper') ||
        (userSelectedValue === 'paper' && compuerSelectedValue === 'scissors') ||
        (userSelectedValue === 'scissors' && compuerSelectedValue === 'rock')
    ) {
        console.log("Oh! Computer wins the game");
    } else {
        console.log("Please check your entered input");
    }

    const playAgainPrompt =prompt("Do you want to play again(yes/no)?");
    const selectedPlayAgainValue= playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(selectedPlayAgainValue === 'yes') {
        rockPaperScissorsGame();
    } else {
        console.log("thanks for the playing game, Visit again!");
    }

}

rockPaperScissorsGame();
