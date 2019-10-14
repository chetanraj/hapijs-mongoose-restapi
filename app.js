'use strict';

const Hapi = require('@hapi/hapi');


const init = async () => {
	
	const port = process.env.PORT || 4000;
    const server = Hapi.server({
        port,
        host: 'localhost'
	});
	
	const db = require('./database').db;
	const routes = require('./routes');

	server.route(routes);

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {

            return 'Hello World!';
        }
	});

	server.route({
		method: 'GET',
		path: '/api',
		handler: (request, h) => {

            return 'Hello API!';
        }
	});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
