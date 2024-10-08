/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  BlsCredentials,
  BlsCredentials$inboundSchema,
  BlsCredentials$Outbound,
  BlsCredentials$outboundSchema,
} from "./blscredentials.js";

export const PendingValidatorDetailsValidationStatus = {
  Pending: "pending",
} as const;
export type PendingValidatorDetailsValidationStatus = ClosedEnum<
  typeof PendingValidatorDetailsValidationStatus
>;

export type PendingValidatorDetails = {
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
  validationStatus: PendingValidatorDetailsValidationStatus;
};

/** @internal */
export const PendingValidatorDetailsValidationStatus$inboundSchema:
  z.ZodNativeEnum<typeof PendingValidatorDetailsValidationStatus> = z
    .nativeEnum(PendingValidatorDetailsValidationStatus);

/** @internal */
export const PendingValidatorDetailsValidationStatus$outboundSchema:
  z.ZodNativeEnum<typeof PendingValidatorDetailsValidationStatus> =
    PendingValidatorDetailsValidationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PendingValidatorDetailsValidationStatus$ {
  /** @deprecated use `PendingValidatorDetailsValidationStatus$inboundSchema` instead. */
  export const inboundSchema =
    PendingValidatorDetailsValidationStatus$inboundSchema;
  /** @deprecated use `PendingValidatorDetailsValidationStatus$outboundSchema` instead. */
  export const outboundSchema =
    PendingValidatorDetailsValidationStatus$outboundSchema;
}

/** @internal */
export const PendingValidatorDetails$inboundSchema: z.ZodType<
  PendingValidatorDetails,
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
  validationStatus: PendingValidatorDetailsValidationStatus$inboundSchema,
});

/** @internal */
export type PendingValidatorDetails$Outbound = {
  txHash: string;
  nodeId: string;
  subnetId: string;
  amountStaked: string;
  delegationFee?: string | undefined;
  startTimestamp: number;
  endTimestamp: number;
  blsCredentials?: BlsCredentials$Outbound | undefined;
  validationStatus: string;
};

/** @internal */
export const PendingValidatorDetails$outboundSchema: z.ZodType<
  PendingValidatorDetails$Outbound,
  z.ZodTypeDef,
  PendingValidatorDetails
> = z.object({
  txHash: z.string(),
  nodeId: z.string(),
  subnetId: z.string(),
  amountStaked: z.string(),
  delegationFee: z.string().optional(),
  startTimestamp: z.number(),
  endTimestamp: z.number(),
  blsCredentials: BlsCredentials$outboundSchema.optional(),
  validationStatus: PendingValidatorDetailsValidationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PendingValidatorDetails$ {
  /** @deprecated use `PendingValidatorDetails$inboundSchema` instead. */
  export const inboundSchema = PendingValidatorDetails$inboundSchema;
  /** @deprecated use `PendingValidatorDetails$outboundSchema` instead. */
  export const outboundSchema = PendingValidatorDetails$outboundSchema;
  /** @deprecated use `PendingValidatorDetails$Outbound` instead. */
  export type Outbound = PendingValidatorDetails$Outbound;
}
