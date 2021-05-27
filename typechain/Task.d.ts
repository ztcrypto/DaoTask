/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TaskInterface extends ethers.utils.Interface {
  functions: {
    "dataMap(bytes32)": FunctionFragment;
    "rawFulfillRandomness(bytes32,uint256)": FunctionFragment;
    "reqRand(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "dataMap", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomness",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reqRand",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "dataMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reqRand", data: BytesLike): Result;

  events: {
    "RequestRandomness(bytes32,bytes32,uint256)": EventFragment;
    "RequestRandomnessFulfilled(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestRandomness"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestRandomnessFulfilled"): EventFragment;
}

export class Task extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TaskInterface;

  functions: {
    dataMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { m: BigNumber; n: BigNumber }>;

    "dataMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { m: BigNumber; n: BigNumber }>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reqRand(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "reqRand(uint256,uint256,uint256)"(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  dataMap(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { m: BigNumber; n: BigNumber }>;

  "dataMap(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { m: BigNumber; n: BigNumber }>;

  rawFulfillRandomness(
    requestId: BytesLike,
    randomness: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rawFulfillRandomness(bytes32,uint256)"(
    requestId: BytesLike,
    randomness: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reqRand(
    userProvidedSeed: BigNumberish,
    m: BigNumberish,
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "reqRand(uint256,uint256,uint256)"(
    userProvidedSeed: BigNumberish,
    m: BigNumberish,
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    dataMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { m: BigNumber; n: BigNumber }>;

    "dataMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { m: BigNumber; n: BigNumber }>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reqRand(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { requestId: string; seed: BigNumber }>;

    "reqRand(uint256,uint256,uint256)"(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { requestId: string; seed: BigNumber }>;
  };

  filters: {
    RequestRandomness(
      requestId: BytesLike | null,
      keyHash: null,
      seed: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { requestId: string; keyHash: string; seed: BigNumber }
    >;

    RequestRandomnessFulfilled(
      requestId: BytesLike | null,
      randomness: null
    ): TypedEventFilter<
      [string, BigNumber],
      { requestId: string; randomness: BigNumber }
    >;
  };

  estimateGas: {
    dataMap(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "dataMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reqRand(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "reqRand(uint256,uint256,uint256)"(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dataMap(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "dataMap(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reqRand(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "reqRand(uint256,uint256,uint256)"(
      userProvidedSeed: BigNumberish,
      m: BigNumberish,
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}