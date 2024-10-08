/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of chain nodes. Chain nodes can become temporarily `UNAVAILABLE` for several reasons, such as validator stake falling below threshold. If chain nodes are `UNAVAILABLE`, requests that rely on data from the chain nodes may return 503 errors.
 */
export const ChainStatus = {
  Ok: "OK",
  Unavailable: "UNAVAILABLE",
} as const;
/**
 * Status of chain nodes. Chain nodes can become temporarily `UNAVAILABLE` for several reasons, such as validator stake falling below threshold. If chain nodes are `UNAVAILABLE`, requests that rely on data from the chain nodes may return 503 errors.
 */
export type ChainStatus = ClosedEnum<typeof ChainStatus>;

/** @internal */
export const ChainStatus$inboundSchema: z.ZodNativeEnum<typeof ChainStatus> = z
  .nativeEnum(ChainStatus);

/** @internal */
export const ChainStatus$outboundSchema: z.ZodNativeEnum<typeof ChainStatus> =
  ChainStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChainStatus$ {
  /** @deprecated use `ChainStatus$inboundSchema` instead. */
  export const inboundSchema = ChainStatus$inboundSchema;
  /** @deprecated use `ChainStatus$outboundSchema` instead. */
  export const outboundSchema = ChainStatus$outboundSchema;
}
