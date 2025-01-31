/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListAllChainsLatestBlocksServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListAllChainsLatestBlocksRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.Network | undefined;
};

export type ListAllChainsLatestBlocksResponse = {
  result: components.ListEvmBlocksResponse;
};

/** @internal */
export const ListAllChainsLatestBlocksRequest$inboundSchema: z.ZodType<
  ListAllChainsLatestBlocksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  network: components.Network$inboundSchema.optional(),
});

/** @internal */
export type ListAllChainsLatestBlocksRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  network?: string | undefined;
};

/** @internal */
export const ListAllChainsLatestBlocksRequest$outboundSchema: z.ZodType<
  ListAllChainsLatestBlocksRequest$Outbound,
  z.ZodTypeDef,
  ListAllChainsLatestBlocksRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  network: components.Network$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChainsLatestBlocksRequest$ {
  /** @deprecated use `ListAllChainsLatestBlocksRequest$inboundSchema` instead. */
  export const inboundSchema = ListAllChainsLatestBlocksRequest$inboundSchema;
  /** @deprecated use `ListAllChainsLatestBlocksRequest$outboundSchema` instead. */
  export const outboundSchema = ListAllChainsLatestBlocksRequest$outboundSchema;
  /** @deprecated use `ListAllChainsLatestBlocksRequest$Outbound` instead. */
  export type Outbound = ListAllChainsLatestBlocksRequest$Outbound;
}

export function listAllChainsLatestBlocksRequestToJSON(
  listAllChainsLatestBlocksRequest: ListAllChainsLatestBlocksRequest,
): string {
  return JSON.stringify(
    ListAllChainsLatestBlocksRequest$outboundSchema.parse(
      listAllChainsLatestBlocksRequest,
    ),
  );
}

export function listAllChainsLatestBlocksRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAllChainsLatestBlocksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAllChainsLatestBlocksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAllChainsLatestBlocksRequest' from JSON`,
  );
}

/** @internal */
export const ListAllChainsLatestBlocksResponse$inboundSchema: z.ZodType<
  ListAllChainsLatestBlocksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListEvmBlocksResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAllChainsLatestBlocksResponse$Outbound = {
  Result: components.ListEvmBlocksResponse$Outbound;
};

/** @internal */
export const ListAllChainsLatestBlocksResponse$outboundSchema: z.ZodType<
  ListAllChainsLatestBlocksResponse$Outbound,
  z.ZodTypeDef,
  ListAllChainsLatestBlocksResponse
> = z.object({
  result: components.ListEvmBlocksResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAllChainsLatestBlocksResponse$ {
  /** @deprecated use `ListAllChainsLatestBlocksResponse$inboundSchema` instead. */
  export const inboundSchema = ListAllChainsLatestBlocksResponse$inboundSchema;
  /** @deprecated use `ListAllChainsLatestBlocksResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListAllChainsLatestBlocksResponse$outboundSchema;
  /** @deprecated use `ListAllChainsLatestBlocksResponse$Outbound` instead. */
  export type Outbound = ListAllChainsLatestBlocksResponse$Outbound;
}

export function listAllChainsLatestBlocksResponseToJSON(
  listAllChainsLatestBlocksResponse: ListAllChainsLatestBlocksResponse,
): string {
  return JSON.stringify(
    ListAllChainsLatestBlocksResponse$outboundSchema.parse(
      listAllChainsLatestBlocksResponse,
    ),
  );
}

export function listAllChainsLatestBlocksResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAllChainsLatestBlocksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAllChainsLatestBlocksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAllChainsLatestBlocksResponse' from JSON`,
  );
}
