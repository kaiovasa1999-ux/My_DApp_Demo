const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('RealEstate', () =>{
  let realEstate, escrow
  let deployer,seller
  let nftId = 1

  beforeEache(async () =>{
    accounts = await ethers.getSigners()
    deployer = accounts[0]
    seller = deployer
    buyer = accounts[1]

    //Load Contracts
    const RealEstate = await ethers.getContractFactory('RealEstate')
    const Escrow = await ethers.getContractFactory('Escrow')

    let realEaste = await RealEstate.deploy()
    escrow = await Escrow.deploy(
      // nftAddress 
      realEaste.address,
      nftId,
      seller,
      buyer,
    )

  })

  describe('Deployment',async() =>{

    it('Sends an NFT to the seller / deployer', async () =>{
      expect(await realEstate.ownerOf(nftId).to.equal(seller.address))

    })
  })

  describe('Transfer',async() =>{
    it('is the transaction correct between by')
  })
})