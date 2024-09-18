/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Erc20Token,
  Erc20Token$inboundSchema,
  Erc20Token$Outbound,
  Erc20Token$outboundSchema,
} from "./erc20token.js";
import {
  RichAddress,
  RichAddress$inboundSchema,
  RichAddress$Outbound,
  RichAddress$outboundSchema,
} from "./richaddress.js";

export type Erc20Transfer = {
  /**
   * The block number on the chain.
   */
  blockNumber: string;
  /**
   * The block finality timestamp.
   */
  blockTimestamp: number;
  /**
   * The block hash identifier.
   */
  blockHash: string;
  /**
   * The transaction hash identifier.
   */
  txHash: string;
  from: RichAddress;
  to: RichAddress;
  logIndex: number;
  value: string;
  erc20Token: Erc20Token;
};

/** @internal */
export const Erc20Transfer$inboundSchema: z.ZodType<
  Erc20Transfer,
  z.ZodTypeDef,
  unknown
> = z.object({
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  blockHash: z.string(),
  txHash: z.string(),
  from: RichAddress$inboundSchema,
  to: RichAddress$inboundSchema,
  logIndex: z.number(),
  value: z.string(),
  erc20Token: Erc20Token$inboundSchema,
});

/** @internal */
export type Erc20Transfer$Outbound = {
  blockNumber: string;
  blockTimestamp: number;
  blockHash: string;
  txHash: string;
  from: RichAddress$Outbound;
  to: RichAddress$Outbound;
  logIndex: number;
  value: string;
  erc20Token: Erc20Token$Outbound;
};

/** @internal */
export const Erc20Transfer$outboundSchema: z.ZodType<
  Erc20Transfer$Outbound,
  z.ZodTypeDef,
  Erc20Transfer
> = z.object({
  blockNumber: z.string(),
  blockTimestamp: z.number(),
  blockHash: z.string(),
  txHash: z.string(),
  from: RichAddress$outboundSchema,
  to: RichAddress$outboundSchema,
  logIndex: z.number(),
  value: z.string(),
  erc20Token: Erc20Token$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc20Transfer$ {
  /** @deprecated use `Erc20Transfer$inboundSchema` instead. */
  export const inboundSchema = Erc20Transfer$inboundSchema;
  /** @deprecated use `Erc20Transfer$outboundSchema` instead. */
  export const outboundSchema = Erc20Transfer$outboundSchema;
  /** @deprecated use `Erc20Transfer$Outbound` instead. */
  export type Outbound = Erc20Transfer$Outbound;
}
