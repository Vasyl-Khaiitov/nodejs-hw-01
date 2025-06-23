import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await readContacts();
    if (data.length === 0) {
      console.log('Not contact remove');
      return;
    }
    await writeContacts([]);
    console.log('All contacts removed.');
  } catch (error) {
    console.log('Error remove all contacts:', error.message);
  }
};

removeAllContacts();
