/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListPendingPrimaryNetworkRewardsRequest = {
    /**
     * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji". One of addresses or nodeIds is required.
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
     * A comma separated list of node ids to filter by. One of addresses or nodeIds is required.
     */
    nodeIds?: string | undefined;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
};

export type ListPendingPrimaryNetworkRewardsResponse = {
    result: components.ListPendingRewardsResponse;
};

/** @internal */
export const ListPendingPrimaryNetworkRewardsRequest$inboundSchema: z.ZodType<
    ListPendingPrimaryNetworkRewardsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.Network$inboundSchema,
    nodeIds: z.string().optional(),
    sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type ListPendingPrimaryNetworkRewardsRequest$Outbound = {
    addresses?: string | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    network: string;
    nodeIds?: string | undefined;
    sortOrder?: string | undefined;
};

/** @internal */
export const ListPendingPrimaryNetworkRewardsRequest$outboundSchema: z.ZodType<
    ListPendingPrimaryNetworkRewardsRequest$Outbound,
    z.ZodTypeDef,
    ListPendingPrimaryNetworkRewardsRequest
> = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.Network$outboundSchema,
    nodeIds: z.string().optional(),
    sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPendingPrimaryNetworkRewardsRequest$ {
    /** @deprecated use `ListPendingPrimaryNetworkRewardsRequest$inboundSchema` instead. */
    export const inboundSchema = ListPendingPrimaryNetworkRewardsRequest$inboundSchema;
    /** @deprecated use `ListPendingPrimaryNetworkRewardsRequest$outboundSchema` instead. */
    export const outboundSchema = ListPendingPrimaryNetworkRewardsRequest$outboundSchema;
    /** @deprecated use `ListPendingPrimaryNetworkRewardsRequest$Outbound` instead. */
    export type Outbound = ListPendingPrimaryNetworkRewardsRequest$Outbound;
}

/** @internal */
export const ListPendingPrimaryNetworkRewardsResponse$inboundSchema: z.ZodType<
    ListPendingPrimaryNetworkRewardsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListPendingRewardsResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListPendingPrimaryNetworkRewardsResponse$Outbound = {
    Result: components.ListPendingRewardsResponse$Outbound;
};

/** @internal */
export const ListPendingPrimaryNetworkRewardsResponse$outboundSchema: z.ZodType<
    ListPendingPrimaryNetworkRewardsResponse$Outbound,
    z.ZodTypeDef,
    ListPendingPrimaryNetworkRewardsResponse
> = z
    .object({
        result: components.ListPendingRewardsResponse$outboundSchema,
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
export namespace ListPendingPrimaryNetworkRewardsResponse$ {
    /** @deprecated use `ListPendingPrimaryNetworkRewardsResponse$inboundSchema` instead. */
    export const inboundSchema = ListPendingPrimaryNetworkRewardsResponse$inboundSchema;
    /** @deprecated use `ListPendingPrimaryNetworkRewardsResponse$outboundSchema` instead. */
    export const outboundSchema = ListPendingPrimaryNetworkRewardsResponse$outboundSchema;
    /** @deprecated use `ListPendingPrimaryNetworkRewardsResponse$Outbound` instead. */
    export type Outbound = ListPendingPrimaryNetworkRewardsResponse$Outbound;
}
