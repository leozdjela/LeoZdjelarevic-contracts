const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// Use legacy compile
const compiled = solc.compile(source, 1);

// Debug logs to confirm
console.log("Compiled keys:", Object.keys(compiled.contracts));

const contract = compiled.contracts[':Inbox'];

module.exports = {
    interface: contract.interface,
    bytecode: contract.bytecode
};
