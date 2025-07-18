/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BlockchainId = {
  ElevenNonillionOneHundredAndElevenOctillionOneHundredAndElevenSeptillionOneHundredAndElevenSextillionOneHundredAndElevenQuintillionOneHundredAndElevenQuadrillionOneHundredAndElevenTrillionOneHundredAndElevenBillionOneHundredAndElevenMillionOneHundredAndElevenThousandOneHundredAndElevenLpoYY:
    "11111111111111111111111111111111LpoYY",
  TwooYmbnv4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM:
    "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
  TwoJVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm:
    "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm",
  Twoq9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAx5UQxse55x1Q5:
    "2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5",
  YH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp:
    "yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp",
  PChain: "p-chain",
  XChain: "x-chain",
  CChain: "c-chain",
} as const;
export type BlockchainId = ClosedEnum<typeof BlockchainId>;

/** @internal */
export const BlockchainId$inboundSchema: z.ZodNativeEnum<typeof BlockchainId> =
  z.nativeEnum(BlockchainId);

/** @internal */
export const BlockchainId$outboundSchema: z.ZodNativeEnum<typeof BlockchainId> =
  BlockchainId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BlockchainId$ {
  /** @deprecated use `BlockchainId$inboundSchema` instead. */
  export const inboundSchema = BlockchainId$inboundSchema;
  /** @deprecated use `BlockchainId$outboundSchema` instead. */
  export const outboundSchema = BlockchainId$outboundSchema;
}
