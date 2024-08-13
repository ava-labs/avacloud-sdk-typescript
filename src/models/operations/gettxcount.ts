/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export const GetTxCountServerList = ["http://localhost:3001"] as const;

export type GetTxCountRequest = {
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
     * numeric chainID, 'testnet', 'mainnet', or 'total'.
     */
    chain: string;
};

/** @internal */
export const GetTxCountRequest$inboundSchema: z.ZodType<GetTxCountRequest, z.ZodTypeDef, unknown> =
    z.object({
        from: z.string().optional(),
        to: z.string().optional(),
        interval: components.LegacyInterval$inboundSchema.optional(),
        chain: z.string(),
    });

/** @internal */
export type GetTxCountRequest$Outbound = {
    from?: string | undefined;
    to?: string | undefined;
    interval?: string | undefined;
    chain: string;
};

/** @internal */
export const GetTxCountRequest$outboundSchema: z.ZodType<
    GetTxCountRequest$Outbound,
    z.ZodTypeDef,
    GetTxCountRequest
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    interval: components.LegacyInterval$outboundSchema.optional(),
    chain: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTxCountRequest$ {
    /** @deprecated use `GetTxCountRequest$inboundSchema` instead. */
    export const inboundSchema = GetTxCountRequest$inboundSchema;
    /** @deprecated use `GetTxCountRequest$outboundSchema` instead. */
    export const outboundSchema = GetTxCountRequest$outboundSchema;
    /** @deprecated use `GetTxCountRequest$Outbound` instead. */
    export type Outbound = GetTxCountRequest$Outbound;
}