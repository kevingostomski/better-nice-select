const path = require('path');
const webpack = require('webpack'); //to access built-in plugins -> currently Bannerplugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extract CSS from JS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // CSS Minifier
const TerserPlugin = require("terser-webpack-plugin"); // JS Minifier
const fs = require('fs'); // used for language output per locale

let version = "v1.0.0";
let bannerText = `
Better-Nice-Select ${version} (https://github.com/kevingostomski/better-nice-select)
Copyright 2024 Kevin Gostomski <kevingostomski2001@gmail.com>
Licensed under MIT (https://github.com/kevingostomski/better-nice-select/blob/main/LICENSE)
`;

const fileNames = fs.readdirSync('./src/ts/locale/');
fileNames.splice(fileNames.indexOf("README.md"), 1);

/*
############################
######### MINIFIED #########
############################
*/

const minifiedLocales = [];
fileNames.forEach(function (filename) {
    minifiedLocales.push({
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                extractComments: false
            }), new CssMinimizerPlugin()]
        },
        entry: `./src/ts/locale/${filename}`,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `js/locale/${filename.replace(".ts", ".min.js")}`,
            clean: false,
            globalObject: 'this',
            umdNamedDefine: true,
            library: {
                name: 'betterNiceSelect',
                type: 'umd'
            }
        },
        plugins: [new MiniCssExtractPlugin({
            filename: "css/better-nice-select.min.css"
        }),
        new webpack.BannerPlugin({
            banner: bannerText
        })
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: "compressed"
                            }
                        }
                    }]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        }
    });
});

const minifiedMain = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        }), new CssMinimizerPlugin()]
    },
    entry: './src/ts/better-nice-select.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/better-nice-select.min.js',
        clean: false,
        globalObject: 'this',
        umdNamedDefine: true,
        library: {
            name: 'betterNiceSelect',
            type: 'umd'
        }
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/better-nice-select.min.css"
    }),
    new webpack.BannerPlugin({
        banner: bannerText
    })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: "compressed"
                        }
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};

const minifiedAllLocales = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        }), new CssMinimizerPlugin()]
    },
    entry: './src/ts/better-nice-select-locale-all.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/better-nice-select-locale-all.min.js',
        clean: false,
        globalObject: 'this',
        umdNamedDefine: true,
        library: {
            name: 'betterNiceSelect',
            type: 'umd'
        }
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/better-nice-select.min.css"
    }),
    new webpack.BannerPlugin({
        banner: bannerText
    })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: "compressed"
                        }
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};

/*
############################
########## OUTPUT ##########
############################
*/

let minified = minifiedLocales.slice(0);
minified.push(minifiedMain, minifiedAllLocales);

module.exports = () => {
    return minified;
};

module.exports.parallelism = 1;