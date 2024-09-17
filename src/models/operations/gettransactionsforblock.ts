/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export const GetTransactionsForBlockServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetTransactionsForBlockGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetTransactionsForBlockRequest = {
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
export const GetTransactionsForBlockGlobals$inboundSchema: z.ZodType<
  GetTransactionsForBlockGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetTransactionsForBlockGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetTransactionsForBlockGlobals$outboundSchema: z.ZodType<
  GetTransactionsForBlockGlobals$Outbound,
  z.ZodTypeDef,
  GetTransactionsForBlockGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionsForBlockGlobals$ {
  /** @deprecated use `GetTransactionsForBlockGlobals$inboundSchema` instead. */
  export const inboundSchema = GetTransactionsForBlockGlobals$inboundSchema;
  /** @deprecated use `GetTransactionsForBlockGlobals$outboundSchema` instead. */
  export const outboundSchema = GetTransactionsForBlockGlobals$outboundSchema;
  /** @deprecated use `GetTransactionsForBlockGlobals$Outbound` instead. */
  export type Outbound = GetTransactionsForBlockGlobals$Outbound;
}

/** @internal */
export const GetTransactionsForBlockRequest$inboundSchema: z.ZodType<
  GetTransactionsForBlockRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
  blockId: z.string(),
});

/** @internal */
export type GetTransactionsForBlockRequest$Outbound = {
  chainId?: string | undefined;
  blockId: string;
};

/** @internal */
export const GetTransactionsForBlockRequest$outboundSchema: z.ZodType<
  GetTransactionsForBlockRequest$Outbound,
  z.ZodTypeDef,
  GetTransactionsForBlockRequest
> = z.object({
  chainId: z.string().optional(),
  blockId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionsForBlockRequest$ {
  /** @deprecated use `GetTransactionsForBlockRequest$inboundSchema` instead. */
  export const inboundSchema = GetTransactionsForBlockRequest$inboundSchema;
  /** @deprecated use `GetTransactionsForBlockRequest$outboundSchema` instead. */
  export const outboundSchema = GetTransactionsForBlockRequest$outboundSchema;
  /** @deprecated use `GetTransactionsForBlockRequest$Outbound` instead. */
  export type Outbound = GetTransactionsForBlockRequest$Outbound;
}
