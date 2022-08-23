import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { OZ } from "../typechain-types/contracts/OZ.sol/OZ"
import { Solm8 } from "../typechain-types/contracts/Solm8"
import { Chiru } from "../typechain-types/contracts/Chiru"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/src/signers";

let oz: OZ;
let solm8: Solm8;
let chiru: Chiru;
let allAddrs: SignerWithAddress[];
let owner: SignerWithAddress;
let addr1: SignerWithAddress;
let addr2: SignerWithAddress;
let addrs: SignerWithAddress[];

beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    const OZ = await ethers.getContractFactory("OZ");
    const SOLM8 = await ethers.getContractFactory("Solm8");
    const CHIRU = await ethers.getContractFactory("Chiru");
    allAddrs = (await ethers.getSigners()) as any[];
    [owner, addr1, addr2, ...addrs] = allAddrs;
    oz = await OZ.deploy();
    solm8 = await SOLM8.deploy()
    chiru = await CHIRU.deploy()
  });

describe("Mint", async function () {
    await oz.mint(owner.address, 0)
    await solm8.mint(owner.address, 0)
    await chiru.mint(owner.address, 1)
})

describe("Burn", async function () {
    it("should mint", async function () {
        await oz.mint(owner.address, 0)
        await solm8.mint(owner.address, 0)
        await chiru.mint(owner.address, 1)
        
        await oz.burn(0)
        await solm8.burn(0)
        await chiru.burn(0)
    })
})

describe("Approve", async function () {
    it("should approve", async function () {
        await oz.mint(owner.address, 0)
        await solm8.mint(owner.address, 0)
        await chiru.mint(owner.address, 1)
        
        await oz.approve(addr2.address, 0)
        await solm8.approve(addr2.address, 0)
        await chiru.approve(addr2.address, 0)
    })
})


describe("Transfer From", async function () {
    it("should transfer from", async function () {
        await oz.mint(owner.address, 0)
        await solm8.mint(owner.address, 0)
        await chiru.mint(owner.address, 1)
        
        await oz.approve(addr2.address, 0)
        await solm8.approve(addr2.address, 0)
        await chiru.approve(addr2.address, 0)
        
        await oz.transferFrom(owner.address, addr2.address, 0)
        await solm8.transferFrom(owner.address, addr2.address, 0)
        await chiru.transferFrom(owner.address, addr2.address, 0)
    })
})

// describe("Bulk Mint", async function () {

// })

// describe("Bulk Transfer", function () {
  
// })

