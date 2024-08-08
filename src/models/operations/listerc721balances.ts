/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListErc721BalancesRequest = {
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
     */
    pageSize?: number | undefined;
    /**
     * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
     */
    chainId: string;
    /**
     * A wallet address.
     */
    address: string;
    /**
     * A contract addresses to filter by.
     */
    contractAddress?: string | undefined;
};

export type ListErc721BalancesResponse = {
    result: components.ListErc721BalancesResponse;
};

/** @internal */
export const ListErc721BalancesRequest$inboundSchema: z.ZodType<
    ListErc721BalancesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    address: z.string(),
    contractAddress: z.string().optional(),
});

/** @internal */
export type ListErc721BalancesRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    chainId: string;
    address: string;
    contractAddress?: string | undefined;
};

/** @internal */
export const ListErc721BalancesRequest$outboundSchema: z.ZodType<
    ListErc721BalancesRequest$Outbound,
    z.ZodTypeDef,
    ListErc721BalancesRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    address: z.string(),
    contractAddress: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErc721BalancesRequest$ {
    /** @deprecated use `ListErc721BalancesRequest$inboundSchema` instead. */
    export const inboundSchema = ListErc721BalancesRequest$inboundSchema;
    /** @deprecated use `ListErc721BalancesRequest$outboundSchema` instead. */
    export const outboundSchema = ListErc721BalancesRequest$outboundSchema;
    /** @deprecated use `ListErc721BalancesRequest$Outbound` instead. */
    export type Outbound = ListErc721BalancesRequest$Outbound;
}

/** @internal */
export const ListErc721BalancesResponse$inboundSchema: z.ZodType<
    ListErc721BalancesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListErc721BalancesResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListErc721BalancesResponse$Outbound = {
    Result: components.ListErc721BalancesResponse$Outbound;
};

/** @internal */
export const ListErc721BalancesResponse$outboundSchema: z.ZodType<
    ListErc721BalancesResponse$Outbound,
    z.ZodTypeDef,
    ListErc721BalancesResponse
> = z
    .object({
        result: components.ListErc721BalancesResponse$outboundSchema,
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
export namespace ListErc721BalancesResponse$ {
    /** @deprecated use `ListErc721BalancesResponse$inboundSchema` instead. */
    export const inboundSchema = ListErc721BalancesResponse$inboundSchema;
    /** @deprecated use `ListErc721BalancesResponse$outboundSchema` instead. */
    export const outboundSchema = ListErc721BalancesResponse$outboundSchema;
    /** @deprecated use `ListErc721BalancesResponse$Outbound` instead. */
    export type Outbound = ListErc721BalancesResponse$Outbound;
}
