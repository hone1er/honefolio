// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "ds-test/test.sol";
import "../ResumeNFT.sol";

contract ContractTest is DSTest {
    ResumeNFT public resumeNFT;


    function setUp() public {
        resumeNFT = new ResumeNFT(address(this));
    }

    function testExample() public {
        resumeNFT.safeMint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, "test");
        assertEq(resumeNFT.ownerOf(0), 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        assertEq(resumeNFT.tokenURI(0), "ipfs://test");
    }
}
