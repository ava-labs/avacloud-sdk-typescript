/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetApiLogsServerList = [
  "https://glacier-api.avax.network",
] as const;

/**
 * Filter data by request type.
 */
export const QueryParamRequestType = {
  Data: "data",
  Rpc: "rpc",
} as const;
/**
 * Filter data by request type.
 */
export type QueryParamRequestType = ClosedEnum<typeof QueryParamRequestType>;

export type GetApiLogsRequest = {
  /**
   * Organization ID to fetch usage metrics for
   */
  orgId?: string | undefined;
  /**
   * The start time of the range as a UNIX timestamp. The requested start time  will be rounded down to 0:00 UTC of the day.
   */
  startTimestamp?: number | undefined;
  /**
   * The end time of the range as a UNIX timestamp. The requested end time will be rounded down to 0:00 UTC of the day.
   */
  endTimestamp?: number | undefined;
  /**
   * Filter data by chain ID.
   */
  chainId?: string | undefined;
  /**
   * Filter data by response status code.
   */
  responseCode?: string | undefined;
  /**
   * Filter data by request type.
   */
  requestType?: QueryParamRequestType | undefined;
  /**
   * Filter data by API key ID.
   */
  apiKeyId?: string | undefined;
  /**
   * Filter data by request path.
   */
  requestPath?: string | undefined;
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return.
   */
  pageSize?: number | undefined;
};

export type GetApiLogsResponse = {
  result: components.LogsResponseDTO;
};

/** @internal */
export const QueryParamRequestType$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamRequestType
> = z.nativeEnum(QueryParamRequestType);

/** @internal */
export const QueryParamRequestType$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamRequestType
> = QueryParamRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamRequestType$ {
  /** @deprecated use `QueryParamRequestType$inboundSchema` instead. */
  export const inboundSchema = QueryParamRequestType$inboundSchema;
  /** @deprecated use `QueryParamRequestType$outboundSchema` instead. */
  export const outboundSchema = QueryParamRequestType$outboundSchema;
}

/** @internal */
export const GetApiLogsRequest$inboundSchema: z.ZodType<
  GetApiLogsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string().optional(),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  chainId: z.string().optional(),
  responseCode: z.string().optional(),
  requestType: QueryParamRequestType$inboundSchema.optional(),
  apiKeyId: z.string().optional(),
  requestPath: z.string().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
});

/** @internal */
export type GetApiLogsRequest$Outbound = {
  orgId?: string | undefined;
  startTimestamp?: number | undefined;
  endTimestamp?: number | undefined;
  chainId?: string | undefined;
  responseCode?: string | undefined;
  requestType?: string | undefined;
  apiKeyId?: string | undefined;
  requestPath?: string | undefined;
  pageToken?: string | undefined;
  pageSize: number;
};

/** @internal */
export const GetApiLogsRequest$outboundSchema: z.ZodType<
  GetApiLogsRequest$Outbound,
  z.ZodTypeDef,
  GetApiLogsRequest
> = z.object({
  orgId: z.string().optional(),
  startTimestamp: z.number().int().optional(),
  endTimestamp: z.number().int().optional(),
  chainId: z.string().optional(),
  responseCode: z.string().optional(),
  requestType: QueryParamRequestType$outboundSchema.optional(),
  apiKeyId: z.string().optional(),
  requestPath: z.string().optional(),
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLogsRequest$ {
  /** @deprecated use `GetApiLogsRequest$inboundSchema` instead. */
  export const inboundSchema = GetApiLogsRequest$inboundSchema;
  /** @deprecated use `GetApiLogsRequest$outboundSchema` instead. */
  export const outboundSchema = GetApiLogsRequest$outboundSchema;
  /** @deprecated use `GetApiLogsRequest$Outbound` instead. */
  export type Outbound = GetApiLogsRequest$Outbound;
}

export function getApiLogsRequestToJSON(
  getApiLogsRequest: GetApiLogsRequest,
): string {
  return JSON.stringify(
    GetApiLogsRequest$outboundSchema.parse(getApiLogsRequest),
  );
}

export function getApiLogsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetApiLogsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiLogsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiLogsRequest' from JSON`,
  );
}

/** @internal */
export const GetApiLogsResponse$inboundSchema: z.ZodType<
  GetApiLogsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.LogsResponseDTO$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetApiLogsResponse$Outbound = {
  Result: components.LogsResponseDTO$Outbound;
};

/** @internal */
export const GetApiLogsResponse$outboundSchema: z.ZodType<
  GetApiLogsResponse$Outbound,
  z.ZodTypeDef,
  GetApiLogsResponse
> = z.object({
  result: components.LogsResponseDTO$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLogsResponse$ {
  /** @deprecated use `GetApiLogsResponse$inboundSchema` instead. */
  export const inboundSchema = GetApiLogsResponse$inboundSchema;
  /** @deprecated use `GetApiLogsResponse$outboundSchema` instead. */
  export const outboundSchema = GetApiLogsResponse$outboundSchema;
  /** @deprecated use `GetApiLogsResponse$Outbound` instead. */
  export type Outbound = GetApiLogsResponse$Outbound;
}

export function getApiLogsResponseToJSON(
  getApiLogsResponse: GetApiLogsResponse,
): string {
  return JSON.stringify(
    GetApiLogsResponse$outboundSchema.parse(getApiLogsResponse),
  );
}

export function getApiLogsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetApiLogsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiLogsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiLogsResponse' from JSON`,
  );
}
