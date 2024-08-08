/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTransactionsRequest = {
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
     */
    pageSize?: number | undefined;
    /**
     * The block range start number, inclusive. If endBlock is not defined when startBlock is defined, the end of the range will be the most recent block.
     */
    startBlock?: number | undefined;
    /**
     * The block range end number, exclusive. If startBlock is not defined when endBlock is defined, the start of the range will be the genesis block.
     */
    endBlock?: number | undefined;
    /**
     * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
     */
    chainId: string;
    /**
     * A wallet address.
     */
    address: string;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
};

export type ListTransactionsResponse = {
    result: components.ListTransactionDetailsResponse;
};

/** @internal */
export const ListTransactionsRequest$inboundSchema: z.ZodType<
    ListTransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    startBlock: z.number().optional(),
    endBlock: z.number().optional(),
    chainId: z.string(),
    address: z.string(),
    sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type ListTransactionsRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    startBlock?: number | undefined;
    endBlock?: number | undefined;
    chainId: string;
    address: string;
    sortOrder?: string | undefined;
};

/** @internal */
export const ListTransactionsRequest$outboundSchema: z.ZodType<
    ListTransactionsRequest$Outbound,
    z.ZodTypeDef,
    ListTransactionsRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    startBlock: z.number().optional(),
    endBlock: z.number().optional(),
    chainId: z.string(),
    address: z.string(),
    sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsRequest$ {
    /** @deprecated use `ListTransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListTransactionsRequest$inboundSchema;
    /** @deprecated use `ListTransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListTransactionsRequest$outboundSchema;
    /** @deprecated use `ListTransactionsRequest$Outbound` instead. */
    export type Outbound = ListTransactionsRequest$Outbound;
}

/** @internal */
export const ListTransactionsResponse$inboundSchema: z.ZodType<
    ListTransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListTransactionDetailsResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListTransactionsResponse$Outbound = {
    Result: components.ListTransactionDetailsResponse$Outbound;
};

/** @internal */
export const ListTransactionsResponse$outboundSchema: z.ZodType<
    ListTransactionsResponse$Outbound,
    z.ZodTypeDef,
    ListTransactionsResponse
> = z
    .object({
        result: components.ListTransactionDetailsResponse$outboundSchema,
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
export namespace ListTransactionsResponse$ {
    /** @deprecated use `ListTransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = ListTransactionsResponse$inboundSchema;
    /** @deprecated use `ListTransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = ListTransactionsResponse$outboundSchema;
    /** @deprecated use `ListTransactionsResponse$Outbound` instead. */
    export type Outbound = ListTransactionsResponse$Outbound;
}
