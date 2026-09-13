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
