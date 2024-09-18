/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Erc1155TokenBalance,
  Erc1155TokenBalance$inboundSchema,
  Erc1155TokenBalance$Outbound,
  Erc1155TokenBalance$outboundSchema,
} from "./erc1155tokenbalance.js";

export type ListErc1155BalancesResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  /**
   * The list of ERC-1155 token balances for the address.
   */
  erc1155TokenBalances: Array<Erc1155TokenBalance>;
};

/** @internal */
export const ListErc1155BalancesResponse$inboundSchema: z.ZodType<
  ListErc1155BalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  erc1155TokenBalances: z.array(Erc1155TokenBalance$inboundSchema),
});

/** @internal */
export type ListErc1155BalancesResponse$Outbound = {
  nextPageToken?: string | undefined;
  erc1155TokenBalances: Array<Erc1155TokenBalance$Outbound>;
};

/** @internal */
export const ListErc1155BalancesResponse$outboundSchema: z.ZodType<
  ListErc1155BalancesResponse$Outbound,
  z.ZodTypeDef,
  ListErc1155BalancesResponse
> = z.object({
  nextPageToken: z.string().optional(),
  erc1155TokenBalances: z.array(Erc1155TokenBalance$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErc1155BalancesResponse$ {
  /** @deprecated use `ListErc1155BalancesResponse$inboundSchema` instead. */
  export const inboundSchema = ListErc1155BalancesResponse$inboundSchema;
  /** @deprecated use `ListErc1155BalancesResponse$outboundSchema` instead. */
  export const outboundSchema = ListErc1155BalancesResponse$outboundSchema;
  /** @deprecated use `ListErc1155BalancesResponse$Outbound` instead. */
  export type Outbound = ListErc1155BalancesResponse$Outbound;
}
