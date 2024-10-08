/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Erc1155Transfer,
  Erc1155Transfer$inboundSchema,
  Erc1155Transfer$Outbound,
  Erc1155Transfer$outboundSchema,
} from "./erc1155transfer.js";
import {
  Erc20Transfer,
  Erc20Transfer$inboundSchema,
  Erc20Transfer$Outbound,
  Erc20Transfer$outboundSchema,
} from "./erc20transfer.js";
import {
  Erc721Transfer,
  Erc721Transfer$inboundSchema,
  Erc721Transfer$Outbound,
  Erc721Transfer$outboundSchema,
} from "./erc721transfer.js";

export type Transfers = Erc721Transfer | Erc20Transfer | Erc1155Transfer;

export type ListTransfersResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  transfers: Array<Erc721Transfer | Erc20Transfer | Erc1155Transfer>;
};

/** @internal */
export const Transfers$inboundSchema: z.ZodType<
  Transfers,
  z.ZodTypeDef,
  unknown
> = z.union([
  Erc721Transfer$inboundSchema,
  Erc20Transfer$inboundSchema,
  Erc1155Transfer$inboundSchema,
]);

/** @internal */
export type Transfers$Outbound =
  | Erc721Transfer$Outbound
  | Erc20Transfer$Outbound
  | Erc1155Transfer$Outbound;

/** @internal */
export const Transfers$outboundSchema: z.ZodType<
  Transfers$Outbound,
  z.ZodTypeDef,
  Transfers
> = z.union([
  Erc721Transfer$outboundSchema,
  Erc20Transfer$outboundSchema,
  Erc1155Transfer$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Transfers$ {
  /** @deprecated use `Transfers$inboundSchema` instead. */
  export const inboundSchema = Transfers$inboundSchema;
  /** @deprecated use `Transfers$outboundSchema` instead. */
  export const outboundSchema = Transfers$outboundSchema;
  /** @deprecated use `Transfers$Outbound` instead. */
  export type Outbound = Transfers$Outbound;
}

/** @internal */
export const ListTransfersResponse$inboundSchema: z.ZodType<
  ListTransfersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  transfers: z.array(
    z.union([
      Erc721Transfer$inboundSchema,
      Erc20Transfer$inboundSchema,
      Erc1155Transfer$inboundSchema,
    ]),
  ),
});

/** @internal */
export type ListTransfersResponse$Outbound = {
  nextPageToken?: string | undefined;
  transfers: Array<
    Erc721Transfer$Outbound | Erc20Transfer$Outbound | Erc1155Transfer$Outbound
  >;
};

/** @internal */
export const ListTransfersResponse$outboundSchema: z.ZodType<
  ListTransfersResponse$Outbound,
  z.ZodTypeDef,
  ListTransfersResponse
> = z.object({
  nextPageToken: z.string().optional(),
  transfers: z.array(
    z.union([
      Erc721Transfer$outboundSchema,
      Erc20Transfer$outboundSchema,
      Erc1155Transfer$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransfersResponse$ {
  /** @deprecated use `ListTransfersResponse$inboundSchema` instead. */
  export const inboundSchema = ListTransfersResponse$inboundSchema;
  /** @deprecated use `ListTransfersResponse$outboundSchema` instead. */
  export const outboundSchema = ListTransfersResponse$outboundSchema;
  /** @deprecated use `ListTransfersResponse$Outbound` instead. */
  export type Outbound = ListTransfersResponse$Outbound;
}
