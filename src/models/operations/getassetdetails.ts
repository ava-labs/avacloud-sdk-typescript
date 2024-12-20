/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetAssetDetailsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetAssetDetailsGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type GetAssetDetailsRequest = {
  /**
   * A primary network blockchain id or alias.
   */
  blockchainId: components.XChainId;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * Asset ID for any asset on X-Chain
   */
  assetId: string;
};

/** @internal */
export const GetAssetDetailsGlobals$inboundSchema: z.ZodType<
  GetAssetDetailsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetAssetDetailsGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const GetAssetDetailsGlobals$outboundSchema: z.ZodType<
  GetAssetDetailsGlobals$Outbound,
  z.ZodTypeDef,
  GetAssetDetailsGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAssetDetailsGlobals$ {
  /** @deprecated use `GetAssetDetailsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetAssetDetailsGlobals$inboundSchema;
  /** @deprecated use `GetAssetDetailsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetAssetDetailsGlobals$outboundSchema;
  /** @deprecated use `GetAssetDetailsGlobals$Outbound` instead. */
  export type Outbound = GetAssetDetailsGlobals$Outbound;
}

export function getAssetDetailsGlobalsToJSON(
  getAssetDetailsGlobals: GetAssetDetailsGlobals,
): string {
  return JSON.stringify(
    GetAssetDetailsGlobals$outboundSchema.parse(getAssetDetailsGlobals),
  );
}

export function getAssetDetailsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetAssetDetailsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAssetDetailsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAssetDetailsGlobals' from JSON`,
  );
}

/** @internal */
export const GetAssetDetailsRequest$inboundSchema: z.ZodType<
  GetAssetDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockchainId: components.XChainId$inboundSchema,
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  assetId: z.string(),
});

/** @internal */
export type GetAssetDetailsRequest$Outbound = {
  blockchainId: string;
  network?: string | undefined;
  assetId: string;
};

/** @internal */
export const GetAssetDetailsRequest$outboundSchema: z.ZodType<
  GetAssetDetailsRequest$Outbound,
  z.ZodTypeDef,
  GetAssetDetailsRequest
> = z.object({
  blockchainId: components.XChainId$outboundSchema,
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  assetId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAssetDetailsRequest$ {
  /** @deprecated use `GetAssetDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAssetDetailsRequest$inboundSchema;
  /** @deprecated use `GetAssetDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAssetDetailsRequest$outboundSchema;
  /** @deprecated use `GetAssetDetailsRequest$Outbound` instead. */
  export type Outbound = GetAssetDetailsRequest$Outbound;
}

export function getAssetDetailsRequestToJSON(
  getAssetDetailsRequest: GetAssetDetailsRequest,
): string {
  return JSON.stringify(
    GetAssetDetailsRequest$outboundSchema.parse(getAssetDetailsRequest),
  );
}

export function getAssetDetailsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAssetDetailsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAssetDetailsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAssetDetailsRequest' from JSON`,
  );
}
