// CRUDController.js
const { ObjectId } = require('mongodb');
const { getDb } = require('../mongoDb/mongodb.js');

// Create a new contact
async function createContact(req, res) {
    try {
        // Extract required fields from the request body
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
          };

        
        const db = getDb();
        if (!db) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const contactsCollection = db.collection('contacts');

        

        // Insert the new contact into the database
        const result = await contactsCollection.insertOne(contact);

        // Extract the generated contact ID from the result
        const contactId = result.insertedId;

        // Return the new contact ID in the response
        res.status(201).json({ contactId });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Update a contact
async function updateContact(req, res) {
    try {
        const db = getDb();
        if (!db) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const contactsCollection = db.collection('contacts');

        // Extract contact ID from the request parameters
        const contactId = req.params.id;

        // Extract updated fields from the request body
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        // Check if the contact ID is valid
        if (!ObjectId.isValid(contactId)) {
            return res.status(400).json({ error: 'Invalid contact ID' });
        }


        // Construct update query
        const updateFields = {};
        if (firstName) updateFields.firstName = firstName;
        if (lastName) updateFields.lastName = lastName;
        if (email) updateFields.email = email;
        if (favoriteColor) updateFields.favoriteColor = favoriteColor;
        if (birthday) updateFields.birthday = birthday;

        // Update the contact in the database
        await contactsCollection.updateOne({ _id: new ObjectId(contactId) }, { $set: updateFields });

        // Return success status
        res.sendStatus(204);
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Delete a contact
async function deleteContact(req, res) {
    try {
        const db = getDb();
        if (!db) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const contactsCollection = db.collection('contacts');

        // Extract contact ID from the request parameters
        const contactId = req.params.id;

        // Check if the contact ID is valid
        if (!ObjectId.isValid(contactId)) {
            return res.status(400).json({ error: 'Invalid contact ID' });
        }

        // Delete the contact from the database
        await contactsCollection.deleteOne({ _id: new ObjectId(contactId) });

        // Return success status
        res.sendStatus(200);
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { createContact, updateContact, deleteContact };
