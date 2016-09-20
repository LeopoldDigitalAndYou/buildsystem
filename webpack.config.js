var webpack = require("webpack");

module.exports = {
	entry: "./src/index.jade",
	output: {
		path: "./src",
		filename: "[name].html"
	},
	module: {
		loaders: [
			{test: ".jade", loader: "jade-loader"}
		]
	}
};
