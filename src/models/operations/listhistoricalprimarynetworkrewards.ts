/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListHistoricalPrimaryNetworkRewardsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListHistoricalPrimaryNetworkRewardsGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type ListHistoricalPrimaryNetworkRewardsRequest = {
  /**
   * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji". Optional, but at least one of addresses or nodeIds is required.
   */
  addresses?: string | undefined;
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
  network?: components.GlobalParamNetwork | undefined;
  /**
   * A comma separated list of node ids to filter by. Optional, but at least one of addresses or nodeIds is required.
   */
  nodeIds?: string | undefined;
  /**
   * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
   */
  sortOrder?: components.SortOrder | undefined;
  /**
   * The currency that return values should use. Defaults to USD.
   */
  currency?: components.CurrencyCode | undefined;
};

export type ListHistoricalPrimaryNetworkRewardsResponse = {
  result: components.ListHistoricalRewardsResponse;
};

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsGlobals$inboundSchema:
  z.ZodType<ListHistoricalPrimaryNetworkRewardsGlobals, z.ZodTypeDef, unknown> =
    z.object({
      network: components.GlobalParamNetwork$inboundSchema.optional(),
    });

/** @internal */
export type ListHistoricalPrimaryNetworkRewardsGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsGlobals$outboundSchema:
  z.ZodType<
    ListHistoricalPrimaryNetworkRewardsGlobals$Outbound,
    z.ZodTypeDef,
    ListHistoricalPrimaryNetworkRewardsGlobals
  > = z.object({
    network: components.GlobalParamNetwork$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHistoricalPrimaryNetworkRewardsGlobals$ {
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsGlobals$inboundSchema` instead. */
  export const inboundSchema =
    ListHistoricalPrimaryNetworkRewardsGlobals$inboundSchema;
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsGlobals$outboundSchema` instead. */
  export const outboundSchema =
    ListHistoricalPrimaryNetworkRewardsGlobals$outboundSchema;
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsGlobals$Outbound` instead. */
  export type Outbound = ListHistoricalPrimaryNetworkRewardsGlobals$Outbound;
}

export function listHistoricalPrimaryNetworkRewardsGlobalsToJSON(
  listHistoricalPrimaryNetworkRewardsGlobals:
    ListHistoricalPrimaryNetworkRewardsGlobals,
): string {
  return JSON.stringify(
    ListHistoricalPrimaryNetworkRewardsGlobals$outboundSchema.parse(
      listHistoricalPrimaryNetworkRewardsGlobals,
    ),
  );
}

export function listHistoricalPrimaryNetworkRewardsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  ListHistoricalPrimaryNetworkRewardsGlobals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListHistoricalPrimaryNetworkRewardsGlobals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListHistoricalPrimaryNetworkRewardsGlobals' from JSON`,
  );
}

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema:
  z.ZodType<ListHistoricalPrimaryNetworkRewardsRequest, z.ZodTypeDef, unknown> =
    z.object({
      addresses: z.string().optional(),
      pageToken: z.string().optional(),
      pageSize: z.number().int().default(10),
      network: components.GlobalParamNetwork$inboundSchema.optional(),
      nodeIds: z.string().optional(),
      sortOrder: components.SortOrder$inboundSchema.optional(),
      currency: components.CurrencyCode$inboundSchema.optional(),
    });

/** @internal */
export type ListHistoricalPrimaryNetworkRewardsRequest$Outbound = {
  addresses?: string | undefined;
  pageToken?: string | undefined;
  pageSize: number;
  network?: string | undefined;
  nodeIds?: string | undefined;
  sortOrder?: string | undefined;
  currency?: string | undefined;
};

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema:
  z.ZodType<
    ListHistoricalPrimaryNetworkRewardsRequest$Outbound,
    z.ZodTypeDef,
    ListHistoricalPrimaryNetworkRewardsRequest
  > = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.GlobalParamNetwork$outboundSchema.optional(),
    nodeIds: z.string().optional(),
    sortOrder: components.SortOrder$outboundSchema.optional(),
    currency: components.CurrencyCode$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHistoricalPrimaryNetworkRewardsRequest$ {
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema;
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema;
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsRequest$Outbound` instead. */
  export type Outbound = ListHistoricalPrimaryNetworkRewardsRequest$Outbound;
}

export function listHistoricalPrimaryNetworkRewardsRequestToJSON(
  listHistoricalPrimaryNetworkRewardsRequest:
    ListHistoricalPrimaryNetworkRewardsRequest,
): string {
  return JSON.stringify(
    ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema.parse(
      listHistoricalPrimaryNetworkRewardsRequest,
    ),
  );
}

export function listHistoricalPrimaryNetworkRewardsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListHistoricalPrimaryNetworkRewardsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListHistoricalPrimaryNetworkRewardsRequest' from JSON`,
  );
}

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsResponse$inboundSchema:
  z.ZodType<
    ListHistoricalPrimaryNetworkRewardsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Result: components.ListHistoricalRewardsResponse$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Result": "result",
    });
  });

/** @internal */
export type ListHistoricalPrimaryNetworkRewardsResponse$Outbound = {
  Result: components.ListHistoricalRewardsResponse$Outbound;
};

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsResponse$outboundSchema:
  z.ZodType<
    ListHistoricalPrimaryNetworkRewardsResponse$Outbound,
    z.ZodTypeDef,
    ListHistoricalPrimaryNetworkRewardsResponse
  > = z.object({
    result: components.ListHistoricalRewardsResponse$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHistoricalPrimaryNetworkRewardsResponse$ {
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListHistoricalPrimaryNetworkRewardsResponse$inboundSchema;
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListHistoricalPrimaryNetworkRewardsResponse$outboundSchema;
  /** @deprecated use `ListHistoricalPrimaryNetworkRewardsResponse$Outbound` instead. */
  export type Outbound = ListHistoricalPrimaryNetworkRewardsResponse$Outbound;
}

export function listHistoricalPrimaryNetworkRewardsResponseToJSON(
  listHistoricalPrimaryNetworkRewardsResponse:
    ListHistoricalPrimaryNetworkRewardsResponse,
): string {
  return JSON.stringify(
    ListHistoricalPrimaryNetworkRewardsResponse$outboundSchema.parse(
      listHistoricalPrimaryNetworkRewardsResponse,
    ),
  );
}

export function listHistoricalPrimaryNetworkRewardsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ListHistoricalPrimaryNetworkRewardsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListHistoricalPrimaryNetworkRewardsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListHistoricalPrimaryNetworkRewardsResponse' from JSON`,
  );
}
