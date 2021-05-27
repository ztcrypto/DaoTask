import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { Signer, BigNumber } from "ethers";
import * as chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);

const BN = BigNumber.from;

describe("Test Method NFT", function () {
  let owner: Signer, account1: Signer, account2: Signer, account3: Signer;

  beforeEach(async function () {
    [owner, account1, account2, account3] = await ethers.getSigners();
  });
  it("Test task", async () => {
    const taskFactory = await ethers.getContractFactory("Task");
    const task = await taskFactory.deploy("0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B", "0x01be23585060835e02b77ef475b0cc51aa1e0709");
  })
});
