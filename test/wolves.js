const Lab = require('lab');

const code = require('code');

const lab = exports.lab = Lab.script();
var server = require('../app.js').server;

lab.test('starter pack', function (done) {
	var options = {
		method: 'GET',
		url: '/api'
	};

	server.inject(options, function (response) {
		code.expect(response.statusCode).to.equal(200);
		code.expect(response.result).to.be.string();

		done();
	});
});
