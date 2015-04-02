
var koa = require('koa');
var logger = require('koa-logger');

var configFactory = require('./components/config/config');
var config = configFactory();

var db = require('./components/db/db');
var dev = require('./components/dev/dev');
var router = require('./components/router/router');

var app = koa();

app.use(logger());
app.use(dev(app.env));
app.use(configFactory(true));
app.use(db());

router(app);
app.listen(config.server.port);
