import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const existedContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existedContacts, newContact];
    await writeContacts(updatedContacts);
    console.log(
      'New contact added:',
      newContact,
      '\n\nTotal contacts:',
      updatedContacts.length,
    );
  } catch (error) {
    console.error('Error adding new contact:', error);
    throw error;
  }
};

addOneContact();
