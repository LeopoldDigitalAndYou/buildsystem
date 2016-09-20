var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ["./src/style/redthings.scss", "./src/style/bluethings.scss",
		"./src/js/hello.js", "./src/js/42.js"],
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.jade$/, loader: "jade"},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass")}
		]
	},
	plugins: [
		new ExtractTextPlugin("bluethings.css"),
		new ExtractTextPlugin("redthings.css"),
		new HtmlWebpackPlugin({filename: "index.html", template:"./src/index.jade"})
	]
};
