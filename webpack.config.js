const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
	const isDev = (argv.mode === 'development');

	return {
		entry: {
			'common':'./src/assets/js/common.js',
			'index':'./src/assets/js/index.js',
			'about':'./src/assets/js/about.js',
		},
		output: {
			path: path.join(__dirname, 'dist/assets/js'),
			filename: '[name].js',
			publicPath: '/dist/assets/js/'
		},
		module: {
			rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										'targets': {
											'node': 'current',
											// 'ie': 11,
											'android': 4
										},
										'useBuiltIns': 'usage',
										'corejs': { 'version': 3, 'proposals': true },
										'debug': true
									}
								]
							]
						}
					}
				}
			]
		},
		optimization: {
			splitChunks: {
				name: 'vendor',
				chunks: 'initial',
				maxInitialRequests: 4,
				minChunks: 3,
				minSize: 3000
			},
			minimizer: isDev ? [] : [
				new TerserPlugin({
					terserOptions: {
						compress: { drop_console: true },
						ie8: true
					}
				})
			]
		},
		resolve: {
			extensions: ['*', '.js', '.json']
    },
		plugins: isDev ? [] : [],
	};
};
