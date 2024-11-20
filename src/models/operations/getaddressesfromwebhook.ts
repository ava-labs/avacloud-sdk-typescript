/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetAddressesFromWebhookServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetAddressesFromWebhookRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * The webhook identifier.
   */
  id: string;
};

export type GetAddressesFromWebhookResponse = {
  result: components.ListWebhookAddressesResponse;
};

/** @internal */
export const GetAddressesFromWebhookRequest$inboundSchema: z.ZodType<
  GetAddressesFromWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  id: z.string(),
});

/** @internal */
export type GetAddressesFromWebhookRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  id: string;
};

/** @internal */
export const GetAddressesFromWebhookRequest$outboundSchema: z.ZodType<
  GetAddressesFromWebhookRequest$Outbound,
  z.ZodTypeDef,
  GetAddressesFromWebhookRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddressesFromWebhookRequest$ {
  /** @deprecated use `GetAddressesFromWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = GetAddressesFromWebhookRequest$inboundSchema;
  /** @deprecated use `GetAddressesFromWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = GetAddressesFromWebhookRequest$outboundSchema;
  /** @deprecated use `GetAddressesFromWebhookRequest$Outbound` instead. */
  export type Outbound = GetAddressesFromWebhookRequest$Outbound;
}

export function getAddressesFromWebhookRequestToJSON(
  getAddressesFromWebhookRequest: GetAddressesFromWebhookRequest,
): string {
  return JSON.stringify(
    GetAddressesFromWebhookRequest$outboundSchema.parse(
      getAddressesFromWebhookRequest,
    ),
  );
}

export function getAddressesFromWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAddressesFromWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAddressesFromWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAddressesFromWebhookRequest' from JSON`,
  );
}

/** @internal */
export const GetAddressesFromWebhookResponse$inboundSchema: z.ZodType<
  GetAddressesFromWebhookResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListWebhookAddressesResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetAddressesFromWebhookResponse$Outbound = {
  Result: components.ListWebhookAddressesResponse$Outbound;
};

/** @internal */
export const GetAddressesFromWebhookResponse$outboundSchema: z.ZodType<
  GetAddressesFromWebhookResponse$Outbound,
  z.ZodTypeDef,
  GetAddressesFromWebhookResponse
> = z.object({
  result: components.ListWebhookAddressesResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddressesFromWebhookResponse$ {
  /** @deprecated use `GetAddressesFromWebhookResponse$inboundSchema` instead. */
  export const inboundSchema = GetAddressesFromWebhookResponse$inboundSchema;
  /** @deprecated use `GetAddressesFromWebhookResponse$outboundSchema` instead. */
  export const outboundSchema = GetAddressesFromWebhookResponse$outboundSchema;
  /** @deprecated use `GetAddressesFromWebhookResponse$Outbound` instead. */
  export type Outbound = GetAddressesFromWebhookResponse$Outbound;
}

export function getAddressesFromWebhookResponseToJSON(
  getAddressesFromWebhookResponse: GetAddressesFromWebhookResponse,
): string {
  return JSON.stringify(
    GetAddressesFromWebhookResponse$outboundSchema.parse(
      getAddressesFromWebhookResponse,
    ),
  );
}

export function getAddressesFromWebhookResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAddressesFromWebhookResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAddressesFromWebhookResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAddressesFromWebhookResponse' from JSON`,
  );
}
