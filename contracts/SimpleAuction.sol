// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleAuction {
    struct Listing {
        uint256 number;
        address addedBy;
    }

    mapping(string => Listing) public listings;

    event NumberSet(string indexed listingId, uint256 number, address indexed addedBy);

    // Function to set the number for a given listing ID
    function setBid(string memory _listingId, uint256 _number) external {
        require(_number > listings[_listingId].number, "New value must be higher than the previous value");
        listings[_listingId].number = _number;
        listings[_listingId].addedBy = msg.sender;
        emit NumberSet(_listingId, _number, msg.sender);
    }

    // Function to get the number and the address that added the listing for a given listing ID
    function getBid(string memory _listingId) external view returns (uint256 number, address addedBy) {
        number = listings[_listingId].number;
        addedBy = listings[_listingId].addedBy;
    }
}