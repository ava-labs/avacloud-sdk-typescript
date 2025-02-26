/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetIcmMessageServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetIcmMessageRequest = {
  /**
   * The message ID of the ICM message.
   */
  messageId: string;
};

/**
 * Successful response
 */
export type GetIcmMessageResponseBody =
  | (components.PendingIcmMessage & { status: "pending" })
  | (components.DeliveredSourceNotIndexedIcmMessage & {
    status: "delivered_source_not_indexed";
  })
  | (components.DeliveredIcmMessage & { status: "delivered" });

/** @internal */
export const GetIcmMessageRequest$inboundSchema: z.ZodType<
  GetIcmMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  messageId: z.string(),
});

/** @internal */
export type GetIcmMessageRequest$Outbound = {
  messageId: string;
};

/** @internal */
export const GetIcmMessageRequest$outboundSchema: z.ZodType<
  GetIcmMessageRequest$Outbound,
  z.ZodTypeDef,
  GetIcmMessageRequest
> = z.object({
  messageId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIcmMessageRequest$ {
  /** @deprecated use `GetIcmMessageRequest$inboundSchema` instead. */
  export const inboundSchema = GetIcmMessageRequest$inboundSchema;
  /** @deprecated use `GetIcmMessageRequest$outboundSchema` instead. */
  export const outboundSchema = GetIcmMessageRequest$outboundSchema;
  /** @deprecated use `GetIcmMessageRequest$Outbound` instead. */
  export type Outbound = GetIcmMessageRequest$Outbound;
}

export function getIcmMessageRequestToJSON(
  getIcmMessageRequest: GetIcmMessageRequest,
): string {
  return JSON.stringify(
    GetIcmMessageRequest$outboundSchema.parse(getIcmMessageRequest),
  );
}

export function getIcmMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetIcmMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIcmMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIcmMessageRequest' from JSON`,
  );
}

/** @internal */
export const GetIcmMessageResponseBody$inboundSchema: z.ZodType<
  GetIcmMessageResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.PendingIcmMessage$inboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  components.DeliveredSourceNotIndexedIcmMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered_source_not_indexed") }).transform((
      v,
    ) => ({ status: v.status })),
  ),
  components.DeliveredIcmMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/** @internal */
export type GetIcmMessageResponseBody$Outbound =
  | (components.PendingIcmMessage$Outbound & { status: "pending" })
  | (components.DeliveredSourceNotIndexedIcmMessage$Outbound & {
    status: "delivered_source_not_indexed";
  })
  | (components.DeliveredIcmMessage$Outbound & { status: "delivered" });

/** @internal */
export const GetIcmMessageResponseBody$outboundSchema: z.ZodType<
  GetIcmMessageResponseBody$Outbound,
  z.ZodTypeDef,
  GetIcmMessageResponseBody
> = z.union([
  components.PendingIcmMessage$outboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  components.DeliveredSourceNotIndexedIcmMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered_source_not_indexed") }).transform((
      v,
    ) => ({ status: v.status })),
  ),
  components.DeliveredIcmMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIcmMessageResponseBody$ {
  /** @deprecated use `GetIcmMessageResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetIcmMessageResponseBody$inboundSchema;
  /** @deprecated use `GetIcmMessageResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetIcmMessageResponseBody$outboundSchema;
  /** @deprecated use `GetIcmMessageResponseBody$Outbound` instead. */
  export type Outbound = GetIcmMessageResponseBody$Outbound;
}

export function getIcmMessageResponseBodyToJSON(
  getIcmMessageResponseBody: GetIcmMessageResponseBody,
): string {
  return JSON.stringify(
    GetIcmMessageResponseBody$outboundSchema.parse(getIcmMessageResponseBody),
  );
}

export function getIcmMessageResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetIcmMessageResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIcmMessageResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIcmMessageResponseBody' from JSON`,
  );
}
