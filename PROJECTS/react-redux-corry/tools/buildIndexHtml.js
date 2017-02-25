/*eslint-disable no-unused-vars,no-console */
import cheerio from "cheerio";
import colors from "colors"; //
import fs from "fs";

console.log("IN build index");
fs.readFile("src/index.html", "utf8", (err, markup) => {
    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    $("head").prepend('<link rel="stylesheet" href="style.css">');

    fs.writeFile("dist/index.html", $.html(), "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("index.html written to /dist".green);
    });
});
