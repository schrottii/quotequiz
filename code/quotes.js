﻿class Quote {
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
    new Quote("a152", 1.3, false, "helly", "scientific evidence that life was a mistake"),
    new Quote("a154", 1.3, false, "elmenda", "kids are so underestimated"),
    new Quote("a163", 1.3, false, "elmenda", "i am gucci lol"),
    new Quote("a164", 1.3, false, "elmenda", "i avoid plants"),
    new Quote("a167", 1.3, false, "shgabb", "1 am... really the time ?"),
    new Quote("a169", 1.3, false, "phazer", "have you ever tried a slot machine? waiting for updates is like that in my mind"),
    new Quote("a171", 1.3, false, "elmenda", "we do not need music albums in shgabb clicker xd"),
    new Quote("a173", 1.3, true, "hany", "shgabb the fuck up"),
    new Quote("a174", 1.3, false, "kwhale", "hi i am endte and the update will include m65536 boost it will boost all other mastery boosts"),
    new Quote("a176", 1.3, false, "kwhale", "sounds like something someone without blood would say"),
    new Quote("a179", 1.3, false, "kwhale", "i see the uwu"),
    new Quote("a183", 1.3, false, "phazer", "unjoke right now or else"),
    new Quote("a184", 1.3, false, "kwhale", "react if you've seen corn"),
    new Quote("a185", 1.3, false, "endte", "Merci 🥖"),
    new Quote("a191", 1.3, false, "anstr", "peter gives birth to more peter"),
    new Quote("a196", 1.3, false, "phazer", "schrottii so good we made a second schrottii"),
    new Quote("a200", 1.3, true, "avexohsf", "fuck Algeria"),
    new Quote("a202", 1.3, false, "elmenda", "obama is linux"),
    new Quote("a206", 1.3, false, "dagame", "Wtf to my t9"),
    new Quote("a216", 1.3, false, "slowmerger", "I am extreme demon to society"),
    new Quote("a229", 1.3, false, "dagame", "Yeah, it's a good time to get Obama thrice in a row"),
    new Quote("a232", 1.3, false, "elmenda", "that is NOT a pelican"),
    new Quote("a233", 1.3, false, "elmenda", "that is NOT an eagle"),
    new Quote("a234", 1.3, false, "elmenda", "that is NOT an ostrich"),
    new Quote("a236", 1.3, false, "rofl", "Updates are not allowed also"),
    new Quote("a238", 1.4, false, "slowmerger", "pray."),
    new Quote("a239", 1.4, false, "alice", "It is May 11th, 2024!"),
    new Quote("a240", 1.4, false, "alice", "Your opinion is wrong :yay:"),
    new Quote("a254", 1.4, false, "kuitti", "oh no, im not THAT allergic to progress"),
    new Quote("a257", 1.4, true, "elmenda", "fuck you tim cook"),
    new Quote("a258", 1.4, false, "elmenda", "edison intensifies"),
    new Quote("a262", 1.4, false, "decastar", "my brain is disintegrating"),
    new Quote("a269", 1.4, false, "elmenda", "technically that's an egoistical quote"),
    new Quote("a270", 1.4, false, "dagame", "fart instead of active silicone"),

    // shgabb
    new Quote("b589", 1.4, true, "slowmerger", "Y you left Cunt"),
    new Quote("b591", 1.0, true, "dagame", "I found the Hitler"),
    new Quote("b592", 1.1, true, "decastar", "Pussy meowing on my lap rn"),
    new Quote("b599", 1.4, false, "schrottii", "tl;dr: she is hot"),
    new Quote("b601", 1.1, false, "slowmerger", "Go swim in the forest"),
    new Quote("b611", 1.0, true, "schrottii", "get fucked democratically"),
    new Quote("b612", 1.4, true, "schrottii", "I prefer 16 year olds"),
    new Quote("b613", 1.0, false, "dagame", "Okay I'm gonna breakfasting see you yesterday :excellent:"),
    new Quote("b619", 1.1, false, "barduzzi", "Hello, I'm WhatsApp, are you suing me"),
    new Quote("b625", 1.0, false, "fishka", "Thanks for your opinion"),
    new Quote("b640", 1.4, true, "elmenda", "consider fucking"),
    new Quote("b642", 1.4, false, "barduzzi", "I just ate very spicy meat"),
    new Quote("b652", 1.1, false, "brorlol", "uh i am a head"),
    new Quote("b661", 1.4, false, "slowmerger", "Please pay for WhatsApp premium I beg you"),
    new Quote("b679", 1.0, true, "schrottii", "imagine just slapping your 99 cm cock on the chess board"),
    new Quote("b680", 1.4, false, "pablo", "I am assuming you are a gamer girl, is it correct?"),
    new Quote("b699", 1.4, false, "schrottii", "Are you https? Because without you I'm just ://"),
    new Quote("b708", 1.4, false, "shgabb", "discord being a toilet fits your shitposting style"),
    new Quote("b709", 1.4, false, "slowmerger", "I'll send you back to #hong-kong"),
    new Quote("b710", 1.0, true, "slowmerger", "I love fucking Hitler"),
    new Quote("b723", 1.4, false, "decastar", "Sell one of your kidneys for 0.49 usd"),
    new Quote("b724", 1.0, false, "slowmerger", "why I am white"),
    new Quote("b735", 1.0, false, "shgabb", "😜📜  not reading allat"),
    new Quote("b738", 1.1, false, "slowmerger", "Can you stop wasting the white powder"),
    new Quote("b749", 1.0, true, "schrottii", "I'm not a furry"),
    new Quote("b778", 1.4, true, "shgabb", "FUKING TYPO /WRTATH/"),
    new Quote("b779", 1.1, true, "shgabb", "googoo motherfucking gaga"),
    new Quote("b782", 1.4, true, "slowmerger", "*claps with my penis*"),
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
    new Quote("b859", 1.4, false, "kwhale", "all the nukes are run by nerds"),
    new Quote("b862", 1.0, true, "schrottii", "it's useful for the hentai roleplay server I am in"),
    new Quote("b883", 1.0, false, "shgabb", "yea i use dish soap as shampoo"),
    new Quote("b889", 1.0, true, "avexohsf", "Man it's all shits and giggles until someone giggles and shits"),
    new Quote("b898", 1.0, true, "schrottii", "Roses are red, pussies are wet"),
    new Quote("b902", 1.0, false, "barduzzi", "got my pc password wrong 2 times till i realized i was typing elmenda"),
    new Quote("b903", 1.0, false, "nemesis", "I'm not Nemesis"),
    new Quote("b904", 1.1, true, "shgabb", "the cock is dicking"),
    new Quote("b908", 1.4, true, "schrottii", "I have a fork fetish too :)"),
    new Quote("b911", 1.0, false, "schrottii", "I enjoy eating people"),
    new Quote("b919", 1.0, false, "shgabb", "i'm not affraid of brain eating amoebas    they gonna starve to death"),
    new Quote("b948", 1.0, false, "decastar", "cancer 🥰"),
    new Quote("b954", 1.0, false, "varlyne", "When I'll grow up I'll be a pilot I'LL SACRIFICE MY LIFE FOR PAKISTAN"),
    new Quote("b956", 1.0, false, "schrottii", "communism 🥰"),
    new Quote("b961", 1.1, true, "schrottii", "yeaaaa my pussy 😎"),
    new Quote("b964", 1.0, false, "kwhale", "im gonna insult everyone"),
    new Quote("b966", 1.4, false, "schrottii", "who even cares about the trans"),
    new Quote("b967", 1.1, false, "tpot", "you can eat a potato if you try"),
];