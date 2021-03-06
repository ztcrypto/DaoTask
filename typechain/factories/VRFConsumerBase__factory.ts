/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { VRFConsumerBase } from "../VRFConsumerBase";

export class VRFConsumerBase__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFConsumerBase {
    return new Contract(address, _abi, signerOrProvider) as VRFConsumerBase;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
