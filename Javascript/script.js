let welcome = alert("Welcome to Rock, Paper, Scissors!");

function playFunction(){

    let userObject = {
    Rock: 0,
    Paper: 0,
    Scissors: 0,
    Wins: 0,
    Losses: 0,
    Ties: 0,
    };

    let possibleChoices = ["R", "P", "S"];

    let computerChoice = possibleChoices[Math.floor(Math.random()*3)];

    let userChoice = prompt("Please enter R, P, or S (capital letters please).");

    userChoice = userChoice.toUpperCase();

    if (!userChoice.includes(possibleChoices)){
        alert("Please make a proper selection.");
        userChoice;
    }

    else {

    if (userChoice === 'R') {
        userObject.Rock++;
      } else if (userChoice === 'P') {
        userObject.Paper++;
      } else {
        userObject.Scissors++;
      }

    alert(`The computer chose ${computerChoice}.`)

    if (userChoice===computerChoice){
        alert("It's a tie!")
        userObject.Ties++
        }
    else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
      ) {
        userObject.Wins++;
        alert('You win!');
    };

    let playAgain = confirm("Would you like to play again?");

    if (playAgain){
    playFunction();
    }
    else {alert(`Here are your stats: 
        you chose Rock ${userObject.Rock} time[s], 
        you chose Paper ${userObject.Paper} time[s], 
        and you chose Scissors ${userObject.Scissors} time[s]. 
        You won ${userObject.Wins} time[s], 
        you lost ${userObject.Losses} time[s], 
        and you tied ${userObject.Ties} time[s].`)};
    }
    };

    playFunction();