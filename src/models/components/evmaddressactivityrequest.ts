/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressActivityMetadata,
  AddressActivityMetadata$inboundSchema,
  AddressActivityMetadata$Outbound,
  AddressActivityMetadata$outboundSchema,
} from "./addressactivitymetadata.js";

export const EventType = {
  AddressActivity: "address_activity",
} as const;
export type EventType = ClosedEnum<typeof EventType>;

export type EVMAddressActivityRequestMetadata = AddressActivityMetadata;

export type EVMAddressActivityRequest = {
  eventType: EventType;
  url: string;
  name?: string | undefined;
  description?: string | undefined;
  chainId: string;
  metadata: AddressActivityMetadata;
  /**
   * Whether to include traces in the webhook payload. Traces are only available for C-Chain on chainId 43113 and 43114.
   */
  includeInternalTxs?: boolean | undefined;
  /**
   * Whether to include logs in the webhook payload.
   */
  includeLogs?: boolean | undefined;
};

/** @internal */
export const EventType$inboundSchema: z.ZodNativeEnum<typeof EventType> = z
  .nativeEnum(EventType);

/** @internal */
export const EventType$outboundSchema: z.ZodNativeEnum<typeof EventType> =
  EventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventType$ {
  /** @deprecated use `EventType$inboundSchema` instead. */
  export const inboundSchema = EventType$inboundSchema;
  /** @deprecated use `EventType$outboundSchema` instead. */
  export const outboundSchema = EventType$outboundSchema;
}

/** @internal */
export const EVMAddressActivityRequestMetadata$inboundSchema: z.ZodType<
  EVMAddressActivityRequestMetadata,
  z.ZodTypeDef,
  unknown
> = AddressActivityMetadata$inboundSchema;

/** @internal */
export type EVMAddressActivityRequestMetadata$Outbound =
  AddressActivityMetadata$Outbound;

/** @internal */
export const EVMAddressActivityRequestMetadata$outboundSchema: z.ZodType<
  EVMAddressActivityRequestMetadata$Outbound,
  z.ZodTypeDef,
  EVMAddressActivityRequestMetadata
> = AddressActivityMetadata$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EVMAddressActivityRequestMetadata$ {
  /** @deprecated use `EVMAddressActivityRequestMetadata$inboundSchema` instead. */
  export const inboundSchema = EVMAddressActivityRequestMetadata$inboundSchema;
  /** @deprecated use `EVMAddressActivityRequestMetadata$outboundSchema` instead. */
  export const outboundSchema =
    EVMAddressActivityRequestMetadata$outboundSchema;
  /** @deprecated use `EVMAddressActivityRequestMetadata$Outbound` instead. */
  export type Outbound = EVMAddressActivityRequestMetadata$Outbound;
}

export function evmAddressActivityRequestMetadataToJSON(
  evmAddressActivityRequestMetadata: EVMAddressActivityRequestMetadata,
): string {
  return JSON.stringify(
    EVMAddressActivityRequestMetadata$outboundSchema.parse(
      evmAddressActivityRequestMetadata,
    ),
  );
}

export function evmAddressActivityRequestMetadataFromJSON(
  jsonString: string,
): SafeParseResult<EVMAddressActivityRequestMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EVMAddressActivityRequestMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EVMAddressActivityRequestMetadata' from JSON`,
  );
}

/** @internal */
export const EVMAddressActivityRequest$inboundSchema: z.ZodType<
  EVMAddressActivityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  eventType: EventType$inboundSchema,
  url: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  chainId: z.string(),
  metadata: AddressActivityMetadata$inboundSchema,
  includeInternalTxs: z.boolean().optional(),
  includeLogs: z.boolean().optional(),
});

/** @internal */
export type EVMAddressActivityRequest$Outbound = {
  eventType: string;
  url: string;
  name?: string | undefined;
  description?: string | undefined;
  chainId: string;
  metadata: AddressActivityMetadata$Outbound;
  includeInternalTxs?: boolean | undefined;
  includeLogs?: boolean | undefined;
};

/** @internal */
export const EVMAddressActivityRequest$outboundSchema: z.ZodType<
  EVMAddressActivityRequest$Outbound,
  z.ZodTypeDef,
  EVMAddressActivityRequest
> = z.object({
  eventType: EventType$outboundSchema,
  url: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  chainId: z.string(),
  metadata: AddressActivityMetadata$outboundSchema,
  includeInternalTxs: z.boolean().optional(),
  includeLogs: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EVMAddressActivityRequest$ {
  /** @deprecated use `EVMAddressActivityRequest$inboundSchema` instead. */
  export const inboundSchema = EVMAddressActivityRequest$inboundSchema;
  /** @deprecated use `EVMAddressActivityRequest$outboundSchema` instead. */
  export const outboundSchema = EVMAddressActivityRequest$outboundSchema;
  /** @deprecated use `EVMAddressActivityRequest$Outbound` instead. */
  export type Outbound = EVMAddressActivityRequest$Outbound;
}

export function evmAddressActivityRequestToJSON(
  evmAddressActivityRequest: EVMAddressActivityRequest,
): string {
  return JSON.stringify(
    EVMAddressActivityRequest$outboundSchema.parse(evmAddressActivityRequest),
  );
}

export function evmAddressActivityRequestFromJSON(
  jsonString: string,
): SafeParseResult<EVMAddressActivityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EVMAddressActivityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EVMAddressActivityRequest' from JSON`,
  );
}
