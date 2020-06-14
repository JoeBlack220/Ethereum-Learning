const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const abiFactory = compiledFactory['abi'];
const bytecodeFactory = compiledFactory['evm']['bytecode']['object'];


const provider = new HDWalletProvider(
    /* your mnemonic */'',
    /* your infura access node */''
)
const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abiFactory)
        .deploy({ data: '0x' + bytecodeFactory})
        .send({from: accounts[0]});
    // console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();
// This script will end because the bug in truffle hdwallet
// console.log('reach the end');
