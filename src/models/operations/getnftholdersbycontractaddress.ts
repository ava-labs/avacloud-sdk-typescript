/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetNftHoldersByContractAddressServerList = [
  "https://metrics.avax.network",
] as const;

export type GetNftHoldersByContractAddressGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetNftHoldersByContractAddressRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 5000.
   */
  pageSize?: number | undefined;
  /**
   * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
  /**
   * Contract address on the relevant chain.
   */
  address: string;
};

export type GetNftHoldersByContractAddressResponse = {
  result: components.NftHoldersResponse;
};

/** @internal */
export const GetNftHoldersByContractAddressGlobals$inboundSchema: z.ZodType<
  GetNftHoldersByContractAddressGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetNftHoldersByContractAddressGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetNftHoldersByContractAddressGlobals$outboundSchema: z.ZodType<
  GetNftHoldersByContractAddressGlobals$Outbound,
  z.ZodTypeDef,
  GetNftHoldersByContractAddressGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNftHoldersByContractAddressGlobals$ {
  /** @deprecated use `GetNftHoldersByContractAddressGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetNftHoldersByContractAddressGlobals$inboundSchema;
  /** @deprecated use `GetNftHoldersByContractAddressGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetNftHoldersByContractAddressGlobals$outboundSchema;
  /** @deprecated use `GetNftHoldersByContractAddressGlobals$Outbound` instead. */
  export type Outbound = GetNftHoldersByContractAddressGlobals$Outbound;
}

export function getNftHoldersByContractAddressGlobalsToJSON(
  getNftHoldersByContractAddressGlobals: GetNftHoldersByContractAddressGlobals,
): string {
  return JSON.stringify(
    GetNftHoldersByContractAddressGlobals$outboundSchema.parse(
      getNftHoldersByContractAddressGlobals,
    ),
  );
}

export function getNftHoldersByContractAddressGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetNftHoldersByContractAddressGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetNftHoldersByContractAddressGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNftHoldersByContractAddressGlobals' from JSON`,
  );
}

/** @internal */
export const GetNftHoldersByContractAddressRequest$inboundSchema: z.ZodType<
  GetNftHoldersByContractAddressRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  chainId: z.string().optional(),
  address: z.string(),
});

/** @internal */
export type GetNftHoldersByContractAddressRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  chainId?: string | undefined;
  address: string;
};

/** @internal */
export const GetNftHoldersByContractAddressRequest$outboundSchema: z.ZodType<
  GetNftHoldersByContractAddressRequest$Outbound,
  z.ZodTypeDef,
  GetNftHoldersByContractAddressRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  chainId: z.string().optional(),
  address: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNftHoldersByContractAddressRequest$ {
  /** @deprecated use `GetNftHoldersByContractAddressRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetNftHoldersByContractAddressRequest$inboundSchema;
  /** @deprecated use `GetNftHoldersByContractAddressRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetNftHoldersByContractAddressRequest$outboundSchema;
  /** @deprecated use `GetNftHoldersByContractAddressRequest$Outbound` instead. */
  export type Outbound = GetNftHoldersByContractAddressRequest$Outbound;
}

export function getNftHoldersByContractAddressRequestToJSON(
  getNftHoldersByContractAddressRequest: GetNftHoldersByContractAddressRequest,
): string {
  return JSON.stringify(
    GetNftHoldersByContractAddressRequest$outboundSchema.parse(
      getNftHoldersByContractAddressRequest,
    ),
  );
}

export function getNftHoldersByContractAddressRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetNftHoldersByContractAddressRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetNftHoldersByContractAddressRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNftHoldersByContractAddressRequest' from JSON`,
  );
}

/** @internal */
export const GetNftHoldersByContractAddressResponse$inboundSchema: z.ZodType<
  GetNftHoldersByContractAddressResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.NftHoldersResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetNftHoldersByContractAddressResponse$Outbound = {
  Result: components.NftHoldersResponse$Outbound;
};

/** @internal */
export const GetNftHoldersByContractAddressResponse$outboundSchema: z.ZodType<
  GetNftHoldersByContractAddressResponse$Outbound,
  z.ZodTypeDef,
  GetNftHoldersByContractAddressResponse
> = z.object({
  result: components.NftHoldersResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNftHoldersByContractAddressResponse$ {
  /** @deprecated use `GetNftHoldersByContractAddressResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetNftHoldersByContractAddressResponse$inboundSchema;
  /** @deprecated use `GetNftHoldersByContractAddressResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetNftHoldersByContractAddressResponse$outboundSchema;
  /** @deprecated use `GetNftHoldersByContractAddressResponse$Outbound` instead. */
  export type Outbound = GetNftHoldersByContractAddressResponse$Outbound;
}

export function getNftHoldersByContractAddressResponseToJSON(
  getNftHoldersByContractAddressResponse:
    GetNftHoldersByContractAddressResponse,
): string {
  return JSON.stringify(
    GetNftHoldersByContractAddressResponse$outboundSchema.parse(
      getNftHoldersByContractAddressResponse,
    ),
  );
}

export function getNftHoldersByContractAddressResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetNftHoldersByContractAddressResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetNftHoldersByContractAddressResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNftHoldersByContractAddressResponse' from JSON`,
  );
}
