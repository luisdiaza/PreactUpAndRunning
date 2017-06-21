const path = require('path');//this codes makes the app cross platform

module.exports = {
    //input
    entry: './src',//provides an entry point for webpack

    //output
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    //transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            }
        ]
    },

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
}
