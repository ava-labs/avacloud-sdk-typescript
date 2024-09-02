/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetUtxosByAddressesGlobals = {
    /**
     * A supported network type mainnet or a testnet.
     */
    network?: components.GlobalParamNetwork | undefined;
};

export type GetUtxosByAddressesRequest = {
    /**
     * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "avax"/"fuji", "P-avax"/"P-fuji" or "X-avax"/"X-fuji".
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
     * A primary network blockchain id or alias.
     */
    blockchainId: components.BlockchainId;
    /**
     * Either mainnet or a testnet.
     */
    network?: components.GlobalParamNetwork | undefined;
    /**
     * Asset ID for any asset (only applicable X-Chain)
     */
    assetId?: string | undefined;
    /**
     * Boolean filter to include spent UTXOs.
     */
    includeSpent?: boolean | undefined;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
};

/**
 * Successful response
 */
export type GetUtxosByAddressesResponseBody =
    | components.ListPChainUtxosResponse
    | components.ListUtxosResponse;

export type GetUtxosByAddressesResponse = {
    result: components.ListPChainUtxosResponse | components.ListUtxosResponse;
};

/** @internal */
export const GetUtxosByAddressesGlobals$inboundSchema: z.ZodType<
    GetUtxosByAddressesGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetUtxosByAddressesGlobals$Outbound = {
    network?: string | undefined;
};

/** @internal */
export const GetUtxosByAddressesGlobals$outboundSchema: z.ZodType<
    GetUtxosByAddressesGlobals$Outbound,
    z.ZodTypeDef,
    GetUtxosByAddressesGlobals
> = z.object({
    network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUtxosByAddressesGlobals$ {
    /** @deprecated use `GetUtxosByAddressesGlobals$inboundSchema` instead. */
    export const inboundSchema = GetUtxosByAddressesGlobals$inboundSchema;
    /** @deprecated use `GetUtxosByAddressesGlobals$outboundSchema` instead. */
    export const outboundSchema = GetUtxosByAddressesGlobals$outboundSchema;
    /** @deprecated use `GetUtxosByAddressesGlobals$Outbound` instead. */
    export type Outbound = GetUtxosByAddressesGlobals$Outbound;
}

/** @internal */
export const GetUtxosByAddressesRequest$inboundSchema: z.ZodType<
    GetUtxosByAddressesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.BlockchainId$inboundSchema,
    network: components.GlobalParamNetwork$inboundSchema.optional(),
    assetId: z.string().optional(),
    includeSpent: z.boolean().optional(),
    sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type GetUtxosByAddressesRequest$Outbound = {
    addresses?: string | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    blockchainId: string;
    network?: string | undefined;
    assetId?: string | undefined;
    includeSpent?: boolean | undefined;
    sortOrder?: string | undefined;
};

/** @internal */
export const GetUtxosByAddressesRequest$outboundSchema: z.ZodType<
    GetUtxosByAddressesRequest$Outbound,
    z.ZodTypeDef,
    GetUtxosByAddressesRequest
> = z.object({
    addresses: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.BlockchainId$outboundSchema,
    network: components.GlobalParamNetwork$outboundSchema.optional(),
    assetId: z.string().optional(),
    includeSpent: z.boolean().optional(),
    sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUtxosByAddressesRequest$ {
    /** @deprecated use `GetUtxosByAddressesRequest$inboundSchema` instead. */
    export const inboundSchema = GetUtxosByAddressesRequest$inboundSchema;
    /** @deprecated use `GetUtxosByAddressesRequest$outboundSchema` instead. */
    export const outboundSchema = GetUtxosByAddressesRequest$outboundSchema;
    /** @deprecated use `GetUtxosByAddressesRequest$Outbound` instead. */
    export type Outbound = GetUtxosByAddressesRequest$Outbound;
}

/** @internal */
export const GetUtxosByAddressesResponseBody$inboundSchema: z.ZodType<
    GetUtxosByAddressesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.ListPChainUtxosResponse$inboundSchema,
    components.ListUtxosResponse$inboundSchema,
]);

/** @internal */
export type GetUtxosByAddressesResponseBody$Outbound =
    | components.ListPChainUtxosResponse$Outbound
    | components.ListUtxosResponse$Outbound;

/** @internal */
export const GetUtxosByAddressesResponseBody$outboundSchema: z.ZodType<
    GetUtxosByAddressesResponseBody$Outbound,
    z.ZodTypeDef,
    GetUtxosByAddressesResponseBody
> = z.union([
    components.ListPChainUtxosResponse$outboundSchema,
    components.ListUtxosResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUtxosByAddressesResponseBody$ {
    /** @deprecated use `GetUtxosByAddressesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetUtxosByAddressesResponseBody$inboundSchema;
    /** @deprecated use `GetUtxosByAddressesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetUtxosByAddressesResponseBody$outboundSchema;
    /** @deprecated use `GetUtxosByAddressesResponseBody$Outbound` instead. */
    export type Outbound = GetUtxosByAddressesResponseBody$Outbound;
}

/** @internal */
export const GetUtxosByAddressesResponse$inboundSchema: z.ZodType<
    GetUtxosByAddressesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: z.union([
            components.ListPChainUtxosResponse$inboundSchema,
            components.ListUtxosResponse$inboundSchema,
        ]),
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type GetUtxosByAddressesResponse$Outbound = {
    Result: components.ListPChainUtxosResponse$Outbound | components.ListUtxosResponse$Outbound;
};

/** @internal */
export const GetUtxosByAddressesResponse$outboundSchema: z.ZodType<
    GetUtxosByAddressesResponse$Outbound,
    z.ZodTypeDef,
    GetUtxosByAddressesResponse
> = z
    .object({
        result: z.union([
            components.ListPChainUtxosResponse$outboundSchema,
            components.ListUtxosResponse$outboundSchema,
        ]),
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
export namespace GetUtxosByAddressesResponse$ {
    /** @deprecated use `GetUtxosByAddressesResponse$inboundSchema` instead. */
    export const inboundSchema = GetUtxosByAddressesResponse$inboundSchema;
    /** @deprecated use `GetUtxosByAddressesResponse$outboundSchema` instead. */
    export const outboundSchema = GetUtxosByAddressesResponse$outboundSchema;
    /** @deprecated use `GetUtxosByAddressesResponse$Outbound` instead. */
    export type Outbound = GetUtxosByAddressesResponse$Outbound;
}
