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
        createContainer("container", 0, 0.1, 1, 0.7, { XScroll: true, XLimit: [0.001, 0], XScrollMod: 2, limitEffect: true }, []);

        let visibleModes = 0;
        for (let gm in gamemodes) {
            if (gamemodes[gm].unlock()) {
                gamemodes[gm].generateObjects(visibleModes * 0.3);
                visibleModes++;
            }
        }

        objects["container"].XLimit[1] = visibleModes * 0.3 - 0.9;
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