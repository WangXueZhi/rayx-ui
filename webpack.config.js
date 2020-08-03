const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV
const buildTarget = process.env.BUILD_TARGET

// 输出配置
const outputConfig = function () {
    if (buildTarget === 'lib') {
        return {
            path: path.resolve(__dirname, 'lib'),
            filename: '[name]/index.js',
            libraryTarget: 'umd',
            libraryExport: 'default',
            umdNamedDefine: true
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
        return {
            button: './packages/button/index.js',
            toast: './packages/toast/index.js',
            table: './packages/table/index.js',
            'scroll-bar': './packages/scroll-bar/index.js'
        }
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
    }
    return plugins
}

// css匹配规则配置
const cssLoaderRules = function(){
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

console.log(path.resolve('lib'))

module.exports = {
    mode: nodeEnv,
    entry: entryConfig(),
    output: outputConfig(),
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }, ...cssLoaderRules()]
    },
    devtool: "source-map",
    resolve: {
        alias: {
            // 'vue': 'vue/dist/vue.js',
            'mvui': path.resolve('lib'),
            '@': path.resolve('src')
        },
        extensions: ['.css', '.js', '.vue']
    },
    plugins: pluginsConfig()
};