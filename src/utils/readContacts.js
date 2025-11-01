import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const data = (await fs.readFile(PATH_DB, 'utf-8')).trim();
    if (!data) {
      console.log('No contacts found!');
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};
