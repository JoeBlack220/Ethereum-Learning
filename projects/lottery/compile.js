const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'lottery.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'lottery.sol' : {
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
compile = JSON.parse(solc.compile(JSON.stringify(input))).contracts
// console.log(compile)
output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['lottery.sol']['Lottery'];
// console.log(output['evm']['bytecode']);
module.exports = output;
// console.log(solc.compile(input));