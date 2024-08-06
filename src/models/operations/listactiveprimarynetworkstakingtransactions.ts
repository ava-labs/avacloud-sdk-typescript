/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ListActivePrimaryNetworkStakingTransactionsRequest = {
    /**
     * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji".
     */
    addresses?: string | undefined;
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
    blockchainId: components.PChainId;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
};

/** @internal */
export const ListActivePrimaryNetworkStakingTransactionsRequest$inboundSchema: z.ZodType<
    ListActivePrimaryNetworkStakingTransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    addresses: z.string().optional(),
    txTypes: z.array(components.PrimaryNetworkTxType$inboundSchema).optional(),
    startTimestamp: z.number().int().optional(),
    endTimestamp: z.number().int().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.PChainId$inboundSchema,
    network: components.Network$inboundSchema,
    sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type ListActivePrimaryNetworkStakingTransactionsRequest$Outbound = {
    addresses?: string | undefined;
    txTypes?: Array<string> | undefined;
    startTimestamp?: number | undefined;
    endTimestamp?: number | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    blockchainId: string;
    network: string;
    sortOrder?: string | undefined;
};

/** @internal */
export const ListActivePrimaryNetworkStakingTransactionsRequest$outboundSchema: z.ZodType<
    ListActivePrimaryNetworkStakingTransactionsRequest$Outbound,
    z.ZodTypeDef,
    ListActivePrimaryNetworkStakingTransactionsRequest
> = z.object({
    addresses: z.string().optional(),
    txTypes: z.array(components.PrimaryNetworkTxType$outboundSchema).optional(),
    startTimestamp: z.number().int().optional(),
    endTimestamp: z.number().int().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.PChainId$outboundSchema,
    network: components.Network$outboundSchema,
    sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePrimaryNetworkStakingTransactionsRequest$ {
    /** @deprecated use `ListActivePrimaryNetworkStakingTransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListActivePrimaryNetworkStakingTransactionsRequest$inboundSchema;
    /** @deprecated use `ListActivePrimaryNetworkStakingTransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListActivePrimaryNetworkStakingTransactionsRequest$outboundSchema;
    /** @deprecated use `ListActivePrimaryNetworkStakingTransactionsRequest$Outbound` instead. */
    export type Outbound = ListActivePrimaryNetworkStakingTransactionsRequest$Outbound;
}
