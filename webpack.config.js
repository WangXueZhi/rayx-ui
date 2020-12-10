const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('./package.json')
const webpack = require('webpack')

const nodeEnv = process.env.NODE_ENV
const buildTarget = process.env.BUILD_TARGET

// 输出配置
const outputConfig = function () {
    if (buildTarget === 'lib') {
        return {
            path: path.resolve(__dirname, 'lib'),
            filename: function (file) {
                if (file.chunk.name === 'index') {
                    return 'index.js'
                }
                return '[name]/index.js'
            },
            libraryTarget: 'umd',
            libraryExport: 'default',
            umdNamedDefine: true,
            chunkFilename: '[id].js'
        }
    } else {
        return {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js'
        }
    }
}

// 入口配置
const entryConfig = function () {
    if (buildTarget === 'lib') {
        const webpackComponentsEntrys = require('./webpack.components.entrys.js')
        return webpackComponentsEntrys
    } else {
        return {
            index: path.resolve(__dirname, './src/main.js'),
        }
    }
}

// 插件配置
const pluginsConfig = function () {
    const plugins = [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 可以忽略
            filename: '[name]/style.css'
        })
    ]
    if (buildTarget === 'example') {
        plugins.push(new HtmlWebpackPlugin({
            title: '组件库',
            templateParameters: function () {
                /* omitted long function */
            },
            chunks: [
                'index'
            ],
            template: 'public/index.html',
            filename: 'index.html'
        }))

        plugins.push(new webpack.DefinePlugin({
            PKG_VERSION: JSON.stringify(pkg.version)
        }))
    }
    return plugins
}

// css匹配规则配置
const cssLoaderRules = function () {
    return [{
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
        ]
    }, {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }]
}

console.log(path.resolve('./'))

module.exports = {
    mode: nodeEnv,
    entry: entryConfig(),
    output: outputConfig(),
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    query: {
                        limit: 10000,
                        name: "assets/images/[name].[ext]",
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "assets/media/[name].[ext]",
                    publicPath: '../'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    query: {
                        limit: 10000,
                        name: "assets/fonts/[name].[ext]",
                        publicPath: '../'
                    }
                }
            }, {
                test: /.md$/,
                use: 'text-loader',
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                use: [{
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: ['\\.vue$']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }, ...cssLoaderRules()
        ]
    },
    devtool: "source-map",
    resolve: {
        alias: {
            // 'vue': 'vue/dist/vue.js',
            'rayx-ui': path.resolve('./'),
            '@': path.resolve('src'),
            'demos': path.resolve('demos')
        },
        extensions: ['.ts', '.tsx', '.css', '.js', '.vue']
    },
    plugins: pluginsConfig()
};