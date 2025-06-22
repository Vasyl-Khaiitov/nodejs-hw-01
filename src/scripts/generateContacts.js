import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const dataParse = JSON.parse(readContacts);
    const updateContacts = [...dataParse, ...newContacts];
    const dateStringify = JSON.stringify(updateContacts, null, 2);

    await fs.writeFile(PATH_DB, dateStringify, 'utf-8');
    console.log('Generate contacts success:', number);
  } catch (error) {
    console.log('Error generate contacts:', error.message);
  }
};

generateContacts(7);
