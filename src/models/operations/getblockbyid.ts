/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export const GetBlockByIdServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetBlockByIdGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type GetBlockByIdRequest = {
  /**
   * A primary network blockchain id or alias.
   */
  blockchainId: components.BlockchainId;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * A block identifier which is either a block number or the block hash.
   */
  blockId: string;
};

/** @internal */
export const GetBlockByIdGlobals$inboundSchema: z.ZodType<
  GetBlockByIdGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetBlockByIdGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const GetBlockByIdGlobals$outboundSchema: z.ZodType<
  GetBlockByIdGlobals$Outbound,
  z.ZodTypeDef,
  GetBlockByIdGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBlockByIdGlobals$ {
  /** @deprecated use `GetBlockByIdGlobals$inboundSchema` instead. */
  export const inboundSchema = GetBlockByIdGlobals$inboundSchema;
  /** @deprecated use `GetBlockByIdGlobals$outboundSchema` instead. */
  export const outboundSchema = GetBlockByIdGlobals$outboundSchema;
  /** @deprecated use `GetBlockByIdGlobals$Outbound` instead. */
  export type Outbound = GetBlockByIdGlobals$Outbound;
}

/** @internal */
export const GetBlockByIdRequest$inboundSchema: z.ZodType<
  GetBlockByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockchainId: components.BlockchainId$inboundSchema,
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  blockId: z.string(),
});

/** @internal */
export type GetBlockByIdRequest$Outbound = {
  blockchainId: string;
  network?: string | undefined;
  blockId: string;
};

/** @internal */
export const GetBlockByIdRequest$outboundSchema: z.ZodType<
  GetBlockByIdRequest$Outbound,
  z.ZodTypeDef,
  GetBlockByIdRequest
> = z.object({
  blockchainId: components.BlockchainId$outboundSchema,
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  blockId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBlockByIdRequest$ {
  /** @deprecated use `GetBlockByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetBlockByIdRequest$inboundSchema;
  /** @deprecated use `GetBlockByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetBlockByIdRequest$outboundSchema;
  /** @deprecated use `GetBlockByIdRequest$Outbound` instead. */
  export type Outbound = GetBlockByIdRequest$Outbound;
}
