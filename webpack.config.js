var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/index.jade",
	output: {
		path: "./src",
		filename: "index.html"
	},
	module: {
		loaders: [
			{test: /\.jade$/, loader: "jade"},
			{test: /\.scss$/, loader: "style!css!sass"}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({filename: "index.html", template:"./src/index.jade"})
	]
};
