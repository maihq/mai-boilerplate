
/**
 * router.js
 *
 * Setup routing table
 */

var router = require('koa-router');

module.exports = myRouter;

/**
 * Internal router
 *
 * @param   Object  app  Koa object
 * @return  MW
 */
function myRouter(app) {
	if (!app) {
		return;
	}

	app.use(router(app));

	app.get('/', function *() {
		this.body = 'hello world';
	});
};
