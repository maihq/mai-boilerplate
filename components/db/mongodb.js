
/**
 * mongodb.js
 *
 * A simple wrapper for mongodb driver
 */

var mongo = require('yieldb').connect;

module.exports = database;

/**
 * Return an instance of yieldb
 *
 * @param   Object   opts  Custom options for driver
 * @return  MongoDB
 */
function *database(opts) {

	if (!opts) {
		throw new Error('missing options');
	}

	if (!opts.hasOwnProperty('database')) {
		throw new Error('database must be specified');
	}

	if (!opts.hasOwnProperty('w')) {
		throw new Error('writeConcern must be specified');
	}

	// build server string
	var url = 'mongodb://';
	
	if (opts.user && opts.pass) {
		url += opts.user + ':' + opts.pass + '@';
	}

	if (opts.server) {
		url += opts.server;
	}

	if (opts.port) {
		url += ':' + opts.port;
	}

	// explicit set default database and write concern
	url += '/' + opts.database + '?w=' + opts.w;

	if (opts.replSet) {
		url += '&replicaSet=' + opts.replSet;
	}

	if (opts.userdb) {
		url += '&authSource=' + opts.userdb;
	}

	// make sure we have active connection to db
	return yield mongo(url);

};
