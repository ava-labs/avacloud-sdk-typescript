/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export const GetAvgGasPriceServerList = ["http://localhost:3001"] as const;

export type GetAvgGasPriceRequest = {
    /**
     * From date in UNIX Timestamp.
     */
    from?: string | undefined;
    /**
     * To date in UNIX Timestamp.
     */
    to?: string | undefined;
    /**
     * For paginated responses. Value will be provided in the [nextPageStartKey] field in the response if the query has more than one page.
     */
    startKey?: string | undefined;
    /**
     * numeric chainID, 'testnet', 'mainnet', or 'total'.
     */
    chain: string;
};

/** @internal */
export const GetAvgGasPriceRequest$inboundSchema: z.ZodType<
    GetAvgGasPriceRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    startKey: z.string().optional(),
    chain: z.string(),
});

/** @internal */
export type GetAvgGasPriceRequest$Outbound = {
    from?: string | undefined;
    to?: string | undefined;
    startKey?: string | undefined;
    chain: string;
};

/** @internal */
export const GetAvgGasPriceRequest$outboundSchema: z.ZodType<
    GetAvgGasPriceRequest$Outbound,
    z.ZodTypeDef,
    GetAvgGasPriceRequest
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    startKey: z.string().optional(),
    chain: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvgGasPriceRequest$ {
    /** @deprecated use `GetAvgGasPriceRequest$inboundSchema` instead. */
    export const inboundSchema = GetAvgGasPriceRequest$inboundSchema;
    /** @deprecated use `GetAvgGasPriceRequest$outboundSchema` instead. */
    export const outboundSchema = GetAvgGasPriceRequest$outboundSchema;
    /** @deprecated use `GetAvgGasPriceRequest$Outbound` instead. */
    export type Outbound = GetAvgGasPriceRequest$Outbound;
}
