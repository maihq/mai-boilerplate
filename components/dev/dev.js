
/**
 * dev.js
 *
 * Local development environment setup
 */

var compose = require('koa-compose');
var livereload = require('koa-livereload');
var asset = require('koa-static');

module.exports = factory;

/**
 * Export a factory function instead of middleware
 *
 * @param   String  env  Environment name
 * @return  MW
 */
function factory(env) {
	var tools = [];

	if (env === 'dev') {
		tools.push(livereload({
			port: 30001
		}));
	}

	if (env === 'dev' || env === 'local') {
		tools.push(asset('public'));
	}

	return compose(tools);
};
