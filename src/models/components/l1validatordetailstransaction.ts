/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type L1ValidatorDetailsTransactionBlsCredentials = {};

export type L1ValidatorDetailsTransaction = {
  /**
   * Unique L1 validation ID used network-wide to identify L1 validation until its weight is reduced to 0 i.e. removed.
   */
  validationId: string;
  /**
   * Unique L1 validation ID used network-wide to identify L1 validation until its weight is reduced to 0 i.e. removed. In hex format
   */
  validationIdHex: string;
  nodeId: string;
  subnetId: string;
  /**
   * Weight of the L1 validator used while sampling validators within the L1. A zero-weight L1 validator means it has been removed from the L1, and the validationID is no longer valid
   */
  weight: number;
  /**
   * Remaining L1 validator balance in nAVAX until inactive. It can rejoin L1 sampling by increasing balance with IncreaseL1ValidatorBalanceTx
   */
  remainingBalance: number;
  /**
   * The increase in L1 validator balance (nAVAX) in the current transaction. When the balance is returned after the L1 validator is disabled or removed, this value is negative
   */
  balanceChange?: number | undefined;
  blsCredentials?: L1ValidatorDetailsTransactionBlsCredentials | undefined;
};

/** @internal */
export const L1ValidatorDetailsTransactionBlsCredentials$inboundSchema:
  z.ZodType<
    L1ValidatorDetailsTransactionBlsCredentials,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type L1ValidatorDetailsTransactionBlsCredentials$Outbound = {};

/** @internal */
export const L1ValidatorDetailsTransactionBlsCredentials$outboundSchema:
  z.ZodType<
    L1ValidatorDetailsTransactionBlsCredentials$Outbound,
    z.ZodTypeDef,
    L1ValidatorDetailsTransactionBlsCredentials
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace L1ValidatorDetailsTransactionBlsCredentials$ {
  /** @deprecated use `L1ValidatorDetailsTransactionBlsCredentials$inboundSchema` instead. */
  export const inboundSchema =
    L1ValidatorDetailsTransactionBlsCredentials$inboundSchema;
  /** @deprecated use `L1ValidatorDetailsTransactionBlsCredentials$outboundSchema` instead. */
  export const outboundSchema =
    L1ValidatorDetailsTransactionBlsCredentials$outboundSchema;
  /** @deprecated use `L1ValidatorDetailsTransactionBlsCredentials$Outbound` instead. */
  export type Outbound = L1ValidatorDetailsTransactionBlsCredentials$Outbound;
}

export function l1ValidatorDetailsTransactionBlsCredentialsToJSON(
  l1ValidatorDetailsTransactionBlsCredentials:
    L1ValidatorDetailsTransactionBlsCredentials,
): string {
  return JSON.stringify(
    L1ValidatorDetailsTransactionBlsCredentials$outboundSchema.parse(
      l1ValidatorDetailsTransactionBlsCredentials,
    ),
  );
}

export function l1ValidatorDetailsTransactionBlsCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<
  L1ValidatorDetailsTransactionBlsCredentials,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      L1ValidatorDetailsTransactionBlsCredentials$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'L1ValidatorDetailsTransactionBlsCredentials' from JSON`,
  );
}

/** @internal */
export const L1ValidatorDetailsTransaction$inboundSchema: z.ZodType<
  L1ValidatorDetailsTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  validationId: z.string(),
  validationIdHex: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  weight: z.number(),
  remainingBalance: z.number(),
  balanceChange: z.number().optional(),
  blsCredentials: z.lazy(() =>
    L1ValidatorDetailsTransactionBlsCredentials$inboundSchema
  ).optional(),
});

/** @internal */
export type L1ValidatorDetailsTransaction$Outbound = {
  validationId: string;
  validationIdHex: string;
  nodeId: string;
  subnetId: string;
  weight: number;
  remainingBalance: number;
  balanceChange?: number | undefined;
  blsCredentials?:
    | L1ValidatorDetailsTransactionBlsCredentials$Outbound
    | undefined;
};

/** @internal */
export const L1ValidatorDetailsTransaction$outboundSchema: z.ZodType<
  L1ValidatorDetailsTransaction$Outbound,
  z.ZodTypeDef,
  L1ValidatorDetailsTransaction
> = z.object({
  validationId: z.string(),
  validationIdHex: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  weight: z.number(),
  remainingBalance: z.number(),
  balanceChange: z.number().optional(),
  blsCredentials: z.lazy(() =>
    L1ValidatorDetailsTransactionBlsCredentials$outboundSchema
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace L1ValidatorDetailsTransaction$ {
  /** @deprecated use `L1ValidatorDetailsTransaction$inboundSchema` instead. */
  export const inboundSchema = L1ValidatorDetailsTransaction$inboundSchema;
  /** @deprecated use `L1ValidatorDetailsTransaction$outboundSchema` instead. */
  export const outboundSchema = L1ValidatorDetailsTransaction$outboundSchema;
  /** @deprecated use `L1ValidatorDetailsTransaction$Outbound` instead. */
  export type Outbound = L1ValidatorDetailsTransaction$Outbound;
}

export function l1ValidatorDetailsTransactionToJSON(
  l1ValidatorDetailsTransaction: L1ValidatorDetailsTransaction,
): string {
  return JSON.stringify(
    L1ValidatorDetailsTransaction$outboundSchema.parse(
      l1ValidatorDetailsTransaction,
    ),
  );
}

export function l1ValidatorDetailsTransactionFromJSON(
  jsonString: string,
): SafeParseResult<L1ValidatorDetailsTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => L1ValidatorDetailsTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'L1ValidatorDetailsTransaction' from JSON`,
  );
}
