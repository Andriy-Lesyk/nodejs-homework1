const fs = require("fs/promises");
const path = require("path");
const ObjectID = require("bson-objectid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === id);
    if (!result) {
      null;
    }
    return result;
  } catch (err) {
    console.log(err);
  }
};

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removeContact;
  } catch (err) {
    console.log(err);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { name, email, phone, id: ObjectID() };
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
