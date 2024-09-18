/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Column name used for data aggregation
 */
export const GroupedBy = {
  RequestPath: "requestPath",
  ResponseCode: "responseCode",
  ChainId: "chainId",
  ApiKeyId: "apiKeyId",
  RequestType: "requestType",
  None: "None",
} as const;
/**
 * Column name used for data aggregation
 */
export type GroupedBy = ClosedEnum<typeof GroupedBy>;

/**
 * The value of the column used for data aggregation
 */
export type GroupValue = string | number;

export type UsageMetricsValueDTO = {
  /**
   * Column name used for data aggregation
   */
  groupedBy: GroupedBy;
  /**
   * The value of the column used for data aggregation
   */
  groupValue?: string | number | undefined;
  /**
   * The total number of requests
   */
  totalRequests: number;
  /**
   * The number of requests per second
   */
  requestsPerSecond: number;
  /**
   * The success rate percentage
   */
  successRatePercent: number;
  /**
   * The median response time in milliseconds
   */
  medianResponseTimeMsecs: number;
  /**
   * The number of invalid requests
   */
  invalidRequests: number;
  /**
   * The number of API credits used
   */
  apiCreditsUsed: number;
  /**
   * The number of API credits wasted on invalid requests
   */
  apiCreditsWasted: number;
};

/** @internal */
export const GroupedBy$inboundSchema: z.ZodNativeEnum<typeof GroupedBy> = z
  .nativeEnum(GroupedBy);

/** @internal */
export const GroupedBy$outboundSchema: z.ZodNativeEnum<typeof GroupedBy> =
  GroupedBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GroupedBy$ {
  /** @deprecated use `GroupedBy$inboundSchema` instead. */
  export const inboundSchema = GroupedBy$inboundSchema;
  /** @deprecated use `GroupedBy$outboundSchema` instead. */
  export const outboundSchema = GroupedBy$outboundSchema;
}

/** @internal */
export const GroupValue$inboundSchema: z.ZodType<
  GroupValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type GroupValue$Outbound = string | number;

/** @internal */
export const GroupValue$outboundSchema: z.ZodType<
  GroupValue$Outbound,
  z.ZodTypeDef,
  GroupValue
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GroupValue$ {
  /** @deprecated use `GroupValue$inboundSchema` instead. */
  export const inboundSchema = GroupValue$inboundSchema;
  /** @deprecated use `GroupValue$outboundSchema` instead. */
  export const outboundSchema = GroupValue$outboundSchema;
  /** @deprecated use `GroupValue$Outbound` instead. */
  export type Outbound = GroupValue$Outbound;
}

/** @internal */
export const UsageMetricsValueDTO$inboundSchema: z.ZodType<
  UsageMetricsValueDTO,
  z.ZodTypeDef,
  unknown
> = z.object({
  groupedBy: GroupedBy$inboundSchema,
  groupValue: z.union([z.string(), z.number()]).optional(),
  totalRequests: z.number(),
  requestsPerSecond: z.number(),
  successRatePercent: z.number(),
  medianResponseTimeMsecs: z.number(),
  invalidRequests: z.number(),
  apiCreditsUsed: z.number(),
  apiCreditsWasted: z.number(),
});

/** @internal */
export type UsageMetricsValueDTO$Outbound = {
  groupedBy: string;
  groupValue?: string | number | undefined;
  totalRequests: number;
  requestsPerSecond: number;
  successRatePercent: number;
  medianResponseTimeMsecs: number;
  invalidRequests: number;
  apiCreditsUsed: number;
  apiCreditsWasted: number;
};

/** @internal */
export const UsageMetricsValueDTO$outboundSchema: z.ZodType<
  UsageMetricsValueDTO$Outbound,
  z.ZodTypeDef,
  UsageMetricsValueDTO
> = z.object({
  groupedBy: GroupedBy$outboundSchema,
  groupValue: z.union([z.string(), z.number()]).optional(),
  totalRequests: z.number(),
  requestsPerSecond: z.number(),
  successRatePercent: z.number(),
  medianResponseTimeMsecs: z.number(),
  invalidRequests: z.number(),
  apiCreditsUsed: z.number(),
  apiCreditsWasted: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsageMetricsValueDTO$ {
  /** @deprecated use `UsageMetricsValueDTO$inboundSchema` instead. */
  export const inboundSchema = UsageMetricsValueDTO$inboundSchema;
  /** @deprecated use `UsageMetricsValueDTO$outboundSchema` instead. */
  export const outboundSchema = UsageMetricsValueDTO$outboundSchema;
  /** @deprecated use `UsageMetricsValueDTO$Outbound` instead. */
  export type Outbound = UsageMetricsValueDTO$Outbound;
}
