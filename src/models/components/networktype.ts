/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const NetworkType = {
  Mainnet: "mainnet",
  Testnet: "testnet",
} as const;
export type NetworkType = ClosedEnum<typeof NetworkType>;

/** @internal */
export const NetworkType$inboundSchema: z.ZodNativeEnum<typeof NetworkType> = z
  .nativeEnum(NetworkType);

/** @internal */
export const NetworkType$outboundSchema: z.ZodNativeEnum<typeof NetworkType> =
  NetworkType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NetworkType$ {
  /** @deprecated use `NetworkType$inboundSchema` instead. */
  export const inboundSchema = NetworkType$inboundSchema;
  /** @deprecated use `NetworkType$outboundSchema` instead. */
  export const outboundSchema = NetworkType$outboundSchema;
}
