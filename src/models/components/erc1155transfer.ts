/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Erc1155Token,
  Erc1155Token$inboundSchema,
  Erc1155Token$Outbound,
  Erc1155Token$outboundSchema,
} from "./erc1155token.js";
import {
  RichAddress,
  RichAddress$inboundSchema,
  RichAddress$Outbound,
  RichAddress$outboundSchema,
} from "./richaddress.js";

export type Erc1155Transfer = {
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
   * The transaction hash identifier.
   */
  txHash: string;
  from: RichAddress;
  to: RichAddress;
  logIndex: number;
  value: string;
  erc1155Token: Erc1155Token;
};

/** @internal */
export const Erc1155Transfer$inboundSchema: z.ZodType<
  Erc1155Transfer,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  blockHash: z.string(),
  txHash: z.string(),
  from: RichAddress$inboundSchema,
  to: RichAddress$inboundSchema,
  logIndex: z.number(),
  value: z.string(),
  erc1155Token: Erc1155Token$inboundSchema,
});

/** @internal */
export type Erc1155Transfer$Outbound = {
  blockNumber: string;
  blockTimestamp: number;
  blockHash: string;
  txHash: string;
  from: RichAddress$Outbound;
  to: RichAddress$Outbound;
  logIndex: number;
  value: string;
  erc1155Token: Erc1155Token$Outbound;
};

/** @internal */
export const Erc1155Transfer$outboundSchema: z.ZodType<
  Erc1155Transfer$Outbound,
  z.ZodTypeDef,
  Erc1155Transfer
> = z.object({
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  blockHash: z.string(),
  txHash: z.string(),
  from: RichAddress$outboundSchema,
  to: RichAddress$outboundSchema,
  logIndex: z.number(),
  value: z.string(),
  erc1155Token: Erc1155Token$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc1155Transfer$ {
  /** @deprecated use `Erc1155Transfer$inboundSchema` instead. */
  export const inboundSchema = Erc1155Transfer$inboundSchema;
  /** @deprecated use `Erc1155Transfer$outboundSchema` instead. */
  export const outboundSchema = Erc1155Transfer$outboundSchema;
  /** @deprecated use `Erc1155Transfer$Outbound` instead. */
  export type Outbound = Erc1155Transfer$Outbound;
}

export function erc1155TransferToJSON(
  erc1155Transfer: Erc1155Transfer,
): string {
  return JSON.stringify(Erc1155Transfer$outboundSchema.parse(erc1155Transfer));
}

export function erc1155TransferFromJSON(
  jsonString: string,
): SafeParseResult<Erc1155Transfer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Erc1155Transfer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Erc1155Transfer' from JSON`,
  );
}
