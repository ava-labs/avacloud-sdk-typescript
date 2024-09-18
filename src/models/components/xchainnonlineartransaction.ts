/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  AssetAmount,
  AssetAmount$inboundSchema,
  AssetAmount$Outbound,
  AssetAmount$outboundSchema,
} from "./assetamount.js";
import {
  TransactionVertexDetail,
  TransactionVertexDetail$inboundSchema,
  TransactionVertexDetail$Outbound,
  TransactionVertexDetail$outboundSchema,
} from "./transactionvertexdetail.js";
import {
  Utxo,
  Utxo$inboundSchema,
  Utxo$Outbound,
  Utxo$outboundSchema,
} from "./utxo.js";
import {
  XChainAssetDetails,
  XChainAssetDetails$inboundSchema,
  XChainAssetDetails$Outbound,
  XChainAssetDetails$outboundSchema,
} from "./xchainassetdetails.js";
import {
  XChainTransactionType,
  XChainTransactionType$inboundSchema,
  XChainTransactionType$outboundSchema,
} from "./xchaintransactiontype.js";

/**
 * Represents chain format this transaction is included in.
 */
export const ChainFormat = {
  NonLinear: "non-linear",
  Linear: "linear",
} as const;
/**
 * Represents chain format this transaction is included in.
 */
export type ChainFormat = ClosedEnum<typeof ChainFormat>;

export type XChainNonLinearTransaction = {
  /**
   * Unique ID for this transaction.
   */
  txHash: string;
  /**
   * Represents chain format this transaction is included in.
   */
  chainFormat: ChainFormat;
  /**
   * Latest timestamp in seconds this transaction was accepted out of the same transaction accepted in other vertices.
   */
  timestamp: number;
  /**
   * Type of transaction.
   */
  txType: XChainTransactionType;
  /**
   * Hex encoded memo bytes for this transaction.
   */
  memo: string;
  consumedUtxos: Array<Utxo>;
  emittedUtxos: Array<Utxo>;
  /**
   * Assets unlocked by inputs of this transaction.
   */
  amountUnlocked: Array<AssetAmount>;
  /**
   * Assets created by outputs of this transaction.
   */
  amountCreated: Array<AssetAmount>;
  /**
   * Source chain for an atomic transaction.
   */
  sourceChain?: string | undefined;
  /**
   * Destination chain for an atomic transaction.
   */
  destinationChain?: string | undefined;
  /**
   * AssetAmount details of the asset created in CreateAssetTx
   */
  assetCreated?: XChainAssetDetails | undefined;
  /**
   * A transaction on X-Chain can be accepted over multiple vertices.
   */
  vertices: Array<TransactionVertexDetail>;
};

/** @internal */
export const ChainFormat$inboundSchema: z.ZodNativeEnum<typeof ChainFormat> = z
  .nativeEnum(ChainFormat);

/** @internal */
export const ChainFormat$outboundSchema: z.ZodNativeEnum<typeof ChainFormat> =
  ChainFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChainFormat$ {
  /** @deprecated use `ChainFormat$inboundSchema` instead. */
  export const inboundSchema = ChainFormat$inboundSchema;
  /** @deprecated use `ChainFormat$outboundSchema` instead. */
  export const outboundSchema = ChainFormat$outboundSchema;
}

/** @internal */
export const XChainNonLinearTransaction$inboundSchema: z.ZodType<
  XChainNonLinearTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  chainFormat: ChainFormat$inboundSchema,
  timestamp: z.number(),
  txType: XChainTransactionType$inboundSchema,
  memo: z.string(),
  consumedUtxos: z.array(Utxo$inboundSchema),
  emittedUtxos: z.array(Utxo$inboundSchema),
  amountUnlocked: z.array(AssetAmount$inboundSchema),
  amountCreated: z.array(AssetAmount$inboundSchema),
  sourceChain: z.string().optional(),
  destinationChain: z.string().optional(),
  assetCreated: XChainAssetDetails$inboundSchema.optional(),
  vertices: z.array(TransactionVertexDetail$inboundSchema),
});

/** @internal */
export type XChainNonLinearTransaction$Outbound = {
  txHash: string;
  chainFormat: string;
  timestamp: number;
  txType: string;
  memo: string;
  consumedUtxos: Array<Utxo$Outbound>;
  emittedUtxos: Array<Utxo$Outbound>;
  amountUnlocked: Array<AssetAmount$Outbound>;
  amountCreated: Array<AssetAmount$Outbound>;
  sourceChain?: string | undefined;
  destinationChain?: string | undefined;
  assetCreated?: XChainAssetDetails$Outbound | undefined;
  vertices: Array<TransactionVertexDetail$Outbound>;
};

/** @internal */
export const XChainNonLinearTransaction$outboundSchema: z.ZodType<
  XChainNonLinearTransaction$Outbound,
  z.ZodTypeDef,
  XChainNonLinearTransaction
> = z.object({
  txHash: z.string(),
  chainFormat: ChainFormat$outboundSchema,
  timestamp: z.number(),
  txType: XChainTransactionType$outboundSchema,
  memo: z.string(),
  consumedUtxos: z.array(Utxo$outboundSchema),
  emittedUtxos: z.array(Utxo$outboundSchema),
  amountUnlocked: z.array(AssetAmount$outboundSchema),
  amountCreated: z.array(AssetAmount$outboundSchema),
  sourceChain: z.string().optional(),
  destinationChain: z.string().optional(),
  assetCreated: XChainAssetDetails$outboundSchema.optional(),
  vertices: z.array(TransactionVertexDetail$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace XChainNonLinearTransaction$ {
  /** @deprecated use `XChainNonLinearTransaction$inboundSchema` instead. */
  export const inboundSchema = XChainNonLinearTransaction$inboundSchema;
  /** @deprecated use `XChainNonLinearTransaction$outboundSchema` instead. */
  export const outboundSchema = XChainNonLinearTransaction$outboundSchema;
  /** @deprecated use `XChainNonLinearTransaction$Outbound` instead. */
  export type Outbound = XChainNonLinearTransaction$Outbound;
}
