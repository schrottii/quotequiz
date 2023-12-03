class Quote {
    constructor(id, nsfw, user, text) {
        this.id = id;
        this.nsfw = nsfw;
        this.user = user;
        this.text = text;
    }

    render() {
        let ren = this.id + " " + (this.nsfw ? "NSFW " : "") + '"' + this.text + "' - " + this.user;
        return ren;
    }
}

/*
function renderAllQuotes() {
    let render = "";

    for (q in quotes) {
        render = render + quotes[q].render() + "<br />";
    }

    ui.quoteDisplay.innerHTML = render;
}
*/

const usernames = ["shgabb", "schrottii", "elmenda", "slowmerger", "phazer", "endte", "kwhale", "dagame", "avexohsf", "barduzzi", "onenever", "brickman", "fishka", "decastar", "tpot"];

const quotes = [
    // Schrottii
    new Quote("a1", false, "noya", "Why is schrotti so smart"),
    new Quote("a5", false, "shgabb", "(note : all the quotes i send are from complete shitpost conversations and should not be taken seriously)"),
    new Quote("a7", false, "fishka", "Just imagine, when you need a year to get them, it's only about 8 min fb for me"),
    new Quote("a8", true, "slowmerger", "Also I accidentaly joined mario server, fuck"),
    new Quote("a10", false, "phazer", "if you merge the barrels too fast they get scared and run away"),
    new Quote("a11", false, "slowmerger", "my mental psyche is degrading at dangerous speed"),
    new Quote("a14", false, "slowmerger", "I may possibly thank you for that"),
    new Quote("a19", false, "barduzzi", "I'm too bald for that"),
    new Quote("a20", false, "graeme", "This game is not a full time job."),
    new Quote("a21", false, "onenever", "Good then, I shall eat that baguette instead."),
    new Quote("a24", false, "slowmerger", "Why I so suddenly became ignorable"),
    new Quote("a26", false, "slowmerger", "You are inhaling too much air, let other people have a breath too"),
    new Quote("a28", true, "elmenda", "no penis?"),
    new Quote("a29", false, "elmenda", "they will go brr anyway"),
    new Quote("a32", true, "shgabb", "i'm also surprised at how high i got"),
    new Quote("a36", true, "elmenda", "i do not belong to the porn industry"),
    new Quote("a42", false, "endte", "I will send you a direct message!"),
    new Quote("a46", false, "slowmerger", "He promotes pepsi and I like pepsi"),
    new Quote("a77", false, "elmenda", "love"),
    new Quote("a88", false, "dagame", "Because of girls"),
    new Quote("a95", false, "elmenda", "nice to become the grim reaper"),
    new Quote("a111", false, "kwhale", "poging sohard rn"),
    new Quote("a124", false, "phazer", "ur getting so many tires from this joke"),
    new Quote("a128", false, "elmenda", "why am i so memeable"),
    new Quote("a150", false, "phazer", "i will see that when i close my eyes tonight"),

    // shgabb
    new Quote("b591", true, "dagame", "I found the Hitler"),
    new Quote("b611", true, "schrottii", "get fucked democratically"),
    new Quote("b613", false, "dagame", "Okay I'm gonna breakfasting see you yesterday :excellent:"),
    new Quote("b625", false, "fishka", "Thanks for your opinion"),
    new Quote("b679", true, "schrottii", "imagine just slapping your 99 cm cock on the chess board"),
    new Quote("b710", true, "slowmerger", "I love fucking Hitler"),
    new Quote("b724", false, "slowmerger", "why I am white"),
    new Quote("b735", false, "shgabb", "😜📜  not reading allat"),
    new Quote("b749", true, "schrottii", "I'm not a furry"),
    new Quote("b822", false, "schrottii", "thank you for this info, I will now ban you from the game"),
    new Quote("b837", true, "barduzzi", "let's cum on me :D"),
    new Quote("b838", false, "shgabb", "how do vegans start a beef"),
    new Quote("b852", false, "shgabb", "sorry i don't speak 1 blocked message"),
    new Quote("b862", true, "schrottii", "it's useful for the hentai roleplay server I am in"),
    new Quote("b883", false, "shgabb", "yea i use dish soap as shampoo"),
    new Quote("b889", true, "avexohsf", "Man it's all shits and giggles until someone giggles and shits"),
    new Quote("b898", true, "schrottii", "Roses are red, pussies are wet"),
    new Quote("b902", false, "barduzzi", "got my pc password wrong 2 times till i realized i was typing elmenda"),
    new Quote("b903", false, "nemesis", "I'm not Nemesis"),
    new Quote("b911", false, "schrottii", "I enjoy eating people"),
    new Quote("b919", false, "shgabb", "i'm not affraid of brain eating amoebas    they gonna starve to death"),
    new Quote("b948", false, "decastar", "cancer 🥰"),
    new Quote("b954", false, "varlyne", "When I'll grow up I'll be a pilot I'LL SACRIFICE MY LIFE FOR PAKISTAN"),
    new Quote("b956", false, "schrottii", "communism 🥰"),
    new Quote("b964", false, "kwhale", "im gonna insult everyone"),
];