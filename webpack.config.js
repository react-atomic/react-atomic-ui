'use strict';



module.exports = {
	devtool: 'sourcemap',
	entry: "./src/entry.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/assets",
		publicPath: "assets/"
	},
        node: {
          fs: "empty"
        },
	module: {
	    loaders: [
                  { test:/\.html$/, loader: 'html-loader' },
                  { test:/\.json$/, loader: 'json-loader' },
                  { test: /\.js$/,    loader: "jsx-loader?harmony&sourceMap" },
                  { test: /\.jsx$/,   loader: "jsx-loader?harmony&sourceMap" },
                  { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader?limit=8192' }
	    ]
	},
	plugins: [
	]
};
