 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------
 
/* ## 2. Build the Secret Number Guessing Game
Create the project as explained in the video. */

/* Assumptions
1.Get the number from user using prompt
2.select random number between 1 to 10 using random method
3.check userinput with computer random number
4. tell the user value is max compare with computer number
5.if it is matches tell the user about result and no of attempts he tried to match number
*/
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
function startSecretNumberGame() {
    console.log("Lets start secret number gussing game");
    let noOfAttemps=0;
    let userSelectedNumber = null;
    const gussingNumber= Math.floor((Math.random() * MAX_NUMBER)) +1;

    while(userSelectedNumber !== gussingNumber) {
        const promtGuessValue= prompt("Please enter numbers between 1 and 10");
        userSelectedNumber = parseInt(promtGuessValue);
        if(isNaN(userSelectedNumber) || userSelectedNumber < MIN_NUMBER || userSelectedNumber > MAX_NUMBER) {
            console.log("Please check your input and try again");
        }

        noOfAttemps++;
        if(gussingNumber > userSelectedNumber) {
            console.log("It's Too high try again");
        } else if(gussingNumber < userSelectedNumber) {
            console.log("It's too low, try again")
        } else {
            console.log("Congrats! you gussed the correct number in "+ noOfAttemps + " Attempts");
            break;
        }
    }
}
startSecretNumberGame();