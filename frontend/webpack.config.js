const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const autoprefixer = require("autoprefixer");

module.exports = env => {
    const isProduction = env === "prod";
    return {
        mode: "development",
        devtool: isProduction ? "" : "source-map",
        entry: {
            bundle: path.join(__dirname, "./src/js/index.js"),
            main: path.join(__dirname, "./src/scss/main.scss"),
            editor: path.join(__dirname, "./src/scss/editor.scss"),
        },
        output: {
            path: path.join(__dirname, "./dist"),
            filename: "js/[name].js",
            publicPath: "/",
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/env", "@babel/react"],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                            ],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: isProduction
                                ? MiniCssExtractPlugin.loader
                                : "style-loader",
                        },
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: [autoprefixer()],
                            },
                        },
                        {
                            loader: "sass-loader",
                        },
                    ],
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "images/[name].[ext]",
                            },
                        },
                        {
                            loader: "image-webpack-loader",
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|ttf|otf)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "loaded-fonts/[name].[ext]",
                            },
                        },
                    ],
                },
            ],
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 3000,
            historyApiFallback: true,
            open: false,
            hot: true,
            host: "0.0.0.0",
            disableHostCheck: true,
            // https: false,
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
                chunkFilename: "css/[id].css",
            }),
            new CopyWebpackPlugin([
                {
                    from: "./src/fonts/",
                    to: "fonts",
                },
            ]),
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                options: {},
                plugins: [
                    imageminMozjpeg({
                        quality: 80,
                        progressive: true,
                    }),
                ],
            }),
            // new BrowserSyncPlugin({
            //     host: "localhost",
            //     port: 3000,
            //     server: { baseDir: ["dist"] },
            //     watch: true,
            //     single: true,
            // }),
        ],
    };
};
