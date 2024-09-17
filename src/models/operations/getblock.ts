/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export const GetBlockServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetBlockGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetBlockRequest = {
  /**
   * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
  /**
   * A block identifier which is either a block number or the block hash.
   */
  blockId: string;
};

/** @internal */
export const GetBlockGlobals$inboundSchema: z.ZodType<
  GetBlockGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetBlockGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetBlockGlobals$outboundSchema: z.ZodType<
  GetBlockGlobals$Outbound,
  z.ZodTypeDef,
  GetBlockGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBlockGlobals$ {
  /** @deprecated use `GetBlockGlobals$inboundSchema` instead. */
  export const inboundSchema = GetBlockGlobals$inboundSchema;
  /** @deprecated use `GetBlockGlobals$outboundSchema` instead. */
  export const outboundSchema = GetBlockGlobals$outboundSchema;
  /** @deprecated use `GetBlockGlobals$Outbound` instead. */
  export type Outbound = GetBlockGlobals$Outbound;
}

/** @internal */
export const GetBlockRequest$inboundSchema: z.ZodType<
  GetBlockRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
  blockId: z.string(),
});

/** @internal */
export type GetBlockRequest$Outbound = {
  chainId?: string | undefined;
  blockId: string;
};

/** @internal */
export const GetBlockRequest$outboundSchema: z.ZodType<
  GetBlockRequest$Outbound,
  z.ZodTypeDef,
  GetBlockRequest
> = z.object({
  chainId: z.string().optional(),
  blockId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBlockRequest$ {
  /** @deprecated use `GetBlockRequest$inboundSchema` instead. */
  export const inboundSchema = GetBlockRequest$inboundSchema;
  /** @deprecated use `GetBlockRequest$outboundSchema` instead. */
  export const outboundSchema = GetBlockRequest$outboundSchema;
  /** @deprecated use `GetBlockRequest$Outbound` instead. */
  export type Outbound = GetBlockRequest$Outbound;
}
