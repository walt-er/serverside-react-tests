const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we are building for Node.js, and don't bundle node_modules
    target: 'node',
    externals: [nodeExternals()],

    // Tell webpack root file of server application
    entry: './app/index.js',

    // Tell webpack where to output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);
