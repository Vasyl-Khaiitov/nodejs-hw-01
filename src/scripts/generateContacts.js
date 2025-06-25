import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const data = await readContacts();
    const updateContacts = [...data, ...newContacts];

    await writeContacts(updateContacts);
  } catch (error) {
    console.log('Error generate contacts:', error.message);
  }
};

generateContacts(7);
