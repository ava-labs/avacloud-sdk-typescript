/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export const GetRpcUsageMetricsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetRpcUsageMetricsRequest = {
  /**
   * Query param for setting time interval of data aggregation.
   */
  timeInterval?: string | undefined;
  /**
   * The start time of the range as a UNIX timestamp. The requested start time  will be rounded down to 0:00 UTC of the day.
   */
  startTimestamp?: number | undefined;
  /**
   * The end time of the range as a UNIX timestamp. The requested end time will be rounded down to 0:00 UTC of the day. `endTimestamp` must be no  earlier than 0:00 UTC of the day after `startTimestamp`.
   */
  endTimestamp?: number | undefined;
  /**
   * Query param for the criterion used for grouping metrics
   */
  groupBy?: components.UsageMetricsGroupByEnum | undefined;
  /**
   * Filter data by chain ID.
   */
  chainId?: string | undefined;
  /**
   * Filter data by request path.
   */
  requestPath?: string | undefined;
  /**
   * Filter data by response status code.
   */
  responseCode?: string | undefined;
  /**
   * Filter data by RPC method.
   */
  rpcMethod?: string | undefined;
  /**
   * Filter data by Rl Bypass API Token.
   */
  rlBypassApiToken?: string | undefined;
};

/** @internal */
export const GetRpcUsageMetricsRequest$inboundSchema: z.ZodType<
  GetRpcUsageMetricsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  timeInterval: z.string().default("day"),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  groupBy: components.UsageMetricsGroupByEnum$inboundSchema.optional(),
  chainId: z.string().optional(),
  requestPath: z.string().optional(),
  responseCode: z.string().optional(),
  rpcMethod: z.string().optional(),
  rlBypassApiToken: z.string().optional(),
});

/** @internal */
export type GetRpcUsageMetricsRequest$Outbound = {
  timeInterval: string;
  startTimestamp?: number | undefined;
  endTimestamp?: number | undefined;
  groupBy?: string | undefined;
  chainId?: string | undefined;
  requestPath?: string | undefined;
  responseCode?: string | undefined;
  rpcMethod?: string | undefined;
  rlBypassApiToken?: string | undefined;
};

/** @internal */
export const GetRpcUsageMetricsRequest$outboundSchema: z.ZodType<
  GetRpcUsageMetricsRequest$Outbound,
  z.ZodTypeDef,
  GetRpcUsageMetricsRequest
> = z.object({
  timeInterval: z.string().default("day"),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  groupBy: components.UsageMetricsGroupByEnum$outboundSchema.optional(),
  chainId: z.string().optional(),
  requestPath: z.string().optional(),
  responseCode: z.string().optional(),
  rpcMethod: z.string().optional(),
  rlBypassApiToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRpcUsageMetricsRequest$ {
  /** @deprecated use `GetRpcUsageMetricsRequest$inboundSchema` instead. */
  export const inboundSchema = GetRpcUsageMetricsRequest$inboundSchema;
  /** @deprecated use `GetRpcUsageMetricsRequest$outboundSchema` instead. */
  export const outboundSchema = GetRpcUsageMetricsRequest$outboundSchema;
  /** @deprecated use `GetRpcUsageMetricsRequest$Outbound` instead. */
  export type Outbound = GetRpcUsageMetricsRequest$Outbound;
}
