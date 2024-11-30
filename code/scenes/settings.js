scenes["settings"] = new Scene(
    () => {
        // Init
        function updateSettings() {
            objects["settingText1"].text = "Music: " + (save.settings.music ? "ON" : "OFF");
            objects["settingText2"].text = "Device: " + save.settings.device.substr(0, 1).toUpperCase() + save.settings.device.substr(1);
            objects["settingText3"].text = "NSFW: " + (save.settings.nsfw ? "ON" : "OFF");
            objects["settingText4"].text = "Name: " + save.name;
            objects["settingText8"].text = "Ground Animations: " + (save.settings.groundanimations ? "ON" : "OFF");
        }

        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createImage("menuground2", 0, 0.9, 1, 0.1, "menuground2");

        createImage("menuground", 0, 0.8, 2, 0.1, "menuground");
        createImage("menuground3", 0, 0, 2, 0.1, "menuground");

        createText("header", 0.5, 0.2, "Settings", { size: 80 });

        // Back button
        createButton("backbutton", 0.4, 0.875, 0.2, 0.1, "button", () => {
            saveSave();
            loadScene("mainmenu");
        });
        createText("buttonText", 0.5, 0.95, "Save", { size: 40 });

        // Settings
        // Left side
        createButton("setting1", 0.1, 0.3, 0.4, 0.1, "button", () => {
            save.settings.music = !save.settings.music;
            updateSettings();
        });
        createText("settingText1", 0.3, 0.375, "?", { size: 40 });

        createButton("setting2", 0.1, 0.45, 0.4, 0.1, "button", () => {
            switch (save.settings.device) {
                case "automatic":
                    save.settings.device = "pc";
                    break;
                case "pc":
                    save.settings.device = "mobile";
                    break;
                case "mobile":
                    save.settings.device = "automatic";
                    break;
            }
            updateSettings();
        });
        createText("settingText2", 0.3, 0.525, "?", { size: 40 });

        createButton("setting3", 0.1, 0.6, 0.4, 0.1, "button", () => {
            save.settings.nsfw = !save.settings.nsfw;
            updateSettings();
        });
        createText("settingText3", 0.3, 0.675, "?", { size: 40 });

        createButton("setting4", 0.1, 0.75, 0.4, 0.1, "button", () => {
            changePlayerName();
            updateSettings();
        });
        createText("settingText4", 0.3, 0.825, "Name", { size: 40 });



        // Right side
        createButton("setting5", 0.5, 0.3, 0.4, 0.1, "button", () => {
            importSave();
            updateSettings();
        });
        createText("settingText5", 0.7, 0.375, "Import", { size: 40 });

        createButton("setting6", 0.5, 0.45, 0.4, 0.1, "button", () => {
            exportSave();
            updateSettings();
        });
        createText("settingText6", 0.7, 0.525, "Export", { size: 40 });

        createButton("setting7", 0.5, 0.6, 0.4, 0.1, "button", () => {
            deleteSave();
            updateSettings();
        });
        createText("settingText7", 0.7, 0.675, "Delete Save", { size: 40 });

        createButton("setting8", 0.5, 0.75, 0.4, 0.1, "button", () => {
            save.settings.groundanimations = !save.settings.groundanimations;
            updateSettings();
        });
        createText("settingText8", 0.7, 0.825, "?", { size: 40 });

        // Inite
        updateSettings();
    },
    (tick) => {
        // Loop
        if (save.settings.groundanimations) {
            groundAnimation += tick;
            objects["menuground"].x -= tick / 2;
            objects["menuground3"].x -= tick / 2;
            if (groundAnimation >= 1) {
                groundAnimation = 0;
                objects["menuground"].x = 0;
                objects["menuground3"].x = 0;
            }
        }

        // ...
    }
);