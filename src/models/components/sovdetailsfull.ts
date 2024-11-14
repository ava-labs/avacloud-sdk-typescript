/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BalanceOwner,
  BalanceOwner$inboundSchema,
  BalanceOwner$Outbound,
  BalanceOwner$outboundSchema,
} from "./balanceowner.js";

export type SovDetailsFullBlsCredentials = {};

export type SovDetailsFull = {
  /**
   * Unique SoV ID used network-wide to identify subnet-only validation until its weight is reduced to 0 i.e. removed.
   */
  validationId: string;
  nodeId: string;
  subnetId: string;
  /**
   * Weight of the SoV used while sampling validators within the L1. A zero-weight SoV means it has been removed from the L1, and the validationID is no longer valid
   */
  weight: number;
  /**
   * Remaining SoV balance in nAVAX until inactive. It can rejoin subnet sampling by increasing balance with IncreaseBalanceTx
   */
  remainingBalance: number;
  /**
   * The timestamp of the transaction which created this SoV
   */
  creationTimestamp: number;
  blsCredentials: SovDetailsFullBlsCredentials;
  /**
   * The SoV owner's balance, returned after it's disabled or removed
   */
  remainingBalanceOwner: BalanceOwner;
  /**
   * Owner ddresses details which can disable or remove the SoV
   */
  deactivationOwner: BalanceOwner;
};

/** @internal */
export const SovDetailsFullBlsCredentials$inboundSchema: z.ZodType<
  SovDetailsFullBlsCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SovDetailsFullBlsCredentials$Outbound = {};

/** @internal */
export const SovDetailsFullBlsCredentials$outboundSchema: z.ZodType<
  SovDetailsFullBlsCredentials$Outbound,
  z.ZodTypeDef,
  SovDetailsFullBlsCredentials
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SovDetailsFullBlsCredentials$ {
  /** @deprecated use `SovDetailsFullBlsCredentials$inboundSchema` instead. */
  export const inboundSchema = SovDetailsFullBlsCredentials$inboundSchema;
  /** @deprecated use `SovDetailsFullBlsCredentials$outboundSchema` instead. */
  export const outboundSchema = SovDetailsFullBlsCredentials$outboundSchema;
  /** @deprecated use `SovDetailsFullBlsCredentials$Outbound` instead. */
  export type Outbound = SovDetailsFullBlsCredentials$Outbound;
}

/** @internal */
export const SovDetailsFull$inboundSchema: z.ZodType<
  SovDetailsFull,
  z.ZodTypeDef,
  unknown
> = z.object({
  validationId: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  weight: z.number(),
  remainingBalance: z.number(),
  creationTimestamp: z.number(),
  blsCredentials: z.lazy(() => SovDetailsFullBlsCredentials$inboundSchema),
  remainingBalanceOwner: BalanceOwner$inboundSchema,
  deactivationOwner: BalanceOwner$inboundSchema,
});

/** @internal */
export type SovDetailsFull$Outbound = {
  validationId: string;
  nodeId: string;
  subnetId: string;
  weight: number;
  remainingBalance: number;
  creationTimestamp: number;
  blsCredentials: SovDetailsFullBlsCredentials$Outbound;
  remainingBalanceOwner: BalanceOwner$Outbound;
  deactivationOwner: BalanceOwner$Outbound;
};

/** @internal */
export const SovDetailsFull$outboundSchema: z.ZodType<
  SovDetailsFull$Outbound,
  z.ZodTypeDef,
  SovDetailsFull
> = z.object({
  validationId: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  weight: z.number(),
  remainingBalance: z.number(),
  creationTimestamp: z.number(),
  blsCredentials: z.lazy(() => SovDetailsFullBlsCredentials$outboundSchema),
  remainingBalanceOwner: BalanceOwner$outboundSchema,
  deactivationOwner: BalanceOwner$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SovDetailsFull$ {
  /** @deprecated use `SovDetailsFull$inboundSchema` instead. */
  export const inboundSchema = SovDetailsFull$inboundSchema;
  /** @deprecated use `SovDetailsFull$outboundSchema` instead. */
  export const outboundSchema = SovDetailsFull$outboundSchema;
  /** @deprecated use `SovDetailsFull$Outbound` instead. */
  export type Outbound = SovDetailsFull$Outbound;
}