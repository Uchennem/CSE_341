const express = require('express')
const app = express();
const port = process.env.port || 3000;

app.use('/', require('./routes/routes.js'))

app.listen(port, () => {
    console.log(`web server started on port ${port} `)
})