var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ["./src/style/index.scss",
		'./src/js/startFoundation.js'],
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			//{test: /\.js$/, loader: "babel-loader?presets[]=es2015"},
			{test: /\.jade$/, loader: "jade"},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass")}
		]
	},
	plugins: [
		new ExtractTextPlugin("index.css"),
		new HtmlWebpackPlugin({filename: "index.html", template:"./src/index.jade"})
	]
};
