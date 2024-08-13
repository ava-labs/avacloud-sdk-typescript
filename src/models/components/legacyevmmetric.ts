/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LegacyEvmMetric = {
    timestamp: number;
    value: number;
};

/** @internal */
export const LegacyEvmMetric$inboundSchema: z.ZodType<LegacyEvmMetric, z.ZodTypeDef, unknown> =
    z.object({
        timestamp: z.number(),
        value: z.number(),
    });

/** @internal */
export type LegacyEvmMetric$Outbound = {
    timestamp: number;
    value: number;
};

/** @internal */
export const LegacyEvmMetric$outboundSchema: z.ZodType<
    LegacyEvmMetric$Outbound,
    z.ZodTypeDef,
    LegacyEvmMetric
> = z.object({
    timestamp: z.number(),
    value: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LegacyEvmMetric$ {
    /** @deprecated use `LegacyEvmMetric$inboundSchema` instead. */
    export const inboundSchema = LegacyEvmMetric$inboundSchema;
    /** @deprecated use `LegacyEvmMetric$outboundSchema` instead. */
    export const outboundSchema = LegacyEvmMetric$outboundSchema;
    /** @deprecated use `LegacyEvmMetric$Outbound` instead. */
    export type Outbound = LegacyEvmMetric$Outbound;
}
