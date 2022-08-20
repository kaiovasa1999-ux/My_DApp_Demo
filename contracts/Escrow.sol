// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

interface IERC721{
  function transferFrom(address _from,address _to,uint256 _id) external;
}


contract Escrow{
  address public nftAddress;
  uint256 public nftId;
  address payable seller;
  address payable buyer;

  constructor (address _nftAddress,
  uint256 _nftId,
  address payable _seller,
  address payable _buyer
  ){
    nftAddress = _nftAddress;
    nftId = _nftId;
    seller = _seller;
    buyer =_buyer;
  }

  function finalizeSale() public{
    IERC721(nftAddress).transferFrom(seller, buyer, nftId);
  }
}
