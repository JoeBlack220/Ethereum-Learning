const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compiled = require('../compile');
const interface = compiled['abi'];
const bytecode = compiled['evm']['bytecode']['object'];
let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of the accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(interface)
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change to the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0]})
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});