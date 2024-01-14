const express = require('express')
const router = new express.Router() 
const routeController = require('../controllers')

router.get("/", routeController.jackRoute);
router.get("/spa", routeController.sparrowRoute);

module.exports = router