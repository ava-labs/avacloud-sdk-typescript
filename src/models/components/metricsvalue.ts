/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MetricsValue = {
  /**
   * Aggregated value for the current metrics.
   */
  value: number;
  /**
   * Unix Epoch timestamp for which metrics are aggregated. Depending on the interval of the metric this can be at the start of the relevant hour, day, month, year, etc.
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

export function metricsValueToJSON(metricsValue: MetricsValue): string {
  return JSON.stringify(MetricsValue$outboundSchema.parse(metricsValue));
}

export function metricsValueFromJSON(
  jsonString: string,
): SafeParseResult<MetricsValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsValue' from JSON`,
  );
}
