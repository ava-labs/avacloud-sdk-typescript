/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PlatformActivityKeyType,
  PlatformActivityKeyType$inboundSchema,
  PlatformActivityKeyType$outboundSchema,
} from "./platformactivitykeytype.js";
import {
  PlatformActivitySubEvents,
  PlatformActivitySubEvents$inboundSchema,
  PlatformActivitySubEvents$Outbound,
  PlatformActivitySubEvents$outboundSchema,
} from "./platformactivitysubevents.js";
import {
  PlatformBalanceThresholdFilter,
  PlatformBalanceThresholdFilter$inboundSchema,
  PlatformBalanceThresholdFilter$Outbound,
  PlatformBalanceThresholdFilter$outboundSchema,
} from "./platformbalancethresholdfilter.js";

export type PlatformActivityMetadata = {
  /**
   * The type of key for platform activity depending on the event type
   */
  keyType: PlatformActivityKeyType;
  /**
   * Array of keys like addresses, NodeID or SubnetID corresponding to the keyType being monitored. For PlatformAddressActivity event, an array of multiple addresses can be provided. ValidatorActivity event will only accept a single key
   */
  keys: Array<string>;
  /**
   * Sub-events to monitor
   */
  subEvents?: PlatformActivitySubEvents | undefined;
  /**
   * Array of hexadecimal strings of the event signatures.
   */
  eventSignatures?: Array<string> | undefined;
  /**
   * Array of node IDs to filter the events
   */
  nodeIds?: Array<string> | undefined;
  /**
   * Array of subnet IDs to filter the events
   */
  subnetIds?: Array<string> | undefined;
  /**
   * Balance threshold filter
   */
  balanceThresholdFilter?: PlatformBalanceThresholdFilter | undefined;
  /**
   * L1 validator fee balance threshold in nAVAX
   */
  l1ValidatorFeeBalanceThreshold?: string | undefined;
};

/** @internal */
export const PlatformActivityMetadata$inboundSchema: z.ZodType<
  PlatformActivityMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  keyType: PlatformActivityKeyType$inboundSchema,
  keys: z.array(z.string()),
  subEvents: PlatformActivitySubEvents$inboundSchema.optional(),
  eventSignatures: z.array(z.string()).optional(),
  nodeIds: z.array(z.string()).optional(),
  subnetIds: z.array(z.string()).optional(),
  balanceThresholdFilter: PlatformBalanceThresholdFilter$inboundSchema
    .optional(),
  l1ValidatorFeeBalanceThreshold: z.string().optional(),
});

/** @internal */
export type PlatformActivityMetadata$Outbound = {
  keyType: string;
  keys: Array<string>;
  subEvents?: PlatformActivitySubEvents$Outbound | undefined;
  eventSignatures?: Array<string> | undefined;
  nodeIds?: Array<string> | undefined;
  subnetIds?: Array<string> | undefined;
  balanceThresholdFilter?: PlatformBalanceThresholdFilter$Outbound | undefined;
  l1ValidatorFeeBalanceThreshold?: string | undefined;
};

/** @internal */
export const PlatformActivityMetadata$outboundSchema: z.ZodType<
  PlatformActivityMetadata$Outbound,
  z.ZodTypeDef,
  PlatformActivityMetadata
> = z.object({
  keyType: PlatformActivityKeyType$outboundSchema,
  keys: z.array(z.string()),
  subEvents: PlatformActivitySubEvents$outboundSchema.optional(),
  eventSignatures: z.array(z.string()).optional(),
  nodeIds: z.array(z.string()).optional(),
  subnetIds: z.array(z.string()).optional(),
  balanceThresholdFilter: PlatformBalanceThresholdFilter$outboundSchema
    .optional(),
  l1ValidatorFeeBalanceThreshold: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlatformActivityMetadata$ {
  /** @deprecated use `PlatformActivityMetadata$inboundSchema` instead. */
  export const inboundSchema = PlatformActivityMetadata$inboundSchema;
  /** @deprecated use `PlatformActivityMetadata$outboundSchema` instead. */
  export const outboundSchema = PlatformActivityMetadata$outboundSchema;
  /** @deprecated use `PlatformActivityMetadata$Outbound` instead. */
  export type Outbound = PlatformActivityMetadata$Outbound;
}

export function platformActivityMetadataToJSON(
  platformActivityMetadata: PlatformActivityMetadata,
): string {
  return JSON.stringify(
    PlatformActivityMetadata$outboundSchema.parse(platformActivityMetadata),
  );
}

export function platformActivityMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PlatformActivityMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PlatformActivityMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PlatformActivityMetadata' from JSON`,
  );
}
