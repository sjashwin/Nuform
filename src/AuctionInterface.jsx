import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ContractManager from "./ContractManager";

const AuctionInterface = () => {
  const contractManager = useMemo(() => {
    return new ContractManager(
        process.env.REACT_APP_REDHAT_HOST ?? "",
        process.env.REACT_APP_CONTRACT_ADDRESS ?? "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    );
  }, []);
  const [account, setAccount] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const initialize = useCallback(async () => {
    try {

      const account = await contractManager.getAccount();
      setAccount(account);
    } catch (error) {
      console.error('Error initializing the auction interface:', error);
    }
  }, [contractManager]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  async function placeBid() {
    const success = await contractManager.bid(bidAmount);
    setErrorMessage((success) ? 
      "Successfully updated bid.": 
      "Cannot place a lower value than the current bid."
    )
  }

  async function getBids() {
    await contractManager.getBids();
  }

  return (
    <div>
      <h1>Auction</h1>
      <div>
        <p>Current Highest Bid: 0.00</p>
        <p>Your Account: {account}</p>
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="text"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
        <button onClick={placeBid}>Place Bid</button>
        <button onClick={getBids}>Get Bid</button>
      </div>
    </div>
  );
};

export default AuctionInterface;
