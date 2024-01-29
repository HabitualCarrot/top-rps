const paperRockScissors = ['rock', 'paper', 'scissors']
let playerScore = 0
let compScore = 0

function getCompChoice(){
    return paperRockScissors[Math.floor(Math.random() * paperRockScissors.length)]
}

// let compSelection = getCompChoice()


function playRound(playerSelection, compSelection){


    if (playerSelection === compSelection) {
        return ('You tied! Try again')
    }
    else if (playerSelection === 'rock' && compSelection === 'paper'){
        return ('Paper beats rock! You lose')
    }
    else if (playerSelection === 'rock' && compSelection === 'scissors') {
        return ('Rock beats scissors! You win')
    }
    else if (playerSelection === 'paper' && compSelection === 'rock') {
        return ('Paper beats rock! You win')
    }
    else if (playerSelection === 'paper' && compSelection === 'scissors') {
        return ('Scissors beats paper! You lose')
    }
    else if (playerSelection === 'scissors' && compSelection === 'rock') {
        return ('Rock beats scissors! You lose')
    }
    else if (playerSelection === 'scissors' && compSelection === 'paper') {
        return ('Scissors beats paper! You win')
}
}
// console.log(playRound('rock', compSelection))


// function game() {
//     for (let round = 1; round <=5; round++){
//     const playerSelection = prompt('choose rock, paper, or scissors').toLowerCase()
//     const compSelection = getCompChoice()
    
    
//     console.log(` round ${round}: `)
//     console.log(` You chose ${playerSelection}: `)
//     console.log(` Computer chose ${compSelection}`)
//     let result = playRound(playerSelection, compSelection);
//     console.log(result);

//     if (result.includes("win")){
//         playerScore ++
//     }
//     else if (result.includes("lose")){
//         compScore ++
//     }
//     console.log(`Your score is: ${playerScore} and the Computer score is: ${compScore}`)
// }
  
    
// }

// if (playerScore > compScore) {
//     console.log("Congrats, you win!")
// }
// else if (compScore > playerScore){
//     console.log("Sorry, you lose!")
// }


// game()

// reference body of html node 

const btns = document.querySelectorAll('button');
const div = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(div);
const results = document.querySelector('div')
// const button1 = document.querySelector('#btn1');
// const button2 = document.querySelector('#btn2');
// const button3 = document.querySelector('#btn3');

// console.log(button1.value)

btns.forEach((button) => {
    
    button.addEventListener('click', () => {
        const playerSelection = event.target.value;
        const compSelection = getCompChoice();
        playRound(playerSelection, compSelection)
        
        let result = playRound(playerSelection, compSelection);
        let score = `The final is score is You: ${playerScore}. Computer: ${compScore}` 
        
        if (result.includes('win')) {
            playerScore++
        }
        else if (result.includes('lose')) {
            compScore++
        }

        results.textContent = `${result}!` + ` You: ${playerScore}` + ` Computer: ${compScore}`; 

        if (compScore === 5) {
            alert(`The Computer wins! ${score}`)
        }
        if (playerScore === 5) {
            alert(`You win! + ${score}`)
        }
    });

       
})




