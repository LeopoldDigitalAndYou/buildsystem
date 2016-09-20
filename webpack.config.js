var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/index.jade",
	output: {
		path: "./src",
		filename: "index.html"
	},
	module: {
		loaders: [
			{test: /\.jade$/, loader: "pug-html-loader"},
			{test: /\.scss$/, loader: "style!css!sass"}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	]
};
