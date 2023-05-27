require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 'auto',
      gasPrice: 'auto'
    },
    localhost: {
      url: 'http://127.0.0.1:8545'
    }
  },
};
