/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DateRangeStarsArenaMinBalanceParam = {
    firstDate: string;
    lastDate: string;
    minBalance: string;
    subjectAddress: string;
};

/** @internal */
export const DateRangeStarsArenaMinBalanceParam$inboundSchema: z.ZodType<
    DateRangeStarsArenaMinBalanceParam,
    z.ZodTypeDef,
    unknown
> = z.object({
    firstDate: z.string(),
    lastDate: z.string(),
    minBalance: z.string(),
    subjectAddress: z.string(),
});

/** @internal */
export type DateRangeStarsArenaMinBalanceParam$Outbound = {
    firstDate: string;
    lastDate: string;
    minBalance: string;
    subjectAddress: string;
};

/** @internal */
export const DateRangeStarsArenaMinBalanceParam$outboundSchema: z.ZodType<
    DateRangeStarsArenaMinBalanceParam$Outbound,
    z.ZodTypeDef,
    DateRangeStarsArenaMinBalanceParam
> = z.object({
    firstDate: z.string(),
    lastDate: z.string(),
    minBalance: z.string(),
    subjectAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DateRangeStarsArenaMinBalanceParam$ {
    /** @deprecated use `DateRangeStarsArenaMinBalanceParam$inboundSchema` instead. */
    export const inboundSchema = DateRangeStarsArenaMinBalanceParam$inboundSchema;
    /** @deprecated use `DateRangeStarsArenaMinBalanceParam$outboundSchema` instead. */
    export const outboundSchema = DateRangeStarsArenaMinBalanceParam$outboundSchema;
    /** @deprecated use `DateRangeStarsArenaMinBalanceParam$Outbound` instead. */
    export type Outbound = DateRangeStarsArenaMinBalanceParam$Outbound;
}
