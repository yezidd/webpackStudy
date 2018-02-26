const path = require("path");



console.log(path.resolve(__dirname , 'dist'),"_--当前路径");

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname , 'dist')
	},
	module: {
		rules:[
			{
				test:/\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	}
};