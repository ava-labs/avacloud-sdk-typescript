/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetChainServerList = [
  "https://metrics.avax.network",
] as const;

export type GetChainGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetChainRequest = {
  /**
   * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
   */
  chainId?: string | undefined;
};

/** @internal */
export const GetChainGlobals$inboundSchema: z.ZodType<
  GetChainGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetChainGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetChainGlobals$outboundSchema: z.ZodType<
  GetChainGlobals$Outbound,
  z.ZodTypeDef,
  GetChainGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChainGlobals$ {
  /** @deprecated use `GetChainGlobals$inboundSchema` instead. */
  export const inboundSchema = GetChainGlobals$inboundSchema;
  /** @deprecated use `GetChainGlobals$outboundSchema` instead. */
  export const outboundSchema = GetChainGlobals$outboundSchema;
  /** @deprecated use `GetChainGlobals$Outbound` instead. */
  export type Outbound = GetChainGlobals$Outbound;
}

export function getChainGlobalsToJSON(
  getChainGlobals: GetChainGlobals,
): string {
  return JSON.stringify(GetChainGlobals$outboundSchema.parse(getChainGlobals));
}

export function getChainGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetChainGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetChainGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetChainGlobals' from JSON`,
  );
}

/** @internal */
export const GetChainRequest$inboundSchema: z.ZodType<
  GetChainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetChainRequest$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetChainRequest$outboundSchema: z.ZodType<
  GetChainRequest$Outbound,
  z.ZodTypeDef,
  GetChainRequest
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChainRequest$ {
  /** @deprecated use `GetChainRequest$inboundSchema` instead. */
  export const inboundSchema = GetChainRequest$inboundSchema;
  /** @deprecated use `GetChainRequest$outboundSchema` instead. */
  export const outboundSchema = GetChainRequest$outboundSchema;
  /** @deprecated use `GetChainRequest$Outbound` instead. */
  export type Outbound = GetChainRequest$Outbound;
}

export function getChainRequestToJSON(
  getChainRequest: GetChainRequest,
): string {
  return JSON.stringify(GetChainRequest$outboundSchema.parse(getChainRequest));
}

export function getChainRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetChainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetChainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetChainRequest' from JSON`,
  );
}
