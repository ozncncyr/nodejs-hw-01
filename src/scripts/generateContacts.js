import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import readline from 'readline';

export const generateContacts = async (number) => {
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('How many contacts would you like to generate? ', (answer) => {
  const number = parseInt(answer, 10);
  if (isNaN(number) || number <= 0) {
    console.log('Please enter a valid number greater than 0.');
    rl.close();
    return;
  }

  generateContacts(number)
    .then((contacts) => writeContacts(contacts))
    .catch((error) =>
      console.error('Error in contact generation pipeline:', error),
    )
    .finally(() => rl.close());
});
