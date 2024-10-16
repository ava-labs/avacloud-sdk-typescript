/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  RpcMetrics,
  RpcMetrics$inboundSchema,
  RpcMetrics$Outbound,
  RpcMetrics$outboundSchema,
} from "./rpcmetrics.js";

export type RpcUsageMetricsResponseDTO = {
  /**
   * Duration in which the metrics value is aggregated
   */
  aggregateDuration: string;
  /**
   * ChainId for which the metrics are aggregated
   */
  chainId: string;
  /**
   * Metrics values
   */
  metrics: Array<RpcMetrics>;
};

/** @internal */
export const RpcUsageMetricsResponseDTO$inboundSchema: z.ZodType<
  RpcUsageMetricsResponseDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  aggregateDuration: z.string(),
  chainId: z.string(),
  metrics: z.array(RpcMetrics$inboundSchema),
});

/** @internal */
export type RpcUsageMetricsResponseDTO$Outbound = {
  aggregateDuration: string;
  chainId: string;
  metrics: Array<RpcMetrics$Outbound>;
};

/** @internal */
export const RpcUsageMetricsResponseDTO$outboundSchema: z.ZodType<
  RpcUsageMetricsResponseDTO$Outbound,
  z.ZodTypeDef,
  RpcUsageMetricsResponseDTO
> = z.object({
  aggregateDuration: z.string(),
  chainId: z.string(),
  metrics: z.array(RpcMetrics$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RpcUsageMetricsResponseDTO$ {
  /** @deprecated use `RpcUsageMetricsResponseDTO$inboundSchema` instead. */
  export const inboundSchema = RpcUsageMetricsResponseDTO$inboundSchema;
  /** @deprecated use `RpcUsageMetricsResponseDTO$outboundSchema` instead. */
  export const outboundSchema = RpcUsageMetricsResponseDTO$outboundSchema;
  /** @deprecated use `RpcUsageMetricsResponseDTO$Outbound` instead. */
  export type Outbound = RpcUsageMetricsResponseDTO$Outbound;
}
