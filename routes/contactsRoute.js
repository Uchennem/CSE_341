const express = require('express');
const contactController = require('../controllers/contactsController')

const router = express.Router();


router.get('/contacts', contactController.retrieveContacts)
router.get('/contacts/:id', contactController.retrieveOneContact);

module.exports = router