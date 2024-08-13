/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LatestStarsArenaBalanceParams = {
    minBalance: string;
    subjectAddress: string;
};

/** @internal */
export const LatestStarsArenaBalanceParams$inboundSchema: z.ZodType<
    LatestStarsArenaBalanceParams,
    z.ZodTypeDef,
    unknown
> = z.object({
    minBalance: z.string(),
    subjectAddress: z.string(),
});

/** @internal */
export type LatestStarsArenaBalanceParams$Outbound = {
    minBalance: string;
    subjectAddress: string;
};

/** @internal */
export const LatestStarsArenaBalanceParams$outboundSchema: z.ZodType<
    LatestStarsArenaBalanceParams$Outbound,
    z.ZodTypeDef,
    LatestStarsArenaBalanceParams
> = z.object({
    minBalance: z.string(),
    subjectAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LatestStarsArenaBalanceParams$ {
    /** @deprecated use `LatestStarsArenaBalanceParams$inboundSchema` instead. */
    export const inboundSchema = LatestStarsArenaBalanceParams$inboundSchema;
    /** @deprecated use `LatestStarsArenaBalanceParams$outboundSchema` instead. */
    export const outboundSchema = LatestStarsArenaBalanceParams$outboundSchema;
    /** @deprecated use `LatestStarsArenaBalanceParams$Outbound` instead. */
    export type Outbound = LatestStarsArenaBalanceParams$Outbound;
}
