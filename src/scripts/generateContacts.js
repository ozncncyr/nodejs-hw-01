import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  const contacts = Array.from({ length: number }, createFakeContact);
  await writeContacts(contacts);
  console.log(`Generated ${number} fake contacts.`);
  return contacts;
};

writeContacts(await generateContacts(5));

export default generateContacts;
