// SPDX-License-Identifier: UNLISCENSE
pragma solidity ^0.8.15;

import "solmate/src/tokens/ERC721.sol";

contract Solm8 is ERC721 {

    constructor () ERC721("OpenZeppelin", "OZ") {}

    function mint (address to, uint256 tokenId) external {
        _mint(to, tokenId);
    }

    function burn (uint256 tokenId) external {
        _burn(tokenId);
    }

    function tokenURI(uint256 id) public pure override returns (string memory) {
        return "";
    }

}