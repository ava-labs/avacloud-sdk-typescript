/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetVertexByHashRequest = {
    /**
     * A vertex hash string.
     */
    vertexHash: string;
    /**
     * A primary network blockchain id or alias.
     */
    blockchainId: components.XChainId;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
};

/** @internal */
export const GetVertexByHashRequest$inboundSchema: z.ZodType<
    GetVertexByHashRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    vertexHash: z.string(),
    blockchainId: components.XChainId$inboundSchema,
    network: components.Network$inboundSchema,
});

/** @internal */
export type GetVertexByHashRequest$Outbound = {
    vertexHash: string;
    blockchainId: string;
    network: string;
};

/** @internal */
export const GetVertexByHashRequest$outboundSchema: z.ZodType<
    GetVertexByHashRequest$Outbound,
    z.ZodTypeDef,
    GetVertexByHashRequest
> = z.object({
    vertexHash: z.string(),
    blockchainId: components.XChainId$outboundSchema,
    network: components.Network$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVertexByHashRequest$ {
    /** @deprecated use `GetVertexByHashRequest$inboundSchema` instead. */
    export const inboundSchema = GetVertexByHashRequest$inboundSchema;
    /** @deprecated use `GetVertexByHashRequest$outboundSchema` instead. */
    export const outboundSchema = GetVertexByHashRequest$outboundSchema;
    /** @deprecated use `GetVertexByHashRequest$Outbound` instead. */
    export type Outbound = GetVertexByHashRequest$Outbound;
}
