/*jshint esversion: 6 */

const Wolf = require('./models/Wolf');

module.exports = [
  {
      method: 'GET',
      path: '/api/wolves',
      handler: function (request, reply) {
          Wolf.find(function(error, wolves) {
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
      handler: function (request, reply) {

          console.log(request.params.name);
          const wolf = new Wolf({
              name: request.params.name
          });
          wolf.save(function(error, wolf) {
            if (error) {
                console.error(error);
            }

            reply(wolf.id);
          });
      }
  }
];