/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const DelegationStatusType = {
  Completed: "completed",
  Active: "active",
  Pending: "pending",
} as const;
export type DelegationStatusType = ClosedEnum<typeof DelegationStatusType>;

/** @internal */
export const DelegationStatusType$inboundSchema: z.ZodNativeEnum<
  typeof DelegationStatusType
> = z.nativeEnum(DelegationStatusType);

/** @internal */
export const DelegationStatusType$outboundSchema: z.ZodNativeEnum<
  typeof DelegationStatusType
> = DelegationStatusType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DelegationStatusType$ {
  /** @deprecated use `DelegationStatusType$inboundSchema` instead. */
  export const inboundSchema = DelegationStatusType$inboundSchema;
  /** @deprecated use `DelegationStatusType$outboundSchema` instead. */
  export const outboundSchema = DelegationStatusType$outboundSchema;
}
