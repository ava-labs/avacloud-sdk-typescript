/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListSubnetsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListSubnetsGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type ListSubnetsRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 10000.
   */
  pageSize?: number | undefined;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
   */
  sortOrder?: components.SortOrder | undefined;
};

export type ListSubnetsResponse = {
  result: components.ListSubnetsResponse;
};

/** @internal */
export const ListSubnetsGlobals$inboundSchema: z.ZodType<
  ListSubnetsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type ListSubnetsGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const ListSubnetsGlobals$outboundSchema: z.ZodType<
  ListSubnetsGlobals$Outbound,
  z.ZodTypeDef,
  ListSubnetsGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSubnetsGlobals$ {
  /** @deprecated use `ListSubnetsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListSubnetsGlobals$inboundSchema;
  /** @deprecated use `ListSubnetsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListSubnetsGlobals$outboundSchema;
  /** @deprecated use `ListSubnetsGlobals$Outbound` instead. */
  export type Outbound = ListSubnetsGlobals$Outbound;
}

export function listSubnetsGlobalsToJSON(
  listSubnetsGlobals: ListSubnetsGlobals,
): string {
  return JSON.stringify(
    ListSubnetsGlobals$outboundSchema.parse(listSubnetsGlobals),
  );
}

export function listSubnetsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListSubnetsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSubnetsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSubnetsGlobals' from JSON`,
  );
}

/** @internal */
export const ListSubnetsRequest$inboundSchema: z.ZodType<
  ListSubnetsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(100),
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type ListSubnetsRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  network?: string | undefined;
  sortOrder?: string | undefined;
};

/** @internal */
export const ListSubnetsRequest$outboundSchema: z.ZodType<
  ListSubnetsRequest$Outbound,
  z.ZodTypeDef,
  ListSubnetsRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(100),
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSubnetsRequest$ {
  /** @deprecated use `ListSubnetsRequest$inboundSchema` instead. */
  export const inboundSchema = ListSubnetsRequest$inboundSchema;
  /** @deprecated use `ListSubnetsRequest$outboundSchema` instead. */
  export const outboundSchema = ListSubnetsRequest$outboundSchema;
  /** @deprecated use `ListSubnetsRequest$Outbound` instead. */
  export type Outbound = ListSubnetsRequest$Outbound;
}

export function listSubnetsRequestToJSON(
  listSubnetsRequest: ListSubnetsRequest,
): string {
  return JSON.stringify(
    ListSubnetsRequest$outboundSchema.parse(listSubnetsRequest),
  );
}

export function listSubnetsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListSubnetsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSubnetsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSubnetsRequest' from JSON`,
  );
}

/** @internal */
export const ListSubnetsResponse$inboundSchema: z.ZodType<
  ListSubnetsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListSubnetsResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListSubnetsResponse$Outbound = {
  Result: components.ListSubnetsResponse$Outbound;
};

/** @internal */
export const ListSubnetsResponse$outboundSchema: z.ZodType<
  ListSubnetsResponse$Outbound,
  z.ZodTypeDef,
  ListSubnetsResponse
> = z.object({
  result: components.ListSubnetsResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSubnetsResponse$ {
  /** @deprecated use `ListSubnetsResponse$inboundSchema` instead. */
  export const inboundSchema = ListSubnetsResponse$inboundSchema;
  /** @deprecated use `ListSubnetsResponse$outboundSchema` instead. */
  export const outboundSchema = ListSubnetsResponse$outboundSchema;
  /** @deprecated use `ListSubnetsResponse$Outbound` instead. */
  export type Outbound = ListSubnetsResponse$Outbound;
}

export function listSubnetsResponseToJSON(
  listSubnetsResponse: ListSubnetsResponse,
): string {
  return JSON.stringify(
    ListSubnetsResponse$outboundSchema.parse(listSubnetsResponse),
  );
}

export function listSubnetsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListSubnetsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSubnetsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSubnetsResponse' from JSON`,
  );
}
