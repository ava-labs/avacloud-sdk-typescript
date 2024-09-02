/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetVertexByHashGlobals = {
    /**
     * A supported network type mainnet or a testnet.
     */
    network?: components.GlobalParamNetwork | undefined;
};

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
    network?: components.GlobalParamNetwork | undefined;
};

/** @internal */
export const GetVertexByHashGlobals$inboundSchema: z.ZodType<
    GetVertexByHashGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetVertexByHashGlobals$Outbound = {
    network?: string | undefined;
};

/** @internal */
export const GetVertexByHashGlobals$outboundSchema: z.ZodType<
    GetVertexByHashGlobals$Outbound,
    z.ZodTypeDef,
    GetVertexByHashGlobals
> = z.object({
    network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVertexByHashGlobals$ {
    /** @deprecated use `GetVertexByHashGlobals$inboundSchema` instead. */
    export const inboundSchema = GetVertexByHashGlobals$inboundSchema;
    /** @deprecated use `GetVertexByHashGlobals$outboundSchema` instead. */
    export const outboundSchema = GetVertexByHashGlobals$outboundSchema;
    /** @deprecated use `GetVertexByHashGlobals$Outbound` instead. */
    export type Outbound = GetVertexByHashGlobals$Outbound;
}

/** @internal */
export const GetVertexByHashRequest$inboundSchema: z.ZodType<
    GetVertexByHashRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    vertexHash: z.string(),
    blockchainId: components.XChainId$inboundSchema,
    network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetVertexByHashRequest$Outbound = {
    vertexHash: string;
    blockchainId: string;
    network?: string | undefined;
};

/** @internal */
export const GetVertexByHashRequest$outboundSchema: z.ZodType<
    GetVertexByHashRequest$Outbound,
    z.ZodTypeDef,
    GetVertexByHashRequest
> = z.object({
    vertexHash: z.string(),
    blockchainId: components.XChainId$outboundSchema,
    network: components.GlobalParamNetwork$outboundSchema.optional(),
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
