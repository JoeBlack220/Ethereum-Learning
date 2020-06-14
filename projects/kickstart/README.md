# Kickstart
- An application that allow investors to supervise where their money goes.

## Prerequisite
- node.js
- packages:
    - "fs-extra": "^9.0.1",
    - "ganache-cli": "^6.9.1",
    - "mocha": "^8.0.1",
    - "next": "^9.4.4",
    - "next-routes": "^1.4.2",
    - "react": "^16.13.1",
    - "react-dom": "^16.13.1",
    - "semantic-ui-css": "^2.4.1",
    - "semantic-ui-react": "^0.88.2",
    - "solc": "^0.6.9",
    - "truffle-hdwallet-provider": "^1.0.17",
    - "web3": "^1.2.9"

## Usage
- I assume that every one has installed node.js
### Init Project:
- `npm init`
### Install Packages:
- `npm install --save ganache-cli mocha solc truffle-hdwallet-provider web3 fs-extra next next-routes react react-dom semantic-ui-css semantic-ui-react`
### Enable Test and Development
- Change scripts -> test field in package.json to "mocha"
- Add value pairs in package.json: "dev": "node server.js"
### Provide Your Information
- Go to deploy.js to provide your mnemonic and infura access node link to enable your contract to be deployed on Rinkeby testnet.
- infura access node is just a helper node for you to get access to rinkeby testnet, you can find information here: https://infura.io/
### Compile and Deploy
- `node compile.js`
- `node deploy.js`
- The deploy.js script may not quit itself due to some bugs reside in the current version of truffle wallet. If you see the address returned in console.log you can safely terminate the script.
### Set factory.js
- Use the address returned by deploy.js in factory.js to set up the factory.
### Test
- `npm run test`
### Run
- `npm run dev`
- You can see the web page in address`localhost:3000`