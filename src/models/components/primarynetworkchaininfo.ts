/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PrimaryNetwork,
  PrimaryNetwork$inboundSchema,
  PrimaryNetwork$outboundSchema,
} from "./primarynetwork.js";
import {
  PrimaryNetworkChainName,
  PrimaryNetworkChainName$inboundSchema,
  PrimaryNetworkChainName$outboundSchema,
} from "./primarynetworkchainname.js";

export type PrimaryNetworkChainInfo = {
  chainName: PrimaryNetworkChainName;
  network: PrimaryNetwork;
};

/** @internal */
export const PrimaryNetworkChainInfo$inboundSchema: z.ZodType<
  PrimaryNetworkChainInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainName: PrimaryNetworkChainName$inboundSchema,
  network: PrimaryNetwork$inboundSchema,
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
  network: PrimaryNetwork$outboundSchema,
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
