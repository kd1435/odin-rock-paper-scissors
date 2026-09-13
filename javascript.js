function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    switch(randomInt){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Do you choose rock, paper, or scissors?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let verdict = "";
        let beater = "";
        let bested = "";

        if (humanChoice === computerChoice) {
            verdict = "draw";
        }
        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                verdict = "win";
            }
            else {
                verdict = "lose";
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                verdict = "win"
            }
            else {
                verdict = "lose"
            }
        }
        else {
            if (computerChoice === "rock") {
                verdict = "lose"
            }
            else {
                verdict = "win"
            }
        }

        if (verdict === "win" || verdict === "draw") {
            beater = humanChoice;
            bested = computerChoice;
        }
        else {
            beater = computerChoice;
            bested = humanChoice;
        }

        // capitalize first letter:
        beater = beater.charAt(0).toUpperCase() + beater.slice(1);
        bested = bested.charAt(0).toUpperCase() + bested.slice(1);
        const explanation = verdict === "draw" ? `${beater} draws ${bested}` :
            `${beater} beats ${bested}`;

        console.log(`You ${verdict}! ${explanation}`);
        return verdict;
    }

    for (i = 0; i < 5; ++i) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Human chose ${humanChoice}, computer chose ${computerChoice}`);
        const verdict = playRound(humanChoice, computerChoice);
        if (verdict === "win") {
            humanScore += 1;
        }
        else if (verdict === "lose") {
            computerScore += 1;
        }
    }

    if (humanScore > computerScore) {
        console.log(`Congrats! You won with score ${humanScore} against ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`Oof! You lost with score ${humanScore} against ${computerScore}`);
    }
    else {
        console.log(`Perfect gameplay! You drew with score ${humanScore} against ${computerScore}`);
    }
}

playGame();