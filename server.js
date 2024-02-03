
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')
const express = require('express');
const app = express();
const { initDb } = require('./mongoDb/mongodb.js');
const router = require('./routes/routes.js')

const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Add support for CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
  });

app.use('/', router);
app.use('/', require('./routes/contactsRoute.js'));
app.use('/', require('./routes/CRUDRoutes.js'));


initDb((err) => {
    if (err) {
        console.error('Error initializing MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));