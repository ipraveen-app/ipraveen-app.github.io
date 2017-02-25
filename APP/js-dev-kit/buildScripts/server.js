import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev.js";

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", (req, res) => {
    res.json([
        { "id": 1, "name": "praveen" },
        { "id": 2, "name": "annu" }
    ]);
});

app.listen(port, (err) => {
    console.log("listining....")
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:3000/");
    }
});
