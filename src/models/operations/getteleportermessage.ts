/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export const GetTeleporterMessageServerList = [
  "https://glacier-api.avax.network",
] as const;

export type GetTeleporterMessageRequest = {
  /**
   * The message ID of the teleporter message.
   */
  messageId: string;
};

/**
 * Successful response
 */
export type GetTeleporterMessageResponseBody =
  | (components.PendingTeleporterMessage & { status: "pending" })
  | (components.DeliveredSourceNotIndexedTeleporterMessage & {
    status: "delivered_source_not_indexed";
  })
  | (components.DeliveredTeleporterMessage & { status: "delivered" });

/** @internal */
export const GetTeleporterMessageRequest$inboundSchema: z.ZodType<
  GetTeleporterMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  messageId: z.string(),
});

/** @internal */
export type GetTeleporterMessageRequest$Outbound = {
  messageId: string;
};

/** @internal */
export const GetTeleporterMessageRequest$outboundSchema: z.ZodType<
  GetTeleporterMessageRequest$Outbound,
  z.ZodTypeDef,
  GetTeleporterMessageRequest
> = z.object({
  messageId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeleporterMessageRequest$ {
  /** @deprecated use `GetTeleporterMessageRequest$inboundSchema` instead. */
  export const inboundSchema = GetTeleporterMessageRequest$inboundSchema;
  /** @deprecated use `GetTeleporterMessageRequest$outboundSchema` instead. */
  export const outboundSchema = GetTeleporterMessageRequest$outboundSchema;
  /** @deprecated use `GetTeleporterMessageRequest$Outbound` instead. */
  export type Outbound = GetTeleporterMessageRequest$Outbound;
}

/** @internal */
export const GetTeleporterMessageResponseBody$inboundSchema: z.ZodType<
  GetTeleporterMessageResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.PendingTeleporterMessage$inboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  components.DeliveredSourceNotIndexedTeleporterMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered_source_not_indexed") }).transform((
      v,
    ) => ({ status: v.status })),
  ),
  components.DeliveredTeleporterMessage$inboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/** @internal */
export type GetTeleporterMessageResponseBody$Outbound =
  | (components.PendingTeleporterMessage$Outbound & { status: "pending" })
  | (components.DeliveredSourceNotIndexedTeleporterMessage$Outbound & {
    status: "delivered_source_not_indexed";
  })
  | (components.DeliveredTeleporterMessage$Outbound & { status: "delivered" });

/** @internal */
export const GetTeleporterMessageResponseBody$outboundSchema: z.ZodType<
  GetTeleporterMessageResponseBody$Outbound,
  z.ZodTypeDef,
  GetTeleporterMessageResponseBody
> = z.union([
  components.PendingTeleporterMessage$outboundSchema.and(
    z.object({ status: z.literal("pending") }).transform((v) => ({
      status: v.status,
    })),
  ),
  components.DeliveredSourceNotIndexedTeleporterMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered_source_not_indexed") }).transform((
      v,
    ) => ({ status: v.status })),
  ),
  components.DeliveredTeleporterMessage$outboundSchema.and(
    z.object({ status: z.literal("delivered") }).transform((v) => ({
      status: v.status,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeleporterMessageResponseBody$ {
  /** @deprecated use `GetTeleporterMessageResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetTeleporterMessageResponseBody$inboundSchema;
  /** @deprecated use `GetTeleporterMessageResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetTeleporterMessageResponseBody$outboundSchema;
  /** @deprecated use `GetTeleporterMessageResponseBody$Outbound` instead. */
  export type Outbound = GetTeleporterMessageResponseBody$Outbound;
}
