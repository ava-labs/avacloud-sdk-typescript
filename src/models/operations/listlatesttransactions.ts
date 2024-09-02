/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListLatestTransactionsGlobals = {
    /**
     * A supported EVM chain id, chain alias, or blockchain id.
     */
    chainId?: string | undefined;
};

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
    chainId?: string | undefined;
    /**
     * A status filter for listed transactions.
     */
    status?: components.TransactionStatus | undefined;
};

export type ListLatestTransactionsResponse = {
    result: components.ListNativeTransactionsResponse;
};

/** @internal */
export const ListLatestTransactionsGlobals$inboundSchema: z.ZodType<
    ListLatestTransactionsGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    chainId: z.string().optional(),
});

/** @internal */
export type ListLatestTransactionsGlobals$Outbound = {
    chainId?: string | undefined;
};

/** @internal */
export const ListLatestTransactionsGlobals$outboundSchema: z.ZodType<
    ListLatestTransactionsGlobals$Outbound,
    z.ZodTypeDef,
    ListLatestTransactionsGlobals
> = z.object({
    chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListLatestTransactionsGlobals$ {
    /** @deprecated use `ListLatestTransactionsGlobals$inboundSchema` instead. */
    export const inboundSchema = ListLatestTransactionsGlobals$inboundSchema;
    /** @deprecated use `ListLatestTransactionsGlobals$outboundSchema` instead. */
    export const outboundSchema = ListLatestTransactionsGlobals$outboundSchema;
    /** @deprecated use `ListLatestTransactionsGlobals$Outbound` instead. */
    export type Outbound = ListLatestTransactionsGlobals$Outbound;
}

/** @internal */
export const ListLatestTransactionsRequest$inboundSchema: z.ZodType<
    ListLatestTransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string().optional(),
    status: components.TransactionStatus$inboundSchema.optional(),
});

/** @internal */
export type ListLatestTransactionsRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    chainId?: string | undefined;
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
    chainId: z.string().optional(),
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

/** @internal */
export const ListLatestTransactionsResponse$inboundSchema: z.ZodType<
    ListLatestTransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListNativeTransactionsResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListLatestTransactionsResponse$Outbound = {
    Result: components.ListNativeTransactionsResponse$Outbound;
};

/** @internal */
export const ListLatestTransactionsResponse$outboundSchema: z.ZodType<
    ListLatestTransactionsResponse$Outbound,
    z.ZodTypeDef,
    ListLatestTransactionsResponse
> = z
    .object({
        result: components.ListNativeTransactionsResponse$outboundSchema,
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
export namespace ListLatestTransactionsResponse$ {
    /** @deprecated use `ListLatestTransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = ListLatestTransactionsResponse$inboundSchema;
    /** @deprecated use `ListLatestTransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = ListLatestTransactionsResponse$outboundSchema;
    /** @deprecated use `ListLatestTransactionsResponse$Outbound` instead. */
    export type Outbound = ListLatestTransactionsResponse$Outbound;
}
