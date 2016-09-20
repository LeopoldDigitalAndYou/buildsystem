var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		styles: ["./src/style/redthings.scss", "./src/style/bluethings.scss"]
	},
	output: {
		path: "./dist",
		filename: "index.html"
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
