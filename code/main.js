images = {
    button: "button.png",
    logo: "logo.png",

    whiteDiscord: "white-dc-logo.png",
    whiteNotes: "white-patch-notes.png",
    whiteWebsite: "white-website.png",
    menuground: "menu-ground.png",
    menuground2: "menu-ground2.png",

    "characters/unknown": "characters/unknown.png",
}

for (let c in characters) {
    images[characters[c].imageSrc] = characters[c].imageSrc + ".png";
}

GAMENAME = "QuoteQuiz";
FONT = "Rw";
wggjLoadImages();
wggjLoop();

function customWGGJLoop(delta) {
    if (currentGame.active) {
        currentGame.totalTime += delta / 1000;
        currentGame.currentTime -= delta / 1000 * (currentGame.mode == "sugar" ? 3 : 1);
        hideTimer -= delta / 1000 * (currentGame.mode == "sugar" ? 3 : 1);

        if (hideTimer < 0 && hideTimer > -59) {
            generatePeople();

            hideTimer = -60;
        }

        if (currentGame.currentTime < 0) {
            roundLost();
        }
    }
}

// SAVE STUFF
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
        // [fastest remaining time, correct, wrong]
    }
}

var backupEmptySave = {};
for (e in save) {
    if (typeof (save[e]) == "object") backupEmptySave[e] = Object.assign({}, save[e]);
    else backupEmptySave[e] = save[e];
}

// save and load functions
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