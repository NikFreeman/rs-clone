import path from "path";

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        port: 9000,
    },
};
