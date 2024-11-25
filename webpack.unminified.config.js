const path = require('path');
const webpack = require('webpack'); //to access built-in plugins -> currently Bannerplugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extract CSS from JS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // CSS Minifier
const TerserPlugin = require("terser-webpack-plugin"); // JS Minifier
const fs = require('fs'); // used for language output per locale

let version = "v1.1.0";
let bannerText = `
Better-Nice-Select ${version} (https://github.com/kevingostomski/better-nice-select)
Copyright 2024 Kevin Gostomski <kevingostomski2001@gmail.com>
Licensed under MIT (https://github.com/kevingostomski/better-nice-select/blob/main/LICENSE)
`;

const fileNames = fs.readdirSync('./src/ts/locale/');
fileNames.splice(fileNames.indexOf("README.md"), 1);

/*
############################
######## UNMINIFIED ########
############################
*/
const commonConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: false,
        minimizer: [
            new TerserPlugin({ extractComments: false }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "css/better-nice-select.css" }),
        new webpack.BannerPlugin({ banner: bannerText })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: { sassOptions: { outputStyle: "expanded" } }
                    }
                ]
            }
        ]
    },
    resolve: { extensions: ['.ts', '.js', '.scss'] }
};

const unminifiedLocales = fileNames
    .filter(filename => filename !== "README.md")
    .map(filename => ({
        ...commonConfig,
        entry: `./src/ts/locale/${filename}`,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `js/locale/${filename.replace(".ts", ".js")}`,
            clean: false,
            globalObject: 'this',
            umdNamedDefine: true,
            library: { name: 'betterNiceSelect', type: 'umd' }
        }
    }));

const unminifiedMain = {
    ...commonConfig,
    entry: './src/ts/better-nice-select.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/better-nice-select.js',
        clean: false,
        globalObject: 'this',
        umdNamedDefine: true,
        library: { name: 'betterNiceSelect', type: 'umd' }
    },
};

const unminifiedAllLocales = {
    ...commonConfig,
    entry: './src/ts/better-nice-select-locale-all.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/better-nice-select-locale-all.js',
        clean: false,
        globalObject: 'this',
        umdNamedDefine: true,
        library: { name: 'betterNiceSelect', type: 'umd' }
    }
};

/*
############################
########## OUTPUT ##########
############################
*/

module.exports = () => [...unminifiedLocales, unminifiedMain, unminifiedAllLocales];
