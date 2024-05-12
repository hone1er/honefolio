// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "ds-test/test.sol";
import "../HonefolioNFT.sol";

contract HonefolioTest is DSTest {
    HonefolioNFT public honefolio;

    function setUp() public {
        honefolio = new HonefolioNFT(address(this));
    }

    function testMint() public {
        honefolio.safeMint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, "QmZTCdyUwaGnEKYpobxLv3jyi1EUaVfj2MBrtnEuhZrQW3");
        assertEq(honefolio.ownerOf(0), 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
    }
    function testTokenURI() public {
        honefolio.safeMint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, "QmZTCdyUwaGnEKYpobxLv3jyi1EUaVfj2MBrtnEuhZrQW3");
        assertEq(honefolio.tokenURI(0), "ipfs://QmZTCdyUwaGnEKYpobxLv3jyi1EUaVfj2MBrtnEuhZrQW3");
    }

}
