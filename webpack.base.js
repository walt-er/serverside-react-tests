module.exports = {
    // Tell babel to run on every JS file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        [
                            'env',
                            {
                                targets: {
                                    browsers: [
                                        'last 2 versions'
                                    ]
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    }
}
