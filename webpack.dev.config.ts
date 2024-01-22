import path from 'path';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './assets/audio'),
            publicPath: '/',
        },
        historyApiFallback: true,
        port: 9000,
    },
};
