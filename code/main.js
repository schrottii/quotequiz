// Quote Quiz

// Main Script

// Variables
var ui = {
    quoteDisplay: document.getElementById("quoteDisplay"),
    infoDisplay: document.getElementById("infoDisplay"),
    bottomInfo: document.getElementById("bottomInfo"),
    playerInfo: document.getElementById("playerInfo"),

    startButton: document.getElementById("startButton"),
    answerButtons: document.getElementById("answerButtons"),
    nameButton: document.getElementById("nameButton"),

    playArea: document.getElementById("playArea"),
}

const gameVersion = "1.0";

const roundDuration = 11;
const roundAmount = 20;

var hideTimer = -60;

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
    startver: "0",
    answers: {

    }
}
var backupEmptySave = save;

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
        ui.answerButtons.innerHTML = "";
        hideTimer = 1;
        currentGame.currentTime = roundDuration;
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
        if (Math.ceil(Math.min(10, currentGame.currentTime)) > Math.ceil(save.answers[currentGame.currentQuote][0])) {
            // I was faster
            save.trophies += Math.ceil(Math.min(10, currentGame.currentTime) - save.answers[currentGame.currentQuote][0]);
            save.answers[currentGame.currentQuote][0] = Math.min(10, parseFloat(currentGame.currentTime.toFixed(2)));
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

    let trophyDifference = (save.trophies - currentGame.trophiesBefore);
    ui.infoDisplay.innerHTML = currentGame.questionsRight + "/" + roundAmount + " right answers in " + currentGame.totalTime.toFixed(1) + "s!<br />" + (trophyDifference >= 0 ? "+" : "") + trophyDifference + " trophies!";

    saveSave();
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

function changePlayerName() {
    save.name = prompt("New name?").substr(0, 12);
}

// Update functions
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
        ui.bottomInfo.innerHTML = /* "Trophies: " + save.trophies + "/" + (quotes.length * 10) + "  |  " + */ Math.ceil(save.answers[currentGame.currentQuote][0]) + "/10";
    }
    else {
        ui.bottomInfo.innerHTML = "Trophies: " + save.trophies + "/" + (quotes.length * 10);
    }

    ui.playerInfo.innerHTML = (save.name != "" ? save.name : "Nobody") + ": " + save.trophies + "/" + (quotes.length * 10) + " trophies<br />" + Object.keys(save.answers).length + "/" + quotes.length + " quotes seen";
}

// Essential functions
function newSave() {
    save = backupEmptySave;
    save.startver = gameVersion;
    save.id = Math.random().toString(16).slice(2);

    saveSave();
}

function loadSave() {
    let loadingSave = localStorage.getItem("QUOTEQUIZ");
    try {
        loadingSave = loadingSave.replace("wiXcHtUr", "wi");
        loadingSave = loadingSave.replace("quQisv", "ey");
        loadingSave = atob(loadingSave);
        loadingSave = JSON.parse(loadingSave);

        save = loadingSave;
    }
    catch {
        alert("Something went wrong while trying to load a save!");
        newSave();
    }
}

function saveSave() {
    let savingSave = save;
    try {
        savingSave = JSON.stringify(savingSave);
        savingSave = btoa(savingSave);
        savingSave = savingSave.replace("ey", "quQisv");
        savingSave = savingSave.replace("wi", "wiXcHtUr");

        localStorage.setItem("QUOTEQUIZ", savingSave);
    }
    catch {
        alert("Something went wrong while trying to save a save!");
    }
}

var oldTime = 0;
function loop(tick) {
    let time = (tick - oldTime) / 1000;
    oldTime = tick;

    if (currentGame.active) {
        currentGame.totalTime += time;
        currentGame.currentTime -= time;
        hideTimer -= time;

        if (hideTimer < 0 && hideTimer > -59) {
            generatePeople();
            updateButtons();

            hideTimer = -60;
        }

        if (currentGame.currentTime < 0) {
            roundLost();
        }
    }

    updateUI();

    window.requestAnimationFrame(loop);
}

if (localStorage.getItem("QUOTEQUIZ") != undefined) {
    loadSave();
}
else {
    newSave();
}

window.requestAnimationFrame(loop);