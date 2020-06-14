import Web3 from 'web3';

let web3;

if(typeof window != 'undefined' && typeof window.web3 != undefined) {
    // check if window is defined, it means that we run the code in the browser
    const provider = window.ethereum; 
    // metamask now will ask the user first whether it should be granted
    // to be accessed to another page
    provider.enable();
    web3 = new Web3(provider);
} else {
    // We are not on the browser or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        /* your infura access node */''
    );
    web3 = new Web3(provider);
}

export default web3;
