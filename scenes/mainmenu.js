var groundAnimation = 0;

scenes["mainmenu"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "mediumpurple");

        createImage("menuground2", 0, 0.9, 1, 0.1, "menuground2");

        createImage("menuground", 0, 0.8, 2, 0.1, "menuground");
        createImage("menuground3", 0, 0, 2, 0.1, "menuground");

        //createImage("gameLogo", 0.7, 0.4, 0.3, 0.3, "gameLogo", true);



        createImage("logo", 0.5, 0, 0.4, 0.4, "logo", true);
        createText("version", 0.975, 0.8, "Version " + gameVersion, "black", 40, "right");

        // Play button
        createButton("playbutton", 0.4, 0.4, 0.2, 0.1, "button", () => {
            musicPlayer.src = "QuizTime.mp3";
            musicPlayer.volume = save.settings.music ? 1 : 0;
            if (save.settings.music) musicPlayer.play();

            start();
            loadScene("play");
        });
        createText("buttonText1", 0.5, 0.475, "Play", "black", 40);

        // Settings button
        createButton("settingsbutton", 0.4, 0.525, 0.2, 0.1, "button", () => {
            loadScene("settings");
        });
        createText("buttonText2", 0.5, 0.6, "Settings", "black", 40);
        
        // Left Icons
        createButton("serverbutton", 0.1, 0.4, 0.08, 0.08, "whiteDiscord", () => {
            window.open("https://discord.gg/CbBeJXKUrk");
        }, true);
        createText("wButtonText1", 0.14, 0.46, "Discord", "white", 32, "left");

        /*
        createButton("patchnotesbutton", 0.1, 0.5, 0.08, 0.08, "whiteNotes", () => {
            loadScene("patchnotes");
        }, true);
        createText("wButtonText2", 0.14, 0.56, "Patch notes", "white", 32, "left");
        */

        createButton("websitebutton", 0.1, 0.6, 0.08, 0.08, "whiteWebsite", () => {
            window.open("https://schrottii.github.io/");
        }, true);
        createText("wButtonText3", 0.14, 0.66, "Website", "white", 32, "left");

        musicPlayer.src = "QuizMenu.mp3";
        musicPlayer.volume = save.settings.music ? 1 : 0;
        if (save.settings.music) musicPlayer.play();


        createText("playerInfo", 0.65, 0.5, "", "black", 32, "left");
        createText("playerInfo2", 0.65, 0.525, "", "black", 32, "left");
        createText("playerInfo3", 0.65, 0.55, "", "black", 32, "left");
        createText("playerInfo4", 0.65, 0.575, "", "black", 32, "left");
    },
    (tick) => {
        // Loop
        
        groundAnimation += tick / 2;
        objects["menuground"].x -= tick / 2;
        objects["menuground3"].x -= tick / 2;
        if (groundAnimation >= 1) {
            groundAnimation = 0;
            objects["menuground"].x = 0;
            objects["menuground3"].x = 0;
        }

        if (isMobile()) {
            objects["wButtonText1"].y = 10;
            //objects["wButtonText2"].y = 10;
            objects["wButtonText3"].y = 10;
        }

        objects["playerInfo"].text = (save.name != "" ? save.name : "Nobody") + ": ";
        objects["playerInfo2"].text = save.trophies + "/" + (quotes.length * 10) + " trophies";
        objects["playerInfo3"].text = Object.keys(save.answers).length + "/" + quotes.length + " quotes seen";
        objects["playerInfo4"].text = save.stats.totalAnswered + " answered";
    }
);