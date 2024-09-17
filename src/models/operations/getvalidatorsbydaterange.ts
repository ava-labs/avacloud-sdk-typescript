/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export const GetValidatorsByDateRangeServerList = [
  "https://popsicle-api.avax.network",
] as const;

export type GetValidatorsByDateRangeRequest = {
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
   * The subnet ID to filter by. If not provided, then all subnets will be returned.
   */
  subnetId: string;
  /**
   * mainnet or testnet.
   */
  network?: components.NetworkType | undefined;
};

export type GetValidatorsByDateRangeResponse = {
  result: components.PChainLookingGlassResponse;
};

/** @internal */
export const GetValidatorsByDateRangeRequest$inboundSchema: z.ZodType<
  GetValidatorsByDateRangeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  subnetId: z.string(),
  network: components.NetworkType$inboundSchema.optional(),
});

/** @internal */
export type GetValidatorsByDateRangeRequest$Outbound = {
  startTimestamp?: number | undefined;
  endTimestamp?: number | undefined;
  pageToken?: string | undefined;
  pageSize: number;
  subnetId: string;
  network?: string | undefined;
};

/** @internal */
export const GetValidatorsByDateRangeRequest$outboundSchema: z.ZodType<
  GetValidatorsByDateRangeRequest$Outbound,
  z.ZodTypeDef,
  GetValidatorsByDateRangeRequest
> = z.object({
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  subnetId: z.string(),
  network: components.NetworkType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetValidatorsByDateRangeRequest$ {
  /** @deprecated use `GetValidatorsByDateRangeRequest$inboundSchema` instead. */
  export const inboundSchema = GetValidatorsByDateRangeRequest$inboundSchema;
  /** @deprecated use `GetValidatorsByDateRangeRequest$outboundSchema` instead. */
  export const outboundSchema = GetValidatorsByDateRangeRequest$outboundSchema;
  /** @deprecated use `GetValidatorsByDateRangeRequest$Outbound` instead. */
  export type Outbound = GetValidatorsByDateRangeRequest$Outbound;
}

/** @internal */
export const GetValidatorsByDateRangeResponse$inboundSchema: z.ZodType<
  GetValidatorsByDateRangeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.PChainLookingGlassResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetValidatorsByDateRangeResponse$Outbound = {
  Result: components.PChainLookingGlassResponse$Outbound;
};

/** @internal */
export const GetValidatorsByDateRangeResponse$outboundSchema: z.ZodType<
  GetValidatorsByDateRangeResponse$Outbound,
  z.ZodTypeDef,
  GetValidatorsByDateRangeResponse
> = z.object({
  result: components.PChainLookingGlassResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetValidatorsByDateRangeResponse$ {
  /** @deprecated use `GetValidatorsByDateRangeResponse$inboundSchema` instead. */
  export const inboundSchema = GetValidatorsByDateRangeResponse$inboundSchema;
  /** @deprecated use `GetValidatorsByDateRangeResponse$outboundSchema` instead. */
  export const outboundSchema = GetValidatorsByDateRangeResponse$outboundSchema;
  /** @deprecated use `GetValidatorsByDateRangeResponse$Outbound` instead. */
  export type Outbound = GetValidatorsByDateRangeResponse$Outbound;
}
