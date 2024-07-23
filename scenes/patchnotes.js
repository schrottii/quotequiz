var gameVersion = "1.4";
var newestVersion = 4;
var selectedVersion = newestVersion;

const patchnotes = {
    "v1.0":
        [
            "- Game release",
        ],
    "v1.1":
        [
            "- Changed host",
            "- Added support for rescue codes",
            "- Added 25 new quotes! (75 total)",
            "- Added recalculation of trophies, to prevent having more than 10 from a single quote",
            "- Added a short patch notes section",
        ],
    "v1.2":
        [
            "- Reworked the game",
            "- Added 2 songs",
            "- Added settings to toggle music and device",
        ],
    "v1.3":
        [
            "- Added 25 new quotes! (100 total)",
            "- The perfect answer star is now visible as soon as the previous question ended (when it tells whether the answer was right or wrong)",
            "- Re-added message after finishing all 20 questions showing the time, trophies gained and amount of correct answers, click to continue",
            "- Reduced ground speed while playing",
        ],
    "v1.4":
        [
            "-> New content:",
            "- Added patch notes menu",
            "- Added 25 new quotes! (125 total)",
            "- Changed background color (brighter), for better text readability",
            "-> Player stats:",
            "- Added amount of perfected quotes (10/10 score)",
            "- Increased space between stats",
            "-> Other:",
            "- Moved the quote's text a bit lower, to stand out more",
            "- Name setting now shows the current name",
            "- Changed some white texts to black",
        ],
}

scenes["patchnotes"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createText("header", 0.5, 0.1, "Patch notes", "black", 80);

        // Back button
        createButton("backbutton", 0.4, 0.875, 0.2, 0.1, "button", () => {
            loadScene("mainmenu");
        });
        createText("buttonText", 0.5, 0.95, "Back", "black", 40);

        // Top navigation
        createSquare("topBgSquare", 0.1, 0.1, 0.8, 0.1, "darkgray");
        createSquare("midBgSquare", 0.1, 0.2, 0.8, 0.65, "gray");

        createButton("goLeft", 0.1, 0.1, 0.05, 0.1, "button", () => {
            if (selectedVersion > 0) selectedVersion -= 1;
            objects["versionText"].text = "Version " + Object.keys(patchnotes)[selectedVersion];
        });
        createText("goLeftText", 0.125, 0.185, "<", "black", 60);

        createButton("goRight", 0.85, 0.1, 0.05, 0.1, "button", () => {
            if (selectedVersion < newestVersion) selectedVersion += 1;
            objects["versionText"].text = "Version " + Object.keys(patchnotes)[selectedVersion];
        });
        createText("goRightText", 0.875, 0.185, ">", "black", 60);

        createText("versionText", 0.5, 0.185, "Version v" + gameVersion, "black", 40);

        for (vtc = 0; vtc < 32; vtc++) {
            createText("text" + vtc, 0.1125, 0.225 + (0.02 * vtc), "", "black", 20, "left");
        }
    },
    (tick) => {
        // Loop

        let currentVersionText = patchnotes[Object.keys(patchnotes)[selectedVersion]];
        for (vt = 0; vt < 32; vt++) {
            if (vt < currentVersionText.length) {
                objects["text" + vt].text = currentVersionText[vt];
                if (objects["text" + vt].text.substr(0, 2) == "->") {
                    objects["text" + vt].fontSize = 24;
                    objects["text" + vt].x = 0.1125;
                }
                else {
                    objects["text" + vt].fontSize = 20;
                    objects["text" + vt].x = 0.125;
                }
            }
            else {
                objects["text" + vt].text = "";
            }
        }
    }
);