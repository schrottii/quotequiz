// Quote Quiz

// Main Script

// Variables
var ui = {
    quoteDisplay: document.getElementById("quoteDisplay"),
    infoDisplay: document.getElementById("infoDisplay"),
    bottomInfo: document.getElementById("bottomInfo"),
    startButton: document.getElementById("startButton"),
    answerButtons: document.getElementById("answerButtons"),

    playArea: document.getElementById("playArea"),
}

const roundDuration = 10;
const roundAmount = 20;

var currentGame = {
    active: false,
    currentQuote: "",
    totalTime: 0,
    currentTime: roundDuration,
    currentPeople: [],
    winnerNumber: -1,
    questionCount: 1,
    questionsRight: 0,
    questionsWrong: 0,
    trophiesBefore: 0,
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
    currentGame.trophiesBefore = save.trophies;

    ui.startButton.style.display = "none";
    ui.playArea.style.display = "";

    roundStart();
}

function roundStart() {
    if (currentGame.questionCount < roundAmount) {
        pickQuote();
        generatePeople();
        currentGame.currentTime = roundDuration;

        updateButtons();
    }
    else {
        end();
    }
}

function roundWon() {
    currentGame.questionCount += 1;
    currentGame.questionsRight += 1;

    if (save.answers[currentGame.currentQuote] != undefined) {
        // Was answered before
        if (Math.ceil(currentGame.currentTime) > Math.ceil(save.answers[currentGame.currentQuote][0])) {
            // I was faster
            save.trophies += Math.ceil(currentGame.currentTime - save.answers[currentGame.currentQuote][0]);
            save.answers[currentGame.currentQuote][0] = parseFloat(currentGame.currentTime.toFixed(2));
        }
    }

    save.answers[currentGame.currentQuote][1] += 1;

    roundStart();
}

function roundLost() {
    currentGame.questionCount += 1;
    currentGame.questionsWrong += 1;

    if (save.answers[currentGame.currentQuote] != undefined) {
        // Was answered before
        save.trophies -= Math.ceil(save.answers[currentGame.currentQuote][0]);
        save.answers[currentGame.currentQuote][0] = 0; // failed
    }

    save.answers[currentGame.currentQuote][2] += 1;

    roundStart();
}

function end() {
    currentGame.active = false;

    ui.startButton.style.display = "";
    ui.playArea.style.display = "none";

    ui.infoDisplay.innerHTML = currentGame.questionsRight + "/" + roundAmount + " right answers in " + currentGame.totalTime.toFixed(1) + "s! +" + (save.trophies - currentGame.trophiesBefore);
}

function pickQuote() {
    currentGame.currentQuote = quotes[Math.floor(quotes.length * Math.random())].id;
    if (save.answers[currentGame.currentQuote] == undefined) save.answers[currentGame.currentQuote] = [0, 0, 0];
}

function getQuote(id) {
    for (q in quotes) {
        if (quotes[q].id == id) return quotes[q];
    }
}

function generatePeople() {
    currentGame.currentPeople = [];

    let theWinner = getQuote(currentGame.currentQuote).user;
    currentGame.winnerNumber = Math.floor(Math.random() * 4);

    for (pe = 0; pe < 4; pe++) {
        if (pe == currentGame.winnerNumber) currentGame.currentPeople.push(theWinner);
        else {
            // v to avoid the winner eppearing twice
            let randomPPL = usernames[Math.floor(Math.random() * usernames.length)];
            while (randomPPL == getQuote(currentGame.currentQuote).user) randomPPL = usernames[Math.floor(Math.random() * usernames.length)];
            currentGame.currentPeople.push(randomPPL);
        }
    }
}

function clickButton(bu) {
    if (currentGame.winnerNumber == bu) {
        roundWon();
    }
    else {
        roundLost();
    }
}

function updateButtons() {
    let render = "";

    for (bu = 0; bu < 4; bu++) {
        render = render + "<button onclick='clickButton(" + bu + ")' class='answerButton'>" + currentGame.currentPeople[bu] + "</button>";
        if (bu == 1) render = render + "<br /><br />";
    }

    ui.answerButtons.innerHTML = render;
}

function updateUI() {
    if (currentGame.active) {
        ui.quoteDisplay.innerHTML = getQuote(currentGame.currentQuote).text;
        ui.infoDisplay.innerHTML = "Question " + currentGame.questionCount + "/" + roundAmount + "  |  " + currentGame.currentTime.toFixed(1) + "s";
        ui.bottomInfo.innerHTML = "Trophies: " + save.trophies + "/" + (quotes.length * 10) + "  |  " + Math.ceil(save.answers[currentGame.currentQuote][0]) + "/10";
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