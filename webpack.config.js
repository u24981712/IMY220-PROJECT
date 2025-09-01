const path = require("path");

module.exports = {
    entry: "./FrontEnd/src/index.js",
    output: {
        path: path.resolve(__dirname, "FrontEnd/public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};