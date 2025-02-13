/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Erc1155Transfer,
  Erc1155Transfer$inboundSchema,
  Erc1155Transfer$Outbound,
  Erc1155Transfer$outboundSchema,
} from "./erc1155transfer.js";

export type ListErc1155TransactionsResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  transactions: Array<Erc1155Transfer>;
};

/** @internal */
export const ListErc1155TransactionsResponse$inboundSchema: z.ZodType<
  ListErc1155TransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(Erc1155Transfer$inboundSchema),
});

/** @internal */
export type ListErc1155TransactionsResponse$Outbound = {
  nextPageToken?: string | undefined;
  transactions: Array<Erc1155Transfer$Outbound>;
};

/** @internal */
export const ListErc1155TransactionsResponse$outboundSchema: z.ZodType<
  ListErc1155TransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListErc1155TransactionsResponse
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(Erc1155Transfer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErc1155TransactionsResponse$ {
  /** @deprecated use `ListErc1155TransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListErc1155TransactionsResponse$inboundSchema;
  /** @deprecated use `ListErc1155TransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListErc1155TransactionsResponse$outboundSchema;
  /** @deprecated use `ListErc1155TransactionsResponse$Outbound` instead. */
  export type Outbound = ListErc1155TransactionsResponse$Outbound;
}

export function listErc1155TransactionsResponseToJSON(
  listErc1155TransactionsResponse: ListErc1155TransactionsResponse,
): string {
  return JSON.stringify(
    ListErc1155TransactionsResponse$outboundSchema.parse(
      listErc1155TransactionsResponse,
    ),
  );
}

export function listErc1155TransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListErc1155TransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListErc1155TransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListErc1155TransactionsResponse' from JSON`,
  );
}
