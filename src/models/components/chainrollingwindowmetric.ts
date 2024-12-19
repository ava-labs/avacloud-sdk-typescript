/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ChainRollingWindowMetric = {
  GasUsed: "gasUsed",
  TxCount: "txCount",
  AvgGps: "avgGps",
  MaxGps: "maxGps",
  AvgTps: "avgTps",
  MaxTps: "maxTps",
  AvgGasPrice: "avgGasPrice",
  MaxGasPrice: "maxGasPrice",
  FeesPaid: "feesPaid",
} as const;
export type ChainRollingWindowMetric = ClosedEnum<
  typeof ChainRollingWindowMetric
>;

/** @internal */
export const ChainRollingWindowMetric$inboundSchema: z.ZodNativeEnum<
  typeof ChainRollingWindowMetric
> = z.nativeEnum(ChainRollingWindowMetric);

/** @internal */
export const ChainRollingWindowMetric$outboundSchema: z.ZodNativeEnum<
  typeof ChainRollingWindowMetric
> = ChainRollingWindowMetric$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChainRollingWindowMetric$ {
  /** @deprecated use `ChainRollingWindowMetric$inboundSchema` instead. */
  export const inboundSchema = ChainRollingWindowMetric$inboundSchema;
  /** @deprecated use `ChainRollingWindowMetric$outboundSchema` instead. */
  export const outboundSchema = ChainRollingWindowMetric$outboundSchema;
}
