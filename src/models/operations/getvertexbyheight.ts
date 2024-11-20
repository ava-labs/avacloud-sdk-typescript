/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetVertexByHeightServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetVertexByHeightGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type GetVertexByHeightRequest = {
  /**
   * The height of a vertex.
   */
  vertexHeight: number;
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * A primary network blockchain id or alias.
   */
  blockchainId: components.XChainId;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
   */
  sortOrder?: components.SortOrder | undefined;
};

export type GetVertexByHeightResponse = {
  result: components.ListXChainVerticesResponse;
};

/** @internal */
export const GetVertexByHeightGlobals$inboundSchema: z.ZodType<
  GetVertexByHeightGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetVertexByHeightGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const GetVertexByHeightGlobals$outboundSchema: z.ZodType<
  GetVertexByHeightGlobals$Outbound,
  z.ZodTypeDef,
  GetVertexByHeightGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVertexByHeightGlobals$ {
  /** @deprecated use `GetVertexByHeightGlobals$inboundSchema` instead. */
  export const inboundSchema = GetVertexByHeightGlobals$inboundSchema;
  /** @deprecated use `GetVertexByHeightGlobals$outboundSchema` instead. */
  export const outboundSchema = GetVertexByHeightGlobals$outboundSchema;
  /** @deprecated use `GetVertexByHeightGlobals$Outbound` instead. */
  export type Outbound = GetVertexByHeightGlobals$Outbound;
}

export function getVertexByHeightGlobalsToJSON(
  getVertexByHeightGlobals: GetVertexByHeightGlobals,
): string {
  return JSON.stringify(
    GetVertexByHeightGlobals$outboundSchema.parse(getVertexByHeightGlobals),
  );
}

export function getVertexByHeightGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetVertexByHeightGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetVertexByHeightGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetVertexByHeightGlobals' from JSON`,
  );
}

/** @internal */
export const GetVertexByHeightRequest$inboundSchema: z.ZodType<
  GetVertexByHeightRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  vertexHeight: z.number().int(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  blockchainId: components.XChainId$inboundSchema,
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type GetVertexByHeightRequest$Outbound = {
  vertexHeight: number;
  pageToken?: string | undefined;
  pageSize: number;
  blockchainId: string;
  network?: string | undefined;
  sortOrder?: string | undefined;
};

/** @internal */
export const GetVertexByHeightRequest$outboundSchema: z.ZodType<
  GetVertexByHeightRequest$Outbound,
  z.ZodTypeDef,
  GetVertexByHeightRequest
> = z.object({
  vertexHeight: z.number().int(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  blockchainId: components.XChainId$outboundSchema,
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVertexByHeightRequest$ {
  /** @deprecated use `GetVertexByHeightRequest$inboundSchema` instead. */
  export const inboundSchema = GetVertexByHeightRequest$inboundSchema;
  /** @deprecated use `GetVertexByHeightRequest$outboundSchema` instead. */
  export const outboundSchema = GetVertexByHeightRequest$outboundSchema;
  /** @deprecated use `GetVertexByHeightRequest$Outbound` instead. */
  export type Outbound = GetVertexByHeightRequest$Outbound;
}

export function getVertexByHeightRequestToJSON(
  getVertexByHeightRequest: GetVertexByHeightRequest,
): string {
  return JSON.stringify(
    GetVertexByHeightRequest$outboundSchema.parse(getVertexByHeightRequest),
  );
}

export function getVertexByHeightRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetVertexByHeightRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetVertexByHeightRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetVertexByHeightRequest' from JSON`,
  );
}

/** @internal */
export const GetVertexByHeightResponse$inboundSchema: z.ZodType<
  GetVertexByHeightResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListXChainVerticesResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetVertexByHeightResponse$Outbound = {
  Result: components.ListXChainVerticesResponse$Outbound;
};

/** @internal */
export const GetVertexByHeightResponse$outboundSchema: z.ZodType<
  GetVertexByHeightResponse$Outbound,
  z.ZodTypeDef,
  GetVertexByHeightResponse
> = z.object({
  result: components.ListXChainVerticesResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVertexByHeightResponse$ {
  /** @deprecated use `GetVertexByHeightResponse$inboundSchema` instead. */
  export const inboundSchema = GetVertexByHeightResponse$inboundSchema;
  /** @deprecated use `GetVertexByHeightResponse$outboundSchema` instead. */
  export const outboundSchema = GetVertexByHeightResponse$outboundSchema;
  /** @deprecated use `GetVertexByHeightResponse$Outbound` instead. */
  export type Outbound = GetVertexByHeightResponse$Outbound;
}

export function getVertexByHeightResponseToJSON(
  getVertexByHeightResponse: GetVertexByHeightResponse,
): string {
  return JSON.stringify(
    GetVertexByHeightResponse$outboundSchema.parse(getVertexByHeightResponse),
  );
}

export function getVertexByHeightResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetVertexByHeightResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetVertexByHeightResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetVertexByHeightResponse' from JSON`,
  );
}
