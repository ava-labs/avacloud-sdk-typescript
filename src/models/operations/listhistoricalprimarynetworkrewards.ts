/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ListHistoricalPrimaryNetworkRewardsRequest = {
    /**
     * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji". Optional, but at least one of addresses or nodeIds is required.
     */
    addresses?: string | undefined;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
     */
    pageSize?: number | undefined;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
    /**
     * A comma separated list of node ids to filter by. Optional, but at least one of addresses or nodeIds is required.
     */
    nodeIds?: string | undefined;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
    /**
     * The currency that return values should use. Defaults to USD.
     */
    currency?: components.CurrencyCode | undefined;
};

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema: z.ZodType<
    ListHistoricalPrimaryNetworkRewardsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.Network$inboundSchema,
    nodeIds: z.string().optional(),
    sortOrder: components.SortOrder$inboundSchema.optional(),
    currency: components.CurrencyCode$inboundSchema.optional(),
});

/** @internal */
export type ListHistoricalPrimaryNetworkRewardsRequest$Outbound = {
    addresses?: string | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    network: string;
    nodeIds?: string | undefined;
    sortOrder?: string | undefined;
    currency?: string | undefined;
};

/** @internal */
export const ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema: z.ZodType<
    ListHistoricalPrimaryNetworkRewardsRequest$Outbound,
    z.ZodTypeDef,
    ListHistoricalPrimaryNetworkRewardsRequest
> = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.Network$outboundSchema,
    nodeIds: z.string().optional(),
    sortOrder: components.SortOrder$outboundSchema.optional(),
    currency: components.CurrencyCode$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListHistoricalPrimaryNetworkRewardsRequest$ {
    /** @deprecated use `ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema` instead. */
    export const inboundSchema = ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema;
    /** @deprecated use `ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema` instead. */
    export const outboundSchema = ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema;
    /** @deprecated use `ListHistoricalPrimaryNetworkRewardsRequest$Outbound` instead. */
    export type Outbound = ListHistoricalPrimaryNetworkRewardsRequest$Outbound;
}
