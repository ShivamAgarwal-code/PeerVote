/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export type TransactionStruct = {
  txType: BigNumberish;
  from: BigNumberish;
  to: BigNumberish;
  gasLimit: BigNumberish;
  gasPerPubdataByteLimit: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymaster: BigNumberish;
  nonce: BigNumberish;
  value: BigNumberish;
  reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
  data: BytesLike;
  signature: BytesLike;
  factoryDeps: BytesLike[];
  paymasterInput: BytesLike;
  reservedDynamic: BytesLike;
};

export type TransactionStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  [BigNumber, BigNumber, BigNumber, BigNumber],
  string,
  string,
  string[],
  string,
  string
] & {
  txType: BigNumber;
  from: BigNumber;
  to: BigNumber;
  gasLimit: BigNumber;
  gasPerPubdataByteLimit: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymaster: BigNumber;
  nonce: BigNumber;
  value: BigNumber;
  reserved: [BigNumber, BigNumber, BigNumber, BigNumber];
  data: string;
  signature: string;
  factoryDeps: string[];
  paymasterInput: string;
  reservedDynamic: string;
};

export interface VotingPaymasterInterface extends utils.Interface {
  functions: {
    "postTransaction(bytes,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes),bytes32,bytes32,uint8,uint256)": FunctionFragment;
    "validateAndPayForPaymasterTransaction(bytes32,bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "postTransaction"
      | "validateAndPayForPaymasterTransaction"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "postTransaction",
    values: [
      BytesLike,
      TransactionStruct,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAndPayForPaymasterTransaction",
    values: [BytesLike, BytesLike, TransactionStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "postTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateAndPayForPaymasterTransaction",
    data: BytesLike
  ): Result;

  events: {};
}

export interface VotingPaymaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotingPaymasterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    postTransaction(
      _context: BytesLike,
      _transaction: TransactionStruct,
      arg2: BytesLike,
      arg3: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    validateAndPayForPaymasterTransaction(
      arg0: BytesLike,
      arg1: BytesLike,
      _transaction: TransactionStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  postTransaction(
    _context: BytesLike,
    _transaction: TransactionStruct,
    arg2: BytesLike,
    arg3: BytesLike,
    _txResult: BigNumberish,
    _maxRefundedGas: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  validateAndPayForPaymasterTransaction(
    arg0: BytesLike,
    arg1: BytesLike,
    _transaction: TransactionStruct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    postTransaction(
      _context: BytesLike,
      _transaction: TransactionStruct,
      arg2: BytesLike,
      arg3: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateAndPayForPaymasterTransaction(
      arg0: BytesLike,
      arg1: BytesLike,
      _transaction: TransactionStruct,
      overrides?: CallOverrides
    ): Promise<[string, string] & { magic: string; context: string }>;
  };

  filters: {};

  estimateGas: {
    postTransaction(
      _context: BytesLike,
      _transaction: TransactionStruct,
      arg2: BytesLike,
      arg3: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    validateAndPayForPaymasterTransaction(
      arg0: BytesLike,
      arg1: BytesLike,
      _transaction: TransactionStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    postTransaction(
      _context: BytesLike,
      _transaction: TransactionStruct,
      arg2: BytesLike,
      arg3: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    validateAndPayForPaymasterTransaction(
      arg0: BytesLike,
      arg1: BytesLike,
      _transaction: TransactionStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
