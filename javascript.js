function computerSelection() {
    let values = ["rock", "scissors", "paper"],
        // declare values computer can select
        selection = values[Math.floor(Math.random() * values.length)];
    // Get computer selection at random from declared values
    return selection;
}

function playerSelection(message = "Enter Your Answer"){
    let playerAnswer = prompt(message);
    // Prompt user to enter answer for rock paper scissors
    playerAnswer = playerAnswer.toLocaleLowerCase();
    //convert text input to lowercase
    switch (playerAnswer) {

        case "rock" || "paper" || "scissors":
            return playerAnswer;
            
        default:
            return playerSelection("Please enter a valid selection from Rock, Paper or Scissors");
        //Return the above if no selection or an invalid selection is inputted
    }


}

function playRound(playerSelection, computerSelection) 

{ if( computerSelection = "rock" && playerSelection = "scissors"){
   return text ="You Lost, Rock beats Scissors!")
 } else if (computerSelection = "scissors" & playerSelection = "rock")

    return "Computer Wins"
}

function game() {
    for (let i = 0; i < 5; i++) {
console.log(playRound(playerSelection(), computerSelection()))
    }
}


// if computerSelection = playerSelection = draw

// if( computerSelection = "rock" && playerSelection = "scissors"){
//     alert(text ="You Lost, Rock beats Scissors!")
// } else if (computerSelection = "scissors" & playerSelection = "rock")

// If computerSelection rock & playerSelection is scissors "You Lost, Rock beats Scissors!"
// If computerSelection scissors & playerSelection is rock "You Win! Rock beats Scissors"
// //rock & scissors outcomes

// If computerSelection paper & playerSelection is scissors "You Lost, Paper beats Scissors!"
// If computerSelection scissors & playerSelection is paper "You Win! Paper beats Scissors"
// //paper & scissors outcomes

// If computerSelection paper & playerSelection is rock "You Lost, Paper beats Rock!"
// If computerSelection rock & playerSelection is rock "You Win! Rock beats Paper"
// // paper & rock outcomes






