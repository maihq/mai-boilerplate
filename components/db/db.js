
/**
 * db.js
 *
 * Establish database connections
 */

var mongodb = require('./mongodb');
var redis = require('./redis');

module.exports = factory;

/**
 * Export a factory function instead of middleware
 *
 * @return  MW
 */
function factory() {
	return middleware;
};

/**
 * Koa middleware
 *
 * @param   Function  next  Flow control
 * @return  Void
 */
function *middleware(next) {
	// allow downstream to handle db connection error gracefully
	try {
		this.db = yield mongodb(this.config.mongodb);
	} catch(err) {
		this.db = false;
		this.app.emit('error', err, this);
	}

	try {
		this.redis = yield redis(this.config.redis);
	} catch(err) {
		this.redis = false;
		this.app.emit('error', err, this);
	}

	yield next;
};
