let rock;
let paper;
let Scissors;

// declare base variables

let playerAnswer=prompt("Enter Your Answer:");
// Prompt user to enter answer for rock paper scissors
switch(playerAnswer){
    
    case "rock":
    text = "Rock beats blah blah blah";
    break;
    
    case "paper":
    text = "Paper beats blah blah blah";
    break;

    case "scissors":
    text = "Scissors beats blah blah blah";
    break;
    
    default:
    text ="Please enter a valid selection from Rock, Paper or Scissors"
//Return the above if no selection or an invalid selection is inputted
}




function computerPlay(){
        let values = ["rock","scissors","paper"],
// declare values computer can select
        computerSelection = values[Math.floor(Math.random() * values.length)];
// Get computer selection at random from declared values
}
function playerSelection()

function playRound(playerSelection, computerSelection)



//
If computerSelection rock & playerSelection is scissors "You Lost, Rock beats Scissors!"
If computerSelection scissors & playerSelection is rock "You Win! Rock beats Scissors"
//rock & scissors outcomes

If computerSelection paper & playerSelection is scissors "You Lost, Paper beats Scissors!"
If computerSelection scissors & playerSelection is paper "You Win! Paper beats Scissors"
//paper & scissors outcomes

If computerSelection paper & playerSelection is rock "You Lost, Paper beats Rock!"
If computerSelection rock & playerSelection is rock "You Win! Rock beats Paper"
// paper & rock outcomes




