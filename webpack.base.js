// Plugins and such
const path = require('path');
module.exports = {
	mode: 'development',
	resolve: {
		modules: [
			path.join(__dirname, './node_modules')
		],
		extensions: [
			'.js',
			'.jsx',
			'.scss',
			'.css'
		]
	},
	// Tell babel to run on every JS file
	module: {
		rules: [
			{
				test: /\.jsx?$/,
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
};
