const StoreCustomer = artifacts.require("StoreCustomer");


contract("StoreCustomer", function (accounts) {

  beforeEach(async ()=>{
      contract = await StoreCustomer.new();
  })

 /* it("should assert true", async function () {
    await StoreCustomer.deployed();
    return assert.isTrue(true);
  }); */

  it("Add Customer", async ()=>{   
      await contract.addCustomer({
          name: 'Clayton',
          age: 43
      });
      const count = await contract.count();
      assert(count.toNumber() === 1, "Coldn't add Customer");
  });

  it("Get Customer", async ()=>{
      await contract.addCustomer({
          name: 'Clayton',
          age: 43
      });
      const customer = await contract.getCustomer(1);
      assert(customer.name === 'Clayton' && customer.age == 43, "Coldn't get Customer");
  });

  it("Update Customer - Admin", async ()=>{
      await contract.addCustomer({
          name: 'Clayton',
          age: 43
      });
      
      await contract.updateCustomer(1,{
        name: 'Isabel',
        age: 38
      });   

      const customer = await contract.getCustomer(1);

      assert(customer.name === 'Isabel' && customer.age == 38, "Coldn't update Customer");
  });

  it("Delete Customer - Admin", async ()=>{   
      await contract.addCustomer({
          name: 'Clayton',
          age: 43
      });

      await contract.deleteCustomer(1,{from: accounts[0]});

      const count = await contract.count();
      assert(count.toNumber() === 0, "Coldn't delete Customer");
  });

  it("Delete Customer - Not Admin", async ()=>{   
    await contract.addCustomer({
        name: 'Clayton',
        age: 43
    });

    let errorMessage;
    try{
        const message = await contract.deleteCustomer(1,{from: accounts[1]});    
    }catch(error){
        errorMessage = error;
        console.log(`ERROR: ${error.reason}`);        
    }
    assert(errorMessage != undefined, "Delete Customer is success.");
    
});

});
