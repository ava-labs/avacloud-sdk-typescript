/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export const GetNativeBalanceServerList = ["http://localhost:3000"] as const;

export type GetNativeBalanceGlobals = {
    chainId?: string | undefined;
};

export type GetNativeBalanceRequest = {
    /**
     * The block number, if not defined the block number will be the latest block.
     */
    blockNumber?: string | undefined;
    /**
     * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
     */
    chainId?: string | undefined;
    /**
     * A wallet address.
     */
    address: string;
    /**
     * The currency that return values should use. Defaults to USD.
     */
    currency?: components.CurrencyCode | undefined;
};

/** @internal */
export const GetNativeBalanceGlobals$inboundSchema: z.ZodType<
    GetNativeBalanceGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    chainId: z.string().optional(),
});

/** @internal */
export type GetNativeBalanceGlobals$Outbound = {
    chainId?: string | undefined;
};

/** @internal */
export const GetNativeBalanceGlobals$outboundSchema: z.ZodType<
    GetNativeBalanceGlobals$Outbound,
    z.ZodTypeDef,
    GetNativeBalanceGlobals
> = z.object({
    chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNativeBalanceGlobals$ {
    /** @deprecated use `GetNativeBalanceGlobals$inboundSchema` instead. */
    export const inboundSchema = GetNativeBalanceGlobals$inboundSchema;
    /** @deprecated use `GetNativeBalanceGlobals$outboundSchema` instead. */
    export const outboundSchema = GetNativeBalanceGlobals$outboundSchema;
    /** @deprecated use `GetNativeBalanceGlobals$Outbound` instead. */
    export type Outbound = GetNativeBalanceGlobals$Outbound;
}

/** @internal */
export const GetNativeBalanceRequest$inboundSchema: z.ZodType<
    GetNativeBalanceRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    blockNumber: z.string().optional(),
    chainId: z.string().optional(),
    address: z.string(),
    currency: components.CurrencyCode$inboundSchema.optional(),
});

/** @internal */
export type GetNativeBalanceRequest$Outbound = {
    blockNumber?: string | undefined;
    chainId?: string | undefined;
    address: string;
    currency?: string | undefined;
};

/** @internal */
export const GetNativeBalanceRequest$outboundSchema: z.ZodType<
    GetNativeBalanceRequest$Outbound,
    z.ZodTypeDef,
    GetNativeBalanceRequest
> = z.object({
    blockNumber: z.string().optional(),
    chainId: z.string().optional(),
    address: z.string(),
    currency: components.CurrencyCode$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNativeBalanceRequest$ {
    /** @deprecated use `GetNativeBalanceRequest$inboundSchema` instead. */
    export const inboundSchema = GetNativeBalanceRequest$inboundSchema;
    /** @deprecated use `GetNativeBalanceRequest$outboundSchema` instead. */
    export const outboundSchema = GetNativeBalanceRequest$outboundSchema;
    /** @deprecated use `GetNativeBalanceRequest$Outbound` instead. */
    export type Outbound = GetNativeBalanceRequest$Outbound;
}
