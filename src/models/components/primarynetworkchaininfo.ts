/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Network,
  Network$inboundSchema,
  Network$outboundSchema,
} from "./network.js";
import {
  PrimaryNetworkChainName,
  PrimaryNetworkChainName$inboundSchema,
  PrimaryNetworkChainName$outboundSchema,
} from "./primarynetworkchainname.js";

export type PrimaryNetworkChainInfo = {
  chainName: PrimaryNetworkChainName;
  network: Network;
};

/** @internal */
export const PrimaryNetworkChainInfo$inboundSchema: z.ZodType<
  PrimaryNetworkChainInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainName: PrimaryNetworkChainName$inboundSchema,
  network: Network$inboundSchema,
});

/** @internal */
export type PrimaryNetworkChainInfo$Outbound = {
  chainName: string;
  network: string;
};

/** @internal */
export const PrimaryNetworkChainInfo$outboundSchema: z.ZodType<
  PrimaryNetworkChainInfo$Outbound,
  z.ZodTypeDef,
  PrimaryNetworkChainInfo
> = z.object({
  chainName: PrimaryNetworkChainName$outboundSchema,
  network: Network$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkChainInfo$ {
  /** @deprecated use `PrimaryNetworkChainInfo$inboundSchema` instead. */
  export const inboundSchema = PrimaryNetworkChainInfo$inboundSchema;
  /** @deprecated use `PrimaryNetworkChainInfo$outboundSchema` instead. */
  export const outboundSchema = PrimaryNetworkChainInfo$outboundSchema;
  /** @deprecated use `PrimaryNetworkChainInfo$Outbound` instead. */
  export type Outbound = PrimaryNetworkChainInfo$Outbound;
}

export function primaryNetworkChainInfoToJSON(
  primaryNetworkChainInfo: PrimaryNetworkChainInfo,
): string {
  return JSON.stringify(
    PrimaryNetworkChainInfo$outboundSchema.parse(primaryNetworkChainInfo),
  );
}

export function primaryNetworkChainInfoFromJSON(
  jsonString: string,
): SafeParseResult<PrimaryNetworkChainInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PrimaryNetworkChainInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PrimaryNetworkChainInfo' from JSON`,
  );
}
