let roundCounter = document.getElementById("roundCounter"),
    roundLimit = document.getElementById("roundLimit"),
    roundsContainer = document.getElementById("roundsContainer"),
    roundCounterDiv = document.getElementById("roundCounterDiv"),
    five = document.getElementById("five"),
    ten = document.getElementById("ten"),
    fifteen = document.getElementById("fifteen"),
    twenty = document.getElementById("twenty"),
    counter = 0,
    userChoice = "rock",
    userScoreDiv = document.getElementById("user-score"),
    computerScoreDiv = document.getElementById("computer-score"),
    userScore = 0,
    computerScore = 0


function theGame() {
    roundsContainer.style.display = "none"
    roundCounterDiv.style.display = "block"

    if (five.checked) {
        roundLimit.innerHTML = 5
    } else if (ten.checked) {
        roundLimit.innerHTML = 10
    } else if (fifteen.checked) {
        roundLimit.innerHTML = 15
    } else if (twenty.checked) {
        roundLimit.innerHTML = 20
    }

    if (counter < roundLimit.innerHTML) {
        counter++
        roundCounter.innerHTML = counter
    }

    function computerChoice() {
        computerChoice = Math.ceil(Math.random() * 3)

        if (computerChoice == 1) {
            return "rock"
        } else if (computerChoice == 2) {
            return "paper"
        } else if (computerChoice == 3) {
            return "scissors"
        }

    }

    function compareUsers(userChoice, computerChoice) {
        switch (userChoice + computerChoice) {
            case 'paperrock':
            case 'rockscissors':
            case 'scissorspaper':
                return 'win';
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                return 'lost';
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                return 'draw';
        }
        let result = compare(userChoice, computerChoice)
        if (result == "win") {
            userScore++;
        }
        if (result == "lost") {
            computerScore++;
        }
        userScoreDiv.innerHTML = userScore;
        computerScoreDiv.innerHTML = computerScore
    }


    console.log(computerChoice())
    console.log(compareUsers())
}

// roundCounter