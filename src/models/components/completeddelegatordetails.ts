/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DelegationStatus = {
  Completed: "completed",
} as const;
export type DelegationStatus = ClosedEnum<typeof DelegationStatus>;

export type CompletedDelegatorDetails = {
  txHash: string;
  nodeId: string;
  rewardAddresses: Array<string>;
  amountDelegated: string;
  delegationFee: string;
  startTimestamp: number;
  endTimestamp: number;
  /**
   * Total rewards distributed for the successful delegation.
   */
  grossReward: string;
  /**
   * Net rewards distributed to the delegator after deducting delegation fee from the gross reward for the successful delegation.
   */
  netReward: string;
  delegationStatus: DelegationStatus;
};

/** @internal */
export const DelegationStatus$inboundSchema: z.ZodNativeEnum<
  typeof DelegationStatus
> = z.nativeEnum(DelegationStatus);

/** @internal */
export const DelegationStatus$outboundSchema: z.ZodNativeEnum<
  typeof DelegationStatus
> = DelegationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DelegationStatus$ {
  /** @deprecated use `DelegationStatus$inboundSchema` instead. */
  export const inboundSchema = DelegationStatus$inboundSchema;
  /** @deprecated use `DelegationStatus$outboundSchema` instead. */
  export const outboundSchema = DelegationStatus$outboundSchema;
}

/** @internal */
export const CompletedDelegatorDetails$inboundSchema: z.ZodType<
  CompletedDelegatorDetails,
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
  grossReward: z.string(),
  netReward: z.string(),
  delegationStatus: DelegationStatus$inboundSchema,
});

/** @internal */
export type CompletedDelegatorDetails$Outbound = {
  txHash: string;
  nodeId: string;
  rewardAddresses: Array<string>;
  amountDelegated: string;
  delegationFee: string;
  startTimestamp: number;
  endTimestamp: number;
  grossReward: string;
  netReward: string;
  delegationStatus: string;
};

/** @internal */
export const CompletedDelegatorDetails$outboundSchema: z.ZodType<
  CompletedDelegatorDetails$Outbound,
  z.ZodTypeDef,
  CompletedDelegatorDetails
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  rewardAddresses: z.array(z.string()),
  amountDelegated: z.string(),
  delegationFee: z.string(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  grossReward: z.string(),
  netReward: z.string(),
  delegationStatus: DelegationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletedDelegatorDetails$ {
  /** @deprecated use `CompletedDelegatorDetails$inboundSchema` instead. */
  export const inboundSchema = CompletedDelegatorDetails$inboundSchema;
  /** @deprecated use `CompletedDelegatorDetails$outboundSchema` instead. */
  export const outboundSchema = CompletedDelegatorDetails$outboundSchema;
  /** @deprecated use `CompletedDelegatorDetails$Outbound` instead. */
  export type Outbound = CompletedDelegatorDetails$Outbound;
}

export function completedDelegatorDetailsToJSON(
  completedDelegatorDetails: CompletedDelegatorDetails,
): string {
  return JSON.stringify(
    CompletedDelegatorDetails$outboundSchema.parse(completedDelegatorDetails),
  );
}

export function completedDelegatorDetailsFromJSON(
  jsonString: string,
): SafeParseResult<CompletedDelegatorDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletedDelegatorDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletedDelegatorDetails' from JSON`,
  );
}
