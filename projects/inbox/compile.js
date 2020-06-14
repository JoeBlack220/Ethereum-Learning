const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};
output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol']['Inbox'];
// console.log(output['evm']['bytecode']);
module.exports = output;
// console.log(solc.compile(input));