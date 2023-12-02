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

const usernames = ["shgabb", "schrottii", "elmenda", "slowmerger", "phazer", "endte"];

const quotes = [
    new Quote("a11", false, "slowmerger", "my mental psyche is degrading at dangerous speed"),
    new Quote("a14", false, "slowmerger", "I may possibly thank you for that"),
    new Quote("a24", false, "slowmerger", "Why I so suddenly became ignorable"),
    new Quote("a28", true, "elmenda", "no penis?"),
    new Quote("a32", true, "shgabb", "i'm also surprised at how high i got"),
    new Quote("a36", true, "elmenda", "i do not belong to the porn industry"),
    new Quote("a42", false, "endte", "I will send you a direct message!"),
    new Quote("a46", false, "slowmerger", "He promotes pepsi and I like pepsi"),
    new Quote("a77", false, "elmenda", "love"),
    new Quote("a124", false, "phazer", "ur getting so many tires from this joke"),
];