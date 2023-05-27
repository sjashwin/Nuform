import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ethers } from 'ethers';
import ContractManager from "./ContractManager";

const AuctionInterface = () => {
  const contractManager = useMemo(() => {
    return new ContractManager(
        process.env.REACT_APP_REDHAT_HOST ?? "",
        process.env.REACT_APP_CONTRACT_ADDRESS ?? ""
    );
  }, []);
  const [highestBid, setHighestBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState(null);
  const [account, setAccount] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const initialize = useCallback(async () => {
    try {

      // Fetch the current highest bid
      const currentHighestBid = await contractManager.highestBid();
      console.log(currentHighestBid);
      setHighestBid(currentHighestBid.toString());

      // Fetch highest bidder address
      const highestBidderAddress = await contractManager.highestBidder();
      setHighestBidder(highestBidderAddress);

      const account = await contractManager.getAccount();
      setAccount(account);
    } catch (error) {
      console.error('Error initializing the auction interface:', error);
    }
  }, [contractManager]);

  useEffect(() => {
    initialize();
    console.log(process.env);
  }, [initialize]);

  async function placeBid() {
    const success = await contractManager.bid(bidAmount);
    setErrorMessage((success) ? 
      "Successfully updated bid.": 
      "Cannot place a lower value than the current bid."
    )
  }

  return (
    <div>
      <h1>Auction</h1>
      <div>
        <p>Current Highest Bid: {ethers.utils.formatEther(highestBid)} ETH {highestBidder}</p>
        <p>Your Account: {account}</p>
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="text"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
        <button onClick={placeBid}>Place Bid</button>
      </div>
    </div>
  );
};

export default AuctionInterface;
