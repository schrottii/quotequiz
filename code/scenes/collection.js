var modefilter = "normal";

function renderCollection() {
    let qts = 0;

    objects["collectionContainer"].children = [];

    for (let obj in objects) {
        if (obj.substr(0, 3) == "qt_") delete objects[obj];
    }

    for (let qt in questions) {
        if (getGameMode(modefilter).questionConditions(questions[qt]) == false) continue; // skip if filtered out
        qts++; // only increase if rendered, to avoid blank spots

        createSquare("qt_" + qt + "_bg", isMobile() ? 0 : 0.15, 0.05 + qts * 0.05, isMobile() ? 1 : 0.7, 0.045, "#c7daff");
        createText("qt_" + qt + "_header", isMobile() ? 0 : 0.15, 0.075 + qts * 0.05,
            save.answers[questions[qt].id] != undefined ?
                "#" + questions[qt].id + " - " + getCharacterByName(questions[qt].user).displayName + "   |   T: " + save.answers[questions[qt].id][0] + "   |   " + save.answers[questions[qt].id][1] + "-" + save.answers[questions[qt].id][2]
                : "Not found yet",
            { size: 20, align: "left", color: save.answers[questions[qt].id] != undefined && Math.ceil(save.answers[questions[qt].id][0]) >= 10 ? "#AAAE00" : "black" });
        createText("qt_" + qt + "_content", isMobile() ? 0 : 0.15, 0.095 + qts * 0.05,
            save.answers[questions[qt].id] ? questions[qt].text : "",
            { size: 16, align: "left" });

        objects["collectionContainer"].children.push("qt_" + qt + "_bg");
        objects["collectionContainer"].children.push("qt_" + qt + "_header");
        objects["collectionContainer"].children.push("qt_" + qt + "_content");
    }

    objects["collectionContainer"].YLimit[1] = 0.05 * qts - 0.6;
}

scenes["collection"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#93B9FF");

        createText("header", 0.5, 0.08, "Collection", { size: 64 });

        // Back button
        createButton("backbutton", 0.4, 0.875, 0.2, 0.1, "button", () => {
            loadScene("mainmenu");
        });
        createText("buttonText", 0.5, 0.95, "Back", { size: 40 });

        // pages
        createButton("buttonforward", 0.625, 0.875, 0.06, 0.1, "button", () => { objects["collectionContainer"].scrolledY -= wggjCanvasHeight * 0.65 });
        createText("buttonforwardText", 0.655, 0.95, ">", { size: 40 });

        createButton("buttonrewind", 0.315, 0.875, 0.06, 0.1, "button", () => { objects["collectionContainer"].scrolledY += wggjCanvasHeight * 0.65 });
        createText("buttonrewindText", 0.345, 0.95, "<", { size: 40 });

        // limit by mode
        createButton("modebutton", 0.8, 0.875, 0.2, 0.1, "button", () => {
            // calc what next mode is
            let current = gamemodes.indexOf(getGameMode(modefilter));
            let newmode = current + 1 > gamemodes.length - 1 ? gamemodes[0] : gamemodes[current + 1];

            // adjust
            modefilter = newmode.id;
            objects["modebuttonText"].text = "Mode: " + newmode.displayName;

            // update list
            renderCollection();
            objects["collectionContainer"].scrolledY = 0; // kick you back to the top

        });
        createText("modebuttonText", 0.9, 0.95, "Mode: Normal", { size: 20 });

        // THE THING
        createContainer("collectionContainer", 0, 0.1, 1, 0.7, { YScroll: true, YLimit: [0.001, 0], YScrollMod: 2, limitEffect: true }, []);

        renderCollection();
    },
    (tick) => {
        // Loop
    }
);