// SPDX-License-Identifier: UNLISCENSE
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract OZ is ERC721 {

    constructor () ERC721("OpenZeppelin", "OZ") {}

    function mint (address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }

    function burn (uint256 tokenId) external {
        _burn(tokenId);
    }

}