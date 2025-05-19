console.log('hello')

// pseudocode
// prompt for user to enter 
// if invalid choice throw error 
// select comptuer choice on enter 
// compare and return result using a bunch of if statements 

let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum == 1) {
        return "rock";
    } else if (randNum == 2) {
        return "paper"; 
    } else {
        return "scissors"; 
    }
}

function getHumanChoice() {
    const human = prompt('enter r p or s'); 
    return human; 
}

console.log(getHumanChoice()); 