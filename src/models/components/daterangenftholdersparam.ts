/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DateRangeNftHoldersParam = {
    firstDate: string;
    lastDate: string;
    evmChainId: string;
    contractAddress: string;
};

/** @internal */
export const DateRangeNftHoldersParam$inboundSchema: z.ZodType<
    DateRangeNftHoldersParam,
    z.ZodTypeDef,
    unknown
> = z.object({
    firstDate: z.string(),
    lastDate: z.string(),
    evmChainId: z.string(),
    contractAddress: z.string(),
});

/** @internal */
export type DateRangeNftHoldersParam$Outbound = {
    firstDate: string;
    lastDate: string;
    evmChainId: string;
    contractAddress: string;
};

/** @internal */
export const DateRangeNftHoldersParam$outboundSchema: z.ZodType<
    DateRangeNftHoldersParam$Outbound,
    z.ZodTypeDef,
    DateRangeNftHoldersParam
> = z.object({
    firstDate: z.string(),
    lastDate: z.string(),
    evmChainId: z.string(),
    contractAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DateRangeNftHoldersParam$ {
    /** @deprecated use `DateRangeNftHoldersParam$inboundSchema` instead. */
    export const inboundSchema = DateRangeNftHoldersParam$inboundSchema;
    /** @deprecated use `DateRangeNftHoldersParam$outboundSchema` instead. */
    export const outboundSchema = DateRangeNftHoldersParam$outboundSchema;
    /** @deprecated use `DateRangeNftHoldersParam$Outbound` instead. */
    export type Outbound = DateRangeNftHoldersParam$Outbound;
}