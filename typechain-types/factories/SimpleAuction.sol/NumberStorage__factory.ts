/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NumberStorage,
  NumberStorageInterface,
} from "../../SimpleAuction.sol/NumberStorage";

const _abi = [
  {
    inputs: [],
    name: "getNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numberRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "setter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610580806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633fb5c1cb146100465780636ab9142b14610062578063f2c9ecd814610093575b600080fd5b610060600480360381019061005b91906103a8565b6100b2565b005b61007c60048036038101906100779190610433565b610266565b60405161008a92919061047e565b60405180910390f35b61009b6102aa565b6040516100a992919061047e565b60405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050806000015182116101a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019c9061052a565b60405180910390fd5b60405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff168152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505050565b60006020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b60008060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505090508060000151816020015192509250509091565b600080fd5b6000819050919050565b61038581610372565b811461039057600080fd5b50565b6000813590506103a28161037c565b92915050565b6000602082840312156103be576103bd61036d565b5b60006103cc84828501610393565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610400826103d5565b9050919050565b610410816103f5565b811461041b57600080fd5b50565b60008135905061042d81610407565b92915050565b6000602082840312156104495761044861036d565b5b60006104578482850161041e565b91505092915050565b61046981610372565b82525050565b610478816103f5565b82525050565b60006040820190506104936000830185610460565b6104a0602083018461046f565b9392505050565b600082825260208201905092915050565b7f4e6577206e756d626572206d75737420626520686967686572207468616e207460008201527f68652070726576696f7573206f6e650000000000000000000000000000000000602082015250565b6000610514602f836104a7565b915061051f826104b8565b604082019050919050565b6000602082019050818103600083015261054381610507565b905091905056fea2646970667358221220074bdee8a9b7dd1726b6f638aebdd04cb18ca6fc895f0bf42bfa731da914135964736f6c63430008120033";

type NumberStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NumberStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NumberStorage__factory extends ContractFactory {
  constructor(...args: NumberStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NumberStorage> {
    return super.deploy(overrides || {}) as Promise<NumberStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NumberStorage {
    return super.attach(address) as NumberStorage;
  }
  override connect(signer: Signer): NumberStorage__factory {
    return super.connect(signer) as NumberStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NumberStorageInterface {
    return new utils.Interface(_abi) as NumberStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NumberStorage {
    return new Contract(address, _abi, signerOrProvider) as NumberStorage;
  }
}