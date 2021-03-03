let userScore = 0;
let compScore = 0;
let resultP = document.querySelector(".result > p")
const subScriptUser = "user".fontsize(3).sub();
const subScriptComp = "comp".fontsize(3).sub();
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const sissorsDiv = document.getElementById("sissors");

function getComputerSelection() {
    const options = ["rock", "paper", "sissors"];
    const temp = Math.floor(Math.random()*3);
    return options[temp];
}

function addColourToBorder(colour, item) {
    document.getElementById(item).classList.add(colour);
}

function removeColourFromBorder(colour, item, time) {
    setTimeout(() => document.getElementById(item)
        .classList.remove(colour), time);
}

function win(userSelection, computerSelection) {
    let victoryColour = "green-glow";
    userScore++;
    console.log(compScore);
    userScoreSpan.innerHTML = userScore; 
    resultP.innerHTML = `${userSelection}${subScriptUser}
      beats ${computerSelection}${subScriptComp}. You win.`;
    addColourToBorder(victoryColour, userSelection);
    removeColourFromBorder(victoryColour, userSelection, 400);
}

function lose(userSelection,  computerSelection) {
    let loseColour = "red-glow";
    compScore++;
    compScoreSpan.innerHTML = compScore; 
    resultP.innerHTML = `${computerSelection}${subScriptUser}
      beats ${userSelection}${subScriptComp}. You lose.`;
    addColourToBorder(loseColour, userSelection);
    removeColourFromBorder(loseColour, userSelection, 400);
}

function draw(userSelection,  computerSelection) {
    let drawColour = "grey-glow";
    resultP.innerHTML = `${userSelection}${subScriptUser}
     ${computerSelection}${subScriptComp}. It is a draw.`
    addColourToBorder(drawColour, userSelection);
    removeColourFromBorder(drawColour, userSelection, 400);
}

function game(userSelection) {
    const computerSelection = getComputerSelection();
    switch (userSelection + " " + computerSelection) {
        case("paper rock"):
        case("sissors paper"):
        case("rock sissors"):
            win(userSelection, computerSelection);
            break;
        case("rock paper"):
        case("paper sissors"):
        case("sissors rock"):
            lose(userSelection, computerSelection);
            break;
        case("rock rock"):
        case("paper paper"):
        case("sissors sissors"):
            draw(userSelection, computerSelection);
    }
}

function main() {
    rockDiv.addEventListener('click', () => game("rock"));
    paperDiv.addEventListener('click', () => game("paper"));
    sissorsDiv.addEventListener('click', () => game("sissors"));
};

main();
