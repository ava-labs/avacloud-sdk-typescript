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

export const ValidationStatus = {
  Completed: "completed",
} as const;
export type ValidationStatus = ClosedEnum<typeof ValidationStatus>;

export type CompletedValidatorDetails = {
  txHash: string;
  nodeId: string;
  subnetId: string;
  amountStaked: string;
  /**
   * The percentage of total estimated delegator rewards allocated to validator nodes for supporting delegations.
   */
  delegationFee?: string | undefined;
  startTimestamp: number;
  endTimestamp: number;
  /**
   * Present for AddPermissionlessValidatorTx
   */
  blsCredentials?: BlsCredentials | undefined;
  delegatorCount: number;
  amountDelegated?: string | undefined;
  rewards: Rewards;
  validationStatus: ValidationStatus;
};

/** @internal */
export const ValidationStatus$inboundSchema: z.ZodNativeEnum<
  typeof ValidationStatus
> = z.nativeEnum(ValidationStatus);

/** @internal */
export const ValidationStatus$outboundSchema: z.ZodNativeEnum<
  typeof ValidationStatus
> = ValidationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidationStatus$ {
  /** @deprecated use `ValidationStatus$inboundSchema` instead. */
  export const inboundSchema = ValidationStatus$inboundSchema;
  /** @deprecated use `ValidationStatus$outboundSchema` instead. */
  export const outboundSchema = ValidationStatus$outboundSchema;
}

/** @internal */
export const CompletedValidatorDetails$inboundSchema: z.ZodType<
  CompletedValidatorDetails,
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
  delegatorCount: z.number(),
  amountDelegated: z.string().optional(),
  rewards: Rewards$inboundSchema,
  validationStatus: ValidationStatus$inboundSchema,
});

/** @internal */
export type CompletedValidatorDetails$Outbound = {
  txHash: string;
  nodeId: string;
  subnetId: string;
  amountStaked: string;
  delegationFee?: string | undefined;
  startTimestamp: number;
  endTimestamp: number;
  blsCredentials?: BlsCredentials$Outbound | undefined;
  delegatorCount: number;
  amountDelegated?: string | undefined;
  rewards: Rewards$Outbound;
  validationStatus: string;
};

/** @internal */
export const CompletedValidatorDetails$outboundSchema: z.ZodType<
  CompletedValidatorDetails$Outbound,
  z.ZodTypeDef,
  CompletedValidatorDetails
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  amountStaked: z.string(),
  delegationFee: z.string().optional(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  blsCredentials: BlsCredentials$outboundSchema.optional(),
  delegatorCount: z.number(),
  amountDelegated: z.string().optional(),
  rewards: Rewards$outboundSchema,
  validationStatus: ValidationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletedValidatorDetails$ {
  /** @deprecated use `CompletedValidatorDetails$inboundSchema` instead. */
  export const inboundSchema = CompletedValidatorDetails$inboundSchema;
  /** @deprecated use `CompletedValidatorDetails$outboundSchema` instead. */
  export const outboundSchema = CompletedValidatorDetails$outboundSchema;
  /** @deprecated use `CompletedValidatorDetails$Outbound` instead. */
  export type Outbound = CompletedValidatorDetails$Outbound;
}

export function completedValidatorDetailsToJSON(
  completedValidatorDetails: CompletedValidatorDetails,
): string {
  return JSON.stringify(
    CompletedValidatorDetails$outboundSchema.parse(completedValidatorDetails),
  );
}

export function completedValidatorDetailsFromJSON(
  jsonString: string,
): SafeParseResult<CompletedValidatorDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletedValidatorDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletedValidatorDetails' from JSON`,
  );
}
