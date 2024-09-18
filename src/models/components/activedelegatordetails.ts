/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ActiveDelegatorDetailsDelegationStatus = {
  Active: "active",
} as const;
export type ActiveDelegatorDetailsDelegationStatus = ClosedEnum<
  typeof ActiveDelegatorDetailsDelegationStatus
>;

export type ActiveDelegatorDetails = {
  txHash: string;
  nodeId: string;
  rewardAddresses: Array<string>;
  amountDelegated: string;
  delegationFee: string;
  startTimestamp: number;
  endTimestamp: number;
  estimatedGrossReward: string;
  estimatedNetReward: string;
  delegationStatus: ActiveDelegatorDetailsDelegationStatus;
};

/** @internal */
export const ActiveDelegatorDetailsDelegationStatus$inboundSchema:
  z.ZodNativeEnum<typeof ActiveDelegatorDetailsDelegationStatus> = z.nativeEnum(
    ActiveDelegatorDetailsDelegationStatus,
  );

/** @internal */
export const ActiveDelegatorDetailsDelegationStatus$outboundSchema:
  z.ZodNativeEnum<typeof ActiveDelegatorDetailsDelegationStatus> =
    ActiveDelegatorDetailsDelegationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActiveDelegatorDetailsDelegationStatus$ {
  /** @deprecated use `ActiveDelegatorDetailsDelegationStatus$inboundSchema` instead. */
  export const inboundSchema =
    ActiveDelegatorDetailsDelegationStatus$inboundSchema;
  /** @deprecated use `ActiveDelegatorDetailsDelegationStatus$outboundSchema` instead. */
  export const outboundSchema =
    ActiveDelegatorDetailsDelegationStatus$outboundSchema;
}

/** @internal */
export const ActiveDelegatorDetails$inboundSchema: z.ZodType<
  ActiveDelegatorDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  rewardAddresses: z.array(z.string()),
  amountDelegated: z.string(),
  delegationFee: z.string(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  estimatedGrossReward: z.string(),
  estimatedNetReward: z.string(),
  delegationStatus: ActiveDelegatorDetailsDelegationStatus$inboundSchema,
});

/** @internal */
export type ActiveDelegatorDetails$Outbound = {
  txHash: string;
  nodeId: string;
  rewardAddresses: Array<string>;
  amountDelegated: string;
  delegationFee: string;
  startTimestamp: number;
  endTimestamp: number;
  estimatedGrossReward: string;
  estimatedNetReward: string;
  delegationStatus: string;
};

/** @internal */
export const ActiveDelegatorDetails$outboundSchema: z.ZodType<
  ActiveDelegatorDetails$Outbound,
  z.ZodTypeDef,
  ActiveDelegatorDetails
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  rewardAddresses: z.array(z.string()),
  amountDelegated: z.string(),
  delegationFee: z.string(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  estimatedGrossReward: z.string(),
  estimatedNetReward: z.string(),
  delegationStatus: ActiveDelegatorDetailsDelegationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActiveDelegatorDetails$ {
  /** @deprecated use `ActiveDelegatorDetails$inboundSchema` instead. */
  export const inboundSchema = ActiveDelegatorDetails$inboundSchema;
  /** @deprecated use `ActiveDelegatorDetails$outboundSchema` instead. */
  export const outboundSchema = ActiveDelegatorDetails$outboundSchema;
  /** @deprecated use `ActiveDelegatorDetails$Outbound` instead. */
  export type Outbound = ActiveDelegatorDetails$Outbound;
}
