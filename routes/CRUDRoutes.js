// CRUDRouter.js
const express = require('express');
const CRUDController = require('../controllers/CRUDController');

const router = express.Router();

// POST route to create a new contact
router.post('/contacts', CRUDController.createContact);

// PUT route to update a contact
router.put('/contacts/:id', CRUDController.updateContact);

// DELETE route to delete a contact
router.delete('/contacts/:id', CRUDController.deleteContact);

module.exports = router;
