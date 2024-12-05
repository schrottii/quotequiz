scenes["modeselection"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createImage("menuground2", 0, 0.9, 1, 0.1, "menuground2");

        createImage("menuground", 0, 0.8, 2, 0.1, "menuground");
        createImage("menuground3", 0, 0, 2, 0.1, "menuground");

        createText("header", 0.5, 0.2, "Select a mode!", { size: 80 });

        // Back button
        createButton("backbutton", 0.4, 0.875, 0.2, 0.1, "button", () => {
            saveSave();
            loadScene("mainmenu");
        });
        createText("buttonText", 0.5, 0.95, "Back", { size: 40 });

        // Modes
        createButton("mode1", 0.1, 0.4, 0.3, 0.1, "button", () => {
            start("normal");
            loadScene("play");
        });
        createText("mode1name", 0.25, 0.475, "Normal Mode", { size: 40 });
        createText("mode1desc1", 0.25, 0.55, "- All quotes", { size: 24 });
        createText("mode1desc2", 0.25, 0.575, "- Normal gameplay", { size: 24 });
        createText("mode1desc3", 0.25, 0.6, "- Trophies are gained", { size: 24 });

        createButton("mode2", 0.6, 0.4, 0.3, 0.1, "button", () => {
            start("practice");
            loadScene("play");
        });
        createText("mode2name", 0.75, 0.475, "Practice Mode", { size: 40 });
        createText("mode2desc1", 0.75, 0.55, "- All quotes", { size: 24 });
        createText("mode2desc2", 0.75, 0.575, "- 2x time and correct answers revealed", { size: 24 });
        createText("mode2desc3", 0.75, 0.6, "- No trophies", { size: 24 });
    },
    (tick) => {
        // Loop
        if (save.settings.groundanimations) {
            groundAnimation += tick / 2;
            objects["menuground"].x -= tick / 2;
            objects["menuground3"].x -= tick / 2;
            if (groundAnimation >= 1) {
                groundAnimation = 0;
                objects["menuground"].x = 0;
                objects["menuground3"].x = 0;
            }
        }
    }
);