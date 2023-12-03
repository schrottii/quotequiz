// Quote Quiz

// Main Script

// Variables
var ui = {
    quoteDisplay: document.getElementById("quoteDisplay"),
    infoDisplay: document.getElementById("infoDisplay"),
    startButton: document.getElementById("startButton"),
}

const roundDuration = 10;
const roundAmount = 20;

var currentGame = {
    active: false,
    currentQuote: "",
    totalTime: 0,
    currentTime: roundDuration,
    questionCount: 1,
    questionsRight: 0,
    questionsWrong: 0,
}

var save = {
    name: "",
    id: "",
    trophies: 0,
    answers: {

    }
}

function start() {
    currentGame.active = true;
    currentGame.totalTime = 0;
    currentGame.questionCount = 0;
    currentGame.questionsRight = 0;
    currentGame.questionsWrong = 0;

    ui.startButton.style.display = "none";

    roundStart();
}

function roundStart() {
    if (currentGame.questionCount < roundAmount) {
        pickQuote();
        currentGame.currentTime = roundDuration;
    }
    else {
        end();
    }
}

function roundLost() {
    currentGame.questionCount += 1;
    currentGame.questionsWrong += 1;
    roundStart();
}

function roundWon() {
    currentGame.questionCount += 1;
    currentGame.questionsRight += 1;
    roundStart();
}

function end() {
    currentGame.active = false;

    ui.startButton.style.display = "";

    ui.infoDisplay.innerHTML = currentGame.questionsRight + "/" + roundAmount + "right answers in " + currentGame.totalTime + "s";
}

function pickQuote() {
    currentGame.currentQuote = quotes[Math.floor(quotes.length * Math.random())].id;
}

function getQuote(id) {
    for (q in quotes) {
        if (quotes[q].id == id) return quotes[q];
    }
}

function updateUI() {
    if (currentGame.active) {
        ui.quoteDisplay.innerHTML = getQuote(currentGame.currentQuote).text;
        ui.infoDisplay.innerHTML = "Question " + currentGame.questionCount + "/" + roundAmount + "  |  " + currentGame.currentTime.toFixed(1) + "s";
    }
}

var oldTime = 0;
function loop(tick) {
    let time = (tick - oldTime) / 1000;
    oldTime = tick;

    if (currentGame.active) {
        currentGame.totalTime += time;
        currentGame.currentTime -= time;

        if (currentGame.currentTime < 0) {
            roundLost();
        }
    }

    updateUI();

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);