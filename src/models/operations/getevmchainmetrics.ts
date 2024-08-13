/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export const GetEvmChainMetricsServerList = ["http://localhost:3001"] as const;

export type GetEvmChainMetricsGlobals = {
    chainId?: string | undefined;
};

export type GetEvmChainMetricsRequest = {
    /**
     * Query param for retrieving items after a specific timestamp.
     */
    startTimestamp?: number | undefined;
    /**
     * Query param for retrieving items before a specific timestamp.
     */
    endTimestamp?: number | undefined;
    /**
     * Time interval granularity for data aggregation
     */
    timeInterval?: components.TimeIntervalGranularity | undefined;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * Which chain level metric to fetch.
     */
    metric: components.ChainMetric;
    /**
     * A supported EVM chain ID or one of "total", "mainnet", or "testnet". Use the `/chains` endpoint to get a list of supported chain IDs.
     */
    chainId?: string | undefined;
};

export type GetEvmChainMetricsResponse = {
    result: components.MetricsApiResponse;
};

/** @internal */
export const GetEvmChainMetricsGlobals$inboundSchema: z.ZodType<
    GetEvmChainMetricsGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    chainId: z.string().optional(),
});

/** @internal */
export type GetEvmChainMetricsGlobals$Outbound = {
    chainId?: string | undefined;
};

/** @internal */
export const GetEvmChainMetricsGlobals$outboundSchema: z.ZodType<
    GetEvmChainMetricsGlobals$Outbound,
    z.ZodTypeDef,
    GetEvmChainMetricsGlobals
> = z.object({
    chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEvmChainMetricsGlobals$ {
    /** @deprecated use `GetEvmChainMetricsGlobals$inboundSchema` instead. */
    export const inboundSchema = GetEvmChainMetricsGlobals$inboundSchema;
    /** @deprecated use `GetEvmChainMetricsGlobals$outboundSchema` instead. */
    export const outboundSchema = GetEvmChainMetricsGlobals$outboundSchema;
    /** @deprecated use `GetEvmChainMetricsGlobals$Outbound` instead. */
    export type Outbound = GetEvmChainMetricsGlobals$Outbound;
}

/** @internal */
export const GetEvmChainMetricsRequest$inboundSchema: z.ZodType<
    GetEvmChainMetricsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    startTimestamp: z.number().int().optional(),
    endTimestamp: z.number().int().optional(),
    timeInterval: components.TimeIntervalGranularity$inboundSchema.optional(),
    pageToken: z.string().optional(),
    metric: components.ChainMetric$inboundSchema,
    chainId: z.string().optional(),
});

/** @internal */
export type GetEvmChainMetricsRequest$Outbound = {
    startTimestamp?: number | undefined;
    endTimestamp?: number | undefined;
    timeInterval?: string | undefined;
    pageToken?: string | undefined;
    metric: string;
    chainId?: string | undefined;
};

/** @internal */
export const GetEvmChainMetricsRequest$outboundSchema: z.ZodType<
    GetEvmChainMetricsRequest$Outbound,
    z.ZodTypeDef,
    GetEvmChainMetricsRequest
> = z.object({
    startTimestamp: z.number().int().optional(),
    endTimestamp: z.number().int().optional(),
    timeInterval: components.TimeIntervalGranularity$outboundSchema.optional(),
    pageToken: z.string().optional(),
    metric: components.ChainMetric$outboundSchema,
    chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEvmChainMetricsRequest$ {
    /** @deprecated use `GetEvmChainMetricsRequest$inboundSchema` instead. */
    export const inboundSchema = GetEvmChainMetricsRequest$inboundSchema;
    /** @deprecated use `GetEvmChainMetricsRequest$outboundSchema` instead. */
    export const outboundSchema = GetEvmChainMetricsRequest$outboundSchema;
    /** @deprecated use `GetEvmChainMetricsRequest$Outbound` instead. */
    export type Outbound = GetEvmChainMetricsRequest$Outbound;
}

/** @internal */
export const GetEvmChainMetricsResponse$inboundSchema: z.ZodType<
    GetEvmChainMetricsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.MetricsApiResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type GetEvmChainMetricsResponse$Outbound = {
    Result: components.MetricsApiResponse$Outbound;
};

/** @internal */
export const GetEvmChainMetricsResponse$outboundSchema: z.ZodType<
    GetEvmChainMetricsResponse$Outbound,
    z.ZodTypeDef,
    GetEvmChainMetricsResponse
> = z
    .object({
        result: components.MetricsApiResponse$outboundSchema,
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
export namespace GetEvmChainMetricsResponse$ {
    /** @deprecated use `GetEvmChainMetricsResponse$inboundSchema` instead. */
    export const inboundSchema = GetEvmChainMetricsResponse$inboundSchema;
    /** @deprecated use `GetEvmChainMetricsResponse$outboundSchema` instead. */
    export const outboundSchema = GetEvmChainMetricsResponse$outboundSchema;
    /** @deprecated use `GetEvmChainMetricsResponse$Outbound` instead. */
    export type Outbound = GetEvmChainMetricsResponse$Outbound;
}