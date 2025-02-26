/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IcmSourceTransaction = {
  txHash: string;
  timestamp: number;
  gasSpent: string;
};

/** @internal */
export const IcmSourceTransaction$inboundSchema: z.ZodType<
  IcmSourceTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  timestamp: z.number(),
  gasSpent: z.string(),
});

/** @internal */
export type IcmSourceTransaction$Outbound = {
  txHash: string;
  timestamp: number;
  gasSpent: string;
};

/** @internal */
export const IcmSourceTransaction$outboundSchema: z.ZodType<
  IcmSourceTransaction$Outbound,
  z.ZodTypeDef,
  IcmSourceTransaction
> = z.object({
  txHash: z.string(),
  timestamp: z.number(),
  gasSpent: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IcmSourceTransaction$ {
  /** @deprecated use `IcmSourceTransaction$inboundSchema` instead. */
  export const inboundSchema = IcmSourceTransaction$inboundSchema;
  /** @deprecated use `IcmSourceTransaction$outboundSchema` instead. */
  export const outboundSchema = IcmSourceTransaction$outboundSchema;
  /** @deprecated use `IcmSourceTransaction$Outbound` instead. */
  export type Outbound = IcmSourceTransaction$Outbound;
}

export function icmSourceTransactionToJSON(
  icmSourceTransaction: IcmSourceTransaction,
): string {
  return JSON.stringify(
    IcmSourceTransaction$outboundSchema.parse(icmSourceTransaction),
  );
}

export function icmSourceTransactionFromJSON(
  jsonString: string,
): SafeParseResult<IcmSourceTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IcmSourceTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IcmSourceTransaction' from JSON`,
  );
}
