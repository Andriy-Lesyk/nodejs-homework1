const contacts = require("./Contacts/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const cont = await contacts.listContacts();
      console.log(cont);

    case "get":
      contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      contact = await contacts.removeContact(id);
      console.log(contact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

//invokeAction({action: 'list'});
let id;
//invokeAction({action: 'get', id:"6"});
invokeAction({action: 'remove', id:"62a651585cf6ba061cfa0ca0"})
//invokeAction({action: "add", name: "Lesyk Andriy", email: "nec@gmail.com", phone: "(063) 398-7993" });
