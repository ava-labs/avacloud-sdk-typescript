/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const WebhookStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type WebhookStatus = ClosedEnum<typeof WebhookStatus>;

/** @internal */
export const WebhookStatus$inboundSchema: z.ZodNativeEnum<
  typeof WebhookStatus
> = z.nativeEnum(WebhookStatus);

/** @internal */
export const WebhookStatus$outboundSchema: z.ZodNativeEnum<
  typeof WebhookStatus
> = WebhookStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookStatus$ {
  /** @deprecated use `WebhookStatus$inboundSchema` instead. */
  export const inboundSchema = WebhookStatus$inboundSchema;
  /** @deprecated use `WebhookStatus$outboundSchema` instead. */
  export const outboundSchema = WebhookStatus$outboundSchema;
}
