/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MetricsValue = {
  /**
   * Aggregated value for the current metrics.
   */
  value: number;
  /**
   * Timestamp at which metrics are aggregated.
   */
  timestamp: number;
};

/** @internal */
export const MetricsValue$inboundSchema: z.ZodType<
  MetricsValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.number(),
  timestamp: z.number(),
});

/** @internal */
export type MetricsValue$Outbound = {
  value: number;
  timestamp: number;
};

/** @internal */
export const MetricsValue$outboundSchema: z.ZodType<
  MetricsValue$Outbound,
  z.ZodTypeDef,
  MetricsValue
> = z.object({
  value: z.number(),
  timestamp: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsValue$ {
  /** @deprecated use `MetricsValue$inboundSchema` instead. */
  export const inboundSchema = MetricsValue$inboundSchema;
  /** @deprecated use `MetricsValue$outboundSchema` instead. */
  export const outboundSchema = MetricsValue$outboundSchema;
  /** @deprecated use `MetricsValue$Outbound` instead. */
  export type Outbound = MetricsValue$Outbound;
}
