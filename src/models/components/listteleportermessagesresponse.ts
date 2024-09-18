/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DeliveredTeleporterMessage,
  DeliveredTeleporterMessage$inboundSchema,
  DeliveredTeleporterMessage$Outbound,
  DeliveredTeleporterMessage$outboundSchema,
} from "./deliveredteleportermessage.js";
import {
  PendingTeleporterMessage,
  PendingTeleporterMessage$inboundSchema,
  PendingTeleporterMessage$Outbound,
  PendingTeleporterMessage$outboundSchema,
} from "./pendingteleportermessage.js";

export type Messages =
  | (PendingTeleporterMessage & { status: "pending" })
  | (DeliveredTeleporterMessage & { status: "delivered" });

export type ListTeleporterMessagesResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  messages: Array<
    | (PendingTeleporterMessage & { status: "pending" })
    | (DeliveredTeleporterMessage & { status: "delivered" })
  >;
};

/** @internal */
export const Messages$inboundSchema: z.ZodType<
  Messages,
  z.ZodTypeDef,
  unknown
> = z.union([
  PendingTeleporterMessage$inboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  DeliveredTeleporterMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/** @internal */
export type Messages$Outbound =
  | (PendingTeleporterMessage$Outbound & { status: "pending" })
  | (DeliveredTeleporterMessage$Outbound & { status: "delivered" });

/** @internal */
export const Messages$outboundSchema: z.ZodType<
  Messages$Outbound,
  z.ZodTypeDef,
  Messages
> = z.union([
  PendingTeleporterMessage$outboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  DeliveredTeleporterMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Messages$ {
  /** @deprecated use `Messages$inboundSchema` instead. */
  export const inboundSchema = Messages$inboundSchema;
  /** @deprecated use `Messages$outboundSchema` instead. */
  export const outboundSchema = Messages$outboundSchema;
  /** @deprecated use `Messages$Outbound` instead. */
  export type Outbound = Messages$Outbound;
}

/** @internal */
export const ListTeleporterMessagesResponse$inboundSchema: z.ZodType<
  ListTeleporterMessagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  messages: z.array(
    z.union([
      PendingTeleporterMessage$inboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({
          status: v.status,
        })),
      ),
      DeliveredTeleporterMessage$inboundSchema.and(
        z.object({ status: z.literal("delivered") }).transform((v) => ({
          status: v.status,
        })),
      ),
    ]),
  ),
});

/** @internal */
export type ListTeleporterMessagesResponse$Outbound = {
  nextPageToken?: string | undefined;
  messages: Array<
    | (PendingTeleporterMessage$Outbound & { status: "pending" })
    | (DeliveredTeleporterMessage$Outbound & { status: "delivered" })
  >;
};

/** @internal */
export const ListTeleporterMessagesResponse$outboundSchema: z.ZodType<
  ListTeleporterMessagesResponse$Outbound,
  z.ZodTypeDef,
  ListTeleporterMessagesResponse
> = z.object({
  nextPageToken: z.string().optional(),
  messages: z.array(
    z.union([
      PendingTeleporterMessage$outboundSchema.and(
        z.object({ status: z.literal("pending") }).transform((v) => ({
          status: v.status,
        })),
      ),
      DeliveredTeleporterMessage$outboundSchema.and(
        z.object({ status: z.literal("delivered") }).transform((v) => ({
          status: v.status,
        })),
      ),
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTeleporterMessagesResponse$ {
  /** @deprecated use `ListTeleporterMessagesResponse$inboundSchema` instead. */
  export const inboundSchema = ListTeleporterMessagesResponse$inboundSchema;
  /** @deprecated use `ListTeleporterMessagesResponse$outboundSchema` instead. */
  export const outboundSchema = ListTeleporterMessagesResponse$outboundSchema;
  /** @deprecated use `ListTeleporterMessagesResponse$Outbound` instead. */
  export type Outbound = ListTeleporterMessagesResponse$Outbound;
}
