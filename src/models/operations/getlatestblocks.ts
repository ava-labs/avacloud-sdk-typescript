/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export const GetLatestBlocksServerList = ["https://glacier-api.avax.network"] as const;

export type GetLatestBlocksGlobals = {
    /**
     * A supported EVM chain id, chain alias, or blockchain id.
     */
    chainId?: string | undefined;
};

export type GetLatestBlocksRequest = {
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
};

export type GetLatestBlocksResponse = {
    result: components.ListEvmBlocksResponse;
};

/** @internal */
export const GetLatestBlocksGlobals$inboundSchema: z.ZodType<
    GetLatestBlocksGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    chainId: z.string().optional(),
});

/** @internal */
export type GetLatestBlocksGlobals$Outbound = {
    chainId?: string | undefined;
};

/** @internal */
export const GetLatestBlocksGlobals$outboundSchema: z.ZodType<
    GetLatestBlocksGlobals$Outbound,
    z.ZodTypeDef,
    GetLatestBlocksGlobals
> = z.object({
    chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestBlocksGlobals$ {
    /** @deprecated use `GetLatestBlocksGlobals$inboundSchema` instead. */
    export const inboundSchema = GetLatestBlocksGlobals$inboundSchema;
    /** @deprecated use `GetLatestBlocksGlobals$outboundSchema` instead. */
    export const outboundSchema = GetLatestBlocksGlobals$outboundSchema;
    /** @deprecated use `GetLatestBlocksGlobals$Outbound` instead. */
    export type Outbound = GetLatestBlocksGlobals$Outbound;
}

/** @internal */
export const GetLatestBlocksRequest$inboundSchema: z.ZodType<
    GetLatestBlocksRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string().optional(),
});

/** @internal */
export type GetLatestBlocksRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    chainId?: string | undefined;
};

/** @internal */
export const GetLatestBlocksRequest$outboundSchema: z.ZodType<
    GetLatestBlocksRequest$Outbound,
    z.ZodTypeDef,
    GetLatestBlocksRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestBlocksRequest$ {
    /** @deprecated use `GetLatestBlocksRequest$inboundSchema` instead. */
    export const inboundSchema = GetLatestBlocksRequest$inboundSchema;
    /** @deprecated use `GetLatestBlocksRequest$outboundSchema` instead. */
    export const outboundSchema = GetLatestBlocksRequest$outboundSchema;
    /** @deprecated use `GetLatestBlocksRequest$Outbound` instead. */
    export type Outbound = GetLatestBlocksRequest$Outbound;
}

/** @internal */
export const GetLatestBlocksResponse$inboundSchema: z.ZodType<
    GetLatestBlocksResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListEvmBlocksResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type GetLatestBlocksResponse$Outbound = {
    Result: components.ListEvmBlocksResponse$Outbound;
};

/** @internal */
export const GetLatestBlocksResponse$outboundSchema: z.ZodType<
    GetLatestBlocksResponse$Outbound,
    z.ZodTypeDef,
    GetLatestBlocksResponse
> = z
    .object({
        result: components.ListEvmBlocksResponse$outboundSchema,
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
export namespace GetLatestBlocksResponse$ {
    /** @deprecated use `GetLatestBlocksResponse$inboundSchema` instead. */
    export const inboundSchema = GetLatestBlocksResponse$inboundSchema;
    /** @deprecated use `GetLatestBlocksResponse$outboundSchema` instead. */
    export const outboundSchema = GetLatestBlocksResponse$outboundSchema;
    /** @deprecated use `GetLatestBlocksResponse$Outbound` instead. */
    export type Outbound = GetLatestBlocksResponse$Outbound;
}
