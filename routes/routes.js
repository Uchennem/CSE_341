const express = require('express');
const router = express.Router();
const contactRoute = require('./contactsRoute'); 
const routeController = require('../controllers');

router.get("/", routeController.jackRoute);
router.get("/spa", routeController.sparrowRoute);

module.exports = router;
