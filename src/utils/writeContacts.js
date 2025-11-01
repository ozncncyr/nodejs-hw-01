import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    let fileContent = '';
    try {
      fileContent = await fs.readFile(PATH_DB, 'utf8');
    } catch (readErr) {
      if (readErr.code !== 'ENOENT') throw readErr;
    }

    if (!fileContent.trim()) {
      await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
    } else {
      await fs.appendFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
    }
    console.log('Contacts written successfully!');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
