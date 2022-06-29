const Arweave = require("arweave");
const {WarpFactory} = require("warp-contracts");

(async () => {
  const arweave = Arweave.init({
    host: 'arweave.net', // Hostname or IP address for a Arweave host
    port: 443, // Port
    protocol: 'https', // Network protocol http or https
    timeout: 60000, // Network request timeouts in milliseconds
    logging: false // Enable network request logging
  });

  const warp = WarpFactory.levelDbCached(arweave, {inMemory: true, maxStoredTransactions: 5}).useWarpGateway().build();
  const contract = warp.contract("x_BaQLFyaEnROLhSUYOfn3nG_wZ3knA_3hAeKLw1lNk");
  const {state, validity, errorMessages} = await contract.readState();
})();