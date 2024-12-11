/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListL1ValidatorsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListL1ValidatorsGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type ListL1ValidatorsRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * The L1 Validator's validation ID to filter by. If not provided, then all L1 Validators will be returned.
   */
  l1ValidationId?: any | undefined;
  includeInactiveL1Validators?: boolean | undefined;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * A valid node ID in format 'NodeID-HASH'.
   */
  nodeId?: string | undefined;
  /**
   * The subnet ID to filter by. If not provided, then all subnets will be returned.
   */
  subnetId?: any | undefined;
};

export type ListL1ValidatorsResponse = {
  result: components.ListL1ValidatorsResponse;
};

/** @internal */
export const ListL1ValidatorsGlobals$inboundSchema: z.ZodType<
  ListL1ValidatorsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type ListL1ValidatorsGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const ListL1ValidatorsGlobals$outboundSchema: z.ZodType<
  ListL1ValidatorsGlobals$Outbound,
  z.ZodTypeDef,
  ListL1ValidatorsGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListL1ValidatorsGlobals$ {
  /** @deprecated use `ListL1ValidatorsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListL1ValidatorsGlobals$inboundSchema;
  /** @deprecated use `ListL1ValidatorsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListL1ValidatorsGlobals$outboundSchema;
  /** @deprecated use `ListL1ValidatorsGlobals$Outbound` instead. */
  export type Outbound = ListL1ValidatorsGlobals$Outbound;
}

export function listL1ValidatorsGlobalsToJSON(
  listL1ValidatorsGlobals: ListL1ValidatorsGlobals,
): string {
  return JSON.stringify(
    ListL1ValidatorsGlobals$outboundSchema.parse(listL1ValidatorsGlobals),
  );
}

export function listL1ValidatorsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListL1ValidatorsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListL1ValidatorsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListL1ValidatorsGlobals' from JSON`,
  );
}

/** @internal */
export const ListL1ValidatorsRequest$inboundSchema: z.ZodType<
  ListL1ValidatorsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  l1ValidationId: z.any().optional(),
  includeInactiveL1Validators: z.boolean().optional(),
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  nodeId: z.string().optional(),
  subnetId: z.any().optional(),
});

/** @internal */
export type ListL1ValidatorsRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  l1ValidationId?: any | undefined;
  includeInactiveL1Validators?: boolean | undefined;
  network?: string | undefined;
  nodeId?: string | undefined;
  subnetId?: any | undefined;
};

/** @internal */
export const ListL1ValidatorsRequest$outboundSchema: z.ZodType<
  ListL1ValidatorsRequest$Outbound,
  z.ZodTypeDef,
  ListL1ValidatorsRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  l1ValidationId: z.any().optional(),
  includeInactiveL1Validators: z.boolean().optional(),
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  nodeId: z.string().optional(),
  subnetId: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListL1ValidatorsRequest$ {
  /** @deprecated use `ListL1ValidatorsRequest$inboundSchema` instead. */
  export const inboundSchema = ListL1ValidatorsRequest$inboundSchema;
  /** @deprecated use `ListL1ValidatorsRequest$outboundSchema` instead. */
  export const outboundSchema = ListL1ValidatorsRequest$outboundSchema;
  /** @deprecated use `ListL1ValidatorsRequest$Outbound` instead. */
  export type Outbound = ListL1ValidatorsRequest$Outbound;
}

export function listL1ValidatorsRequestToJSON(
  listL1ValidatorsRequest: ListL1ValidatorsRequest,
): string {
  return JSON.stringify(
    ListL1ValidatorsRequest$outboundSchema.parse(listL1ValidatorsRequest),
  );
}

export function listL1ValidatorsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListL1ValidatorsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListL1ValidatorsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListL1ValidatorsRequest' from JSON`,
  );
}

/** @internal */
export const ListL1ValidatorsResponse$inboundSchema: z.ZodType<
  ListL1ValidatorsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListL1ValidatorsResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListL1ValidatorsResponse$Outbound = {
  Result: components.ListL1ValidatorsResponse$Outbound;
};

/** @internal */
export const ListL1ValidatorsResponse$outboundSchema: z.ZodType<
  ListL1ValidatorsResponse$Outbound,
  z.ZodTypeDef,
  ListL1ValidatorsResponse
> = z.object({
  result: components.ListL1ValidatorsResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListL1ValidatorsResponse$ {
  /** @deprecated use `ListL1ValidatorsResponse$inboundSchema` instead. */
  export const inboundSchema = ListL1ValidatorsResponse$inboundSchema;
  /** @deprecated use `ListL1ValidatorsResponse$outboundSchema` instead. */
  export const outboundSchema = ListL1ValidatorsResponse$outboundSchema;
  /** @deprecated use `ListL1ValidatorsResponse$Outbound` instead. */
  export type Outbound = ListL1ValidatorsResponse$Outbound;
}

export function listL1ValidatorsResponseToJSON(
  listL1ValidatorsResponse: ListL1ValidatorsResponse,
): string {
  return JSON.stringify(
    ListL1ValidatorsResponse$outboundSchema.parse(listL1ValidatorsResponse),
  );
}

export function listL1ValidatorsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListL1ValidatorsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListL1ValidatorsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListL1ValidatorsResponse' from JSON`,
  );
}