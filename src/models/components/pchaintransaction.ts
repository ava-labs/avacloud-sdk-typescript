/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AssetAmount,
  AssetAmount$inboundSchema,
  AssetAmount$Outbound,
  AssetAmount$outboundSchema,
} from "./assetamount.js";
import {
  BlsCredentials,
  BlsCredentials$inboundSchema,
  BlsCredentials$Outbound,
  BlsCredentials$outboundSchema,
} from "./blscredentials.js";
import {
  L1ValidatorDetailsTransaction,
  L1ValidatorDetailsTransaction$inboundSchema,
  L1ValidatorDetailsTransaction$Outbound,
  L1ValidatorDetailsTransaction$outboundSchema,
} from "./l1validatordetailstransaction.js";
import {
  L1ValidatorManagerDetails,
  L1ValidatorManagerDetails$inboundSchema,
  L1ValidatorManagerDetails$Outbound,
  L1ValidatorManagerDetails$outboundSchema,
} from "./l1validatormanagerdetails.js";
import {
  PChainTransactionType,
  PChainTransactionType$inboundSchema,
  PChainTransactionType$outboundSchema,
} from "./pchaintransactiontype.js";
import {
  PChainUtxo,
  PChainUtxo$inboundSchema,
  PChainUtxo$Outbound,
  PChainUtxo$outboundSchema,
} from "./pchainutxo.js";
import {
  SubnetOwnershipInfo,
  SubnetOwnershipInfo$inboundSchema,
  SubnetOwnershipInfo$Outbound,
  SubnetOwnershipInfo$outboundSchema,
} from "./subnetownershipinfo.js";

export type PChainTransaction = {
  /**
   * A P-Chain transaction hash.
   */
  txHash: string;
  txType: PChainTransactionType;
  /**
   * The block finality timestamp.
   */
  blockTimestamp: number;
  /**
   * The height of the block in which the transaction was included
   */
  blockNumber: string;
  blockHash: string;
  /**
   * The consumed UTXOs of the transaction
   */
  consumedUtxos: Array<PChainUtxo>;
  /**
   * The newly created UTXOs of the transaction
   */
  emittedUtxos: Array<PChainUtxo>;
  /**
   * Source chain for an atomic transaction.
   */
  sourceChain?: string | undefined;
  /**
   * Destination chain for an atomic transaction.
   */
  destinationChain?: string | undefined;
  /**
   * A list of objects containing P-chain Asset basic info and the amount of that Asset ID. The amount of nAVAX present in the newly created UTXOs of the transaction
   */
  value: Array<AssetAmount>;
  /**
   * A list of objects containing P-chain Asset basic info and the amount of that Asset ID. The nAVAX amount burned in a transaction, partially or fully contributing to the transaction fee
   */
  amountBurned: Array<AssetAmount>;
  /**
   * A list of objects containing P-chain Asset basic info and the amount of that Asset ID. Present for AddValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
   */
  amountStaked: Array<AssetAmount>;
  /**
   * A list of objects containing P-chain Asset basic info and the amount of that Asset ID. The amount of nAVAX locked for pay-as-you-go continuous fees to sustain L1 validation.
   */
  amountL1ValidatorBalanceBurned: Array<AssetAmount>;
  /**
   * Present for AddValidatorTx, AddSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
   */
  startTimestamp?: number | undefined;
  /**
   * Present for AddValidatorTx, AddSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
   */
  endTimestamp?: number | undefined;
  /**
   * The percentage of total estimated delegator rewards allocated to validator nodes for supporting delegations. Present for AddValidatorTx, AddPermissionlessValidatorTx
   */
  delegationFeePercent?: string | undefined;
  /**
   * The NodeID of the validator node linked to the stake transaction. Present for AddValidatorTx, AddSubnetValidatorTx, RemoveSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
   */
  nodeId?: string | undefined;
  /**
   * Present for AddValidatorTx, AddSubnetValidatorTx, RemoveSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx, CreateChainTx, CreateSubnetTx
   */
  subnetId?: string | undefined;
  /**
   * Details of the L1's validator manager contract and blockchain. Present for the ConvertSubnetToL1Tx which transforms a subnet into L1
   */
  l1ValidatorManagerDetails?: L1ValidatorManagerDetails | undefined;
  /**
   * Details of L1 validators registered or changed in the current transaction. The details reflect the state at the time of the transaction, not in real-time
   */
  l1ValidatorDetails?: Array<L1ValidatorDetailsTransaction> | undefined;
  /**
   * Estimated reward from the staking transaction, if successful. Present for AddValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
   */
  estimatedReward?: string | undefined;
  /**
   * Reward transaction hash for the completed validations or delegations
   */
  rewardTxHash?: string | undefined;
  rewardAddresses?: Array<string> | undefined;
  memo?: string | undefined;
  /**
   * Staking transaction corresponding to the RewardValidatorTx
   */
  stakingTxHash?: string | undefined;
  /**
   * Subnet owner details for the CreateSubnetTx or TransferSubnetOwnershipTx
   */
  subnetOwnershipInfo?: SubnetOwnershipInfo | undefined;
  /**
   * Public Key and PoP of new validator registrations. Present for AddPermissionlessValidatorTx
   */
  blsCredentials?: BlsCredentials | undefined;
};

