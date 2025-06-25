import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const dataParsed = JSON.parse(data);
    return dataParsed;
  } catch (error) {
    console.error('Error reading File:', error.message);
    return [];
  }
};
