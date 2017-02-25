/*eslint-disable no-unused-vars,no-console */
import colors from "colors"; //
import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";

process.env.NODE_ENV = "production";

console.log("Generating minified bundle...this will take time".blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) {

        console.log(err.bold.red);

    }

    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        return jsonStats.hasWarnings.map(warning => console.log(warning.yellow));
    }

    //console.log(`Webpack stats: ${stats}`);
    console.log("COMPLETED: Production build is ready".green);

    return 0;
});
