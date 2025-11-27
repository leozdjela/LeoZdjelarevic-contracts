const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// Use legacy compile
const compiled = solc.compile(source, 1);

console.log("Compiled keys:", Object.keys(compiled.contracts));
console.log("Full contracts object:", compiled.contracts);

module.exports = compiled.contracts;
