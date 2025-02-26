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
  RewardType,
  RewardType$inboundSchema,
  RewardType$outboundSchema,
} from "./rewardtype.js";
import {
  UtxoType,
  UtxoType$inboundSchema,
  UtxoType$outboundSchema,
} from "./utxotype.js";

export type PChainUtxo = {
  /**
   * Addresses that are eligible to sign the consumption of this output.
   */
  addresses: Array<string>;
  asset: AssetAmount;
  /**
   * Blockchain ID on which this output is consumed on.
   */
  consumedOnChainId: string;
  /**
   * Transaction ID that consumed this output.
   */
  consumingTxHash?: string | undefined;
  /**
   * Blockchain ID on which this output is created on.
   */
  createdOnChainId: string;
  /**
   * UTXO ID for this output.
   */
  utxoId: string;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  amount: string;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  assetId: string;
  blockNumber: string;
  blockTimestamp: number;
  /**
   * Block height in which the transaction consuming this UTXO was included
   */
  consumingBlockNumber?: string | undefined;
  /**
   * Timestamp in seconds at which this UTXO is used in a consuming transaction
   */
  consumingBlockTimestamp?: number | undefined;
  /**
   * Timestamp in seconds after which this UTXO can be consumed
   */
  platformLocktime?: number | undefined;
  /**
   * The index of the UTXO in the transaction
   */
  outputIndex: number;
  rewardType?: RewardType | undefined;
  /**
   * Timestamp in seconds before which a UTXO can only be used for staking transactions. After stakeable locktime, a UTXO can be used for anything
   */
  stakeableLocktime?: number | undefined;
  staked?: boolean | undefined;
  /**
   * The minimum number of signatures required to spend this UTXO
   */
  threshold?: number | undefined;
  /**
   * The hash of the transaction that created this UTXO
   */
  txHash: string;
  /**
   * Timestamp in seconds after which the staked UTXO will be unlocked.
   */
  utxoEndTimestamp?: number | undefined;
  /**
   * Timestamp in seconds at which the staked UTXO was locked.
   */
  utxoStartTimestamp?: number | undefined;
  /**
   * Indicates whether the UTXO is staked or transferable
   */
  utxoType: UtxoType;
};

/** @internal */
export const PChainUtxo$inboundSchema: z.ZodType<
  PChainUtxo,
  z.ZodTypeDef,
  unknown
> = z.object({
  addresses: z.array(z.string()),
  asset: AssetAmount$inboundSchema,
  consumedOnChainId: z.string(),
  consumingTxHash: z.string().optional(),
  createdOnChainId: z.string(),
  utxoId: z.string(),
  amount: z.string(),
  assetId: z.string(),
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  consumingBlockNumber: z.string().optional(),
  consumingBlockTimestamp: z.number().optional(),
  platformLocktime: z.number().optional(),
  outputIndex: z.number(),
  rewardType: RewardType$inboundSchema.optional(),
  stakeableLocktime: z.number().optional(),
  staked: z.boolean().optional(),
  threshold: z.number().optional(),
  txHash: z.string(),
  utxoEndTimestamp: z.number().optional(),
  utxoStartTimestamp: z.number().optional(),
  utxoType: UtxoType$inboundSchema,
});

/** @internal */
export type PChainUtxo$Outbound = {
  addresses: Array<string>;
  asset: AssetAmount$Outbound;
  consumedOnChainId: string;
  consumingTxHash?: string | undefined;
  createdOnChainId: string;
  utxoId: string;
  amount: string;
  assetId: string;
  blockNumber: string;
  blockTimestamp: number;
  consumingBlockNumber?: string | undefined;
  consumingBlockTimestamp?: number | undefined;
  platformLocktime?: number | undefined;
  outputIndex: number;
  rewardType?: string | undefined;
  stakeableLocktime?: number | undefined;
  staked?: boolean | undefined;
  threshold?: number | undefined;
  txHash: string;
  utxoEndTimestamp?: number | undefined;
  utxoStartTimestamp?: number | undefined;
  utxoType: string;
};

/** @internal */
export const PChainUtxo$outboundSchema: z.ZodType<
  PChainUtxo$Outbound,
  z.ZodTypeDef,
  PChainUtxo
> = z.object({
  addresses: z.array(z.string()),
  asset: AssetAmount$outboundSchema,
  consumedOnChainId: z.string(),
  consumingTxHash: z.string().optional(),
  createdOnChainId: z.string(),
  utxoId: z.string(),
  amount: z.string(),
  assetId: z.string(),
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  consumingBlockNumber: z.string().optional(),
  consumingBlockTimestamp: z.number().optional(),
  platformLocktime: z.number().optional(),
  outputIndex: z.number(),
  rewardType: RewardType$outboundSchema.optional(),
  stakeableLocktime: z.number().optional(),
  staked: z.boolean().optional(),
  threshold: z.number().optional(),
  txHash: z.string(),
  utxoEndTimestamp: z.number().optional(),
  utxoStartTimestamp: z.number().optional(),
  utxoType: UtxoType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PChainUtxo$ {
  /** @deprecated use `PChainUtxo$inboundSchema` instead. */
  export const inboundSchema = PChainUtxo$inboundSchema;
  /** @deprecated use `PChainUtxo$outboundSchema` instead. */
  export const outboundSchema = PChainUtxo$outboundSchema;
  /** @deprecated use `PChainUtxo$Outbound` instead. */
  export type Outbound = PChainUtxo$Outbound;
}

export function pChainUtxoToJSON(pChainUtxo: PChainUtxo): string {
  return JSON.stringify(PChainUtxo$outboundSchema.parse(pChainUtxo));
}

export function pChainUtxoFromJSON(
  jsonString: string,
): SafeParseResult<PChainUtxo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PChainUtxo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PChainUtxo' from JSON`,
  );
}
