var gameVersion = "1.6";
var newestVersion = 9;
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
            "- Fixed error message appearing when playing for the first time",
        ],
    "v1.4.1":
        [
            "- Implemented WGGJ",
            "- Changed answer buttons to be less distracting / easier to read fast",
            "- Increased amount of quote characters per line from 42 to 64, as text scales better now",
            "- Added donate button"
        ],
    "v1.4.2":
        [
            "- Added a bar that shows the remaining round duration",
            "- Different background colors behind the round info, and the quote",
            "- Quotes are no longer cut off mid-word (line split)",
            "- Added feedback after exporting a save",
        ],
    "v1.5":
        [
            "-> New content:",
            "- Added 25 new quotes! (150 total)",
            "- New feature: Modes",
            "- Character changes",

            "-> Modes:",
            "- New feature, unlocked from the start",
            "- Modes can have a specific set of questions, or different rules",
            "- For now there are only 2 modes, but many more will be added",
            "- New mode: Normal (same as usual)",
            "- New mode: Practice Mode (no trophies gained/lost, more time, shows correct answer)",

            "-> Characters:",
            "- Changed how characters (users) are saved",
            "- Their names are now capitalized",
            "- Added images for the most common characters!",
            "- These images are directly taken from quotes, contact me if you want your image changed",
            "- Sometimes the images are hidden to prevent an easy win",

            "-> Settings:",
            "- Re-added the setting to delete the save (which was missing since v1.2)",
            "- Added a new setting to disable ground animations... they can be distracting",
            "- Moved the name setting"
        ],
    "v1.5.1":
        [
            "-> Images:",
            "- Changed the ground, with the goal to make it less distracting",
            "- Changed Discord and Website images, to be... less birdy?",

            "-> Mode Selection:",
            "- Added short descriptions of the modes",
            `- Renamed button from "Save" to "Back"`,
            "- Increased mode button width",

            "-> Other:",
            "- Updated WGGJ from v1.0 to v1.1",
            "- Character images go away after the game is over",
            "- Settings: buttons further apart"
        ],
    "v1.6":
        [
            `
-> Collection:
- New feature, accessed from main menu
- Here you can see all quotes you have seen!
- It shows their ID, author, fastest time, correct answers and wrong answers
- They are golden if perfected (10/10 trophies)
- It's scrollable, but the bottom also has page buttons to jump forward or back
- In the bottom right you can filter by a mode to see which quotes are available in that mode

-> Game Modes: 
- Mode Selection is now scrollable
- New modes are only available on certain weekdays
- New mode: Sugar Rush (3x speed / tue, thu, sat, sun)
- New mode: Dead Quote Olympics (only the 50 quotes from v1.0 / mon, fri, sat, sun)
- New mode: New Quotes (only the 50 quotes from v1.6 / wed, thu, fri)
- New mode: The Forgotten (only users with less than 10 quotes ingame / mon, tue, wed)
- New mode: Quote Mastery (only non-perfected quotes / sat, sun)
- Slightly changed display of modes
- Reworked mode related code

-> Characters:
- Added 8 new Characters
- Renamed VrimVram to Meowy

-> Other:
- Many code and file changes to make it possible to re-use the structure for a different quiz game
- Quote ID is now visible in top left
- Changed logo size in main menu
- Added patch notes button on the left as its old button was replaced by the Collection
- Changed icons on the left (discord and website)
- Fixed issue with Delete Save
- Updated WGGJ from v1.1 to v1.3
`
        ]
}

scenes["patchnotes"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createText("header", 0.5, 0.1, "Patch notes", { size: 80 });

        // Back button
        createButton("backbutton", 0.4, 0.875, 0.2, 0.1, "button", () => {
            loadScene("mainmenu");
        });
        createText("buttonText", 0.5, 0.95, "Back", { size: 40 });

        // Top navigation
        createSquare("topBgSquare", 0.1, 0.1, 0.8, 0.1, "darkgray");
        createSquare("midBgSquare", 0.1, 0.2, 0.8, 0.65, "gray");

        createButton("goLeft", 0.1, 0.1, 0.05, 0.1, "button", () => {
            if (selectedVersion > 0) selectedVersion -= 1;
            objects["versionText"].text = "Version " + Object.keys(patchnotes)[selectedVersion];
        });
        createText("goLeftText", 0.125, 0.185, "<", { size: 60 });

        createButton("goRight", 0.85, 0.1, 0.05, 0.1, "button", () => {
            if (selectedVersion < newestVersion) selectedVersion += 1;
            objects["versionText"].text = "Version " + Object.keys(patchnotes)[selectedVersion];
        });
        createText("goRightText", 0.875, 0.185, ">", { size: 60 });

        createText("versionText", 0.5, 0.185, "Version v" + gameVersion, { size: 40 });

        for (vtc = 0; vtc < 32; vtc++) {
            createText("text" + vtc, 0.1125, 0.225 + (0.02 * vtc), "", { size: 20, align: "left" });
        }
    },
    (tick) => {
        // Loop

        let currentVersionText = patchnotes[Object.keys(patchnotes)[selectedVersion]];
        if (currentVersionText.length == 1) {
            currentVersionText = currentVersionText[0].split("\n");
            currentVersionText.shift();
        }

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