images = {
    button: "button.png",
    logo: "logo.png",

    whiteDiscord: "white-dc-logo.png",
    whiteWebsite: "white-website.png",
    menuground: "menu-ground.png",
    menuground2: "menu-ground2.png",

    "characters/unknown": "characters/unknown.png",
}

for (let c in characters) {
    images[characters[c].imageSrc] = characters[c].imageSrc + ".png";
}

GAMENAME = "QuoteQuiz";
FONT = "Rw";
wggjLoadImages();
wggjLoop();

function loop(delta) {
    if (currentGame.active) {
        currentGame.totalTime += delta / 1000;
        currentGame.currentTime -= delta / 1000;
        hideTimer -= delta / 1000;

        if (hideTimer < 0 && hideTimer > -59) {
            generatePeople();

            hideTimer = -60;
        }

        if (currentGame.currentTime < 0) {
            roundLost();
        }
    }
}