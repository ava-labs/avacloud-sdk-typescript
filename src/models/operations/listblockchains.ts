/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export const ListBlockchainsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListBlockchainsGlobals = {
  /**
   * A supported network type mainnet or a testnet.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type ListBlockchainsRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * Either mainnet or a testnet.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
   */
  sortOrder?: components.SortOrder | undefined;
};

export type ListBlockchainsResponse = {
  result: components.ListBlockchainsResponse;
};

/** @internal */
export const ListBlockchainsGlobals$inboundSchema: z.ZodType<
  ListBlockchainsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type ListBlockchainsGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const ListBlockchainsGlobals$outboundSchema: z.ZodType<
  ListBlockchainsGlobals$Outbound,
  z.ZodTypeDef,
  ListBlockchainsGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBlockchainsGlobals$ {
  /** @deprecated use `ListBlockchainsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListBlockchainsGlobals$inboundSchema;
  /** @deprecated use `ListBlockchainsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListBlockchainsGlobals$outboundSchema;
  /** @deprecated use `ListBlockchainsGlobals$Outbound` instead. */
  export type Outbound = ListBlockchainsGlobals$Outbound;
}

/** @internal */
export const ListBlockchainsRequest$inboundSchema: z.ZodType<
  ListBlockchainsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type ListBlockchainsRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  network?: string | undefined;
  sortOrder?: string | undefined;
};

/** @internal */
export const ListBlockchainsRequest$outboundSchema: z.ZodType<
  ListBlockchainsRequest$Outbound,
  z.ZodTypeDef,
  ListBlockchainsRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBlockchainsRequest$ {
  /** @deprecated use `ListBlockchainsRequest$inboundSchema` instead. */
  export const inboundSchema = ListBlockchainsRequest$inboundSchema;
  /** @deprecated use `ListBlockchainsRequest$outboundSchema` instead. */
  export const outboundSchema = ListBlockchainsRequest$outboundSchema;
  /** @deprecated use `ListBlockchainsRequest$Outbound` instead. */
  export type Outbound = ListBlockchainsRequest$Outbound;
}

/** @internal */
export const ListBlockchainsResponse$inboundSchema: z.ZodType<
  ListBlockchainsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListBlockchainsResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListBlockchainsResponse$Outbound = {
  Result: components.ListBlockchainsResponse$Outbound;
};

/** @internal */
export const ListBlockchainsResponse$outboundSchema: z.ZodType<
  ListBlockchainsResponse$Outbound,
  z.ZodTypeDef,
  ListBlockchainsResponse
> = z.object({
  result: components.ListBlockchainsResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBlockchainsResponse$ {
  /** @deprecated use `ListBlockchainsResponse$inboundSchema` instead. */
  export const inboundSchema = ListBlockchainsResponse$inboundSchema;
  /** @deprecated use `ListBlockchainsResponse$outboundSchema` instead. */
  export const outboundSchema = ListBlockchainsResponse$outboundSchema;
  /** @deprecated use `ListBlockchainsResponse$Outbound` instead. */
  export type Outbound = ListBlockchainsResponse$Outbound;
}
