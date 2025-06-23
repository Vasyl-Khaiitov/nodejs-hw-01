import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    if (data.length === 0) {
      console.log('Not contact remove');
      return;
    }
    const remove = data.pop();
    await writeContacts(data);
    console.log('Success remove last contact:', remove);
  } catch (error) {
    console.log('Error remove last contact:', error.message);
  }
};

removeLastContact();
