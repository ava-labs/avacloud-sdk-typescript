/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAssetTransactionsRequest = {
    /**
     * Query param for filtering items based on transaction types.
     */
    txTypes?: Array<components.PrimaryNetworkTxType> | undefined;
    /**
     * Query param for retrieving items after a specific timestamp.
     */
    startTimestamp?: number | undefined;
    /**
     * Query param for retrieving items before a specific timestamp.
     */
    endTimestamp?: number | undefined;
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

export type ListAssetTransactionsResponse = {
    result: components.ListXChainTransactionsResponse;
};

/** @internal */
export const ListAssetTransactionsRequest$inboundSchema: z.ZodType<
    ListAssetTransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    txTypes: z.array(components.PrimaryNetworkTxType$inboundSchema).optional(),
    startTimestamp: z.number().int().optional(),
    endTimestamp: z.number().int().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.XChainId$inboundSchema,
    network: components.Network$inboundSchema,
    assetId: z.string(),
});

/** @internal */
export type ListAssetTransactionsRequest$Outbound = {
    txTypes?: Array<string> | undefined;
    startTimestamp?: number | undefined;
    endTimestamp?: number | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    blockchainId: string;
    network: string;
    assetId: string;
};

/** @internal */
export const ListAssetTransactionsRequest$outboundSchema: z.ZodType<
    ListAssetTransactionsRequest$Outbound,
    z.ZodTypeDef,
    ListAssetTransactionsRequest
> = z.object({
    txTypes: z.array(components.PrimaryNetworkTxType$outboundSchema).optional(),
    startTimestamp: z.number().int().optional(),
    endTimestamp: z.number().int().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.XChainId$outboundSchema,
    network: components.Network$outboundSchema,
    assetId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAssetTransactionsRequest$ {
    /** @deprecated use `ListAssetTransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListAssetTransactionsRequest$inboundSchema;
    /** @deprecated use `ListAssetTransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListAssetTransactionsRequest$outboundSchema;
    /** @deprecated use `ListAssetTransactionsRequest$Outbound` instead. */
    export type Outbound = ListAssetTransactionsRequest$Outbound;
}

/** @internal */
export const ListAssetTransactionsResponse$inboundSchema: z.ZodType<
    ListAssetTransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListXChainTransactionsResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListAssetTransactionsResponse$Outbound = {
    Result: components.ListXChainTransactionsResponse$Outbound;
};

/** @internal */
export const ListAssetTransactionsResponse$outboundSchema: z.ZodType<
    ListAssetTransactionsResponse$Outbound,
    z.ZodTypeDef,
    ListAssetTransactionsResponse
> = z
    .object({
        result: components.ListXChainTransactionsResponse$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAssetTransactionsResponse$ {
    /** @deprecated use `ListAssetTransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = ListAssetTransactionsResponse$inboundSchema;
    /** @deprecated use `ListAssetTransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = ListAssetTransactionsResponse$outboundSchema;
    /** @deprecated use `ListAssetTransactionsResponse$Outbound` instead. */
    export type Outbound = ListAssetTransactionsResponse$Outbound;
}
