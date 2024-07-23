// Game made by Schrottii - don't steal or cheat

// variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var musicPlayer = document.getElementById("musicPlayer");

var delta = 0;
var time = Date.now();

var width = 0;
var height = 0;

// the holy quattroformaggi
var images = {
    button: "button.png",
    logo: "logo.png",

    whiteDiscord: "white-dc-logo.png",
    whiteWebsite: "white-website.png",
    menuground: "menu-ground.png",
    menuground2: "menu-ground2.png",
}

var scenes = {

}

var objects = {

}

var foregroundObjects = {

}

var clickables = {

}

// loading stuff
var loadingImages = 0;
var loadedImages = 0;

function loadImages() {
    for (let image in images) {
        let img = new Image();
        img.src = "images/" + images[image];
        img.onload = () => {
            loadedImages++;
            if (loadingImages == loadedImages) {
                console.log("all images loaded");
                init(); // start game
            }
        }
        images[image] = img;
        loadingImages++;
    }
}

// scene stuff
var currentScene = "none";

class Scene {
    constructor(init, loop) {
        this.init = init;
        this.loop = loop;
    }
}

function loadScene(sceneName) {
    // console.log("loading scene: " + sceneName)
    if (scenes[sceneName] == undefined) return false;

    currentScene = sceneName;

    objects = {};
    foregroundObjects = {};
    clickables = {};

    groundAnimation = 0;

    scenes[sceneName].init();
}

// event listeners and their functions
canvas.addEventListener("pointerdown", onClick);

function onClick(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    for (c in clickables) {
        //console.log(mouseX > clickables[c][0], mouseY > clickables[c][1]
        //    , mouseX < clickables[c][0] + clickables[c][2], mouseY < clickables[c][1] + clickables[c][3])
        if (clickables[c] == undefined) return false;
        if (mouseX > clickables[c][0] && mouseY > clickables[c][1]
            && mouseX < clickables[c][0] + clickables[c][2] && mouseY < clickables[c][1] + clickables[c][3]) {
            // is in the hitbox
            clickables[c][4]();
        }
    }
}

// object functions
class Square {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(width * this.x, height * this.y, width * this.w, height * this.h);
    }
}

class Picture {
    constructor(x, y, w, h, image, quadratic) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = image;
        this.quadratic = quadratic;
    }

    render() {
        if (this.rotate) ctx.translate(this.x + (this.w / 2), this.y + (this.h / 2)); ctx.rotate(this.rotate);

        if (this.snip) ctx.drawImage(images[this.image], this.snip[0], this.snip[1], this.snip[2], this.snip[3], this.quadratic ? (width * this.x) - ((height * this.w) / 2) : width * this.x, height * this.y, this.quadratic ? height * this.w : width * this.w, height * this.h);
        else ctx.drawImage(images[this.image], this.quadratic ? (width * this.x) - ((height * this.w) / 2) : width * this.x, height * this.y, this.quadratic ? height * this.w : width * this.w, height * this.h);
        if (this.rotate) ctx.translate(-this.x - (this.w / 2), -this.y - (this.h / 2)); ctx.rotate(0);
    }
}

class Text {
    constructor(x, y, text, color, fontSize, textAlign) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    render() {
        ctx.fillStyle = this.color ? this.color : "black";
        ctx.font = ((this.fontSize ? this.fontSize : 20) * (isMobile() ? 0.5 : 1)) + "px Rw";
        ctx.textBaseline = "bottom";
        ctx.textAlign = this.textAlign ? this.textAlign : "center";

        ctx.fillText(this.text, width * this.x, height * this.y);
    }
}

function isMobile() {
    if (save.settings.device == "pc") return false;
    if (save.settings.device == "mobile") return true;
    return /Mobi/i.test(window.navigator.userAgent) || width <= 480;
}

// create functions
function createSquare(name, x, y, w, h, color) {
    if (objects[name] == undefined) objects[name] = new Square(x, y, w, h, color);
}

function createImage(name, x, y, w, h, image, quadratic = false, foreground = false) {
    if (!foreground) {
        if (objects[name] == undefined) objects[name] = new Picture(x, y, w, h, image, quadratic);
    }
    else if (foregroundObjects[name] == undefined) foregroundObjects[name] = new Picture(x, y, w, h, image, quadratic);
}

function createText(name, x, y, text, color, fontSize, textAlign = "", foreground = false) {
    if (!foreground) {
        if (objects[name] == undefined) objects[name] = new Text(x, y, text, color, fontSize, textAlign);
    }
    else if (foregroundObjects[name] == undefined) foregroundObjects[name] = new Text(x, y, text, color, fontSize, textAlign);
}

function createClickable(clickableName, x, y, w, h, onClick) {
    if (clickables[clickableName] == undefined) {
        clickables[clickableName] = [width * x, height * y, width * w, height * h, onClick];
    }
}

function createButton(clickableName, x, y, w, h, color, onClick, quadratic = false) {
    if (objects[clickableName] == undefined && clickables[clickableName] == undefined) {
        objects[clickableName] = new Picture(x, y, w, h, color, quadratic);
        if (quadratic) clickables[clickableName] = [width * x - ((height * h) / 2), height * y, height * h, height * h, onClick];
        else clickables[clickableName] = [width * x, height * y, width * w, height * h, onClick];
    }

}

// loop
function loop() {
    // The game's main loop

    // Tick time
    delta = Date.now() - time;
    time = Date.now();
    save.stats.totalTime += delta;

    // Resize the canvas
    canvas.style.width = (canvas.width = window.innerWidth) + "px";
    canvas.style.height = (canvas.height = window.innerHeight) + "px";

    width = window.innerWidth;
    height = window.innerHeight;
    ctx.imageSmoothingEnabled = false; // praise jesus

    // loop
    if (currentScene != "none") {
        scenes[currentScene].loop(delta / 1000);

        for (o in objects) {
            objects[o].render();
        }
        for (o in foregroundObjects) {
            foregroundObjects[o].render();
        }
    }
    else {
        // Loading images / no scene selected
        ctx.font = "40px Joystix";
        ctx.fillStyle = "black";
        ctx.textBaseline = "bottom";
        ctx.textAlign = "center";

        ctx.fillText("QuoteQuiz", width / 2, height / 4);
        if (loadedImages == loadingImages) ctx.fillText("Click to start!", width / 2, height / 2);
        else ctx.fillText("Loaded: " + loadedImages + "/" + loadingImages, width / 2, height / 2);
    }

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

    requestAnimationFrame(loop);
}

// init the game
ctx.imageSmoothingEnabled = false;

loop();
loadImages();
function init() {
    musicPlayer.loop = true;

    loadSave();

    createClickable("startMusic", 0, 0, 1, 1, () => {
        loadScene("mainmenu");
    });
}