/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NativeTransaction,
  NativeTransaction$inboundSchema,
  NativeTransaction$Outbound,
  NativeTransaction$outboundSchema,
} from "./nativetransaction.js";

export type ListNativeTransactionsResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  transactions: Array<NativeTransaction>;
};

/** @internal */
export const ListNativeTransactionsResponse$inboundSchema: z.ZodType<
  ListNativeTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(NativeTransaction$inboundSchema),
});

/** @internal */
export type ListNativeTransactionsResponse$Outbound = {
  nextPageToken?: string | undefined;
  transactions: Array<NativeTransaction$Outbound>;
};

/** @internal */
export const ListNativeTransactionsResponse$outboundSchema: z.ZodType<
  ListNativeTransactionsResponse$Outbound,
  z.ZodTypeDef,
  ListNativeTransactionsResponse
> = z.object({
  nextPageToken: z.string().optional(),
  transactions: z.array(NativeTransaction$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListNativeTransactionsResponse$ {
  /** @deprecated use `ListNativeTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListNativeTransactionsResponse$inboundSchema;
  /** @deprecated use `ListNativeTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListNativeTransactionsResponse$outboundSchema;
  /** @deprecated use `ListNativeTransactionsResponse$Outbound` instead. */
  export type Outbound = ListNativeTransactionsResponse$Outbound;
}

export function listNativeTransactionsResponseToJSON(
  listNativeTransactionsResponse: ListNativeTransactionsResponse,
): string {
  return JSON.stringify(
    ListNativeTransactionsResponse$outboundSchema.parse(
      listNativeTransactionsResponse,
    ),
  );
}

export function listNativeTransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListNativeTransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListNativeTransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListNativeTransactionsResponse' from JSON`,
  );
}
