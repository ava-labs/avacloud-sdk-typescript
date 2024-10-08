/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PrimaryNetworkChainInfo,
  PrimaryNetworkChainInfo$inboundSchema,
  PrimaryNetworkChainInfo$Outbound,
  PrimaryNetworkChainInfo$outboundSchema,
} from "./primarynetworkchaininfo.js";
import {
  Utxo,
  Utxo$inboundSchema,
  Utxo$Outbound,
  Utxo$outboundSchema,
} from "./utxo.js";

export type ListUtxosResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  utxos: Array<Utxo>;
  chainInfo: PrimaryNetworkChainInfo;
};

/** @internal */
export const ListUtxosResponse$inboundSchema: z.ZodType<
  ListUtxosResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  utxos: z.array(Utxo$inboundSchema),
  chainInfo: PrimaryNetworkChainInfo$inboundSchema,
});

/** @internal */
export type ListUtxosResponse$Outbound = {
  nextPageToken?: string | undefined;
  utxos: Array<Utxo$Outbound>;
  chainInfo: PrimaryNetworkChainInfo$Outbound;
};

/** @internal */
export const ListUtxosResponse$outboundSchema: z.ZodType<
  ListUtxosResponse$Outbound,
  z.ZodTypeDef,
  ListUtxosResponse
> = z.object({
  nextPageToken: z.string().optional(),
  utxos: z.array(Utxo$outboundSchema),
  chainInfo: PrimaryNetworkChainInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUtxosResponse$ {
  /** @deprecated use `ListUtxosResponse$inboundSchema` instead. */
  export const inboundSchema = ListUtxosResponse$inboundSchema;
  /** @deprecated use `ListUtxosResponse$outboundSchema` instead. */
  export const outboundSchema = ListUtxosResponse$outboundSchema;
  /** @deprecated use `ListUtxosResponse$Outbound` instead. */
  export type Outbound = ListUtxosResponse$Outbound;
}
