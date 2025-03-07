/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type L1ValidatorManagerDetails = {
  blockchainId: string;
  contractAddress: string;
};

/** @internal */
export const L1ValidatorManagerDetails$inboundSchema: z.ZodType<
  L1ValidatorManagerDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockchainId: z.string(),
  contractAddress: z.string(),
});

/** @internal */
export type L1ValidatorManagerDetails$Outbound = {
  blockchainId: string;
  contractAddress: string;
};

/** @internal */
export const L1ValidatorManagerDetails$outboundSchema: z.ZodType<
  L1ValidatorManagerDetails$Outbound,
  z.ZodTypeDef,
  L1ValidatorManagerDetails
> = z.object({
  blockchainId: z.string(),
  contractAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace L1ValidatorManagerDetails$ {
  /** @deprecated use `L1ValidatorManagerDetails$inboundSchema` instead. */
  export const inboundSchema = L1ValidatorManagerDetails$inboundSchema;
  /** @deprecated use `L1ValidatorManagerDetails$outboundSchema` instead. */
  export const outboundSchema = L1ValidatorManagerDetails$outboundSchema;
  /** @deprecated use `L1ValidatorManagerDetails$Outbound` instead. */
  export type Outbound = L1ValidatorManagerDetails$Outbound;
}

export function l1ValidatorManagerDetailsToJSON(
  l1ValidatorManagerDetails: L1ValidatorManagerDetails,
): string {
  return JSON.stringify(
    L1ValidatorManagerDetails$outboundSchema.parse(l1ValidatorManagerDetails),
  );
}

export function l1ValidatorManagerDetailsFromJSON(
  jsonString: string,
): SafeParseResult<L1ValidatorManagerDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => L1ValidatorManagerDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'L1ValidatorManagerDetails' from JSON`,
  );
}
