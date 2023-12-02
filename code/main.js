var ui = {
    quoteDisplay: document.getElementById("quoteDisplay"),
    startButton: document.getElementById("startButton"),
}

var currentGame = {
    active: false,
    currentQuote: "",
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
    ui.startButton.style.display = "none";

    pickQuote();
}

function end() {
    currentGame.active = false;
    ui.startButton.style.display = "";
}

function pickQuote() {
    currentGame.currentQuote = quotes[Math.floor(quotes.length * Math.random())].id;
}

function getQuote(id) {
    for (q in quotes) {
        if (quotes[q].id == id) return quotes[q];
    }
}

setInterval("updateUI()", 1000 / 60); // 60 fps ish

function updateUI() {
    if (currentGame.active) {
        ui.quoteDisplay.innerHTML = getQuote(currentGame.currentQuote).text;
    }
}