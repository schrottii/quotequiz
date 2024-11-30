// Quote Quiz

// Main Script

// Variables
var roundDuration = 11;
const roundAmount = 20;

var hideTimer = -60;
var perfectAnswers = 0;

var currentGame = {
    mode: "normal",
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
    previousAnswer: 0,
    previousWinner: "",
}

var save = {
    name: "",
    id: "",
    trophies: 0,
    startver: "0",
    stats: {
        totalGames: 0,
        totalAnswered: 0,
        totalRight: 0,
        totalWrong: 0,
        totalTime: 0,

        normalGames: 0,
        normalAnswered: 0,
        normalRight: 0,
        normalWrong: 0,
        normalTime: 0,
    },
    settings: {
        nsfw: false,
        music: true,
        device: "automatic",
        groundanimations: true,
    },
    answers: {

    }
}

var backupEmptySave = {};
for (e in save) {
    backupEmptySave[e] = save[e];
}

// FUNCTIONS

// save n load
function newSave() {
    save = backupEmptySave;
    save.startver = gameVersion;
    save.id = Math.random().toString(16).slice(2);

    saveSave();
}

function loadSave(origin = "none") {
    let loadingSave = "";
    if (origin == "none") loadingSave = localStorage.getItem("QUOTEQUIZ");
    else {
        loadingSave = origin;
        if (loadingSave.substr(0, 6) == "faCoDe") {
            loadingSave = loadingSave.substr(10);
            newSave();
        }
    }

    try {
        loadingSave = loadingSave.replace("wiXcHtUr", "wi");
        loadingSave = loadingSave.replace("quQisv", "ey");
        loadingSave = atob(loadingSave);
        loadingSave = JSON.parse(loadingSave);

        save.name = loadingSave.name;
        save.id = loadingSave.id;
        save.trophies = loadingSave.trophies;
        save.startver = loadingSave.startver;
        for (e in loadingSave.stats) {
            save.stats[e] = loadingSave.stats[e];
        }
        for (e in loadingSave.settings) {
            save.settings[e] = loadingSave.settings[e];
        }
        save.answers = {} // empty it so you don't keep new questions when importing old acc
        for (e in loadingSave.answers) {
            save.answers[e] = loadingSave.answers[e];
        }

        if (loadingSave.stats.normalGames == undefined) {
            save.normalGames = loadingSave.totalGames;
            save.normalAnswered = loadingSave.totalAnswered;
            save.normalRight = loadingSave.totalRight;
            save.normalWrong = loadingSave.totalWrong;
            save.normalTime = loadingSave.totalTime;
        }

        recalculateTrophies();
        saveSave();
    }
    catch (e) {
        if (origin == "none") newSave();
        else {
            console.log(e);
            alert("Something went wrong while trying to load the save!");
        }
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

        return savingSave;
    }
    catch {
        alert("Something went wrong while trying to save a save!");
    }
}

function exportSave() {
    let toExport = saveSave();
    navigator.clipboard.writeText(toExport);

    alert("Your save code has been exported to your clipboard!");
}

function importSave() {
    let toImport = prompt("Paste your save here...");
    if (toImport == undefined) return false;
    newSave();
    loadSave(toImport);
}

function deleteSave() {
    if (confirm("Are you really sure you want to delete your save?")) {
        if (confirm("You will lose everything! Consider exporting your save first!")) {
            if (confirm("If you press yes again everything will be gone!!!!!!!!!!")) {
                newSave();
            }
        }
    }
}

// start game
function start(mode) {
    currentGame.mode = mode;

    currentGame.active = true;
    currentGame.totalTime = 0;
    currentGame.questionCount = 1;
    currentGame.questionsRight = 0;
    currentGame.questionsWrong = 0;
    currentGame.trophiesBefore = save.trophies;

    roundDuration = 11; // normal
    if (currentGame.mode == "practice") roundDuration = 20; 

    save.stats.totalGames += 1;
    if (currentGame.mode == "normal") save.stats.normalGames += 1;

    /*
    ui.startButton.style.display = "none";
    ui.exportButton.style.display = "none";
    ui.importButton.style.display = "none";
    ui.resetButton.style.display = "none";
    ui.playArea.style.display = "";
    */

    roundStart();
}

function roundStart() {
    if (currentGame.questionCount <= roundAmount) {
        pickQuote();
        //ui.answerButtons.innerHTML = "";
        hideTimer = 1;
        currentGame.currentTime = roundDuration;
    }
    else {
        end();
    }
}

