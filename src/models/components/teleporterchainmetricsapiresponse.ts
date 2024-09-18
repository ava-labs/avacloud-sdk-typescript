/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  TeleporterMetricsValue,
  TeleporterMetricsValue$inboundSchema,
  TeleporterMetricsValue$Outbound,
  TeleporterMetricsValue$outboundSchema,
} from "./teleportermetricsvalue.js";

export type TeleporterChainMetricsApiResponse = {
  /**
   * current metrics value for a given teleporter metric.
   */
  result: TeleporterMetricsValue;
};

/** @internal */
export const TeleporterChainMetricsApiResponse$inboundSchema: z.ZodType<
  TeleporterChainMetricsApiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  result: TeleporterMetricsValue$inboundSchema,
});

/** @internal */
export type TeleporterChainMetricsApiResponse$Outbound = {
  result: TeleporterMetricsValue$Outbound;
};

/** @internal */
export const TeleporterChainMetricsApiResponse$outboundSchema: z.ZodType<
  TeleporterChainMetricsApiResponse$Outbound,
  z.ZodTypeDef,
  TeleporterChainMetricsApiResponse
> = z.object({
  result: TeleporterMetricsValue$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeleporterChainMetricsApiResponse$ {
  /** @deprecated use `TeleporterChainMetricsApiResponse$inboundSchema` instead. */
  export const inboundSchema = TeleporterChainMetricsApiResponse$inboundSchema;
  /** @deprecated use `TeleporterChainMetricsApiResponse$outboundSchema` instead. */
  export const outboundSchema =
    TeleporterChainMetricsApiResponse$outboundSchema;
  /** @deprecated use `TeleporterChainMetricsApiResponse$Outbound` instead. */
  export type Outbound = TeleporterChainMetricsApiResponse$Outbound;
}
