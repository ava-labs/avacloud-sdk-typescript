/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export const GetAddressesByBalanceOverTimeServerList = [
  "https://metrics.avax.network",
] as const;

export type GetAddressesByBalanceOverTimeGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetAddressesByBalanceOverTimeRequest = {
  /**
   * The minimum balance for which addresses should be considered.
   */
  threshold: string;
  /**
   * Query param for retrieving items after a specific timestamp.
   */
  startTimestamp?: number | undefined;
  /**
   * Query param for retrieving items before a specific timestamp.
   */
  endTimestamp?: number | undefined;
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

export type GetAddressesByBalanceOverTimeResponse = {
  result: components.LookingGlassResponse;
};

/** @internal */
export const GetAddressesByBalanceOverTimeGlobals$inboundSchema: z.ZodType<
  GetAddressesByBalanceOverTimeGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetAddressesByBalanceOverTimeGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetAddressesByBalanceOverTimeGlobals$outboundSchema: z.ZodType<
  GetAddressesByBalanceOverTimeGlobals$Outbound,
  z.ZodTypeDef,
  GetAddressesByBalanceOverTimeGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddressesByBalanceOverTimeGlobals$ {
  /** @deprecated use `GetAddressesByBalanceOverTimeGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetAddressesByBalanceOverTimeGlobals$inboundSchema;
  /** @deprecated use `GetAddressesByBalanceOverTimeGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetAddressesByBalanceOverTimeGlobals$outboundSchema;
  /** @deprecated use `GetAddressesByBalanceOverTimeGlobals$Outbound` instead. */
  export type Outbound = GetAddressesByBalanceOverTimeGlobals$Outbound;
}

/** @internal */
export const GetAddressesByBalanceOverTimeRequest$inboundSchema: z.ZodType<
  GetAddressesByBalanceOverTimeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  threshold: z.string(),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  chainId: z.string().optional(),
  address: z.string(),
});

/** @internal */
export type GetAddressesByBalanceOverTimeRequest$Outbound = {
  threshold: string;
  startTimestamp?: number | undefined;
  endTimestamp?: number | undefined;
  pageToken?: string | undefined;
  pageSize: number;
  chainId?: string | undefined;
  address: string;
};

/** @internal */
export const GetAddressesByBalanceOverTimeRequest$outboundSchema: z.ZodType<
  GetAddressesByBalanceOverTimeRequest$Outbound,
  z.ZodTypeDef,
  GetAddressesByBalanceOverTimeRequest
> = z.object({
  threshold: z.string(),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  chainId: z.string().optional(),
  address: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddressesByBalanceOverTimeRequest$ {
  /** @deprecated use `GetAddressesByBalanceOverTimeRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetAddressesByBalanceOverTimeRequest$inboundSchema;
  /** @deprecated use `GetAddressesByBalanceOverTimeRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetAddressesByBalanceOverTimeRequest$outboundSchema;
  /** @deprecated use `GetAddressesByBalanceOverTimeRequest$Outbound` instead. */
  export type Outbound = GetAddressesByBalanceOverTimeRequest$Outbound;
}

/** @internal */
export const GetAddressesByBalanceOverTimeResponse$inboundSchema: z.ZodType<
  GetAddressesByBalanceOverTimeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.LookingGlassResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetAddressesByBalanceOverTimeResponse$Outbound = {
  Result: components.LookingGlassResponse$Outbound;
};

/** @internal */
export const GetAddressesByBalanceOverTimeResponse$outboundSchema: z.ZodType<
  GetAddressesByBalanceOverTimeResponse$Outbound,
  z.ZodTypeDef,
  GetAddressesByBalanceOverTimeResponse
> = z.object({
  result: components.LookingGlassResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddressesByBalanceOverTimeResponse$ {
  /** @deprecated use `GetAddressesByBalanceOverTimeResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetAddressesByBalanceOverTimeResponse$inboundSchema;
  /** @deprecated use `GetAddressesByBalanceOverTimeResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetAddressesByBalanceOverTimeResponse$outboundSchema;
  /** @deprecated use `GetAddressesByBalanceOverTimeResponse$Outbound` instead. */
  export type Outbound = GetAddressesByBalanceOverTimeResponse$Outbound;
}
