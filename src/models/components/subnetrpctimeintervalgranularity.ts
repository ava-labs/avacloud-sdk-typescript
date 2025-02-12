/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const SubnetRpcTimeIntervalGranularity = {
  Hourly: "hourly",
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
export type SubnetRpcTimeIntervalGranularity = ClosedEnum<
  typeof SubnetRpcTimeIntervalGranularity
>;

/** @internal */
export const SubnetRpcTimeIntervalGranularity$inboundSchema: z.ZodNativeEnum<
  typeof SubnetRpcTimeIntervalGranularity
> = z.nativeEnum(SubnetRpcTimeIntervalGranularity);

/** @internal */
export const SubnetRpcTimeIntervalGranularity$outboundSchema: z.ZodNativeEnum<
  typeof SubnetRpcTimeIntervalGranularity
> = SubnetRpcTimeIntervalGranularity$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubnetRpcTimeIntervalGranularity$ {
  /** @deprecated use `SubnetRpcTimeIntervalGranularity$inboundSchema` instead. */
  export const inboundSchema = SubnetRpcTimeIntervalGranularity$inboundSchema;
  /** @deprecated use `SubnetRpcTimeIntervalGranularity$outboundSchema` instead. */
  export const outboundSchema = SubnetRpcTimeIntervalGranularity$outboundSchema;
}
