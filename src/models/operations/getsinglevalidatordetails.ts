/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export const GetSingleValidatorDetailsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetSingleValidatorDetailsGlobals = {
  /**
   * A supported network type mainnet or a testnet.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type GetSingleValidatorDetailsRequest = {
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
   * A primary network (P or X chain) nodeId.
   */
  nodeId: string;
  /**
   * Validation status of the node.
   */
  validationStatus?: components.ValidationStatusType | undefined;
  /**
   * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
   */
  sortOrder?: components.SortOrder | undefined;
};

export type GetSingleValidatorDetailsResponse = {
  result: components.ListValidatorDetailsResponse;
};

/** @internal */
export const GetSingleValidatorDetailsGlobals$inboundSchema: z.ZodType<
  GetSingleValidatorDetailsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetSingleValidatorDetailsGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const GetSingleValidatorDetailsGlobals$outboundSchema: z.ZodType<
  GetSingleValidatorDetailsGlobals$Outbound,
  z.ZodTypeDef,
  GetSingleValidatorDetailsGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSingleValidatorDetailsGlobals$ {
  /** @deprecated use `GetSingleValidatorDetailsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetSingleValidatorDetailsGlobals$inboundSchema;
  /** @deprecated use `GetSingleValidatorDetailsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetSingleValidatorDetailsGlobals$outboundSchema;
  /** @deprecated use `GetSingleValidatorDetailsGlobals$Outbound` instead. */
  export type Outbound = GetSingleValidatorDetailsGlobals$Outbound;
}

/** @internal */
export const GetSingleValidatorDetailsRequest$inboundSchema: z.ZodType<
  GetSingleValidatorDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  nodeId: z.string(),
  validationStatus: components.ValidationStatusType$inboundSchema.optional(),
  sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type GetSingleValidatorDetailsRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  network?: string | undefined;
  nodeId: string;
  validationStatus?: string | undefined;
  sortOrder?: string | undefined;
};

/** @internal */
export const GetSingleValidatorDetailsRequest$outboundSchema: z.ZodType<
  GetSingleValidatorDetailsRequest$Outbound,
  z.ZodTypeDef,
  GetSingleValidatorDetailsRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  nodeId: z.string(),
  validationStatus: components.ValidationStatusType$outboundSchema.optional(),
  sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSingleValidatorDetailsRequest$ {
  /** @deprecated use `GetSingleValidatorDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = GetSingleValidatorDetailsRequest$inboundSchema;
  /** @deprecated use `GetSingleValidatorDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = GetSingleValidatorDetailsRequest$outboundSchema;
  /** @deprecated use `GetSingleValidatorDetailsRequest$Outbound` instead. */
  export type Outbound = GetSingleValidatorDetailsRequest$Outbound;
}

/** @internal */
export const GetSingleValidatorDetailsResponse$inboundSchema: z.ZodType<
  GetSingleValidatorDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListValidatorDetailsResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetSingleValidatorDetailsResponse$Outbound = {
  Result: components.ListValidatorDetailsResponse$Outbound;
};

/** @internal */
export const GetSingleValidatorDetailsResponse$outboundSchema: z.ZodType<
  GetSingleValidatorDetailsResponse$Outbound,
  z.ZodTypeDef,
  GetSingleValidatorDetailsResponse
> = z.object({
  result: components.ListValidatorDetailsResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSingleValidatorDetailsResponse$ {
  /** @deprecated use `GetSingleValidatorDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = GetSingleValidatorDetailsResponse$inboundSchema;
  /** @deprecated use `GetSingleValidatorDetailsResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetSingleValidatorDetailsResponse$outboundSchema;
  /** @deprecated use `GetSingleValidatorDetailsResponse$Outbound` instead. */
  export type Outbound = GetSingleValidatorDetailsResponse$Outbound;
}
