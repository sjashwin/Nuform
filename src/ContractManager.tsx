import { ethers } from 'ethers';
import contract from './contracts_abi/SimpleAuction.json';

/**
 * ContractManager manages the contract.
 */
export default class ContractManager {
    private provider: ethers.providers.JsonRpcProvider;
    private signer: ethers.Signer;
    private contract: ethers.Contract;

    /**
     * Creates an instance of the ContractManager.
     * @param providerUrl The URL of the Ethereum provider.
     * @param contractAddress The address of the auction contract.
     */
    constructor(web3URL: string, address: string) {
        this.provider = new ethers.providers.JsonRpcProvider(web3URL);
        this.signer = this.provider.getSigner();
        this.contract = new ethers.Contract(
            address, 
            contract.abi, 
            this.signer
            );
    }

    /**
     * Retrieves the Ethereum account address associated with the signer.
     * @returns A Promise that resolves to the Ethereum account address.
     */
    public async getAccount(): Promise<string> {
        const address: string = await this.signer.getAddress();
        return address;
    }

    /**
     * Retrieves the highest bid amount for the product.
     * @returns A promise that resolves to the highes bid value.
     */
    public async highestBid(): Promise<string> {
        const highestBid: string = await this.contract.bid(20);
        return highestBid;
    }

    public async isAlive(): Promise<Boolean> {
        const status: Boolean = await this.contract.ended();
        return status
    }
    
    public async bid(value: string): Promise<Boolean> {
        let flag = false;
        if (!value) return flag;
        const gasLimit = 200000;
        try {
            const tx = await this.contract.setBid("123", value, {gasLimit});
            console.log("Transaction compelete:", tx);
            flag = true;
        } catch (error) {
            console.error("Error Asking Bid", error);
            return flag;
        } finally {
            return flag
        }
    }

    public async getBids() {
        const bids = await this.contract.getBid("1234");
        console.log(bids)
        // console.log("Bids:", parseInt(bids[0].toString()), bids[1].toString());
    }
}
