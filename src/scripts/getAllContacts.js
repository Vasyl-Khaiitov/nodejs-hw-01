import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data;
  } catch (error) {
    console.error('File reading error:', error);
    return [];
  }
};

console.log(await getAllContacts());
