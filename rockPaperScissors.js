function rockPaperScissors(playerMove) {

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let invalidInput;

    if (playerMove === "r" || playerMove === "Rock") {
        playerMove = rock;
    } else if (playerMove === "p" || playerMove === "Paper") {
        playerMove = paper;
    } else if (playerMove === "s" || playerMove === "Scissors") {
        playerMove = scissors;
    } else {
        playerMove = invalidInput;
    }

    if (playerMove === rock || playerMove === paper || playerMove == scissors) {
        console.log(`You choose ${playerMove}`);
    }

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

    switch (computerRandomNumber) {
        case 1:
            computerMove = rock;
            break;
        case 2:
            computerMove = paper;
            break;
        case 3:
            computerMove = scissors;
            break;
    }

    if (playerMove !== invalidInput) {
        console.log(`The computer chooses ${computerMove}`);
    }

    if ((playerMove === rock && computerMove === scissors) || (playerMove === paper && computerMove === rock) || (playerMove === scissors && computerMove === paper)) {
        console.log("You win!");
    } else if ((playerMove === rock && computerMove === paper) || (playerMove === paper && computerMove === scissors) || (playerMove === scissors && computerMove === rock)) {
        console.log("You lose!");
    } else if (playerMove === invalidInput) {
        console.log("Invalid Input. Try Again...");
    } else {
        console.log("This game was a draw!");
    }

}
rockPaperScissors('Scissors');