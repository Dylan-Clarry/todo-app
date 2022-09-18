"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./index.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index_bundle.js",
        publicPath: "/",
    },
    target: "web",
    devServer: {
        port: "5000",
        static: {
            directory: path.join(__dirname, "public"),
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: { loader: "ts-loader" },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
//# sourceMappingURL=webpack.config.js.map