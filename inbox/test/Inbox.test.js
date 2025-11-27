const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiled = require('../compile');
const inboxContract = compiled[':Inbox'];

const abi = JSON.parse(inboxContract.interface);
const bytecode = inboxContract.bytecode;

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log("============= CONTRACT INFO =============");
    console.log("ABI:\n", JSON.stringify(abi, null, 2));
    console.log("\nBYTECODE:\n", bytecode);
    console.log("\nDEPLOYED ADDRESS:\n", inbox.options.address);
    console.log("=========================================");
    
    // Optional assertion:
    assert.ok(inbox.options.address);
  });
});
