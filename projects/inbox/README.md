# Inbox
- An application that can set and return a specific message.

## Prerequisite
- node.js
- packages:
    - "ganache-cli": "^6.9.1",
    - "mocha": "^7.2.0",
    - "solc": "^0.6.6",
    - "truffle-hdwallet-provider": "^1.0.17",
    - "web3": "^1.2.8"

## Usage
- I assume that every one has installed node.js
### Init Project:
- `npm init`
### Install Packages:
- `npm install --save ganache-cli mocha solc truffle-hdwallet-provider web3`
### Enable Test
- Change scripts -> test field in package.json to "mocha"
### Provide Your Information
- Go to deploy.js to provide your mnemonic and infura access node link to enable your contract to be deployed on Rinkeby testnet.
### Compile and Deploy
- `node compile.js`
- `node deploy.js`
### Test
- `npm run test`