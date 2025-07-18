class Question {
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

class Character {
    constructor(rawName, displayName, imageSrc) {
        this.rawName = rawName;
        this.displayName = displayName;
        this.imageSrc = imageSrc;
    }
}

function getCharacterByName(name) {
    for (let c in characters) {
        if (characters[c].rawName == name) return characters[c];
    }
    return new Character(name, name.substr(0, 1).toUpperCase() + name.substr(1), "characters/unknown");
}

const characters = [
    new Character("shgabb", "Shgabb", "characters/a32-shgabb"),
    new Character("schrottii", "Schrottii", "characters/b599-schrottii"),
    new Character("elmenda", "elmenda452", "characters/a28-elmenda"),
    new Character("slowmerger", "Slowmerger", "characters/a11-slowmerger"),
    new Character("phazer", "Phazer", "characters/a129-phazer"),
    new Character("endte", "Endte", "characters/a42-endte"),
    new Character("kwhale", "K. Whale", "characters/a111-kwhale"),
    new Character("dagame", "DaGame", "characters/a88-dagame"),
    new Character("avexohsf", "avexohsf", "characters/a200-avex"),
    new Character("barduzzi", "Barduzzi", "characters/a140-barduzzi"),
    new Character("onenever", "OneNeverwind", "characters/a21-onenever"),
    new Character("brickman", "Brickman", "characters/brickman"),
    new Character("fishka", "Fishka", "characters/a7-fishka"),
    new Character("decastar", "Decastar", "characters/a262-decastar"),
    new Character("tpot", "Tpot2vsBfb4", "characters/b967-tpot"),
    new Character("helly", "Helly", "characters/a152-helly"),
    new Character("alice", "Alice", "characters/a239-alice"),

    new Character("noya", "Noya", "characters/a1-noya"),
    new Character("graeme", "Graeme", "characters/a20-graeme"),
    new Character("hany", "HaNy", "characters/a173-hany"),
    new Character("rofl", "Rofl", "characters/a173-hany"),
    new Character("meowy", "Meowy", "characters/a297-meowy"),
    new Character("myangelsagiri", "MyAngelSagiri", "characters/a298-myangelsagiri"),
    new Character("moaz", "moaz", "characters/a291-moaz"),
    new Character("schrotttv", "SchrottTV", "characters/a155-schrotttv"),
];

const questions = [
    // Schrottii
    new Question("a1", 1.0, false, "noya", "Why is schrotti so smart"),
    new Question("a2", 1.1, false, "shgabb", "nothing like getting flexed on 3 times in a row"),
    new Question("a3", 1.5, false, "shgabb", "i don't really care about the points 😉"),
    new Question("a4", 1.5, true, "shgabb", "boobs and a good sense of humor is all i need ^^"),
    new Question("a5", 1.0, false, "shgabb", "(note : all the quotes i send are from complete shitpost conversations and should not be taken seriously)"),
    new Question("a7", 1.0, false, "fishka", "Just imagine, when you need a year to get them, it's only about 8 min fb for me"),
    new Question("a8", 1.0, true, "slowmerger", "Also I accidentaly joined mario server, fuck"),
    new Question("a10", 1.0, false, "phazer", "if you merge the barrels too fast they get scared and run away"),
    new Question("a11", 1.0, false, "slowmerger", "my mental psyche is degrading at dangerous speed"),
    new Question("a13", 1.6, true, "hany", "ok ill stop sending you my penis"),
    new Question("a14", 1.0, false, "slowmerger", "I may possibly thank you for that"),
    new Question("a16", 1.6, false, "slowmerger", "I was joking you dumbass"),
    new Question("a17", 1.6, false, "decastar", "tf I thought I was kicked atm 💀"),
    new Question("a19", 1.0, false, "barduzzi", "I'm too bald for that"),
    new Question("a20", 1.0, false, "graeme", "This game is not a full time job."),

    new Question("a21", 1.0, false, "onenever", "Good then, I shall eat that baguette instead."),
    new Question("a22", 1.6, true, "slowmerger", "HOLY SHIT!!! IT'S HITLER AGAIN"),
    new Question("a24", 1.0, false, "slowmerger", "Why I so suddenly became ignorable"),
    new Question("a26", 1.0, false, "slowmerger", "You are inhaling too much air, let other people have a breath too"),
    new Question("a28", 1.0, true, "elmenda", "no penis?"),
    new Question("a29", 1.0, false, "elmenda", "they will go brr anyway"),
    new Question("a31", 1.6, false, "slowmerger", "We don't have a channel named #TikTok in this server, sir."),
    new Question("a32", 1.0, true, "shgabb", "i'm also surprised at how high i got"),
    new Question("a33", 1.6, true, "slowmerger", "I love banging your mom daily"),
    new Question("a36", 1.0, true, "elmenda", "i do not belong to the porn industry"),
    new Question("a40", 1.6, false, "slowmerger", "No its peaceful"),

    new Question("a41", 1.6, true, "shgabb", "legalise child porn"),
    new Question("a42", 1.0, false, "endte", "I will send you a direct message!"),
    new Question("a43", 1.6, false, "endte", "How many stars do you currently have? (10?)"),
    new Question("a46", 1.0, false, "slowmerger", "He promotes pepsi and I like pepsi"),
    new Question("a58", 1.6, false, "fishka", "It feels good to have the biggest"),
    new Question("a60", 1.6, false, "brickman", "I should stop reading this channel >.>"),

    new Question("a64", 1.6, false, "varlyne", "I'M NOT RACIST"),
    new Question("a66", 1.6, false, "phazer", "phazer moment"),
    new Question("a68", 1.6, true, "shgabb", "dong"),
    new Question("a69", 1.6, true, "shgabb", "I FUCKING SAID DONG I WANT TO KILL MYSELF"),
    new Question("a75", 1.6, false, "kwhale", "no no"),
    new Question("a77", 1.0, false, "elmenda", "love"),
    new Question("a80", 1.6, false, "elmenda", "yeah just ascend into a god already"),

    new Question("a82", 1.6, false, "phazer", "my son was here earlier"),
    new Question("a88", 1.0, false, "dagame", "Because of girls"),
    new Question("a95", 1.0, false, "elmenda", "nice to become the grim reaper"),

    new Question("a105", 1.6, false, "phazer", "me when im a vietnamese noodle dish"),
    new Question("a11ß", 1.6, false, "elmenda", "well I was obviously dumber in this field back in 2018"),
    new Question("a111", 1.0, false, "kwhale", "poging sohard rn"),
    new Question("a120", 1.6, true, "elmenda", "it's literally fucking everywhere and i fucking hate it"),

    new Question("a121", 1.1, false, "elmenda", "onions are literally a mass torture device"),
    new Question("a124", 1.0, false, "phazer", "ur getting so many tires from this joke"),
    new Question("a125", 1.1, false, "phazer", "wishing i wasnt lurking rn, u guys are deranged"),
    new Question("a126", 1.1, false, "phazer", "i became anime ??"),
    new Question("a128", 1.0, false, "elmenda", "why am i so memeable"),
    new Question("a129", 1.1, false, "phazer", "you're bekommen great"),
    new Question("a130", 1.1, false, "elmenda", "otherwise you would just fall at 9.81 km/h all the time"),
    new Question("a131", 1.1, false, "elmenda", "you can just throw your oponion if you want"),
    new Question("a140", 1.1, true, "barduzzi", "WHAT THE FUCK IS WRONG WITH ARABIAN PPL LIKE FUCK YOURSELF"),

    new Question("a142", 1.1, false, "phazer", "meh thats not the true kelp experience"),
    new Question("a146", 1.6, false, "phazer", "grates on the gender"),
    new Question("a148", 1.1, false, "elmenda", "please quit your delusional thoughts"),
    new Question("a150", 1.0, false, "phazer", "i will see that when i close my eyes tonight"),
    new Question("a152", 1.3, false, "helly", "scientific evidence that life was a mistake"),
    new Question("a153", 1.6, true, "helly", "did you fucking call me a serbian beer"),
    new Question("a154", 1.3, false, "elmenda", "kids are so underestimated"),
    new Question("a155", 1.6, false, "schrotttv", "mr chicken poop"),
    new Question("a158", 1.6, false, "schrotttv", "even more proof?"),
    new Question("a159", 1.6, true, "schrotttv", "how about we fuck you, would that give you satisfaction"),
    new Question("a160", 1.6, false, "schrotttv", "WHY AM I SCREMIN"),

    new Question("a161", 1.6, false, "schrotttv", "i have gigaAIDS"),
    new Question("a163", 1.3, false, "elmenda", "i am gucci lol"),
    new Question("a164", 1.3, false, "elmenda", "i avoid plants"),
    new Question("a165", 1.6, false, "schrotttv", "i cheated my way into your heart"),
    new Question("a167", 1.3, false, "shgabb", "1 am... really the time ?"),
    new Question("a169", 1.3, false, "phazer", "have you ever tried a slot machine? waiting for updates is like that in my mind"),
    new Question("a171", 1.3, false, "elmenda", "we do not need music albums in shgabb clicker xd"),
    new Question("a173", 1.3, true, "hany", "shgabb the fuck up"),
    new Question("a174", 1.3, false, "kwhale", "hi i am endte and the update will include m65536 boost it will boost all other mastery boosts"),
    new Question("a176", 1.3, false, "kwhale", "sounds like something someone without blood would say"),
    new Question("a179", 1.3, false, "kwhale", "i see the uwu"),

    new Question("a183", 1.3, false, "phazer", "unjoke right now or else"),
    new Question("a184", 1.3, false, "kwhale", "react if you've seen corn"),
    new Question("a185", 1.3, false, "endte", "Merci 🥖"),
    new Question("a191", 1.3, false, "anstr", "peter gives birth to more peter"),
    new Question("a196", 1.3, false, "phazer", "schrottii so good we made a second schrottii"),
    new Question("a200", 1.3, true, "avexohsf", "fuck Algeria"),

    new Question("a202", 1.3, false, "elmenda", "obama is linux"),
    new Question("a206", 1.3, false, "dagame", "Wtf to my t9"),
    new Question("a216", 1.3, false, "slowmerger", "I am extreme demon to society"),
    new Question("a220", 1.6, false, "kwhale", "laughs in no thumbs"),

    new Question("a229", 1.3, false, "dagame", "Yeah, it's a good time to get Obama thrice in a row"),
    new Question("a232", 1.3, false, "elmenda", "that is NOT a pelican"),
    new Question("a233", 1.3, false, "elmenda", "that is NOT an eagle"),
    new Question("a234", 1.3, false, "elmenda", "that is NOT an ostrich"),
    new Question("a236", 1.3, false, "rofl", "Updates are not allowed also"),
    new Question("a238", 1.4, false, "slowmerger", "pray."),
    new Question("a239", 1.4, false, "alice", "It is May 11th, 2024!"),
    new Question("a240", 1.4, false, "alice", "Your opinion is wrong :yay:"),

    new Question("a253", 1.5, false, "madnugget", "does seniority imply superiority?"),
    new Question("a254", 1.4, false, "kuitti", "oh no, im not THAT allergic to progress"),
    new Question("a257", 1.4, true, "elmenda", "fuck you tim cook"),
    new Question("a258", 1.4, false, "elmenda", "edison intensifies"),

    new Question("a262", 1.4, false, "decastar", "my brain is disintegrating"),
    new Question("a269", 1.4, false, "elmenda", "technically that's an egoistical quote"),
    new Question("a270", 1.4, false, "dagame", "fart instead of active silicone"),
    new Question("a279", 1.5, false, "elmenda", "went way too obscure there"),

    new Question("a281", 1.5, false, "elmenda", "lmao   well you should get beheaded"),
    new Question("a291", 1.5, false, "moaz", "Okay that's nightmare fuel"),
    new Question("a293", 1.5, false, "kwhale", "my bus sometimes teleports"),
    new Question("a294", 1.5, false, "elmenda", "conspiracy theory"),
    new Question("a296", 1.5, true, "avexohsf", "🇦🇴 NAZI USSR"),
    new Question("a297", 1.5, false, "meowy", "Who luna"),
    new Question("a298", 1.5, false, "myangelsagiri", ":sob:   she's such a devil wtf   is it because i accidentally called her flat"),
    new Question("a299", 1.5, false, "myangelsagiri", "so you still flat?"),

    new Question("a302", 1.6, false, "meowy", "If girl, then why u flat?"),
    new Question("a305", 1.6, true, "elmenda", "that's it folks (wagen motherfucker)"),
    new Question("a309", 1.6, false, "moaz", "u really did put your soul into shouting that"),
    new Question("a314", 1.6, false, "shgabb", "how do you even get coins I want the 9/11 skin"),

    new Question("a323", 1.6, true, "barduzzi", "holy shit lunasex"),
    new Question("a331", 1.6, false, "barduzzi", "Price je 300€ oyu saod"),
    new Question("a334", 1.6, true, "hany", "can i use a used condom as a cheap variant"),
    new Question("a336", 1.6, false, "endte", "Please delete that!"),
    new Question("a338", 1.6, false, "moaz", "i dont eat ships either"),
    new Question("a339", 1.6, true, "elmenda", "18 hours a day hentai consumer ^"),
    new Question("a340", 1.6, true, "star", "Things so vile even the racists would be scared"),
    new Question("a341", 1.6, false, "brocoli", "Nostalgia 🥺 🇦🇴"),

    // new Question("", 1.6, false, "", ""),



    // shgabb
    new Question("b579", 1.5, false, "elmenda", "tu abuela en tanga yendo en triciclo"),
    new Question("b584", 1.5, false, "varlyne", "For doing 20 millions merges, you need to do 20 Millions merges"),
    new Question("b589", 1.4, true, "slowmerger", "Y you left Cunt"),
    new Question("b591", 1.0, true, "dagame", "I found the Hitler"),
    new Question("b592", 1.1, true, "decastar", "Pussy meowing on my lap rn"),
    new Question("b599", 1.4, false, "schrottii", "tl;dr: she is hot"),
    new Question("b600", 1.5, true, "schrottii", "it's very hard to see your penis"),

    new Question("b601", 1.1, false, "slowmerger", "Go swim in the forest"),
    new Question("b611", 1.0, true, "schrottii", "get fucked democratically"),
    new Question("b612", 1.4, true, "schrottii", "I prefer 16 year olds"),
    new Question("b613", 1.0, false, "dagame", "Okay I'm gonna breakfasting see you yesterday :excellent:"),
    new Question("b615", 1.5, true, "shgabb", "yuu mâdèrfûkér !!! :haram:"),
    new Question("b616", 1.5, true, "elmenda", "the entire point of the general channel is to insert suicidal thoughts into people"),
    new Question("b619", 1.1, false, "barduzzi", "Hello, I'm WhatsApp, are you suing me"),
    new Question("b625", 1.0, false, "fishka", "Thanks for your opinion"),
    new Question("b628", 1.6, true, "slowmerger", "I swear I'll bite your dick off"),
    new Question("b640", 1.4, true, "elmenda", "consider fucking"),
    new Question("b642", 1.4, false, "barduzzi", "I just ate very spicy meat"),
    new Question("b643", 1.6, false, "shgabb", "quiet    this is a library sir"),
    new Question("b652", 1.1, false, "brorlol", "uh i am a head"),
    new Question("b661", 1.4, false, "slowmerger", "Please pay for WhatsApp premium I beg you"),
    new Question("b679", 1.0, true, "schrottii", "imagine just slapping your 99 cm cock on the chess board"),
    new Question("b680", 1.4, false, "pablo", "I am assuming you are a gamer girl, is it correct?"),
    new Question("b699", 1.4, false, "schrottii", "Are you https? Because without you I'm just ://"),

    new Question("b703", 1.6, true, "decastar", "chop your shit logs"),
    new Question("b708", 1.4, false, "shgabb", "discord being a toilet fits your shitposting style"),
    new Question("b709", 1.4, false, "slowmerger", "I'll send you back to #hong-kong"),
    new Question("b710", 1.0, true, "slowmerger", "I love fucking Hitler"),
    new Question("b713", 1.6, false, "shgabb", "your last 3 braincells are playing ping pong and one of them is the ball"),
    new Question("b723", 1.4, false, "decastar", "Sell one of your kidneys for 0.49 usd"),
    new Question("b724", 1.0, false, "slowmerger", "why I am white"),
    new Question("b731", 1.6, true, "schrottii", "Let's all meet in Italy next August and I suck every single one of your cute cocks"),
    new Question("b735", 1.0, false, "shgabb", "😜📜  not reading allat"),
    new Question("b738", 1.1, false, "slowmerger", "Can you stop wasting the white powder"),
    new Question("b749", 1.0, false, "schrottii", "I'm not a furry"),
    new Question("b769", 1.6, false, "shgabb", "i am NOT playing 8-ball with you"),
    new Question("b778", 1.4, true, "shgabb", "FUKING TYPO /WRTATH/"),
    new Question("b779", 1.1, true, "shgabb", "googoo motherfucking gaga"),
    new Question("b782", 1.4, true, "slowmerger", "*claps with my penis*"),
    new Question("b789", 1.1, false, "thekingoftrash", "cryogenically freeze yourself"),
    new Question("b795", 1.6, false, "kwhale", "buy stars with fish"),

    new Question("b804", 1.5, true, "schrottii", "show me ur tits pls"),
    new Question("b807", 1.5, true, "slowmerger", "!kill myself"),
    new Question("b810", 1.5, true, "schrottii", "HA   I KILLED A TRANS MF"),
    new Question("b811", 1.5, true, "helly", "Omg tf2 refrence   i will kill myself"),
    new Question("b818", 1.1, false, "kwhale", "i think the biggest number is 40"),
    new Question("b821", 1.5, true, "helly", "i will shit yourself"),
    new Question("b822", 1.0, false, "schrottii", "thank you for this info, I will now ban you from the game"),
    new Question("b826", 1.1, false, "helly", "OwO    UwU    There is no reason to live"),
    new Question("b837", 1.0, true, "barduzzi", "let's cum on me :D"),
    new Question("b838", 1.0, false, "shgabb", "how do vegans start a beef"),
    new Question("b844", 1.1, true, "shgabb", "⚠ the next person to chat's penis has a 27% chance of getting cut off"),
    new Question("b845", 1.1, true, "shgabb", "⚠ my cock is out"),
    new Question("b852", 1.0, false, "shgabb", "sorry i don't speak 1 blocked message"),
    new Question("b854", 1.1, false, "shgabb", "Allow me to peacefully consume my copium"),
    new Question("b859", 1.4, false, "kwhale", "all the nukes are run by nerds"),
    new Question("b862", 1.0, true, "schrottii", "it's useful for the hentai roleplay server I am in"),
    new Question("b883", 1.0, false, "shgabb", "yea i use dish soap as shampoo"),
    new Question("b889", 1.0, true, "avexohsf", "Man it's all shits and giggles until someone giggles and shits"),
    new Question("b897", 1.5, true, "slowmerger", "Penis my beloved"),
    new Question("b898", 1.0, true, "schrottii", "Roses are red, pussies are wet"),
    new Question("b900", 1.6, false, "slowmerger", "Shut up your skin color differs"),

    new Question("b902", 1.0, false, "barduzzi", "got my pc password wrong 2 times till i realized i was typing elmenda"),
    new Question("b903", 1.0, false, "nemesis", "I'm not Nemesis"),
    new Question("b904", 1.1, true, "shgabb", "the cock is dicking"),
    new Question("b908", 1.4, true, "schrottii", "I have a fork fetish too :)"),
    new Question("b911", 1.0, false, "schrottii", "I enjoy eating people"),
    new Question("b919", 1.0, false, "shgabb", "i'm not affraid of brain eating amoebas    they gonna starve to death"),
    new Question("b930", 1.5, false, "schrottii", "I also use cheat"),
    new Question("b948", 1.0, false, "decastar", "cancer 🥰"),
    new Question("b954", 1.0, false, "varlyne", "When I'll grow up I'll be a pilot I'LL SACRIFICE MY LIFE FOR PAKISTAN"),
    new Question("b955", 1.5, true, "schrottii", "have you ever spermed a whale"),
    new Question("b956", 1.0, false, "schrottii", "communism 🥰"),
    new Question("b961", 1.1, true, "schrottii", "yeaaaa my pussy 😎"),
    new Question("b964", 1.0, false, "kwhale", "im gonna insult everyone"),
    new Question("b966", 1.4, false, "schrottii", "who even cares about the trans"),
    new Question("b967", 1.1, false, "tpot", "you can eat a potato if you try"),
];