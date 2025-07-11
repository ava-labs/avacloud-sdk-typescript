/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DeliveredIcmMessage,
  DeliveredIcmMessage$inboundSchema,
  DeliveredIcmMessage$Outbound,
  DeliveredIcmMessage$outboundSchema,
} from "./deliveredicmmessage.js";
import {
  DeliveredSourceNotIndexedIcmMessage,
  DeliveredSourceNotIndexedIcmMessage$inboundSchema,
  DeliveredSourceNotIndexedIcmMessage$Outbound,
  DeliveredSourceNotIndexedIcmMessage$outboundSchema,
} from "./deliveredsourcenotindexedicmmessage.js";
import {
  PendingIcmMessage,
  PendingIcmMessage$inboundSchema,
  PendingIcmMessage$Outbound,
  PendingIcmMessage$outboundSchema,
} from "./pendingicmmessage.js";

export type ListIcmMessagesResponseMessages =
  | (DeliveredIcmMessage & { status: "delivered" })
  | (PendingIcmMessage & { status: "pending" })
  | (DeliveredSourceNotIndexedIcmMessage & {
    status: "delivered_source_not_indexed";
  });

export type ListIcmMessagesResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  messages: Array<
    | (DeliveredIcmMessage & { status: "delivered" })
    | (PendingIcmMessage & { status: "pending" })
    | (DeliveredSourceNotIndexedIcmMessage & {
      status: "delivered_source_not_indexed";
    })
  >;
};

/** @internal */
export const ListIcmMessagesResponseMessages$inboundSchema: z.ZodType<
  ListIcmMessagesResponseMessages,
  z.ZodTypeDef,
  unknown
> = z.union([
  DeliveredIcmMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
  PendingIcmMessage$inboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  DeliveredSourceNotIndexedIcmMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered_source_not_indexed") }).transform((
      v,
    ) => ({ status: v.status })),
  ),
]);

/** @internal */
export type ListIcmMessagesResponseMessages$Outbound =
  | (DeliveredIcmMessage$Outbound & { status: "delivered" })
  | (PendingIcmMessage$Outbound & { status: "pending" })
  | (DeliveredSourceNotIndexedIcmMessage$Outbound & {
    status: "delivered_source_not_indexed";
  });

/** @internal */
export const ListIcmMessagesResponseMessages$outboundSchema: z.ZodType<
  ListIcmMessagesResponseMessages$Outbound,
  z.ZodTypeDef,
  ListIcmMessagesResponseMessages
> = z.union([
  DeliveredIcmMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
  PendingIcmMessage$outboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  DeliveredSourceNotIndexedIcmMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered_source_not_indexed") }).transform((
      v,
    ) => ({ status: v.status })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIcmMessagesResponseMessages$ {
  /** @deprecated use `ListIcmMessagesResponseMessages$inboundSchema` instead. */
  export const inboundSchema = ListIcmMessagesResponseMessages$inboundSchema;
  /** @deprecated use `ListIcmMessagesResponseMessages$outboundSchema` instead. */
  export const outboundSchema = ListIcmMessagesResponseMessages$outboundSchema;
  /** @deprecated use `ListIcmMessagesResponseMessages$Outbound` instead. */
  export type Outbound = ListIcmMessagesResponseMessages$Outbound;
}

export function listIcmMessagesResponseMessagesToJSON(
  listIcmMessagesResponseMessages: ListIcmMessagesResponseMessages,
): string {
  return JSON.stringify(
    ListIcmMessagesResponseMessages$outboundSchema.parse(
      listIcmMessagesResponseMessages,
    ),
  );
}

export function listIcmMessagesResponseMessagesFromJSON(
  jsonString: string,
): SafeParseResult<ListIcmMessagesResponseMessages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIcmMessagesResponseMessages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIcmMessagesResponseMessages' from JSON`,
  );
}

/** @internal */
export const ListIcmMessagesResponse$inboundSchema: z.ZodType<
  ListIcmMessagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  messages: z.array(
    z.union([
      DeliveredIcmMessage$inboundSchema.and(
        z.object({ status: z.literal("delivered") }).transform((v) => ({
          status: v.status,
        })),
      ),
      PendingIcmMessage$inboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({
          status: v.status,
        })),
      ),
      DeliveredSourceNotIndexedIcmMessage$inboundSchema.and(
        z.object({ status: z.literal("delivered_source_not_indexed") })
          .transform((v) => ({ status: v.status })),
      ),
    ]),
  ),
});

/** @internal */
export type ListIcmMessagesResponse$Outbound = {
  nextPageToken?: string | undefined;
  messages: Array<
    | (DeliveredIcmMessage$Outbound & { status: "delivered" })
    | (PendingIcmMessage$Outbound & { status: "pending" })
    | (DeliveredSourceNotIndexedIcmMessage$Outbound & {
      status: "delivered_source_not_indexed";
    })
  >;
};

/** @internal */
export const ListIcmMessagesResponse$outboundSchema: z.ZodType<
  ListIcmMessagesResponse$Outbound,
  z.ZodTypeDef,
  ListIcmMessagesResponse
> = z.object({
  nextPageToken: z.string().optional(),
  messages: z.array(
    z.union([
      DeliveredIcmMessage$outboundSchema.and(
        z.object({ status: z.literal("delivered") }).transform((v) => ({
          status: v.status,
        })),
      ),
      PendingIcmMessage$outboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({
          status: v.status,
        })),
      ),
      DeliveredSourceNotIndexedIcmMessage$outboundSchema.and(
        z.object({ status: z.literal("delivered_source_not_indexed") })
          .transform((v) => ({ status: v.status })),
      ),
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIcmMessagesResponse$ {
  /** @deprecated use `ListIcmMessagesResponse$inboundSchema` instead. */
  export const inboundSchema = ListIcmMessagesResponse$inboundSchema;
  /** @deprecated use `ListIcmMessagesResponse$outboundSchema` instead. */
  export const outboundSchema = ListIcmMessagesResponse$outboundSchema;
  /** @deprecated use `ListIcmMessagesResponse$Outbound` instead. */
  export type Outbound = ListIcmMessagesResponse$Outbound;
}

export function listIcmMessagesResponseToJSON(
  listIcmMessagesResponse: ListIcmMessagesResponse,
): string {
  return JSON.stringify(
    ListIcmMessagesResponse$outboundSchema.parse(listIcmMessagesResponse),
  );
}

export function listIcmMessagesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListIcmMessagesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIcmMessagesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIcmMessagesResponse' from JSON`,
  );
}
