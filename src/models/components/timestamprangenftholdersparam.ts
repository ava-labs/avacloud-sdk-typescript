/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TimestampRangeNftHoldersParam = {
    evmChainId: string;
    contractAddress: string;
    startTs: number;
    endTs: number;
};

/** @internal */
export const TimestampRangeNftHoldersParam$inboundSchema: z.ZodType<
    TimestampRangeNftHoldersParam,
    z.ZodTypeDef,
    unknown
> = z.object({
    evmChainId: z.string(),
    contractAddress: z.string(),
    startTs: z.number(),
    endTs: z.number(),
});

/** @internal */
export type TimestampRangeNftHoldersParam$Outbound = {
    evmChainId: string;
    contractAddress: string;
    startTs: number;
    endTs: number;
};

/** @internal */
export const TimestampRangeNftHoldersParam$outboundSchema: z.ZodType<
    TimestampRangeNftHoldersParam$Outbound,
    z.ZodTypeDef,
    TimestampRangeNftHoldersParam
> = z.object({
    evmChainId: z.string(),
    contractAddress: z.string(),
    startTs: z.number(),
    endTs: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimestampRangeNftHoldersParam$ {
    /** @deprecated use `TimestampRangeNftHoldersParam$inboundSchema` instead. */
    export const inboundSchema = TimestampRangeNftHoldersParam$inboundSchema;
    /** @deprecated use `TimestampRangeNftHoldersParam$outboundSchema` instead. */
    export const outboundSchema = TimestampRangeNftHoldersParam$outboundSchema;
    /** @deprecated use `TimestampRangeNftHoldersParam$Outbound` instead. */
    export type Outbound = TimestampRangeNftHoldersParam$Outbound;
}
