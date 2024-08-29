/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListSubnetsGlobals = {
    /**
     * A supported network type mainnet or a testnet.
     */
    network?: components.GlobalParamNetwork | undefined;
};

export type ListSubnetsRequest = {
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
    network?: components.GlobalParamNetwork | undefined;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
};

export type ListSubnetsResponse = {
    result: components.ListSubnetsResponse;
};

/** @internal */
export const ListSubnetsGlobals$inboundSchema: z.ZodType<
    ListSubnetsGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type ListSubnetsGlobals$Outbound = {
    network?: string | undefined;
};

/** @internal */
export const ListSubnetsGlobals$outboundSchema: z.ZodType<
    ListSubnetsGlobals$Outbound,
    z.ZodTypeDef,
    ListSubnetsGlobals
> = z.object({
    network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSubnetsGlobals$ {
    /** @deprecated use `ListSubnetsGlobals$inboundSchema` instead. */
    export const inboundSchema = ListSubnetsGlobals$inboundSchema;
    /** @deprecated use `ListSubnetsGlobals$outboundSchema` instead. */
    export const outboundSchema = ListSubnetsGlobals$outboundSchema;
    /** @deprecated use `ListSubnetsGlobals$Outbound` instead. */
    export type Outbound = ListSubnetsGlobals$Outbound;
}

/** @internal */
export const ListSubnetsRequest$inboundSchema: z.ZodType<
    ListSubnetsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.GlobalParamNetwork$inboundSchema.optional(),
    sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type ListSubnetsRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    network?: string | undefined;
    sortOrder?: string | undefined;
};

/** @internal */
export const ListSubnetsRequest$outboundSchema: z.ZodType<
    ListSubnetsRequest$Outbound,
    z.ZodTypeDef,
    ListSubnetsRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    network: components.GlobalParamNetwork$outboundSchema.optional(),
    sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSubnetsRequest$ {
    /** @deprecated use `ListSubnetsRequest$inboundSchema` instead. */
    export const inboundSchema = ListSubnetsRequest$inboundSchema;
    /** @deprecated use `ListSubnetsRequest$outboundSchema` instead. */
    export const outboundSchema = ListSubnetsRequest$outboundSchema;
    /** @deprecated use `ListSubnetsRequest$Outbound` instead. */
    export type Outbound = ListSubnetsRequest$Outbound;
}

/** @internal */
export const ListSubnetsResponse$inboundSchema: z.ZodType<
    ListSubnetsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListSubnetsResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListSubnetsResponse$Outbound = {
    Result: components.ListSubnetsResponse$Outbound;
};

/** @internal */
export const ListSubnetsResponse$outboundSchema: z.ZodType<
    ListSubnetsResponse$Outbound,
    z.ZodTypeDef,
    ListSubnetsResponse
> = z
    .object({
        result: components.ListSubnetsResponse$outboundSchema,
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
export namespace ListSubnetsResponse$ {
    /** @deprecated use `ListSubnetsResponse$inboundSchema` instead. */
    export const inboundSchema = ListSubnetsResponse$inboundSchema;
    /** @deprecated use `ListSubnetsResponse$outboundSchema` instead. */
    export const outboundSchema = ListSubnetsResponse$outboundSchema;
    /** @deprecated use `ListSubnetsResponse$Outbound` instead. */
    export type Outbound = ListSubnetsResponse$Outbound;
}
