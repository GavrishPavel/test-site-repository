const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './index.js',
	watch: true,
	module: {
		rules: [
				{
				test: /\.less$/,
				use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
					{
							loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
								lessOptions: {
										strictMath: true,
								},
								sourceMap: true,
						},
					},
				],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
				filename: 'main.css'
		})
	],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: "index.bundle.js",
			publicPath: "dist"
	}
}