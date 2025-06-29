import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    const dataWrite = await fs.writeFile(PATH_DB, data, 'utf-8');
    return dataWrite;
  } catch (error) {
    console.error('Error writing File:', error);
  }
};
