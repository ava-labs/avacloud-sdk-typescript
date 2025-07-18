/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const XChainId = {
  TwooYmbnv4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM:
    "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
  TwoJVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm:
    "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm",
  XChain: "x-chain",
} as const;
export type XChainId = ClosedEnum<typeof XChainId>;

/** @internal */
export const XChainId$inboundSchema: z.ZodNativeEnum<typeof XChainId> = z
  .nativeEnum(XChainId);

/** @internal */
export const XChainId$outboundSchema: z.ZodNativeEnum<typeof XChainId> =
  XChainId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace XChainId$ {
  /** @deprecated use `XChainId$inboundSchema` instead. */
  export const inboundSchema = XChainId$inboundSchema;
  /** @deprecated use `XChainId$outboundSchema` instead. */
  export const outboundSchema = XChainId$outboundSchema;
}
