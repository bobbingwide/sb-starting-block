const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'sb-starting-block': './src/starting-block',
		'second-block': './src/second-block',
		'nivo': './src/nivo'
	},
};
