const express = require('express');
const app = express();
const { initDb } = require('./mongoDb/mongodb.js');

const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/', require('./routes/routes.js'));
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
