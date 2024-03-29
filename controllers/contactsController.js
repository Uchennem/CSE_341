const { getDb } = require('../mongoDb/mongodb');
const { ObjectId } = require('mongodb');


// GET all contacts in Db
async function retrieveContacts(req, res) {
    try {
        const db = getDb();
        if (!db) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const contactsCollection = db.collection('contacts');
        const contacts = await contactsCollection.find({}).toArray();

        res.json(contacts);

        console.log("Function working");
        console.log(JSON.stringify(contacts));
    } catch (error) {
        console.error('Error retrieving contacts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// GET a single contact by ID
async function retrieveOneContact(req, res) {
    try {
        const db = getDb();
        if (!db) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const contactsCollection = db.collection('contacts');
        const contactId = req.params.id;

        // Convert the contactId to ObjectId
        const objectIdContactId = new ObjectId(contactId);

        // Find a single document by ID
        const contact = await contactsCollection.findOne({ _id: objectIdContactId });

        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }

        res.json(contact);
    } catch (error) {
        console.error('Error retrieving contact by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    retrieveContacts, retrieveOneContact
};