import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const existedContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    return [...existedContacts, ...newContacts];
  } catch (error) {
    console.error('Error generating contacts:', error);
    throw error;
  }
};

generateContacts(5)
  .then((contacts) => writeContacts(contacts))
  .catch((error) =>
    console.error('Error in contact generation pipeline:', error),
  );
