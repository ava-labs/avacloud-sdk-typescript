/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const TimeIntervalGranularityExtended = {
  Minute: "minute",
  Hourly: "hourly",
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
export type TimeIntervalGranularityExtended = ClosedEnum<
  typeof TimeIntervalGranularityExtended
>;

/** @internal */
export const TimeIntervalGranularityExtended$inboundSchema: z.ZodNativeEnum<
  typeof TimeIntervalGranularityExtended
> = z.nativeEnum(TimeIntervalGranularityExtended);

/** @internal */
export const TimeIntervalGranularityExtended$outboundSchema: z.ZodNativeEnum<
  typeof TimeIntervalGranularityExtended
> = TimeIntervalGranularityExtended$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeIntervalGranularityExtended$ {
  /** @deprecated use `TimeIntervalGranularityExtended$inboundSchema` instead. */
  export const inboundSchema = TimeIntervalGranularityExtended$inboundSchema;
  /** @deprecated use `TimeIntervalGranularityExtended$outboundSchema` instead. */
  export const outboundSchema = TimeIntervalGranularityExtended$outboundSchema;
}
