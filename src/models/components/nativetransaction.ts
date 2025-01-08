/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Method,
  Method$inboundSchema,
  Method$Outbound,
  Method$outboundSchema,
} from "./method.js";
import {
  RichAddress,
  RichAddress$inboundSchema,
  RichAddress$Outbound,
  RichAddress$outboundSchema,
} from "./richaddress.js";

export type NativeTransaction = {
  /**
   * The block number on the chain.
   */
  blockNumber: string;
  /**
   * The block finality timestamp.
   */
  blockTimestamp: number;
  /**
   * The block hash identifier.
   */
  blockHash: string;
  /**
   * The EVM chain ID on which the transaction occured.
   */
  chainId: string;
  /**
   * The index at which the transaction occured in the block (0-indexed).
   */
  blockIndex: number;
  /**
   * The transaction hash identifier.
   */
  txHash: string;
  /**
   * The transaction status, which is either 0 (failed) or 1 (successful).
   */
  txStatus: string;
  /**
   * The transaction type.
   */
  txType: number;
  /**
   * The gas limit set for the transaction.
   */
  gasLimit: string;
  /**
   * The amount of gas used.
   */
  gasUsed: string;
  /**
   * The gas price denominated by the number of decimals of the native token.
   */
  gasPrice: string;
  /**
   * The nonce used by the sender of the transaction.
   */
  nonce: string;
  from: RichAddress;
  to: RichAddress;
  method?: Method | undefined;
  value: string;
};

/** @internal */
export const NativeTransaction$inboundSchema: z.ZodType<
  NativeTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  blockHash: z.string(),
  chainId: z.string(),
  blockIndex: z.number(),
  txHash: z.string(),
  txStatus: z.string(),
  txType: z.number(),
  gasLimit: z.string(),
  gasUsed: z.string(),
  gasPrice: z.string(),
  nonce: z.string(),
  from: RichAddress$inboundSchema,
  to: RichAddress$inboundSchema,
  method: Method$inboundSchema.optional(),
  value: z.string(),
});

/** @internal */
export type NativeTransaction$Outbound = {
  blockNumber: string;
  blockTimestamp: number;
  blockHash: string;
  chainId: string;
  blockIndex: number;
  txHash: string;
  txStatus: string;
  txType: number;
  gasLimit: string;
  gasUsed: string;
  gasPrice: string;
  nonce: string;
  from: RichAddress$Outbound;
  to: RichAddress$Outbound;
  method?: Method$Outbound | undefined;
  value: string;
};

/** @internal */
export const NativeTransaction$outboundSchema: z.ZodType<
  NativeTransaction$Outbound,
  z.ZodTypeDef,
  NativeTransaction
> = z.object({
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  blockHash: z.string(),
  chainId: z.string(),
  blockIndex: z.number(),
  txHash: z.string(),
  txStatus: z.string(),
  txType: z.number(),
  gasLimit: z.string(),
  gasUsed: z.string(),
  gasPrice: z.string(),
  nonce: z.string(),
  from: RichAddress$outboundSchema,
  to: RichAddress$outboundSchema,
  method: Method$outboundSchema.optional(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NativeTransaction$ {
  /** @deprecated use `NativeTransaction$inboundSchema` instead. */
  export const inboundSchema = NativeTransaction$inboundSchema;
  /** @deprecated use `NativeTransaction$outboundSchema` instead. */
  export const outboundSchema = NativeTransaction$outboundSchema;
  /** @deprecated use `NativeTransaction$Outbound` instead. */
  export type Outbound = NativeTransaction$Outbound;
}

export function nativeTransactionToJSON(
  nativeTransaction: NativeTransaction,
): string {
  return JSON.stringify(
    NativeTransaction$outboundSchema.parse(nativeTransaction),
  );
}

export function nativeTransactionFromJSON(
  jsonString: string,
): SafeParseResult<NativeTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NativeTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NativeTransaction' from JSON`,
  );
}
