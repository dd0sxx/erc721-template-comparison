// SPDX-License-Identifier: UNLISCENSE
pragma solidity ^0.8.15;

import "erc721a/contracts/ERC721A.sol";

contract Chiru is ERC721A {

    constructor () ERC721A("OpenZeppelin", "OZ") {}

    function mint (address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }

    function burn (uint256 tokenId) external {
        _burn(tokenId);
    }

}