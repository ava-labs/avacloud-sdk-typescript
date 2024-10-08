/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ValidationStatusType = {
  Completed: "completed",
  Active: "active",
  Pending: "pending",
  Removed: "removed",
} as const;
export type ValidationStatusType = ClosedEnum<typeof ValidationStatusType>;

/** @internal */
export const ValidationStatusType$inboundSchema: z.ZodNativeEnum<
  typeof ValidationStatusType
> = z.nativeEnum(ValidationStatusType);

/** @internal */
export const ValidationStatusType$outboundSchema: z.ZodNativeEnum<
  typeof ValidationStatusType
> = ValidationStatusType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidationStatusType$ {
  /** @deprecated use `ValidationStatusType$inboundSchema` instead. */
  export const inboundSchema = ValidationStatusType$inboundSchema;
  /** @deprecated use `ValidationStatusType$outboundSchema` instead. */
  export const outboundSchema = ValidationStatusType$outboundSchema;
}
