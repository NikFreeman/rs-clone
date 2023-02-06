import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const CopyPlugin = require('copy-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import { Configuration } from 'webpack';
import EslintPlugin from 'eslint-webpack-plugin';

const baseConfig: Configuration = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(jpg|svg|gif|ico)$/,
                type: 'asset/resource',
                // generator: {
                //     filename: 'assets/icons/[name][ext]',
                // },
            },
            {
                test: /\.(mp3)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/audio/[name][ext]',
                },
            },
            {
                test: /\.(png)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/i,
                use: ['ts-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]',
        clean: true,
        // publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            //favicon: path.resolve(__dirname, './src/assets/icons/favicon.ico'),
            filename: 'index.html',
        }),
        //new CleanWebpackPlugin(),
        new EslintPlugin({ extensions: ['ts'] }),
        // new CopyPlugin({
        //      patterns: [{ from: './src/audio', to: './audio' }],
        //  }),
    ],
};

const config = () => {
    const mode = process.env.mode;
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};

export default config;
