/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 //require("@nomicfoundation/hardhat-toolbox");
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 require('@nomiclabs/hardhat-ethers');
  
 const {API_URL, API_URL_KEY, PRIVATE_KEY} = process.env; //environment variables are being loaded here.
  
 module.exports = {
   solidity: "0.8.17",
  //  defaultNetwork: 'goerli',
  //  networks: {
  //    hardhat: {},
  //    rinkeby: {
  //     url: API_URL,
  //     accounts: [`0x${PRIVATE_KEY}`]
  //  },
  //    goerli: {
  //        url: API_URL,
  //        accounts: [`0x${PRIVATE_KEY}`]
  //    },
  //  }
 };