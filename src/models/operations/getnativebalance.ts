/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetNativeBalanceRequest = {
    /**
     * The block number, if not defined the block number will be the latest block.
     */
    blockNumber?: string | undefined;
    /**
     * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
     */
    chainId: string;
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
export const GetNativeBalanceRequest$inboundSchema: z.ZodType<
    GetNativeBalanceRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    blockNumber: z.string().optional(),
    chainId: z.string(),
    address: z.string(),
    currency: components.CurrencyCode$inboundSchema.optional(),
});

/** @internal */
export type GetNativeBalanceRequest$Outbound = {
    blockNumber?: string | undefined;
    chainId: string;
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
    chainId: z.string(),
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