// win / lose
function roundWon() {
    currentGame.questionCount += 1;
    currentGame.questionsRight += 1;
    currentGame.previousAnswer = 1;
    save.stats.totalAnswered += 1;
    if (currentGame.mode == "normal") save.stats.normalAnswered += 1;
    save.stats.totalRight += 1;
    if (currentGame.mode == "normal") save.stats.normalRight += 1;

    if (save.answers[currentGame.currentQuote] != undefined && currentGame.mode != "practice") {
        // Was answered before
        if (Math.ceil(Math.min(10, currentGame.currentTime)) > Math.ceil(save.answers[currentGame.currentQuote][0])) {
            // I was faster
            save.trophies += Math.ceil(Math.min(10, currentGame.currentTime)) - Math.ceil(save.answers[currentGame.currentQuote][0]);
            save.answers[currentGame.currentQuote][0] = Math.min(10, parseFloat(currentGame.currentTime.toFixed(2)));
        }
    }

    save.answers[currentGame.currentQuote][1] += 1;

    roundStart();
}

function roundLost() {
    currentGame.questionCount += 1;
    currentGame.questionsWrong += 1;
    currentGame.previousAnswer = 2;
    save.stats.totalAnswered += 1;
    if (currentGame.mode == "normal") save.stats.normalAnswered += 1;
    save.stats.totalWrong += 1;
    if (currentGame.mode == "normal") save.stats.normalWrong += 1;

    if (save.answers[currentGame.currentQuote] != undefined && currentGame.mode != "practice") {
        // Was answered before
        save.trophies -= Math.ceil(save.answers[currentGame.currentQuote][0]);
        save.answers[currentGame.currentQuote][0] = 0; // failed
    }

    save.answers[currentGame.currentQuote][2] += 1;

    roundStart();
}

function end() {
    currentGame.active = false;

    save.stats.totalTime += currentGame.totalTime;
    if (currentGame.mode == "normal") save.stats.normalTime += currentGame.totalTime;

    /*
    ui.startButton.style.display = "";
    ui.exportButton.style.display = "";
    ui.importButton.style.display = "";
    ui.resetButton.style.display = "";
    ui.playArea.style.display = "none";
    */

    recalculateTrophies();

    saveSave();
}

// game is running
function pickQuote() {
    if (currentGame.currentQuote != "") currentGame.previousWinner = getQuote(currentGame.currentQuote).user;

    currentGame.currentQuote = "";
    while (currentGame.currentQuote == "" || (getQuote(currentGame.currentQuote).nsfw && !save.settings.nsfw)) {
        currentGame.currentQuote = quotes[Math.floor(quotes.length * Math.random())].id;
    }
    if (save.answers[currentGame.currentQuote] == undefined) save.answers[currentGame.currentQuote] = [0, 0, 0];
}

function getQuote(id) {
    for (q in quotes) {
        if (quotes[q].id == id) return quotes[q];
    }
}

function generatePeople() {
    currentGame.currentPeople = [];

    let theWinner = getCharacterByName(getQuote(currentGame.currentQuote).user).rawName;
    currentGame.winnerNumber = Math.floor(Math.random() * 4);

    for (pe = 0; pe < 4; pe++) {
        if (pe == currentGame.winnerNumber) currentGame.currentPeople.push(theWinner);
        else {
            // v to avoid the winner eppearing twice
            let randomPPL = characters[Math.floor(Math.random() * characters.length)].rawName;
            while (randomPPL == getQuote(currentGame.currentQuote).user) randomPPL = characters[Math.floor(Math.random() * characters.length)].rawName;
            currentGame.currentPeople.push(randomPPL);
        }
    }
}

function clickButton(bu) {
    if (currentGame.currentTime <= roundDuration - 1) {
        if (currentGame.winnerNumber == bu) {
            roundWon();
        }
        else {
            roundLost();
        }
    }
}

function recalculateTrophies() {
    save.trophies = 0;
    perfectAnswers = 0;

    for (q in quotes) {
        if (save.answers[quotes[q].id] != undefined) {
            save.trophies += Math.min(10, Math.ceil(save.answers[quotes[q].id][0]));
            if (Math.ceil(save.answers[quotes[q].id][0]) >= 10) perfectAnswers += 1;
        }
    }
}

// settings stuff
function changePlayerName() {
    save.name = prompt("New name?").substr(0, 12);
}

function toggleNSFW() {
    save.settings.nsfw = !save.settings.nsfw;
}

if (localStorage.getItem("QUOTEQUIZ") != undefined) {
    loadSave();
}
else {
    newSave();
}