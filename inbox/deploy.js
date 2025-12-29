const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'ask insane dust radar gallery ordinary globe festival fuel tag flag diet',
    'https://sepolia.infura.io/v3/6d75e5fcb6454f1199d0a67721d8ef68'
    
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({gas: '1000000', from: accounts[0]});

        console.log('Contract deployed to', result.options.address);
        provider.engine.stop();
};
deploy();   