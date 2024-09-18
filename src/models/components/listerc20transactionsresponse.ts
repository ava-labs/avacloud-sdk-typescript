/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Erc20Transfer,
  Erc20Transfer$inboundSchema,
  Erc20Transfer$Outbound,
  Erc20Transfer$outboundSchema,
} from "./erc20transfer.js";

export type ListErc20TransactionsResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  transactions: Array<Erc20Transfer>;
};

/** @internal */
export const ListErc20TransactionsResponse$inboundSchema: z.ZodType<
  ListErc20TransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(Erc20Transfer$inboundSchema),
});

/** @internal */
export type ListErc20TransactionsResponse$Outbound = {
  nextPageToken?: string | undefined;
  transactions: Array<Erc20Transfer$Outbound>;
};

/** @internal */
export const ListErc20TransactionsResponse$outboundSchema: z.ZodType<
  ListErc20TransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListErc20TransactionsResponse
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(Erc20Transfer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErc20TransactionsResponse$ {
  /** @deprecated use `ListErc20TransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListErc20TransactionsResponse$inboundSchema;
  /** @deprecated use `ListErc20TransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListErc20TransactionsResponse$outboundSchema;
  /** @deprecated use `ListErc20TransactionsResponse$Outbound` instead. */
  export type Outbound = ListErc20TransactionsResponse$Outbound;
}
