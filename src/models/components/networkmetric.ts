/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const NetworkMetric = {
  DelegatorCount: "delegatorCount",
  DelegatorWeight: "delegatorWeight",
  ValidatorCount: "validatorCount",
  ValidatorWeight: "validatorWeight",
} as const;
export type NetworkMetric = ClosedEnum<typeof NetworkMetric>;

/** @internal */
export const NetworkMetric$inboundSchema: z.ZodNativeEnum<
  typeof NetworkMetric
> = z.nativeEnum(NetworkMetric);

/** @internal */
export const NetworkMetric$outboundSchema: z.ZodNativeEnum<
  typeof NetworkMetric
> = NetworkMetric$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NetworkMetric$ {
  /** @deprecated use `NetworkMetric$inboundSchema` instead. */
  export const inboundSchema = NetworkMetric$inboundSchema;
  /** @deprecated use `NetworkMetric$outboundSchema` instead. */
  export const outboundSchema = NetworkMetric$outboundSchema;
}
