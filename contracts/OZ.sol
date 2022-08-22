// SPDX-License-Identifier: UNLISCENSE
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract OpenZeppelin is ERC721 {

    constructor () ERC721("OpenZeppelin", "OZ") {}

    function mint () public {
        
    }

}