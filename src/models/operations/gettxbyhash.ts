/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetTxByHashServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetTxByHashGlobals = {
  /**
   * A supported network type mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
};

export type GetTxByHashRequest = {
  /**
   * A primary network blockchain id or alias.
   */
  blockchainId: components.BlockchainId;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.GlobalParamNetwork | undefined;
  /**
   * A primary network (P or X chain) transaction hash.
   */
  txHash: string;
};

/**
 * Successful response
 */
export type GetTxByHashResponseBody =
  | components.CChainExportTransaction
  | components.CChainImportTransaction
  | components.PChainTransaction
  | components.XChainLinearTransaction
  | components.XChainNonLinearTransaction;

/** @internal */
export const GetTxByHashGlobals$inboundSchema: z.ZodType<
  GetTxByHashGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.GlobalParamNetwork$inboundSchema.optional(),
});

/** @internal */
export type GetTxByHashGlobals$Outbound = {
  network?: string | undefined;
};

/** @internal */
export const GetTxByHashGlobals$outboundSchema: z.ZodType<
  GetTxByHashGlobals$Outbound,
  z.ZodTypeDef,
  GetTxByHashGlobals
> = z.object({
  network: components.GlobalParamNetwork$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTxByHashGlobals$ {
  /** @deprecated use `GetTxByHashGlobals$inboundSchema` instead. */
  export const inboundSchema = GetTxByHashGlobals$inboundSchema;
  /** @deprecated use `GetTxByHashGlobals$outboundSchema` instead. */
  export const outboundSchema = GetTxByHashGlobals$outboundSchema;
  /** @deprecated use `GetTxByHashGlobals$Outbound` instead. */
  export type Outbound = GetTxByHashGlobals$Outbound;
}

export function getTxByHashGlobalsToJSON(
  getTxByHashGlobals: GetTxByHashGlobals,
): string {
  return JSON.stringify(
    GetTxByHashGlobals$outboundSchema.parse(getTxByHashGlobals),
  );
}

export function getTxByHashGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetTxByHashGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTxByHashGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTxByHashGlobals' from JSON`,
  );
}

/** @internal */
export const GetTxByHashRequest$inboundSchema: z.ZodType<
  GetTxByHashRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockchainId: components.BlockchainId$inboundSchema,
  network: components.GlobalParamNetwork$inboundSchema.optional(),
  txHash: z.string(),
});

/** @internal */
export type GetTxByHashRequest$Outbound = {
  blockchainId: string;
  network?: string | undefined;
  txHash: string;
};

/** @internal */
export const GetTxByHashRequest$outboundSchema: z.ZodType<
  GetTxByHashRequest$Outbound,
  z.ZodTypeDef,
  GetTxByHashRequest
> = z.object({
  blockchainId: components.BlockchainId$outboundSchema,
  network: components.GlobalParamNetwork$outboundSchema.optional(),
  txHash: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTxByHashRequest$ {
  /** @deprecated use `GetTxByHashRequest$inboundSchema` instead. */
  export const inboundSchema = GetTxByHashRequest$inboundSchema;
  /** @deprecated use `GetTxByHashRequest$outboundSchema` instead. */
  export const outboundSchema = GetTxByHashRequest$outboundSchema;
  /** @deprecated use `GetTxByHashRequest$Outbound` instead. */
  export type Outbound = GetTxByHashRequest$Outbound;
}

export function getTxByHashRequestToJSON(
  getTxByHashRequest: GetTxByHashRequest,
): string {
  return JSON.stringify(
    GetTxByHashRequest$outboundSchema.parse(getTxByHashRequest),
  );
}

export function getTxByHashRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTxByHashRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTxByHashRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTxByHashRequest' from JSON`,
  );
}

/** @internal */
export const GetTxByHashResponseBody$inboundSchema: z.ZodType<
  GetTxByHashResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.CChainExportTransaction$inboundSchema,
  components.CChainImportTransaction$inboundSchema,
  components.PChainTransaction$inboundSchema,
  components.XChainLinearTransaction$inboundSchema,
  components.XChainNonLinearTransaction$inboundSchema,
]);

/** @internal */
export type GetTxByHashResponseBody$Outbound =
  | components.CChainExportTransaction$Outbound
  | components.CChainImportTransaction$Outbound
  | components.PChainTransaction$Outbound
  | components.XChainLinearTransaction$Outbound
  | components.XChainNonLinearTransaction$Outbound;

/** @internal */
export const GetTxByHashResponseBody$outboundSchema: z.ZodType<
  GetTxByHashResponseBody$Outbound,
  z.ZodTypeDef,
  GetTxByHashResponseBody
> = z.union([
  components.CChainExportTransaction$outboundSchema,
  components.CChainImportTransaction$outboundSchema,
  components.PChainTransaction$outboundSchema,
  components.XChainLinearTransaction$outboundSchema,
  components.XChainNonLinearTransaction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTxByHashResponseBody$ {
  /** @deprecated use `GetTxByHashResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetTxByHashResponseBody$inboundSchema;
  /** @deprecated use `GetTxByHashResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetTxByHashResponseBody$outboundSchema;
  /** @deprecated use `GetTxByHashResponseBody$Outbound` instead. */
  export type Outbound = GetTxByHashResponseBody$Outbound;
}

export function getTxByHashResponseBodyToJSON(
  getTxByHashResponseBody: GetTxByHashResponseBody,
): string {
  return JSON.stringify(
    GetTxByHashResponseBody$outboundSchema.parse(getTxByHashResponseBody),
  );
}

export function getTxByHashResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetTxByHashResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTxByHashResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTxByHashResponseBody' from JSON`,
  );
}
