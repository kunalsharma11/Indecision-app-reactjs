//entry - > output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,         //files should meet this criteria
            exclude: /node_modules/  //we dont want to make changes in this
        },
    {
        
        test: /\.s?css$/,
        use: ['style-loader','css-loader', 'sass-loader']
    }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};


//loader - for installing babel -