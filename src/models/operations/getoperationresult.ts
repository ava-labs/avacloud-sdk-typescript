/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetOperationResultServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetOperationResultRequest = {
  /**
   * UUID of given operation
   */
  operationId: string;
};

/** @internal */
export const GetOperationResultRequest$inboundSchema: z.ZodType<
  GetOperationResultRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  operationId: z.string(),
});

/** @internal */
export type GetOperationResultRequest$Outbound = {
  operationId: string;
};

/** @internal */
export const GetOperationResultRequest$outboundSchema: z.ZodType<
  GetOperationResultRequest$Outbound,
  z.ZodTypeDef,
  GetOperationResultRequest
> = z.object({
  operationId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOperationResultRequest$ {
  /** @deprecated use `GetOperationResultRequest$inboundSchema` instead. */
  export const inboundSchema = GetOperationResultRequest$inboundSchema;
  /** @deprecated use `GetOperationResultRequest$outboundSchema` instead. */
  export const outboundSchema = GetOperationResultRequest$outboundSchema;
  /** @deprecated use `GetOperationResultRequest$Outbound` instead. */
  export type Outbound = GetOperationResultRequest$Outbound;
}

export function getOperationResultRequestToJSON(
  getOperationResultRequest: GetOperationResultRequest,
): string {
  return JSON.stringify(
    GetOperationResultRequest$outboundSchema.parse(getOperationResultRequest),
  );
}

export function getOperationResultRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetOperationResultRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOperationResultRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOperationResultRequest' from JSON`,
  );
}
