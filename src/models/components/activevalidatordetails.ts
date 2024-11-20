/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BlsCredentials,
  BlsCredentials$inboundSchema,
  BlsCredentials$Outbound,
  BlsCredentials$outboundSchema,
} from "./blscredentials.js";
import {
  Rewards,
  Rewards$inboundSchema,
  Rewards$Outbound,
  Rewards$outboundSchema,
} from "./rewards.js";
import {
  ValidatorHealthDetails,
  ValidatorHealthDetails$inboundSchema,
  ValidatorHealthDetails$Outbound,
  ValidatorHealthDetails$outboundSchema,
} from "./validatorhealthdetails.js";

export const ActiveValidatorDetailsValidationStatus = {
  Active: "active",
} as const;
export type ActiveValidatorDetailsValidationStatus = ClosedEnum<
  typeof ActiveValidatorDetailsValidationStatus
>;

export type ActiveValidatorDetails = {
  txHash: string;
  nodeId: string;
  subnetId: string;
  amountStaked: string;
  delegationFee?: string | undefined;
  startTimestamp: number;
  endTimestamp: number;
  /**
   * Present for AddPermissionlessValidatorTx
   */
  blsCredentials?: BlsCredentials | undefined;
  stakePercentage: number;
  delegatorCount: number;
  amountDelegated?: string | undefined;
  uptimePerformance: number;
  avalancheGoVersion?: string | undefined;
  delegationCapacity?: string | undefined;
  potentialRewards: Rewards;
  validationStatus: ActiveValidatorDetailsValidationStatus;
  validatorHealth: ValidatorHealthDetails;
};

/** @internal */
export const ActiveValidatorDetailsValidationStatus$inboundSchema:
  z.ZodNativeEnum<typeof ActiveValidatorDetailsValidationStatus> = z.nativeEnum(
    ActiveValidatorDetailsValidationStatus,
  );

/** @internal */
export const ActiveValidatorDetailsValidationStatus$outboundSchema:
  z.ZodNativeEnum<typeof ActiveValidatorDetailsValidationStatus> =
    ActiveValidatorDetailsValidationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActiveValidatorDetailsValidationStatus$ {
  /** @deprecated use `ActiveValidatorDetailsValidationStatus$inboundSchema` instead. */
  export const inboundSchema =
    ActiveValidatorDetailsValidationStatus$inboundSchema;
  /** @deprecated use `ActiveValidatorDetailsValidationStatus$outboundSchema` instead. */
  export const outboundSchema =
    ActiveValidatorDetailsValidationStatus$outboundSchema;
}

/** @internal */
export const ActiveValidatorDetails$inboundSchema: z.ZodType<
  ActiveValidatorDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  amountStaked: z.string(),
  delegationFee: z.string().optional(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  blsCredentials: BlsCredentials$inboundSchema.optional(),
  stakePercentage: z.number(),
  delegatorCount: z.number(),
  amountDelegated: z.string().optional(),
  uptimePerformance: z.number(),
  avalancheGoVersion: z.string().optional(),
  delegationCapacity: z.string().optional(),
  potentialRewards: Rewards$inboundSchema,
  validationStatus: ActiveValidatorDetailsValidationStatus$inboundSchema,
  validatorHealth: ValidatorHealthDetails$inboundSchema,
});

/** @internal */
export type ActiveValidatorDetails$Outbound = {
  txHash: string;
  nodeId: string;
  subnetId: string;
  amountStaked: string;
  delegationFee?: string | undefined;
  startTimestamp: number;
  endTimestamp: number;
  blsCredentials?: BlsCredentials$Outbound | undefined;
  stakePercentage: number;
  delegatorCount: number;
  amountDelegated?: string | undefined;
  uptimePerformance: number;
  avalancheGoVersion?: string | undefined;
  delegationCapacity?: string | undefined;
  potentialRewards: Rewards$Outbound;
  validationStatus: string;
  validatorHealth: ValidatorHealthDetails$Outbound;
};

/** @internal */
export const ActiveValidatorDetails$outboundSchema: z.ZodType<
  ActiveValidatorDetails$Outbound,
  z.ZodTypeDef,
  ActiveValidatorDetails
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  amountStaked: z.string(),
  delegationFee: z.string().optional(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  blsCredentials: BlsCredentials$outboundSchema.optional(),
  stakePercentage: z.number(),
  delegatorCount: z.number(),
  amountDelegated: z.string().optional(),
  uptimePerformance: z.number(),
  avalancheGoVersion: z.string().optional(),
  delegationCapacity: z.string().optional(),
  potentialRewards: Rewards$outboundSchema,
  validationStatus: ActiveValidatorDetailsValidationStatus$outboundSchema,
  validatorHealth: ValidatorHealthDetails$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActiveValidatorDetails$ {
  /** @deprecated use `ActiveValidatorDetails$inboundSchema` instead. */
  export const inboundSchema = ActiveValidatorDetails$inboundSchema;
  /** @deprecated use `ActiveValidatorDetails$outboundSchema` instead. */
  export const outboundSchema = ActiveValidatorDetails$outboundSchema;
  /** @deprecated use `ActiveValidatorDetails$Outbound` instead. */
  export type Outbound = ActiveValidatorDetails$Outbound;
}

export function activeValidatorDetailsToJSON(
  activeValidatorDetails: ActiveValidatorDetails,
): string {
  return JSON.stringify(
    ActiveValidatorDetails$outboundSchema.parse(activeValidatorDetails),
  );
}

export function activeValidatorDetailsFromJSON(
  jsonString: string,
): SafeParseResult<ActiveValidatorDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActiveValidatorDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActiveValidatorDetails' from JSON`,
  );
}
