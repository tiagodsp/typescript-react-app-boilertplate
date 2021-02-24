// Load the plugin in your webpack.config.js file.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modules = ['app'];
const multipleHtmlPlugins = modules.map((name) => new HtmlWebpackPlugin({
    template: `./${name}/public/index.html`, // relative path to the HTML files
    filename: `${name}/index.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
}));

module.exports = {
    mode: 'development',
    entry: {
        app: './app/',
    },
    output: {
        filename: '[name]/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Add HTML loader to serve HTML files.
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules', 'app'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    devServer: {
        contentBase: './dist/app',
        writeToDisk: true,
        compress: true,
        port: 9000,
        overlay: true,
    },
    devtool: 'cheap-module-source-map',
    // Call the Plugin here.
    plugins: [
        new ErrorOverlayPlugin(),
        new CleanWebpackPlugin(),
    ].concat(multipleHtmlPlugins),
};
