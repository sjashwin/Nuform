/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Auction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Auction__factory>;
    getContractFactory(
      name: "SimpleAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleAuction__factory>;

    getContractAt(
      name: "Auction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Auction>;
    getContractAt(
      name: "SimpleAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleAuction>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}