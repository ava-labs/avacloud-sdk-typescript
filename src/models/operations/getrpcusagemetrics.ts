/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetRpcUsageMetricsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetRpcUsageMetricsRequest = {
  /**
   * Time interval granularity for data aggregation for subnet
   *
   * @remarks
   *      rpc metrics
   */
  timeInterval?: components.SubnetRpcTimeIntervalGranularity | undefined;
  /**
   * The start time of the range as a UNIX timestamp. The requested start time  will be rounded down to 0:00 UTC of the day.
   */
  startTimestamp?: number | undefined;
  /**
   * The end time of the range as a UNIX timestamp. The requested end time will be rounded down to 0:00 UTC of the day.
   */
  endTimestamp?: number | undefined;
  /**
   * Query param for the criterion used for grouping metrics
   */
  groupBy?: components.RpcUsageMetricsGroupByEnum | undefined;
  /**
   * Filter data by chain ID.
   */
  chainId?: string | undefined;
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
  timeInterval: components.SubnetRpcTimeIntervalGranularity$inboundSchema
    .optional(),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  groupBy: components.RpcUsageMetricsGroupByEnum$inboundSchema.optional(),
  chainId: z.string().optional(),
  responseCode: z.string().optional(),
  rpcMethod: z.string().optional(),
  rlBypassApiToken: z.string().optional(),
});

/** @internal */
export type GetRpcUsageMetricsRequest$Outbound = {
  timeInterval?: string | undefined;
  startTimestamp?: number | undefined;
  endTimestamp?: number | undefined;
  groupBy?: string | undefined;
  chainId?: string | undefined;
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
  timeInterval: components.SubnetRpcTimeIntervalGranularity$outboundSchema
    .optional(),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  groupBy: components.RpcUsageMetricsGroupByEnum$outboundSchema.optional(),
  chainId: z.string().optional(),
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

export function getRpcUsageMetricsRequestToJSON(
  getRpcUsageMetricsRequest: GetRpcUsageMetricsRequest,
): string {
  return JSON.stringify(
    GetRpcUsageMetricsRequest$outboundSchema.parse(getRpcUsageMetricsRequest),
  );
}

export function getRpcUsageMetricsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRpcUsageMetricsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRpcUsageMetricsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRpcUsageMetricsRequest' from JSON`,
  );
}
