/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Network = {
  Mainnet: "mainnet",
  Fuji: "fuji",
  Testnet: "testnet",
} as const;
export type Network = ClosedEnum<typeof Network>;

/** @internal */
export const Network$inboundSchema: z.ZodNativeEnum<typeof Network> = z
  .nativeEnum(Network);

/** @internal */
export const Network$outboundSchema: z.ZodNativeEnum<typeof Network> =
  Network$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Network$ {
  /** @deprecated use `Network$inboundSchema` instead. */
  export const inboundSchema = Network$inboundSchema;
  /** @deprecated use `Network$outboundSchema` instead. */
  export const outboundSchema = Network$outboundSchema;
}