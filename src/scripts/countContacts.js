import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    const count = data.length;
    return count;
  } catch (error) {
    console.error('File reading error:', error);
  }
};

console.log(await countContacts());
