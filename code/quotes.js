class Quote {
    constructor(id, updateAdded, nsfw, user, text) {
        this.id = id;
        this.updateAdded = updateAdded;
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
    new Quote("a1", 1.0, false, "noya", "Why is schrotti so smart"),
    new Quote("a2", 1.1, false, "shgabb", "nothing like getting flexed on 3 times in a row"),
    new Quote("a5", 1.0, false, "shgabb", "(note : all the quotes i send are from complete shitpost conversations and should not be taken seriously)"),
    new Quote("a7", 1.0, false, "fishka", "Just imagine, when you need a year to get them, it's only about 8 min fb for me"),
    new Quote("a8", 1.0, true, "slowmerger", "Also I accidentaly joined mario server, fuck"),
    new Quote("a10", 1.0, false, "phazer", "if you merge the barrels too fast they get scared and run away"),
    new Quote("a11", 1.0, false, "slowmerger", "my mental psyche is degrading at dangerous speed"),
    new Quote("a14", 1.0, false, "slowmerger", "I may possibly thank you for that"),
    new Quote("a19", 1.0, false, "barduzzi", "I'm too bald for that"),
    new Quote("a20", 1.0, false, "graeme", "This game is not a full time job."),
    new Quote("a21", 1.0, false, "onenever", "Good then, I shall eat that baguette instead."),
    new Quote("a24", 1.0, false, "slowmerger", "Why I so suddenly became ignorable"),
    new Quote("a26", 1.0, false, "slowmerger", "You are inhaling too much air, let other people have a breath too"),
    new Quote("a28", 1.0, true, "elmenda", "no penis?"),
    new Quote("a29", 1.0, false, "elmenda", "they will go brr anyway"),
    new Quote("a32", 1.0, true, "shgabb", "i'm also surprised at how high i got"),
    new Quote("a36", 1.0, true, "elmenda", "i do not belong to the porn industry"),
    new Quote("a42", 1.0, false, "endte", "I will send you a direct message!"),
    new Quote("a46", 1.0, false, "slowmerger", "He promotes pepsi and I like pepsi"),
    new Quote("a77", 1.0, false, "elmenda", "love"),
    new Quote("a88", 1.0, false, "dagame", "Because of girls"),
    new Quote("a95", 1.0, false, "elmenda", "nice to become the grim reaper"),
    new Quote("a111", 1.0, false, "kwhale", "poging sohard rn"),
    new Quote("a121", 1.1, false, "elmenda", "onions are literally a mass torture device"),
    new Quote("a124", 1.0, false, "phazer", "ur getting so many tires from this joke"),
    new Quote("a125", 1.1, false, "phazer", "wishing i wasnt lurking rn, u guys are deranged"),
    new Quote("a126", 1.1, false, "phazer", "i became anime ??"),
    new Quote("a128", 1.0, false, "elmenda", "why am i so memeable"),
    new Quote("a129", 1.1, false, "phazer", "you're bekommen great"),
    new Quote("a130", 1.1, false, "elmenda", "otherwise you would just fall at 9.81 km/h all the time"),
    new Quote("a131", 1.1, false, "elmenda", "you can just throw your oponion if you want"),
    new Quote("a140", 1.1, true, "barduzzi", "WHAT THE FUCK IS WRONG WITH ARABIAN PPL LIKE FUCK YOURSELF"),
    new Quote("a142", 1.1, false, "phazer", "meh thats not the true kelp experience"),
    new Quote("a148", 1.1, false, "elmenda", "please quit your delusional thoughts"),
    new Quote("a150", 1.0, false, "phazer", "i will see that when i close my eyes tonight"),

    // shgabb
    new Quote("b591", 1.0, true, "dagame", "I found the Hitler"),
    new Quote("b592", 1.1, true, "decastar", "Pussy meowing on my lap rn"),
    new Quote("b601", 1.1, false, "slowmerger", "Go swim in the forest"),
    new Quote("b611", 1.0, true, "schrottii", "get fucked democratically"),
    new Quote("b613", 1.0, false, "dagame", "Okay I'm gonna breakfasting see you yesterday :excellent:"),
    new Quote("b619", 1.1, false, "barduzzi", "Hello, I'm WhatsApp, are you suing me"),
    new Quote("b625", 1.0, false, "fishka", "Thanks for your opinion"),
    new Quote("b652", 1.1, false, "brorlol", "uh i am a head"),
    new Quote("b679", 1.0, true, "schrottii", "imagine just slapping your 99 cm cock on the chess board"),
    new Quote("b710", 1.0, true, "slowmerger", "I love fucking Hitler"),
    new Quote("b724", 1.0, false, "slowmerger", "why I am white"),
    new Quote("b735", 1.0, false, "shgabb", "😜📜  not reading allat"),
    new Quote("b738", 1.1, false, "slowmerger", "Can you stop wasting the white powder"),
    new Quote("b749", 1.0, true, "schrottii", "I'm not a furry"),
    new Quote("b779", 1.1, true, "shgabb", "googoo motherfucking gaga"),
    new Quote("b789", 1.1, true, "thekingoftrash", "cryogenically freeze yourself"),
    new Quote("b818", 1.1, false, "kwhale", "i think the biggest number is 40"),
    new Quote("b822", 1.0, false, "schrottii", "thank you for this info, I will now ban you from the game"),
    new Quote("b826", 1.1, false, "helly", "OwO    UwU    There is no reason to live"),
    new Quote("b837", 1.0, true, "barduzzi", "let's cum on me :D"),
    new Quote("b838", 1.0, false, "shgabb", "how do vegans start a beef"),
    new Quote("b844", 1.1, true, "shgabb", "⚠ the next person to chat's penis has a 27% chance of getting cut off"),
    new Quote("b845", 1.1, true, "shgabb", "⚠ my cock is out"),
    new Quote("b852", 1.0, false, "shgabb", "sorry i don't speak 1 blocked message"),
    new Quote("b854", 1.1, false, "shgabb", "Allow me to peacefully consume my copium"),
    new Quote("b862", 1.0, true, "schrottii", "it's useful for the hentai roleplay server I am in"),
    new Quote("b883", 1.0, false, "shgabb", "yea i use dish soap as shampoo"),
    new Quote("b889", 1.0, true, "avexohsf", "Man it's all shits and giggles until someone giggles and shits"),
    new Quote("b898", 1.0, true, "schrottii", "Roses are red, pussies are wet"),
    new Quote("b902", 1.0, false, "barduzzi", "got my pc password wrong 2 times till i realized i was typing elmenda"),
    new Quote("b903", 1.0, false, "nemesis", "I'm not Nemesis"),
    new Quote("b904", 1.1, true, "shgabb", "the cock is dicking"),
    new Quote("b911", 1.0, false, "schrottii", "I enjoy eating people"),
    new Quote("b919", 1.0, false, "shgabb", "i'm not affraid of brain eating amoebas    they gonna starve to death"),
    new Quote("b948", 1.0, false, "decastar", "cancer 🥰"),
    new Quote("b954", 1.0, false, "varlyne", "When I'll grow up I'll be a pilot I'LL SACRIFICE MY LIFE FOR PAKISTAN"),
    new Quote("b956", 1.0, false, "schrottii", "communism 🥰"),
    new Quote("b961", 1.1, true, "schrottii", "yeaaaa my pussy 😎"),
    new Quote("b964", 1.0, false, "kwhale", "im gonna insult everyone"),
    new Quote("b967", 1.1, false, "tpot", "you can eat a potato if you try"),
];