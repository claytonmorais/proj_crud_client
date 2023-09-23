// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

library CompareUtils {

    function compareStrings(string memory a, string memory b) public pure returns(bool){
      return keccak256(bytes(a)) == keccak256(bytes(b));
    }

}