scenes["play"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createImage("menuground", 0, 0, 2, 0.1, "menuground");
        createImage("menuground2", 0, 0.9, 2, 0.1, "menuground");

        // Info like time remaining
        createSquare("quoteInfoBG", 0.3, 0.15, 0.4, 0.11, "#A1B0CC");
        createText("quoteInfo", 0.5, 0.25, "", { size: 40 });
        createText("quoteInfo2", 0.5, 0.2, "", { size: 40 });

        createSquare("timeRemainingBG", 0.3, 0.26, 0.4, 0.02, "black");
        createSquare("timeRemaining", 0.3, 0.26, 0, 0.02, "yellow");

        // Quote content (the quote itself)
        createSquare("quoteTextBG", 0.18, 0.28, 0.64, 0.12, "white");
        createText("quoteText", 0.5, 0.34, "...", { size: 40 });
        createText("quoteText2", 0.5, 0.38, "", { size: 40 });

        // Buttons
        createButton("answer1", 0.1, 0.6, 0.3, 0.1, "#000000", () => { clickButton(0) })
        createButton("answer2", 0.6, 0.6, 0.3, 0.1, "#000000", () => { clickButton(1) })
        createButton("answer3", 0.1, 0.75, 0.3, 0.1, "#000000", () => { clickButton(2) })
        createButton("answer4", 0.6, 0.75, 0.3, 0.1, "#000000", () => { currentGame.active ? clickButton(3) : loadScene("mainmenu"); })

        createText("answerText1", 0.25, 0.675, "", { size: 40, color: "white" });
        createText("answerText2", 0.25 + 0.5, 0.675, "", { size: 40, color: "white" });
        createText("answerText3", 0.25, 0.675 + 0.15, "", { size: 40, color: "white" });
        createText("answerText4", 0.25 + 0.5, 0.675 + 0.15, "", { size: 40, color: "white" });
    },
    (tick) => {
        // Loop

        // Update ground animations
        groundAnimation += tick / 4;
        objects["menuground"].x -= tick / 4;
        objects["menuground2"].x -= tick / 4;
        if (groundAnimation >= 1) {
            groundAnimation = 0;
            objects["menuground"].x = 0;
            objects["menuground2"].x = 0;
        }

        // Update quote text
        let quoteDesc = getQuote(currentGame.currentQuote).text;
        objects["quoteText"].text = quoteDesc.length > 64 ? quoteDesc.substr(0, quoteDesc.substr(0, 64).lastIndexOf(" ")) : quoteDesc;
        objects["quoteText2"].text = quoteDesc.length > 64 ? quoteDesc.substr(quoteDesc.substr(0, 64).lastIndexOf(" ") + 1) : "";

        // Update info area
        objects["timeRemaining"].w = 0.4 * (currentGame.currentTime / roundDuration);

        if (!currentGame.active) {
            objects["quoteInfo"].text = ((save.trophies - currentGame.trophiesBefore) >= 0 ? "+" : "") + (save.trophies - currentGame.trophiesBefore) + " trophies!";
            objects["quoteInfo2"].text = currentGame.questionsRight + "/" + roundAmount + " right answers in " + currentGame.totalTime.toFixed(1) + "s!";
        }
        else {
            objects["quoteInfo"].text = "Question " + currentGame.questionCount + "/" + roundAmount + "  |  " + currentGame.currentTime.toFixed(1) + "s";

            if (currentGame.currentTime <= 10) objects["quoteInfo2"].text = (Math.ceil(save.answers[currentGame.currentQuote][0]) == 10 ? "⭐" : Math.ceil(save.answers[currentGame.currentQuote][0]) + "/10");
            else objects["quoteInfo2"].text = (Math.ceil(save.answers[currentGame.currentQuote][0]) == 10 ? "⭐ " : "") + (["", "Right!", "Wrong!"][currentGame.previousAnswer]);
        }

        // Update buttons
        if (currentGame.active) {
            for (at = 1; at < 5; at++) {
                if (currentGame.currentTime <= 10) {
                    objects["answerText" + at].text = currentGame.currentPeople[at - 1];
                }
                else {
                    objects["answerText" + at].text = "";
                }
            }
        }
        else {
            for (at = 1; at < 4; at++) {
                objects["answerText" + at].y = 500;
                objects["answer" + at].y = 500;
            }
            objects["answerText4"].text = "Click to continue";
        }
    }
);