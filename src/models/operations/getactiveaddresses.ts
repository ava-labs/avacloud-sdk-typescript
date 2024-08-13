/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export const GetActiveAddressesServerList = ["http://localhost:3001"] as const;

export type GetActiveAddressesRequest = {
    /**
     * From date in UNIX Timestamp.
     */
    from?: string | undefined;
    /**
     * To date in UNIX Timestamp.
     */
    to?: string | undefined;
    /**
     * Time interval granularity.
     */
    interval?: components.LegacyInterval | undefined;
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
export const GetActiveAddressesRequest$inboundSchema: z.ZodType<
    GetActiveAddressesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    interval: components.LegacyInterval$inboundSchema.optional(),
    startKey: z.string().optional(),
    chain: z.string(),
});

/** @internal */
export type GetActiveAddressesRequest$Outbound = {
    from?: string | undefined;
    to?: string | undefined;
    interval?: string | undefined;
    startKey?: string | undefined;
    chain: string;
};

/** @internal */
export const GetActiveAddressesRequest$outboundSchema: z.ZodType<
    GetActiveAddressesRequest$Outbound,
    z.ZodTypeDef,
    GetActiveAddressesRequest
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    interval: components.LegacyInterval$outboundSchema.optional(),
    startKey: z.string().optional(),
    chain: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveAddressesRequest$ {
    /** @deprecated use `GetActiveAddressesRequest$inboundSchema` instead. */
    export const inboundSchema = GetActiveAddressesRequest$inboundSchema;
    /** @deprecated use `GetActiveAddressesRequest$outboundSchema` instead. */
    export const outboundSchema = GetActiveAddressesRequest$outboundSchema;
    /** @deprecated use `GetActiveAddressesRequest$Outbound` instead. */
    export type Outbound = GetActiveAddressesRequest$Outbound;
}