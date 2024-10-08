/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const WebhookStatusType = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type WebhookStatusType = ClosedEnum<typeof WebhookStatusType>;

/** @internal */
export const WebhookStatusType$inboundSchema: z.ZodNativeEnum<
  typeof WebhookStatusType
> = z.nativeEnum(WebhookStatusType);

/** @internal */
export const WebhookStatusType$outboundSchema: z.ZodNativeEnum<
  typeof WebhookStatusType
> = WebhookStatusType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookStatusType$ {
  /** @deprecated use `WebhookStatusType$inboundSchema` instead. */
  export const inboundSchema = WebhookStatusType$inboundSchema;
  /** @deprecated use `WebhookStatusType$outboundSchema` instead. */
  export const outboundSchema = WebhookStatusType$outboundSchema;
}
