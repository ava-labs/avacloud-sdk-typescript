/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export const GetAssetDetailsServerList = ["http://localhost:3000"] as const;

export type GetAssetDetailsRequest = {
    /**
     * A primary network blockchain id or alias.
     */
    blockchainId: components.XChainId;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
    /**
     * Asset ID for any asset on X-Chain
     */
    assetId: string;
};

/** @internal */
export const GetAssetDetailsRequest$inboundSchema: z.ZodType<
    GetAssetDetailsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    blockchainId: components.XChainId$inboundSchema,
    network: components.Network$inboundSchema,
    assetId: z.string(),
});

/** @internal */
export type GetAssetDetailsRequest$Outbound = {
    blockchainId: string;
    network: string;
    assetId: string;
};

/** @internal */
export const GetAssetDetailsRequest$outboundSchema: z.ZodType<
    GetAssetDetailsRequest$Outbound,
    z.ZodTypeDef,
    GetAssetDetailsRequest
> = z.object({
    blockchainId: components.XChainId$outboundSchema,
    network: components.Network$outboundSchema,
    assetId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAssetDetailsRequest$ {
    /** @deprecated use `GetAssetDetailsRequest$inboundSchema` instead. */
    export const inboundSchema = GetAssetDetailsRequest$inboundSchema;
    /** @deprecated use `GetAssetDetailsRequest$outboundSchema` instead. */
    export const outboundSchema = GetAssetDetailsRequest$outboundSchema;
    /** @deprecated use `GetAssetDetailsRequest$Outbound` instead. */
    export type Outbound = GetAssetDetailsRequest$Outbound;
}
