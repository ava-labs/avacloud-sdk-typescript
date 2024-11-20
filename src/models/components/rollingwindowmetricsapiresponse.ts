/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChainRollingWindowMetricsValue,
  ChainRollingWindowMetricsValue$inboundSchema,
  ChainRollingWindowMetricsValue$Outbound,
  ChainRollingWindowMetricsValue$outboundSchema,
} from "./chainrollingwindowmetricsvalue.js";

export type RollingWindowMetricsApiResponse = {
  /**
   * Array of current metrics values for different windows.
   */
  result: ChainRollingWindowMetricsValue;
};

/** @internal */
export const RollingWindowMetricsApiResponse$inboundSchema: z.ZodType<
  RollingWindowMetricsApiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  result: ChainRollingWindowMetricsValue$inboundSchema,
});

/** @internal */
export type RollingWindowMetricsApiResponse$Outbound = {
  result: ChainRollingWindowMetricsValue$Outbound;
};

/** @internal */
export const RollingWindowMetricsApiResponse$outboundSchema: z.ZodType<
  RollingWindowMetricsApiResponse$Outbound,
  z.ZodTypeDef,
  RollingWindowMetricsApiResponse
> = z.object({
  result: ChainRollingWindowMetricsValue$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RollingWindowMetricsApiResponse$ {
  /** @deprecated use `RollingWindowMetricsApiResponse$inboundSchema` instead. */
  export const inboundSchema = RollingWindowMetricsApiResponse$inboundSchema;
  /** @deprecated use `RollingWindowMetricsApiResponse$outboundSchema` instead. */
  export const outboundSchema = RollingWindowMetricsApiResponse$outboundSchema;
  /** @deprecated use `RollingWindowMetricsApiResponse$Outbound` instead. */
  export type Outbound = RollingWindowMetricsApiResponse$Outbound;
}

export function rollingWindowMetricsApiResponseToJSON(
  rollingWindowMetricsApiResponse: RollingWindowMetricsApiResponse,
): string {
  return JSON.stringify(
    RollingWindowMetricsApiResponse$outboundSchema.parse(
      rollingWindowMetricsApiResponse,
    ),
  );
}

export function rollingWindowMetricsApiResponseFromJSON(
  jsonString: string,
): SafeParseResult<RollingWindowMetricsApiResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RollingWindowMetricsApiResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RollingWindowMetricsApiResponse' from JSON`,
  );
}
