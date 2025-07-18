class GameMode {
    constructor(id, displayName, text, unlock = false, questionConditions = false) {
        this.id = id;
        this.displayName = displayName;
        this.text = text;
        this.unlock = unlock != false ? unlock : () => { return true; };
        this.questionConditions = questionConditions != false ? questionConditions : () => { return true; };
    }

    generateObjects(xOff = 0) {
        // clickable button
        createButton("mode_" + this.id + "_button", 0.05 + xOff, 0.4, 0.2, 0.1, "button", () => {
            startQuizGame(this.id);
            loadScene("play");
        });
        objects["container"].children.push("mode_" + this.id + "_button");

        // texts
        createText("mode_" + this.id + "_name", 0.15 + xOff, 0.475, this.displayName, { size: 400 / this.displayName.length });
        objects["container"].children.push("mode_" + this.id + "_name");

        let splitText = this.text.split("\n");
        for (let sT in splitText) {
            createText("mode_" + this.id + "_text" + sT, 0.05 + xOff, 0.55 + 0.03 * sT, splitText[sT], { size: 24, align: "left" });
            objects["container"].children.push("mode_" + this.id + "_text" + sT);
        }
    }
}

function getGameMode(id) {
    for (let gM in gamemodes) {
        if (gamemodes[gM].id == id) return gamemodes[gM];
    }
}

function daylocked(days) {
    let currentDay = new Date().getUTCDay(); // 0 = sunday, 6 = saturday
    if (days.includes("sun") && currentDay == 0) return true;
    if (days.includes("mon") && currentDay == 1) return true;
    if (days.includes("tue") && currentDay == 2) return true;
    if (days.includes("wed") && currentDay == 3) return true;
    if (days.includes("thu") && currentDay == 4) return true;
    if (days.includes("fri") && currentDay == 5) return true;
    if (days.includes("sat") && currentDay == 6) return true;
    return false;
}

const gamemodes = [
    new GameMode("normal", "Normal Mode", "- All quotes\n- Normal gameplay\n- Trophies are gained"),
    new GameMode("practice", "Practice Mode", "- All quotes\n- 2x time\n- Answers revealed\n- No trophies"),
    new GameMode("sugar", "Sugar Rush", "- All quotes\n- 3x speed\n- Trophies", () => { return daylocked(["tue", "thu", "sat", "sun"]) }),
    new GameMode("v1.0", "Dead Quote Olympics", "- v1.0's 50 quotes\n- Normal gameplay\n- Trophies", () => { return daylocked(["mon", "fri", "sat", "sun"]) }, (q) => { return q.updateAdded == 1.0; }),
    new GameMode("v1.6", "New Quotes", "- v1.6's 50 quotes\n- Normal gameplay\n- Trophies", () => { return daylocked(["wed", "thu", "fri"]) }, (q) => { return q.updateAdded == 1.6; }),
    new GameMode("forgotten", "The Forgotten", "- Only people with less than 10 quotes\n- Normal gameplay\n- Trophies", () => { return daylocked(["mon", "tue", "wed"]) }, (q) => {
        if (getCharacterByName(q.user).imageSrc == "characters/unknown") return true; // doesn't even have a character set up
        let amount = 0;
        for (let qt in questions) {
            if (questions[qt].user == q.user) amount++;
            if (amount >= 10) return false;
        }
        return true;
    }),
    new GameMode("mastery", "Quote Mastery", "- Only non-perfected quotes\n- Normal gameplay\n- Ideal for trophies", () => { return daylocked(["sat", "sun"]) }, (q) => {
        if (save.answers[q.id] == undefined || Math.ceil(save.answers[q.id][0]) < 10) return true;
        return false;
    })
];