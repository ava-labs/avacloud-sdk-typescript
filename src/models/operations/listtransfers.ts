/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListTransfersServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListTransfersGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type ListTransfersRequest = {
  /**
   * The block range start number, inclusive. If endBlock is not defined when startBlock is defined, the end of the range will be the most recent block.
   */
  startBlock?: number | undefined;
  /**
   * The block range end number, exclusive. If startBlock is not defined when endBlock is defined, the start of the range will be the genesis block.
   */
  endBlock?: number | undefined;
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
  /**
   * A wallet address.
   */
  address: string;
};

export type ListTransfersResponse = {
  result: components.ListTransfersResponse;
};

/** @internal */
export const ListTransfersGlobals$inboundSchema: z.ZodType<
  ListTransfersGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type ListTransfersGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const ListTransfersGlobals$outboundSchema: z.ZodType<
  ListTransfersGlobals$Outbound,
  z.ZodTypeDef,
  ListTransfersGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransfersGlobals$ {
  /** @deprecated use `ListTransfersGlobals$inboundSchema` instead. */
  export const inboundSchema = ListTransfersGlobals$inboundSchema;
  /** @deprecated use `ListTransfersGlobals$outboundSchema` instead. */
  export const outboundSchema = ListTransfersGlobals$outboundSchema;
  /** @deprecated use `ListTransfersGlobals$Outbound` instead. */
  export type Outbound = ListTransfersGlobals$Outbound;
}

export function listTransfersGlobalsToJSON(
  listTransfersGlobals: ListTransfersGlobals,
): string {
  return JSON.stringify(
    ListTransfersGlobals$outboundSchema.parse(listTransfersGlobals),
  );
}

export function listTransfersGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListTransfersGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransfersGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransfersGlobals' from JSON`,
  );
}

/** @internal */
export const ListTransfersRequest$inboundSchema: z.ZodType<
  ListTransfersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  startBlock: z.number().optional(),
  endBlock: z.number().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  chainId: z.string().optional(),
  address: z.string(),
});

/** @internal */
export type ListTransfersRequest$Outbound = {
  startBlock?: number | undefined;
  endBlock?: number | undefined;
  pageToken?: string | undefined;
  pageSize: number;
  chainId?: string | undefined;
  address: string;
};

/** @internal */
export const ListTransfersRequest$outboundSchema: z.ZodType<
  ListTransfersRequest$Outbound,
  z.ZodTypeDef,
  ListTransfersRequest
> = z.object({
  startBlock: z.number().optional(),
  endBlock: z.number().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  chainId: z.string().optional(),
  address: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransfersRequest$ {
  /** @deprecated use `ListTransfersRequest$inboundSchema` instead. */
  export const inboundSchema = ListTransfersRequest$inboundSchema;
  /** @deprecated use `ListTransfersRequest$outboundSchema` instead. */
  export const outboundSchema = ListTransfersRequest$outboundSchema;
  /** @deprecated use `ListTransfersRequest$Outbound` instead. */
  export type Outbound = ListTransfersRequest$Outbound;
}

export function listTransfersRequestToJSON(
  listTransfersRequest: ListTransfersRequest,
): string {
  return JSON.stringify(
    ListTransfersRequest$outboundSchema.parse(listTransfersRequest),
  );
}

export function listTransfersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTransfersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransfersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransfersRequest' from JSON`,
  );
}

/** @internal */
export const ListTransfersResponse$inboundSchema: z.ZodType<
  ListTransfersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListTransfersResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListTransfersResponse$Outbound = {
  Result: components.ListTransfersResponse$Outbound;
};

/** @internal */
export const ListTransfersResponse$outboundSchema: z.ZodType<
  ListTransfersResponse$Outbound,
  z.ZodTypeDef,
  ListTransfersResponse
> = z.object({
  result: components.ListTransfersResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransfersResponse$ {
  /** @deprecated use `ListTransfersResponse$inboundSchema` instead. */
  export const inboundSchema = ListTransfersResponse$inboundSchema;
  /** @deprecated use `ListTransfersResponse$outboundSchema` instead. */
  export const outboundSchema = ListTransfersResponse$outboundSchema;
  /** @deprecated use `ListTransfersResponse$Outbound` instead. */
  export type Outbound = ListTransfersResponse$Outbound;
}

export function listTransfersResponseToJSON(
  listTransfersResponse: ListTransfersResponse,
): string {
  return JSON.stringify(
    ListTransfersResponse$outboundSchema.parse(listTransfersResponse),
  );
}

export function listTransfersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListTransfersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransfersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransfersResponse' from JSON`,
  );
}
