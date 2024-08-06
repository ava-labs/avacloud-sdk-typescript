/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type ListLatestTransactionsRequest = {
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
     * A status filter for listed transactions.
     */
    status?: components.TransactionStatus | undefined;
};

/** @internal */
export const ListLatestTransactionsRequest$inboundSchema: z.ZodType<
    ListLatestTransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    status: components.TransactionStatus$inboundSchema.optional(),
});

/** @internal */
export type ListLatestTransactionsRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    chainId: string;
    status?: string | undefined;
};

/** @internal */
export const ListLatestTransactionsRequest$outboundSchema: z.ZodType<
    ListLatestTransactionsRequest$Outbound,
    z.ZodTypeDef,
    ListLatestTransactionsRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    status: components.TransactionStatus$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListLatestTransactionsRequest$ {
    /** @deprecated use `ListLatestTransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListLatestTransactionsRequest$inboundSchema;
    /** @deprecated use `ListLatestTransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListLatestTransactionsRequest$outboundSchema;
    /** @deprecated use `ListLatestTransactionsRequest$Outbound` instead. */
    export type Outbound = ListLatestTransactionsRequest$Outbound;
}
