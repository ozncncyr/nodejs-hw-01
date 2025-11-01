import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
    throw error;
  }
};

const contacts = await getAllContacts();
if (contacts.length === 0) {
  console.log('No contacts found.');
} else {
  console.log(`Listing ${contacts.length} Contacts:`, contacts);
}
