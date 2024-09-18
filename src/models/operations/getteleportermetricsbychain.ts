/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export const GetTeleporterMetricsByChainServerList = [
  "https://metrics.avax.network",
] as const;

export type GetTeleporterMetricsByChainGlobals = {
  /**
   * A supported EVM chain id, chain alias, or blockchain id.
   */
  chainId?: string | undefined;
};

export type GetTeleporterMetricsByChainRequest = {
  /**
   * Which chain level teleporter metric to fetch.
   */
  metric: components.TeleporterMetric;
  /**
   * A supported EVM chain ID or one of "total", "mainnet", or "testnet". Use the `/chains` endpoint to get a list of supported chain IDs.
   */
  chainId?: string | undefined;
};

/** @internal */
export const GetTeleporterMetricsByChainGlobals$inboundSchema: z.ZodType<
  GetTeleporterMetricsByChainGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.string().optional(),
});

/** @internal */
export type GetTeleporterMetricsByChainGlobals$Outbound = {
  chainId?: string | undefined;
};

/** @internal */
export const GetTeleporterMetricsByChainGlobals$outboundSchema: z.ZodType<
  GetTeleporterMetricsByChainGlobals$Outbound,
  z.ZodTypeDef,
  GetTeleporterMetricsByChainGlobals
> = z.object({
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeleporterMetricsByChainGlobals$ {
  /** @deprecated use `GetTeleporterMetricsByChainGlobals$inboundSchema` instead. */
  export const inboundSchema = GetTeleporterMetricsByChainGlobals$inboundSchema;
  /** @deprecated use `GetTeleporterMetricsByChainGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetTeleporterMetricsByChainGlobals$outboundSchema;
  /** @deprecated use `GetTeleporterMetricsByChainGlobals$Outbound` instead. */
  export type Outbound = GetTeleporterMetricsByChainGlobals$Outbound;
}

/** @internal */
export const GetTeleporterMetricsByChainRequest$inboundSchema: z.ZodType<
  GetTeleporterMetricsByChainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  metric: components.TeleporterMetric$inboundSchema,
  chainId: z.string().optional(),
});

/** @internal */
export type GetTeleporterMetricsByChainRequest$Outbound = {
  metric: string;
  chainId?: string | undefined;
};

/** @internal */
export const GetTeleporterMetricsByChainRequest$outboundSchema: z.ZodType<
  GetTeleporterMetricsByChainRequest$Outbound,
  z.ZodTypeDef,
  GetTeleporterMetricsByChainRequest
> = z.object({
  metric: components.TeleporterMetric$outboundSchema,
  chainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeleporterMetricsByChainRequest$ {
  /** @deprecated use `GetTeleporterMetricsByChainRequest$inboundSchema` instead. */
  export const inboundSchema = GetTeleporterMetricsByChainRequest$inboundSchema;
  /** @deprecated use `GetTeleporterMetricsByChainRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetTeleporterMetricsByChainRequest$outboundSchema;
  /** @deprecated use `GetTeleporterMetricsByChainRequest$Outbound` instead. */
  export type Outbound = GetTeleporterMetricsByChainRequest$Outbound;
}