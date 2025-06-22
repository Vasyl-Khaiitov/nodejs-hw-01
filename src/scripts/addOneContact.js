import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const newOneContact = [];
    newOneContact.push(createFakeContact());
    const readFileContacts = await fs.readFile(PATH_DB, 'utf-8');
    const fileContactsPars = JSON.parse(readFileContacts);
    const updateContacts = [...fileContactsPars, ...newOneContact];
    const fileContactsStringify = JSON.stringify(updateContacts, null, 2);

    await fs.writeFile(PATH_DB, fileContactsStringify, 'utf-8');
    console.log('Success add one contact:', newOneContact);
  } catch (error) {
    console.log('Error create one contact:', error.message);
  }
};

addOneContact();
