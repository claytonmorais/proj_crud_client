var StoreCustomer= artifacts.require("StoreCustomer");
const CompareUtils = artifacts.require("CompareUtils");
module.exports = function(deployer) {
      deployer.deploy(CompareUtils);
      deployer.link(CompareUtils, StoreCustomer);
      deployer.deploy(StoreCustomer);
}