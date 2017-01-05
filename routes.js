'use strict';

const Wolf = require('./models/wolves');

module.exports = [
	{
		method: 'GET',
		path: '/api/wolves',
		handler(request, reply) {
			Wolf.find({}, '', function (error, wolves) {
				if (error) {
					console.error(error);
				}

				reply(wolves);
			});
		}
	},
	{
		method: ['PUT', 'POST'],
		path: '/api/wolves/{name}',
		handler(request, reply) {
			const wolf = new Wolf({
				name: request.params.name
			});
			wolf.save((error, wolf) => {
				if (error) {
					console.error(error);
				}

				reply(wolf.id);
			});
		}
	}
];
