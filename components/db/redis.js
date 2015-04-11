
/**
 * redis.js
 *
 * A simple wrapper for redis driver
 */

var redis = require('then-redis');
var client;

module.exports = database;

/**
 * Return an instance of then-redis
 *
 * @param   Object  opts  Custom options for driver
 * @return  Redis
 */
function *database(opts) {
	if (client) {
		return client;
	}

	if (!opts) {
		throw new Error('missing options');
	}

	if (!opts.hasOwnProperty('database')) {
		throw new Error('database must be specified');
	}

	client = redis.createClient(opts);

	client.on('error', function(err) {
		// prevent failed redis connection from crashing server
	});

	// make sure redis connection is active
	yield client.select(opts.database);

	return client;
};
