const path = require('path');
// Load the plugin in your webpack.config.js file.
const HtmlWebpackPlugin = require("html-webpack-plugin");

let modules = ["app", "app2"];
let multipleHtmlPlugins = modules.map((name) => {
    return new HtmlWebpackPlugin({
        template: `./${name}/public/index.html`, // relative path to the HTML files
        filename: `${name}/index.html`, // output HTML files
        chunks: [`${name}`], // respective JS files
    });
});

module.exports = {
    mode: "development",
    entry: {
        app: "./app/",
        app2: "./app2/",
    },
    output: {
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            // Add HTML loader to serve HTML files.
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    devServer: {
        contentBase: './dist',
        writeToDisk: true,
        compress: true,
        port: 9000,
        overlay: true,
    },
    // Call the Plugin here.
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: `./public/index.html`,
        //     filename: `index.html`,
        // }),
    ].concat(multipleHtmlPlugins),
};
