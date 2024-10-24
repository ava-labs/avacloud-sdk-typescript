/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export const ReindexNftServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ReindexNftGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type ReindexNftRequest = {
  /**
   * A supported evm chain id or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
  /**
   * Contract address on the relevant chain.
   */
  address: string;
  /**
   * TokenId on the contract
   */
  tokenId: string;
};

/** @internal */
export const ReindexNftGlobals$inboundSchema: z.ZodType<
  ReindexNftGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type ReindexNftGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const ReindexNftGlobals$outboundSchema: z.ZodType<
  ReindexNftGlobals$Outbound,
  z.ZodTypeDef,
  ReindexNftGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReindexNftGlobals$ {
  /** @deprecated use `ReindexNftGlobals$inboundSchema` instead. */
  export const inboundSchema = ReindexNftGlobals$inboundSchema;
  /** @deprecated use `ReindexNftGlobals$outboundSchema` instead. */
  export const outboundSchema = ReindexNftGlobals$outboundSchema;
  /** @deprecated use `ReindexNftGlobals$Outbound` instead. */
  export type Outbound = ReindexNftGlobals$Outbound;
}

/** @internal */
export const ReindexNftRequest$inboundSchema: z.ZodType<
  ReindexNftRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
  address: z.string(),
  tokenId: z.string(),
});

/** @internal */
export type ReindexNftRequest$Outbound = {
  chainId?: string | undefined;
  address: string;
  tokenId: string;
};

/** @internal */
export const ReindexNftRequest$outboundSchema: z.ZodType<
  ReindexNftRequest$Outbound,
  z.ZodTypeDef,
  ReindexNftRequest
> = z.object({
  chainId: z.string().optional(),
  address: z.string(),
  tokenId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReindexNftRequest$ {
  /** @deprecated use `ReindexNftRequest$inboundSchema` instead. */
  export const inboundSchema = ReindexNftRequest$inboundSchema;
  /** @deprecated use `ReindexNftRequest$outboundSchema` instead. */
  export const outboundSchema = ReindexNftRequest$outboundSchema;
  /** @deprecated use `ReindexNftRequest$Outbound` instead. */
  export type Outbound = ReindexNftRequest$Outbound;
}
