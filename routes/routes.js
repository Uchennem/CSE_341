const express = require('express');
const router = express.Router();
 
const routeController = require('../controllers/index');

router.get("/", routeController.jackRoute);
router.get("/spa", routeController.sparrowRoute);

module.exports = router;
