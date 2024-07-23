scenes["play"] = new Scene(
    () => {
        // Init
        createSquare("bg", 0, 0, 1, 1, "#c7daff");

        createImage("menuground", 0, 0, 2, 0.1, "menuground");
        createImage("menuground2", 0, 0.9, 2, 0.1, "menuground");

        // Text
        createText("quoteText", 0.5, 0.34, "...", "black", 40);
        createText("quoteText2", 0.5, 0.38, "", "black", 40);
        createText("quoteInfo", 0.5, 0.25, "", "black", 40);
        createText("quoteInfo2", 0.5, 0.2, "", "black", 40);

        // Buttons
        createButton("answer1", 0.1, 0.6, 0.3, 0.1, "button", () => { clickButton(0) })
        createButton("answer2", 0.6, 0.6, 0.3, 0.1, "button", () => { clickButton(1) })
        createButton("answer3", 0.1, 0.75, 0.3, 0.1, "button", () => { clickButton(2) })
        createButton("answer4", 0.6, 0.75, 0.3, 0.1, "button", () => { currentGame.active ? clickButton(3) : loadScene("mainmenu"); })

        createText("answerText1", 0.25, 0.675, "", "black", 40);
        createText("answerText2", 0.25 + 0.5, 0.675, "", "black", 40);
        createText("answerText3", 0.25, 0.675 + 0.15, "", "black", 40);
        createText("answerText4", 0.25 + 0.5, 0.675 + 0.15, "", "black", 40);
    },
    (tick) => {
        // Loop

        groundAnimation += tick / 4;
        objects["menuground"].x -= tick / 4;
        objects["menuground2"].x -= tick / 4;
        if (groundAnimation >= 1) {
            groundAnimation = 0;
            objects["menuground"].x = 0;
            objects["menuground2"].x = 0;
        }

        objects["quoteText"].text = getQuote(currentGame.currentQuote).text.substr(0, 42);
        objects["quoteText2"].text = getQuote(currentGame.currentQuote).text.substr(42);

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