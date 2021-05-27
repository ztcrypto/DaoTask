import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying task contract with address:", deployerAddress);

  const taskFactory = await ethers.getContractFactory("Task");
  const task = await taskFactory.deploy("0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B", "0x01be23585060835e02b77ef475b0cc51aa1e0709");

  await task.deployed();

  console.log("task contract deployed at", task.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