/** @internal */
export const PChainTransaction$inboundSchema: z.ZodType<
  PChainTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  txType: PChainTransactionType$inboundSchema,
  blockTimestamp: z.number(),
  blockNumber: z.string(),
  blockHash: z.string(),
  consumedUtxos: z.array(PChainUtxo$inboundSchema),
  emittedUtxos: z.array(PChainUtxo$inboundSchema),
  sourceChain: z.string().optional(),
  destinationChain: z.string().optional(),
  value: z.array(AssetAmount$inboundSchema),
  amountBurned: z.array(AssetAmount$inboundSchema),
  amountStaked: z.array(AssetAmount$inboundSchema),
  amountL1ValidatorBalanceBurned: z.array(AssetAmount$inboundSchema),
  startTimestamp: z.number().optional(),
  endTimestamp: z.number().optional(),
  delegationFeePercent: z.string().optional(),
  nodeId: z.string().optional(),
  subnetId: z.string().optional(),
  l1ValidatorManagerDetails: L1ValidatorManagerDetails$inboundSchema.optional(),
  l1ValidatorDetails: z.array(L1ValidatorDetailsTransaction$inboundSchema)
    .optional(),
  estimatedReward: z.string().optional(),
  rewardTxHash: z.string().optional(),
  rewardAddresses: z.array(z.string()).optional(),
  memo: z.string().optional(),
  stakingTxHash: z.string().optional(),
  subnetOwnershipInfo: SubnetOwnershipInfo$inboundSchema.optional(),
  blsCredentials: BlsCredentials$inboundSchema.optional(),
});

/** @internal */
export type PChainTransaction$Outbound = {
  txHash: string;
  txType: string;
  blockTimestamp: number;
  blockNumber: string;
  blockHash: string;
  consumedUtxos: Array<PChainUtxo$Outbound>;
  emittedUtxos: Array<PChainUtxo$Outbound>;
  sourceChain?: string | undefined;
  destinationChain?: string | undefined;
  value: Array<AssetAmount$Outbound>;
  amountBurned: Array<AssetAmount$Outbound>;
  amountStaked: Array<AssetAmount$Outbound>;
  amountL1ValidatorBalanceBurned: Array<AssetAmount$Outbound>;
  startTimestamp?: number | undefined;
  endTimestamp?: number | undefined;
  delegationFeePercent?: string | undefined;
  nodeId?: string | undefined;
  subnetId?: string | undefined;
  l1ValidatorManagerDetails?: L1ValidatorManagerDetails$Outbound | undefined;
  l1ValidatorDetails?:
    | Array<L1ValidatorDetailsTransaction$Outbound>
    | undefined;
  estimatedReward?: string | undefined;
  rewardTxHash?: string | undefined;
  rewardAddresses?: Array<string> | undefined;
  memo?: string | undefined;
  stakingTxHash?: string | undefined;
  subnetOwnershipInfo?: SubnetOwnershipInfo$Outbound | undefined;
  blsCredentials?: BlsCredentials$Outbound | undefined;
};

/** @internal */
export const PChainTransaction$outboundSchema: z.ZodType<
  PChainTransaction$Outbound,
  z.ZodTypeDef,
  PChainTransaction
> = z.object({
  txHash: z.string(),
  txType: PChainTransactionType$outboundSchema,
  blockTimestamp: z.number(),
  blockNumber: z.string(),
  blockHash: z.string(),
  consumedUtxos: z.array(PChainUtxo$outboundSchema),
  emittedUtxos: z.array(PChainUtxo$outboundSchema),
  sourceChain: z.string().optional(),
  destinationChain: z.string().optional(),
  value: z.array(AssetAmount$outboundSchema),
  amountBurned: z.array(AssetAmount$outboundSchema),
  amountStaked: z.array(AssetAmount$outboundSchema),
  amountL1ValidatorBalanceBurned: z.array(AssetAmount$outboundSchema),
  startTimestamp: z.number().optional(),
  endTimestamp: z.number().optional(),
  delegationFeePercent: z.string().optional(),
  nodeId: z.string().optional(),
  subnetId: z.string().optional(),
  l1ValidatorManagerDetails: L1ValidatorManagerDetails$outboundSchema
    .optional(),
  l1ValidatorDetails: z.array(L1ValidatorDetailsTransaction$outboundSchema)
    .optional(),
  estimatedReward: z.string().optional(),
  rewardTxHash: z.string().optional(),
  rewardAddresses: z.array(z.string()).optional(),
  memo: z.string().optional(),
  stakingTxHash: z.string().optional(),
  subnetOwnershipInfo: SubnetOwnershipInfo$outboundSchema.optional(),
  blsCredentials: BlsCredentials$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PChainTransaction$ {
  /** @deprecated use `PChainTransaction$inboundSchema` instead. */
  export const inboundSchema = PChainTransaction$inboundSchema;
  /** @deprecated use `PChainTransaction$outboundSchema` instead. */
  export const outboundSchema = PChainTransaction$outboundSchema;
  /** @deprecated use `PChainTransaction$Outbound` instead. */
  export type Outbound = PChainTransaction$Outbound;
}

export function pChainTransactionToJSON(
  pChainTransaction: PChainTransaction,
): string {
  return JSON.stringify(
    PChainTransaction$outboundSchema.parse(pChainTransaction),
  );
}

export function pChainTransactionFromJSON(
  jsonString: string,
): SafeParseResult<PChainTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PChainTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PChainTransaction' from JSON`,
  );
}
