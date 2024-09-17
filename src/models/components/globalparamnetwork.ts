/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const GlobalParamNetwork = {
  Mainnet: "mainnet",
  Fuji: "fuji",
} as const;
export type GlobalParamNetwork = ClosedEnum<typeof GlobalParamNetwork>;

/** @internal */
export const GlobalParamNetwork$inboundSchema: z.ZodNativeEnum<
  typeof GlobalParamNetwork
> = z.nativeEnum(GlobalParamNetwork);

/** @internal */
export const GlobalParamNetwork$outboundSchema: z.ZodNativeEnum<
  typeof GlobalParamNetwork
> = GlobalParamNetwork$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GlobalParamNetwork$ {
  /** @deprecated use `GlobalParamNetwork$inboundSchema` instead. */
  export const inboundSchema = GlobalParamNetwork$inboundSchema;
  /** @deprecated use `GlobalParamNetwork$outboundSchema` instead. */
  export const outboundSchema = GlobalParamNetwork$outboundSchema;
}
