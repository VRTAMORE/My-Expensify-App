const path = require('path');

module.exports = {
    entry: './src/app.js',
    // entry: './src/playground/any.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', //rule to tell babel to run for js files
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,     //rule to tell below two loaders to run for css files.
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};