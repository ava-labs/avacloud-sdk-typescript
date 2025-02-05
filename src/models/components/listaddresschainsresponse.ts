/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChainInfo,
  ChainInfo$inboundSchema,
  ChainInfo$Outbound,
  ChainInfo$outboundSchema,
} from "./chaininfo.js";

export type ListAddressChainsResponse = {
  indexedChains?: Array<ChainInfo> | undefined;
  unindexedChains?: Array<string> | undefined;
};

/** @internal */
export const ListAddressChainsResponse$inboundSchema: z.ZodType<
  ListAddressChainsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  indexedChains: z.array(ChainInfo$inboundSchema).optional(),
  unindexedChains: z.array(z.string()).optional(),
});

/** @internal */
export type ListAddressChainsResponse$Outbound = {
  indexedChains?: Array<ChainInfo$Outbound> | undefined;
  unindexedChains?: Array<string> | undefined;
};

/** @internal */
export const ListAddressChainsResponse$outboundSchema: z.ZodType<
  ListAddressChainsResponse$Outbound,
  z.ZodTypeDef,
  ListAddressChainsResponse
> = z.object({
  indexedChains: z.array(ChainInfo$outboundSchema).optional(),
  unindexedChains: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAddressChainsResponse$ {
  /** @deprecated use `ListAddressChainsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAddressChainsResponse$inboundSchema;
  /** @deprecated use `ListAddressChainsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAddressChainsResponse$outboundSchema;
  /** @deprecated use `ListAddressChainsResponse$Outbound` instead. */
  export type Outbound = ListAddressChainsResponse$Outbound;
}

export function listAddressChainsResponseToJSON(
  listAddressChainsResponse: ListAddressChainsResponse,
): string {
  return JSON.stringify(
    ListAddressChainsResponse$outboundSchema.parse(listAddressChainsResponse),
  );
}

export function listAddressChainsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAddressChainsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAddressChainsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAddressChainsResponse' from JSON`,
  );
}
