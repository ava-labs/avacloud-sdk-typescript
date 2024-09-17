/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export const ListPrimaryNetworkBlocksByNodeIdServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListPrimaryNetworkBlocksByNodeIdGlobals = {
  /**
   * A supported network type mainnet or a testnet.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type ListPrimaryNetworkBlocksByNodeIdRequest = {
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
  blockchainId: components.BlockchainId;
  /**
   * Either mainnet or a testnet.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * A primary network (P or X chain) nodeId.
   */
  nodeId: string;
};

export type ListPrimaryNetworkBlocksByNodeIdResponse = {
  result: components.ListPrimaryNetworkBlocksResponse;
};

/** @internal */
export const ListPrimaryNetworkBlocksByNodeIdGlobals$inboundSchema: z.ZodType<
  ListPrimaryNetworkBlocksByNodeIdGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type ListPrimaryNetworkBlocksByNodeIdGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const ListPrimaryNetworkBlocksByNodeIdGlobals$outboundSchema: z.ZodType<
  ListPrimaryNetworkBlocksByNodeIdGlobals$Outbound,
  z.ZodTypeDef,
  ListPrimaryNetworkBlocksByNodeIdGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPrimaryNetworkBlocksByNodeIdGlobals$ {
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdGlobals$inboundSchema` instead. */
  export const inboundSchema =
    ListPrimaryNetworkBlocksByNodeIdGlobals$inboundSchema;
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdGlobals$outboundSchema` instead. */
  export const outboundSchema =
    ListPrimaryNetworkBlocksByNodeIdGlobals$outboundSchema;
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdGlobals$Outbound` instead. */
  export type Outbound = ListPrimaryNetworkBlocksByNodeIdGlobals$Outbound;
}

/** @internal */
export const ListPrimaryNetworkBlocksByNodeIdRequest$inboundSchema: z.ZodType<
  ListPrimaryNetworkBlocksByNodeIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  blockchainId: components.BlockchainId$inboundSchema,
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  nodeId: z.string(),
});

/** @internal */
export type ListPrimaryNetworkBlocksByNodeIdRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  blockchainId: string;
  network?: string | undefined;
  nodeId: string;
};

/** @internal */
export const ListPrimaryNetworkBlocksByNodeIdRequest$outboundSchema: z.ZodType<
  ListPrimaryNetworkBlocksByNodeIdRequest$Outbound,
  z.ZodTypeDef,
  ListPrimaryNetworkBlocksByNodeIdRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  blockchainId: components.BlockchainId$outboundSchema,
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  nodeId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPrimaryNetworkBlocksByNodeIdRequest$ {
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListPrimaryNetworkBlocksByNodeIdRequest$inboundSchema;
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListPrimaryNetworkBlocksByNodeIdRequest$outboundSchema;
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdRequest$Outbound` instead. */
  export type Outbound = ListPrimaryNetworkBlocksByNodeIdRequest$Outbound;
}

/** @internal */
export const ListPrimaryNetworkBlocksByNodeIdResponse$inboundSchema: z.ZodType<
  ListPrimaryNetworkBlocksByNodeIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListPrimaryNetworkBlocksResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListPrimaryNetworkBlocksByNodeIdResponse$Outbound = {
  Result: components.ListPrimaryNetworkBlocksResponse$Outbound;
};

/** @internal */
export const ListPrimaryNetworkBlocksByNodeIdResponse$outboundSchema: z.ZodType<
  ListPrimaryNetworkBlocksByNodeIdResponse$Outbound,
  z.ZodTypeDef,
  ListPrimaryNetworkBlocksByNodeIdResponse
> = z.object({
  result: components.ListPrimaryNetworkBlocksResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPrimaryNetworkBlocksByNodeIdResponse$ {
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListPrimaryNetworkBlocksByNodeIdResponse$inboundSchema;
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListPrimaryNetworkBlocksByNodeIdResponse$outboundSchema;
  /** @deprecated use `ListPrimaryNetworkBlocksByNodeIdResponse$Outbound` instead. */
  export type Outbound = ListPrimaryNetworkBlocksByNodeIdResponse$Outbound;
}
