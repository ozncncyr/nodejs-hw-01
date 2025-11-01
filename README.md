# Node.js Contacts Manager

A simple Node.js CLI application to manage a list of contacts. You can generate, add, list, count, and remove contacts stored in a JSON file. Contacts are generated with fake data using the `@faker-js/faker` library.

## Features
- Generate multiple fake contacts interactively
- Add a single fake contact
- List all contacts
- Count total contacts
- Remove the last contact
- Remove all contacts

## Requirements
- Node.js v18+
- npm

## Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
All commands are run from the project root directory.

### Generate Contacts (interactive)
Generates the specified number of fake contacts and saves them to the database.
```bash
npm run generate
```
You will be prompted to enter the number of contacts to generate.

### Add One Contact
Adds a single fake contact to the database.
```bash
npm run add-one
```

### List All Contacts
Displays all contacts in the database.
```bash
npm run get-all
```

### Count Contacts
Shows the total number of contacts in the database.
```bash
npm run count
```

### Remove Last Contact
Removes the last contact from the database.
```bash
npm run remove-last
```

### Remove All Contacts
Removes all contacts from the database.
```bash
npm run remove-all
```

## Project Structure
```
nodejs-hw-01/
├── package.json
├── src/
│   ├── index.js
│   ├── constants/
│   │   └── contacts.js
│   ├── db/
│   │   └── db.json
│   ├── scripts/
│   │   ├── addOneContact.js
│   │   ├── countContacts.js
│   │   ├── generateContacts.js
│   │   ├── getAllContacts.js
│   │   ├── removeAllContacts.js
│   │   └── removeLastContact.js
│   └── utils/
│       ├── createFakeContact.js
│       ├── readContacts.js
│       └── writeContacts.js
└── ...
```

## Dependencies
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) — for generating fake contact data
- [eslint](https://eslint.org/) — for code linting

## License
ISC
