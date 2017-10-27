const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const config = {
    // Tell webpack root file of server application
    entry: './app/client/client.js',

    // Tell webpack where to put output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);
