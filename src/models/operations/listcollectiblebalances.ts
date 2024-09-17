/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export const ListCollectibleBalancesServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListCollectibleBalancesGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type ListCollectibleBalancesRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
  /**
   * A wallet address.
   */
  address: string;
  /**
   * A contract addresses to filter by.
   */
  contractAddress?: string | undefined;
};

export type ListCollectibleBalancesResponse = {
  result: components.ListCollectibleBalancesResponse;
};

/** @internal */
export const ListCollectibleBalancesGlobals$inboundSchema: z.ZodType<
  ListCollectibleBalancesGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type ListCollectibleBalancesGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const ListCollectibleBalancesGlobals$outboundSchema: z.ZodType<
  ListCollectibleBalancesGlobals$Outbound,
  z.ZodTypeDef,
  ListCollectibleBalancesGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCollectibleBalancesGlobals$ {
  /** @deprecated use `ListCollectibleBalancesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListCollectibleBalancesGlobals$inboundSchema;
  /** @deprecated use `ListCollectibleBalancesGlobals$outboundSchema` instead. */
  export const outboundSchema = ListCollectibleBalancesGlobals$outboundSchema;
  /** @deprecated use `ListCollectibleBalancesGlobals$Outbound` instead. */
  export type Outbound = ListCollectibleBalancesGlobals$Outbound;
}

/** @internal */
export const ListCollectibleBalancesRequest$inboundSchema: z.ZodType<
  ListCollectibleBalancesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  chainId: z.string().optional(),
  address: z.string(),
  contractAddress: z.string().optional(),
});

/** @internal */
export type ListCollectibleBalancesRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  chainId?: string | undefined;
  address: string;
  contractAddress?: string | undefined;
};

/** @internal */
export const ListCollectibleBalancesRequest$outboundSchema: z.ZodType<
  ListCollectibleBalancesRequest$Outbound,
  z.ZodTypeDef,
  ListCollectibleBalancesRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  chainId: z.string().optional(),
  address: z.string(),
  contractAddress: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCollectibleBalancesRequest$ {
  /** @deprecated use `ListCollectibleBalancesRequest$inboundSchema` instead. */
  export const inboundSchema = ListCollectibleBalancesRequest$inboundSchema;
  /** @deprecated use `ListCollectibleBalancesRequest$outboundSchema` instead. */
  export const outboundSchema = ListCollectibleBalancesRequest$outboundSchema;
  /** @deprecated use `ListCollectibleBalancesRequest$Outbound` instead. */
  export type Outbound = ListCollectibleBalancesRequest$Outbound;
}

/** @internal */
export const ListCollectibleBalancesResponse$inboundSchema: z.ZodType<
  ListCollectibleBalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListCollectibleBalancesResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListCollectibleBalancesResponse$Outbound = {
  Result: components.ListCollectibleBalancesResponse$Outbound;
};

/** @internal */
export const ListCollectibleBalancesResponse$outboundSchema: z.ZodType<
  ListCollectibleBalancesResponse$Outbound,
  z.ZodTypeDef,
  ListCollectibleBalancesResponse
> = z.object({
  result: components.ListCollectibleBalancesResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCollectibleBalancesResponse$ {
  /** @deprecated use `ListCollectibleBalancesResponse$inboundSchema` instead. */
  export const inboundSchema = ListCollectibleBalancesResponse$inboundSchema;
  /** @deprecated use `ListCollectibleBalancesResponse$outboundSchema` instead. */
  export const outboundSchema = ListCollectibleBalancesResponse$outboundSchema;
  /** @deprecated use `ListCollectibleBalancesResponse$Outbound` instead. */
  export type Outbound = ListCollectibleBalancesResponse$Outbound;
}
