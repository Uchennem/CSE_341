const express = require('express');
const app = express();
const { initDb } = require('./mongoDb/mongodb.js');

const port = process.env.PORT || 3000;

app.use('/', require('./routes/routes.js'));
app.use('/', require('./routes/contactsRoute.js'));

initDb((err) => {
    if (err) {
        console.error('Error initializing MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
});
