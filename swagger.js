const swaggerAutogen = require('swagger-autogen')();
const host = 'https://cse341-web-services-30a6.onrender.com/' || 'localhost:3000'

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: host
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);