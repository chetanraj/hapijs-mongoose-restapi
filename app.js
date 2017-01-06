// @flow

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 4000
});

const routes = require('./routes');

server.route(routes);

server.route({
	method: 'GET',
	path: '/',
	handler(request, reply) {
		reply('Hello, world!');
	}
});

server.route({
	method: 'GET',
	path: '/api',
	handler(request, reply) {
		reply('Hello, API!');
	}
});

server.start(err => {
	if (err) {
		throw err;
	}
	console.log(`Server running at: ${server.info.uri}`);
});

exports.server = server;
