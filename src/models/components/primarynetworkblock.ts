/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ProposerDetails,
  ProposerDetails$inboundSchema,
  ProposerDetails$Outbound,
  ProposerDetails$outboundSchema,
} from "./proposerdetails.js";

export type PrimaryNetworkBlock = {
  blockNumber: string;
  blockHash: string;
  parentHash: string;
  blockTimestamp: number;
  blockType: string;
  txCount: number;
  transactions: Array<string>;
  blockSizeBytes: number;
  currentSupply?: string | undefined;
  proposerDetails?: ProposerDetails | undefined;
};

/** @internal */
export const PrimaryNetworkBlock$inboundSchema: z.ZodType<
  PrimaryNetworkBlock,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockNumber: z.string(),
  blockHash: z.string(),
  parentHash: z.string(),
  blockTimestamp: z.number(),
  blockType: z.string(),
  txCount: z.number(),
  transactions: z.array(z.string()),
  blockSizeBytes: z.number(),
  currentSupply: z.string().optional(),
  proposerDetails: ProposerDetails$inboundSchema.optional(),
});

/** @internal */
export type PrimaryNetworkBlock$Outbound = {
  blockNumber: string;
  blockHash: string;
  parentHash: string;
  blockTimestamp: number;
  blockType: string;
  txCount: number;
  transactions: Array<string>;
  blockSizeBytes: number;
  currentSupply?: string | undefined;
  proposerDetails?: ProposerDetails$Outbound | undefined;
};

/** @internal */
export const PrimaryNetworkBlock$outboundSchema: z.ZodType<
  PrimaryNetworkBlock$Outbound,
  z.ZodTypeDef,
  PrimaryNetworkBlock
> = z.object({
  blockNumber: z.string(),
  blockHash: z.string(),
  parentHash: z.string(),
  blockTimestamp: z.number(),
  blockType: z.string(),
  txCount: z.number(),
  transactions: z.array(z.string()),
  blockSizeBytes: z.number(),
  currentSupply: z.string().optional(),
  proposerDetails: ProposerDetails$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkBlock$ {
  /** @deprecated use `PrimaryNetworkBlock$inboundSchema` instead. */
  export const inboundSchema = PrimaryNetworkBlock$inboundSchema;
  /** @deprecated use `PrimaryNetworkBlock$outboundSchema` instead. */
  export const outboundSchema = PrimaryNetworkBlock$outboundSchema;
  /** @deprecated use `PrimaryNetworkBlock$Outbound` instead. */
  export type Outbound = PrimaryNetworkBlock$Outbound;
}
