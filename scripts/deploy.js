import { ethers } from "hardhat";

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("Auction");

    const oneHourInSeconds = 60 * 60;
    const beneficiary = deployer.address;

    const contract = await Contract.deploy(
        oneHourInSeconds,
        beneficiary,
    );

    console.log("Contract address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
