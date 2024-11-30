var groundAnimation = 0;

scenes["mainmenu"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createImage("menuground2", 0, 0.9, 1, 0.1, "menuground2");

        createImage("menuground", 0, 0.8, 2, 0.1, "menuground");
        createImage("menuground3", 0, 0, 2, 0.1, "menuground");

        //createImage("gameLogo", 0.7, 0.4, 0.3, 0.3, "gameLogo", true);



        createImage("logo", 0.5, 0, 0.4, 0.4, "logo", { quadratic: true, centered: true });
        createText("version", 0.975, 0.8, "Version " + gameVersion, { size: 40, align: "right" });

        // Play button
        createButton("playbutton", 0.4, 0.4, 0.2, 0.1, "button", () => {
            wggjAudio.src = "QuizTime.mp3";
            wggjAudio.volume = save.settings.music ? 1 : 0;
            if (save.settings.music) wggjAudio.play();

            loadScene("modeselection");
        });
        createText("buttonText1", 0.5, 0.475, "Play", { size: 40 });

        // Settings button
        createButton("settingsbutton", 0.4, 0.525, 0.2, 0.1, "button", () => {
            loadScene("settings");
        });
        createText("buttonText2", 0.5, 0.6, "Settings", { size: 40 });

        // Patch notes button
        createButton("patchnotesbutton", 0.4, 0.65, 0.2, 0.1, "button", () => {
            loadScene("patchnotes");
        });
        createText("buttonText3", 0.5, 0.725, "Patch notes", { size: 40 });
        
        // Left Icons
        createButton("serverbutton", 0.1, 0.4, 0.08, 0.08, "whiteDiscord", () => {
            window.open("https://discord.gg/CbBeJXKUrk");
        }, { quadratic: true, centered: true });
        createText("wButtonText1", 0.14, 0.46, "Discord", { size: 32, align: "left" });

        /*
        createButton("patchnotesbutton", 0.1, 0.5, 0.08, 0.08, "whiteNotes", () => {
            loadScene("patchnotes");
        }, true);
        createText("wButtonText2", 0.14, 0.56, "Patch notes", "black", 32, "left");
        */

        createButton("websitebutton", 0.1, 0.6, 0.08, 0.08, "whiteWebsite", () => {
            window.open("https://schrottii.github.io/");
        }, { quadratic: true, centered: true });
        createText("wButtonText3", 0.14, 0.66, "Website", { size: 32, align: "left" });

        wggjAudio.src = "QuizMenu.mp3";
        wggjAudio.volume = save.settings.music ? 1 : 0;
        if (save.settings.music) wggjAudio.play();


        createText("playerInfo", 0.65, 0.5, "", { size: 32, align: "left" });
        createText("playerInfo2", 0.65, 0.535, "", { size: 32, align: "left" });
        createText("playerInfo3", 0.65, 0.57, "", { size: 32, align: "left" });
        createText("playerInfo4", 0.65, 0.605, "", { size: 32, align: "left" });
        createText("playerInfo5", 0.65, 0.64, "", { size: 32, align: "left" });

        createButton("donateButton", 0.05, 0.875, 0.2, 0.1, "#8E003D", () => {
            window.open("https://ko-fi.com/Y8Y2XMZX1");
        })
        createText("donateText", 0.15, 0.875 + 0.1 * 2 / 3, "Donate", { color: "white", size: 40 });
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

        if (isMobile()) {
            objects["wButtonText1"].y = 10;
            //objects["wButtonText2"].y = 10;
            objects["wButtonText3"].y = 10;
        }

        objects["playerInfo"].text = (save.name != "" ? save.name : "Nobody") + ": ";
        objects["playerInfo2"].text = save.trophies + "/" + (quotes.length * 10) + " trophies";
        objects["playerInfo3"].text = Object.keys(save.answers).length + "/" + quotes.length + " quotes seen";
        objects["playerInfo4"].text = perfectAnswers + "/" + quotes.length + " perfect";
        objects["playerInfo5"].text = save.stats.totalAnswered + " answered";
    }
);