/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PChainId = {
  ElevenNonillionOneHundredAndElevenOctillionOneHundredAndElevenSeptillionOneHundredAndElevenSextillionOneHundredAndElevenQuintillionOneHundredAndElevenQuadrillionOneHundredAndElevenTrillionOneHundredAndElevenBillionOneHundredAndElevenMillionOneHundredAndElevenThousandOneHundredAndElevenLpoYY:
    "11111111111111111111111111111111LpoYY",
  PChain: "p-chain",
} as const;
export type PChainId = ClosedEnum<typeof PChainId>;

/** @internal */
export const PChainId$inboundSchema: z.ZodNativeEnum<typeof PChainId> = z
  .nativeEnum(PChainId);

/** @internal */
export const PChainId$outboundSchema: z.ZodNativeEnum<typeof PChainId> =
  PChainId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PChainId$ {
  /** @deprecated use `PChainId$inboundSchema` instead. */
  export const inboundSchema = PChainId$inboundSchema;
  /** @deprecated use `PChainId$outboundSchema` instead. */
  export const outboundSchema = PChainId$outboundSchema;
}
