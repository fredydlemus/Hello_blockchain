var helloBlochain = artifacts.require('../contracts/HelloBlockchain.sol');

module.exports = function (deployer){
    deployer.deploy(helloBlochain);
}