/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const PendingDelegatorDetailsDelegationStatus = {
    Pending: "pending",
} as const;
export type PendingDelegatorDetailsDelegationStatus = ClosedEnum<
    typeof PendingDelegatorDetailsDelegationStatus
>;

export type PendingDelegatorDetails = {
    txHash: string;
    nodeId: string;
    rewardAddresses: Array<string>;
    amountDelegated: string;
    delegationFee: string;
    startTimestamp: number;
    endTimestamp: number;
    estimatedGrossReward: string;
    estimatedNetReward: string;
    delegationStatus: PendingDelegatorDetailsDelegationStatus;
};

/** @internal */
export const PendingDelegatorDetailsDelegationStatus$inboundSchema: z.ZodNativeEnum<
    typeof PendingDelegatorDetailsDelegationStatus
> = z.nativeEnum(PendingDelegatorDetailsDelegationStatus);

/** @internal */
export const PendingDelegatorDetailsDelegationStatus$outboundSchema: z.ZodNativeEnum<
    typeof PendingDelegatorDetailsDelegationStatus
> = PendingDelegatorDetailsDelegationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PendingDelegatorDetailsDelegationStatus$ {
    /** @deprecated use `PendingDelegatorDetailsDelegationStatus$inboundSchema` instead. */
    export const inboundSchema = PendingDelegatorDetailsDelegationStatus$inboundSchema;
    /** @deprecated use `PendingDelegatorDetailsDelegationStatus$outboundSchema` instead. */
    export const outboundSchema = PendingDelegatorDetailsDelegationStatus$outboundSchema;
}

/** @internal */
export const PendingDelegatorDetails$inboundSchema: z.ZodType<
    PendingDelegatorDetails,
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
    delegationStatus: PendingDelegatorDetailsDelegationStatus$inboundSchema,
});

/** @internal */
export type PendingDelegatorDetails$Outbound = {
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
export const PendingDelegatorDetails$outboundSchema: z.ZodType<
    PendingDelegatorDetails$Outbound,
    z.ZodTypeDef,
    PendingDelegatorDetails
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
    delegationStatus: PendingDelegatorDetailsDelegationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PendingDelegatorDetails$ {
    /** @deprecated use `PendingDelegatorDetails$inboundSchema` instead. */
    export const inboundSchema = PendingDelegatorDetails$inboundSchema;
    /** @deprecated use `PendingDelegatorDetails$outboundSchema` instead. */
    export const outboundSchema = PendingDelegatorDetails$outboundSchema;
    /** @deprecated use `PendingDelegatorDetails$Outbound` instead. */
    export type Outbound = PendingDelegatorDetails$Outbound;
}
