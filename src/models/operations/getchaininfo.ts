/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export const GetChainInfoServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetChainInfoGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetChainInfoRequest = {
  /**
   * A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
};

/** @internal */
export const GetChainInfoGlobals$inboundSchema: z.ZodType<
  GetChainInfoGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetChainInfoGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetChainInfoGlobals$outboundSchema: z.ZodType<
  GetChainInfoGlobals$Outbound,
  z.ZodTypeDef,
  GetChainInfoGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChainInfoGlobals$ {
  /** @deprecated use `GetChainInfoGlobals$inboundSchema` instead. */
  export const inboundSchema = GetChainInfoGlobals$inboundSchema;
  /** @deprecated use `GetChainInfoGlobals$outboundSchema` instead. */
  export const outboundSchema = GetChainInfoGlobals$outboundSchema;
  /** @deprecated use `GetChainInfoGlobals$Outbound` instead. */
  export type Outbound = GetChainInfoGlobals$Outbound;
}

/** @internal */
export const GetChainInfoRequest$inboundSchema: z.ZodType<
  GetChainInfoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetChainInfoRequest$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetChainInfoRequest$outboundSchema: z.ZodType<
  GetChainInfoRequest$Outbound,
  z.ZodTypeDef,
  GetChainInfoRequest
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChainInfoRequest$ {
  /** @deprecated use `GetChainInfoRequest$inboundSchema` instead. */
  export const inboundSchema = GetChainInfoRequest$inboundSchema;
  /** @deprecated use `GetChainInfoRequest$outboundSchema` instead. */
  export const outboundSchema = GetChainInfoRequest$outboundSchema;
  /** @deprecated use `GetChainInfoRequest$Outbound` instead. */
  export type Outbound = GetChainInfoRequest$Outbound;
}
