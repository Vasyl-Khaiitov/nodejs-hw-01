import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data.length;
  } catch (error) {
    console.error('File reading error:', error);
    return 0;
  }
};

console.log(await getAllContacts());
