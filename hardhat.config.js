// SPDX-License-Identifier: MIT OR Apache-2.0

require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url : "https://polygon-mumbai.infura.io/v3/980e3b88a31b48efb8b62d65e22ae72c",
      accounts: [privateKey]
    },
    mainnet: {
      url : "https://polygon-mainnet.infura.io/v3/980e3b88a31b48efb8b62d65e22ae72c",
      accounts: [privateKey]
    }
  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
