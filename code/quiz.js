// Quote Quiz
// Script for quiz handling
// see main.js for save related things

// Variables
var roundDuration = 11;
const roundAmount = 20;

var hideTimer = -60;
var perfectAnswers = 0;

var currentGame = {
    mode: "normal",
    active: false,
    totalTime: 0,
    trophiesBefore: 0,

    currentQuestionID: "",
    currentTime: roundDuration,
    currentPeople: [],
    winnerNumber: -1,

    questionCount: 1,
    questionsRight: 0,
    questionsWrong: 0,

    previousAnswer: 0,
    previousWinner: "",
    availableQuestions: [],
}

// start game
function startQuizGame(mode) {
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
        pickRandomQuestion();
        //ui.answerButtons.innerHTML = "";
        hideTimer = 1;
        currentGame.currentTime = roundDuration;
    }
    else {
        endQuizGame();
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

    if (save.answers[currentGame.currentQuestionID] != undefined && currentGame.mode != "practice") {
        // Was answered before
        if (Math.ceil(Math.min(10, currentGame.currentTime)) > Math.ceil(save.answers[currentGame.currentQuestionID][0])) {
            // I was faster
            save.trophies += Math.ceil(Math.min(10, currentGame.currentTime)) - Math.ceil(save.answers[currentGame.currentQuestionID][0]);
            save.answers[currentGame.currentQuestionID][0] = Math.min(10, parseFloat(currentGame.currentTime.toFixed(2)));
        }
    }

    save.answers[currentGame.currentQuestionID][1] += 1;

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

    if (save.answers[currentGame.currentQuestionID] != undefined && currentGame.mode != "practice") {
        // Was answered before
        save.trophies -= Math.ceil(save.answers[currentGame.currentQuestionID][0]);
        save.answers[currentGame.currentQuestionID][0] = 0; // failed
    }

    save.answers[currentGame.currentQuestionID][2] += 1;

    roundStart();
}

function endQuizGame() {
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
function pickRandomQuestion() {
    // set previous if we already had one
    if (currentGame.currentQuestionID != "") currentGame.previousWinner = getQuestion(currentGame.currentQuestionID).user;

    // determine available questions
    if (currentGame.availableQuestions.length == 0) {
        let condition = getGameMode(currentGame.mode).questionConditions;
        for (let q in questions) {
            // add if it's not NSFW (or we allowed NSFW), and fulfills the gamemode's condition(s)
            if (condition(questions[q]) == true && (!questions[q].nsfw || save.settings.nsfw)) currentGame.availableQuestions.push(questions[q].id);
        }
    }

    currentGame.currentQuestionID = currentGame.availableQuestions[Math.floor(currentGame.availableQuestions.length * Math.random())];
    console.log(currentGame.currentQuestionID);

    if (save.answers[currentGame.currentQuestionID] == undefined) save.answers[currentGame.currentQuestionID] = [0, 0, 0];
}

function getQuestion(id) {
    for (q in questions) {
        if (questions[q].id == id) return questions[q];
    }
}

function generatePeople() {
    currentGame.currentPeople = [];

    // determine the winner, put it in a random spot
    let theWinner = getCharacterByName(getQuestion(currentGame.currentQuestionID).user).rawName;
    currentGame.winnerNumber = Math.floor(Math.random() * 4);

    for (pe = 0; pe < 4; pe++) {
        if (pe == currentGame.winnerNumber) currentGame.currentPeople.push(theWinner); // this is the winner's spot? put it there
        else {
            // not winner, put someone random (this happens 3 times)
            // v to avoid the winner eppearing twice
            let randomPPL = "";
            while (randomPPL == getQuestion(currentGame.currentQuestionID).user || randomPPL == "" || currentGame.currentPeople.includes(randomPPL)) {
                randomPPL = characters[Math.floor(Math.random() * characters.length)].rawName;
            }
            currentGame.currentPeople.push(randomPPL);
        }
    }
}

function clickButton(bu) {
    // the four answer buttons
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

    for (q in questions) {
        if (save.answers[questions[q].id] != undefined) {
            save.trophies += Math.min(10, Math.ceil(save.answers[questions[q].id][0]));
            if (Math.ceil(save.answers[questions[q].id][0]) >= 10) perfectAnswers += 1;
        }
    }
}