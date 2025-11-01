import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
    console.log(
      'Last contact removed successfully.\nTotal contacts left:',
      contacts.length,
    );
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
