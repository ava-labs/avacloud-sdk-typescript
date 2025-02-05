/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const SupportedChainsServerList = [
  "https://glacier-api.avax.network",
] as const;

export type SupportedChainsRequest = {
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.Network | undefined;
  /**
   * Filter by feature.
   */
  feature?: components.ApiFeature | undefined;
};

/** @internal */
export const SupportedChainsRequest$inboundSchema: z.ZodType<
  SupportedChainsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  network: components.Network$inboundSchema.optional(),
  feature: components.ApiFeature$inboundSchema.optional(),
});

/** @internal */
export type SupportedChainsRequest$Outbound = {
  network?: string | undefined;
  feature?: string | undefined;
};

/** @internal */
export const SupportedChainsRequest$outboundSchema: z.ZodType<
  SupportedChainsRequest$Outbound,
  z.ZodTypeDef,
  SupportedChainsRequest
> = z.object({
  network: components.Network$outboundSchema.optional(),
  feature: components.ApiFeature$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportedChainsRequest$ {
  /** @deprecated use `SupportedChainsRequest$inboundSchema` instead. */
  export const inboundSchema = SupportedChainsRequest$inboundSchema;
  /** @deprecated use `SupportedChainsRequest$outboundSchema` instead. */
  export const outboundSchema = SupportedChainsRequest$outboundSchema;
  /** @deprecated use `SupportedChainsRequest$Outbound` instead. */
  export type Outbound = SupportedChainsRequest$Outbound;
}

export function supportedChainsRequestToJSON(
  supportedChainsRequest: SupportedChainsRequest,
): string {
  return JSON.stringify(
    SupportedChainsRequest$outboundSchema.parse(supportedChainsRequest),
  );
}

export function supportedChainsRequestFromJSON(
  jsonString: string,
): SafeParseResult<SupportedChainsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupportedChainsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupportedChainsRequest' from JSON`,
  );
}
