var colors = [
    {
        name: "BLACK",
        code: "#000000"
    },
    {
        name: "POLO CHAR",
        code: "#333333"
    },
    {
        name: "DARK BROWN",
        code: "#393931"
    },
    {
        name: "RIDEAU BROWN",
        code: "#3F3A36"
    },
    {
        name: "RAPTURE BURGUNDY",
        code: "#46181A"
    },
    {
        name: "COFFEE BROWN",
        code: "#402722"
    },
    {
        name: "ROCK BROWN",
        code: "#4F342B"
    },
    {
        name: "ADOBE BROWN",
        code: "#3F3A36"
    },
    {
        name: "DINNER PARTY RED",
        code: "#A22A2C"
    },
    {
        name: "RIVIERA BLUE",
        code: "#2C3546"
    },
    {
        name: "SLATE BLUE",
        code: "#5C6D7D"
    },
    {
        name: "GLOW GREY",
        code: "#9D9F9C"
    },
    {
        name: "KENDALL CHARCOAL",
        code: "#5D5C58"
    },
    {
        name: "MINK BEIGE",
        code: "#AD9B83"
    },
    {
        name: "MIKADO IVORY",
        code: "#E9DFBC"
    },
    {
        name: "STRAND IVORY",
        code: "#E3DFD3"
    }
];
for (i in colors) {
    $(".color_collection").append(
        "<div class = 'color_block col-md-3 col-xs-12' style = 'background-color:" + colors[i].code + "'><span>" + colors[i].name + "</span></div>");
}
    