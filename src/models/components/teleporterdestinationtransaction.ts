/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TeleporterDestinationTransaction = {
  txHash: string;
  timestamp: number;
  gasSpent: string;
  rewardRedeemer: string;
  delivererAddress: string;
};

/** @internal */
export const TeleporterDestinationTransaction$inboundSchema: z.ZodType<
  TeleporterDestinationTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  timestamp: z.number(),
  gasSpent: z.string(),
  rewardRedeemer: z.string(),
  delivererAddress: z.string(),
});

/** @internal */
export type TeleporterDestinationTransaction$Outbound = {
  txHash: string;
  timestamp: number;
  gasSpent: string;
  rewardRedeemer: string;
  delivererAddress: string;
};

/** @internal */
export const TeleporterDestinationTransaction$outboundSchema: z.ZodType<
  TeleporterDestinationTransaction$Outbound,
  z.ZodTypeDef,
  TeleporterDestinationTransaction
> = z.object({
  txHash: z.string(),
  timestamp: z.number(),
  gasSpent: z.string(),
  rewardRedeemer: z.string(),
  delivererAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeleporterDestinationTransaction$ {
  /** @deprecated use `TeleporterDestinationTransaction$inboundSchema` instead. */
  export const inboundSchema = TeleporterDestinationTransaction$inboundSchema;
  /** @deprecated use `TeleporterDestinationTransaction$outboundSchema` instead. */
  export const outboundSchema = TeleporterDestinationTransaction$outboundSchema;
  /** @deprecated use `TeleporterDestinationTransaction$Outbound` instead. */
  export type Outbound = TeleporterDestinationTransaction$Outbound;
}
