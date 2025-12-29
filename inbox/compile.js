const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': { content: source }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode']
      }
    }
  }
};

const compiled = solc.compile(JSON.stringify(input));
const compiledOutput = JSON.parse(compiled); // only parse the JSON string output


const contract = compiled.contracts['Inbox.sol']['Inbox'];

module.exports = {
  abi: contract.abi,
  bytecode: contract.evm.bytecode.object
};
