// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract StoreCustomer {

    uint32 private nextId = 0;

    uint32 public count = 0;    

    struct Customer{
        string name;
        uint8 age;
    }

    mapping (uint32 => Customer) private customers;

    function getNextId() private returns(uint32){
       return ++nextId;
    }  

    function compareStrings(string memory a, string memory b) private pure returns(bool){
      return keccak256(bytes(a)) == keccak256(bytes(b));
    }

    function addCustomer(Customer memory _custumer) public  {
      customers[getNextId()] = _custumer;
      count++;   
    }

    function getCustomer(uint32 id) public view returns(Customer memory){
      return customers[id];
    }

    function updateCustomer( uint32 id, Customer memory _customer) public {
        Customer memory actualCustomer = customers[id];

        if(actualCustomer.age != 0 && actualCustomer.age != _customer.age){
          actualCustomer.age = _customer.age;
        }

        if (bytes(_customer.name).length > 0 &&  !compareStrings(actualCustomer.name,_customer.name)){
          actualCustomer.name = _customer.name;
        }

        customers[id] = actualCustomer;

    }

    function deleteCustomer( uint32 id) public {
       Customer memory actualCustomer = customers[id];
       if (bytes(actualCustomer.name).length > 0){
         delete customers[id];
         count--;
       }
       
    }

}