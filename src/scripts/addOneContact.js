import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const dataContact = await readContacts();
    dataContact.push(newContact);
    await writeContacts(dataContact);
  } catch (error) {
    console.log('Error create one contact:', error.message);
  }
};

addOneContact();
