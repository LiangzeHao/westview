var colors = [
    {
        name: "BLACK",
        code: "#000000"
    },
    {
        name: "BEIGE",
        code: "#F5F5DC"
    },
    {
        name: "CAP BLACK",
        code: "#000000"
    },
    {
        name: "SANDEX BLACK",
        code: "#000000"
    },
    {
        name: "COFFEE BROWN",
        code: "#6F4E37"
    },
    {
        name: "DARK BROWN",
        code: "#654321"
    },
    {
        name: "GENTECK BROWN (BROWN NOVATECH)",
        code: "#654321"
    },
    {
        name: "ROCK BROWN",
        code: "#5A4D41"
    },
    {
        name: "RIDEAU BROWN",
        code: "#A52A2A"
    },
    {
        name: "RAPTURE BURGUNDY",
        code: "#800020"
    },
    {
        name: "BLACK CHARCOAL",
        code: "#36454F"
    },
    {
        name: "POLO CHARCOAL",
        code: "#646464"
    },
    {
        name: "KENDALL CHARCOAL (GREY)",
        code: "#686763"
    },
    {
        name: "GREY SMOKE",
        code: "#708c98"
    },
    {
        name: "HENTEK SLATE",
        code: "#708c98"
    },
    {
        name: "SILVER (ALUMINIUM)",
        code: "#C0C0C0"
    },
    {
        name: "BRONZE",
        code: "#CD7F32"
    },
    {
        name: "GOLD",
        code: "#FFD700"
    },
    {
        name: "WHITE",
        code: "#ffffff"
    },
    {
        name: "WHITE (SHERWIN WILLIAMS)",
        code: "#cdd2ca"
    }


];
for (i in colors) {
    $(".color_collection").append(
        "<div class = 'color_block' style = 'background-color:" + colors[i].code + "'><span>" + colors[i].name + "</span></div>");
}
    