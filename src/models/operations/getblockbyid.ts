/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetBlockByIdRequest = {
    /**
     * A primary network blockchain id or alias.
     */
    blockchainId: components.BlockchainId;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
    /**
     * A block identifier which is either a block number or the block hash.
     */
    blockId: string;
};

/** @internal */
export const GetBlockByIdRequest$inboundSchema: z.ZodType<
    GetBlockByIdRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    blockchainId: components.BlockchainId$inboundSchema,
    network: components.Network$inboundSchema,
    blockId: z.string(),
});

/** @internal */
export type GetBlockByIdRequest$Outbound = {
    blockchainId: string;
    network: string;
    blockId: string;
};

/** @internal */
export const GetBlockByIdRequest$outboundSchema: z.ZodType<
    GetBlockByIdRequest$Outbound,
    z.ZodTypeDef,
    GetBlockByIdRequest
> = z.object({
    blockchainId: components.BlockchainId$outboundSchema,
    network: components.Network$outboundSchema,
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
