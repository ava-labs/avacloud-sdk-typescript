/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const InternalTransactionOpCall = {
  Unknown: "UNKNOWN",
  Call: "CALL",
  Create: "CREATE",
  Create2: "CREATE2",
  Callcode: "CALLCODE",
  Delegatecall: "DELEGATECALL",
  Staticcall: "STATICCALL",
} as const;
export type InternalTransactionOpCall = ClosedEnum<
  typeof InternalTransactionOpCall
>;

/** @internal */
export const InternalTransactionOpCall$inboundSchema: z.ZodNativeEnum<
  typeof InternalTransactionOpCall
> = z.nativeEnum(InternalTransactionOpCall);

/** @internal */
export const InternalTransactionOpCall$outboundSchema: z.ZodNativeEnum<
  typeof InternalTransactionOpCall
> = InternalTransactionOpCall$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InternalTransactionOpCall$ {
  /** @deprecated use `InternalTransactionOpCall$inboundSchema` instead. */
  export const inboundSchema = InternalTransactionOpCall$inboundSchema;
  /** @deprecated use `InternalTransactionOpCall$outboundSchema` instead. */
  export const outboundSchema = InternalTransactionOpCall$outboundSchema;
}
