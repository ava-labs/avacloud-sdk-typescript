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
  XChainLinearTransaction,
  XChainLinearTransaction$inboundSchema,
  XChainLinearTransaction$Outbound,
  XChainLinearTransaction$outboundSchema,
} from "./xchainlineartransaction.js";
import {
  XChainNonLinearTransaction,
  XChainNonLinearTransaction$inboundSchema,
  XChainNonLinearTransaction$Outbound,
  XChainNonLinearTransaction$outboundSchema,
} from "./xchainnonlineartransaction.js";

export type Transactions = XChainNonLinearTransaction | XChainLinearTransaction;

export type ListXChainTransactionsResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  transactions: Array<XChainNonLinearTransaction | XChainLinearTransaction>;
  chainInfo: PrimaryNetworkChainInfo;
};

/** @internal */
export const Transactions$inboundSchema: z.ZodType<
  Transactions,
  z.ZodTypeDef,
  unknown
> = z.union([
  XChainNonLinearTransaction$inboundSchema,
  XChainLinearTransaction$inboundSchema,
]);

/** @internal */
export type Transactions$Outbound =
  | XChainNonLinearTransaction$Outbound
  | XChainLinearTransaction$Outbound;

/** @internal */
export const Transactions$outboundSchema: z.ZodType<
  Transactions$Outbound,
  z.ZodTypeDef,
  Transactions
> = z.union([
  XChainNonLinearTransaction$outboundSchema,
  XChainLinearTransaction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Transactions$ {
  /** @deprecated use `Transactions$inboundSchema` instead. */
  export const inboundSchema = Transactions$inboundSchema;
  /** @deprecated use `Transactions$outboundSchema` instead. */
  export const outboundSchema = Transactions$outboundSchema;
  /** @deprecated use `Transactions$Outbound` instead. */
  export type Outbound = Transactions$Outbound;
}

/** @internal */
export const ListXChainTransactionsResponse$inboundSchema: z.ZodType<
  ListXChainTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(
    z.union([
      XChainNonLinearTransaction$inboundSchema,
      XChainLinearTransaction$inboundSchema,
    ]),
  ),
  chainInfo: PrimaryNetworkChainInfo$inboundSchema,
});

/** @internal */
export type ListXChainTransactionsResponse$Outbound = {
  nextPageToken?: string | undefined;
  transactions: Array<
    XChainNonLinearTransaction$Outbound | XChainLinearTransaction$Outbound
  >;
  chainInfo: PrimaryNetworkChainInfo$Outbound;
};

/** @internal */
export const ListXChainTransactionsResponse$outboundSchema: z.ZodType<
  ListXChainTransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListXChainTransactionsResponse
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(
    z.union([
      XChainNonLinearTransaction$outboundSchema,
      XChainLinearTransaction$outboundSchema,
    ]),
  ),
  chainInfo: PrimaryNetworkChainInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListXChainTransactionsResponse$ {
  /** @deprecated use `ListXChainTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListXChainTransactionsResponse$inboundSchema;
  /** @deprecated use `ListXChainTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListXChainTransactionsResponse$outboundSchema;
  /** @deprecated use `ListXChainTransactionsResponse$Outbound` instead. */
  export type Outbound = ListXChainTransactionsResponse$Outbound;
}
