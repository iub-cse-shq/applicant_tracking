'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	// app.route('/signup').get(core.signup);
	// app.route('/about').get(core.about);
};
