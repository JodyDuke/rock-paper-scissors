let resultContainer = document.getElementById('result'),
    playerScore = document.getElementById('player'),
    computerScore = document.getElementById('computer'),
    buttonsContainer = document.getElementById('inputButtons'),
    currentGame = document.getElementById('game'),
    player = 0,
    computer = 0,
    outcomes = {
        paper: 'rock',
        scissors: 'paper',
        rock: 'scissors',
    };

playerScore.innerHTML = player;
computerScore.innerHTML = computer;

buttonsContainer.addEventListener('click', function (target) {
    let playerInput = event.target.id;
    let computerInput = rPSBot();

    if (playerInput.match(/rock|paper|scissors/)) {
        currentGame.innerHTML = playerInput + ' vs. ' + computerInput

        for (key in outcomes) {
            if (playerInput === computerInput) {
                result.innerHTML = "DRAW"
                break;
            }
            if (key === playerInput && outcomes[key] === computerInput) {
                player += 1;
                playerScore.innerHTML = player;
                result.innerHTML = "YOU WIN"
                break;
            }
            else if (key === 'rock') {
                result.innerHTML = "YOU LOSE"
                computer += 1;
                computerScore.innerHTML = computer;
                break;
            }
        }

    }

});

function rPSBot() {
    let rand = Math.ceil(Math.random() * 9);
    if (rand <= 3) {
        return "rock";
    }
    else if (rand > 3 && rand <= 6) {
        return "paper"
    }
    else {
        return "scissors"
    }
}
