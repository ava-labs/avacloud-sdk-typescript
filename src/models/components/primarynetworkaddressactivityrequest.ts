/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PrimaryNetworkAddressActivityMetadata,
  PrimaryNetworkAddressActivityMetadata$inboundSchema,
  PrimaryNetworkAddressActivityMetadata$Outbound,
  PrimaryNetworkAddressActivityMetadata$outboundSchema,
} from "./primarynetworkaddressactivitymetadata.js";
import {
  PrimaryNetworkType,
  PrimaryNetworkType$inboundSchema,
  PrimaryNetworkType$outboundSchema,
} from "./primarynetworktype.js";

export const PrimaryNetworkAddressActivityRequestEventType = {
  PrimaryNetworkAddressActivity: "primary_network_address_activity",
} as const;
export type PrimaryNetworkAddressActivityRequestEventType = ClosedEnum<
  typeof PrimaryNetworkAddressActivityRequestEventType
>;

/**
 * Metadata for platform address activity event
 */
export type PrimaryNetworkAddressActivityRequestMetadata =
  PrimaryNetworkAddressActivityMetadata;

export type PrimaryNetworkAddressActivityRequest = {
  eventType: PrimaryNetworkAddressActivityRequestEventType;
  url: string;
  name?: string | undefined;
  description?: string | undefined;
  network: PrimaryNetworkType;
  chainId: string;
  /**
   * Metadata for platform address activity event
   */
  metadata: PrimaryNetworkAddressActivityMetadata;
};

/** @internal */
export const PrimaryNetworkAddressActivityRequestEventType$inboundSchema:
  z.ZodNativeEnum<typeof PrimaryNetworkAddressActivityRequestEventType> = z
    .nativeEnum(PrimaryNetworkAddressActivityRequestEventType);

/** @internal */
export const PrimaryNetworkAddressActivityRequestEventType$outboundSchema:
  z.ZodNativeEnum<typeof PrimaryNetworkAddressActivityRequestEventType> =
    PrimaryNetworkAddressActivityRequestEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkAddressActivityRequestEventType$ {
  /** @deprecated use `PrimaryNetworkAddressActivityRequestEventType$inboundSchema` instead. */
  export const inboundSchema =
    PrimaryNetworkAddressActivityRequestEventType$inboundSchema;
  /** @deprecated use `PrimaryNetworkAddressActivityRequestEventType$outboundSchema` instead. */
  export const outboundSchema =
    PrimaryNetworkAddressActivityRequestEventType$outboundSchema;
}

/** @internal */
export const PrimaryNetworkAddressActivityRequestMetadata$inboundSchema:
  z.ZodType<
    PrimaryNetworkAddressActivityRequestMetadata,
    z.ZodTypeDef,
    unknown
  > = PrimaryNetworkAddressActivityMetadata$inboundSchema;

/** @internal */
export type PrimaryNetworkAddressActivityRequestMetadata$Outbound =
  PrimaryNetworkAddressActivityMetadata$Outbound;

/** @internal */
export const PrimaryNetworkAddressActivityRequestMetadata$outboundSchema:
  z.ZodType<
    PrimaryNetworkAddressActivityRequestMetadata$Outbound,
    z.ZodTypeDef,
    PrimaryNetworkAddressActivityRequestMetadata
  > = PrimaryNetworkAddressActivityMetadata$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkAddressActivityRequestMetadata$ {
  /** @deprecated use `PrimaryNetworkAddressActivityRequestMetadata$inboundSchema` instead. */
  export const inboundSchema =
    PrimaryNetworkAddressActivityRequestMetadata$inboundSchema;
  /** @deprecated use `PrimaryNetworkAddressActivityRequestMetadata$outboundSchema` instead. */
  export const outboundSchema =
    PrimaryNetworkAddressActivityRequestMetadata$outboundSchema;
  /** @deprecated use `PrimaryNetworkAddressActivityRequestMetadata$Outbound` instead. */
  export type Outbound = PrimaryNetworkAddressActivityRequestMetadata$Outbound;
}

export function primaryNetworkAddressActivityRequestMetadataToJSON(
  primaryNetworkAddressActivityRequestMetadata:
    PrimaryNetworkAddressActivityRequestMetadata,
): string {
  return JSON.stringify(
    PrimaryNetworkAddressActivityRequestMetadata$outboundSchema.parse(
      primaryNetworkAddressActivityRequestMetadata,
    ),
  );
}

export function primaryNetworkAddressActivityRequestMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  PrimaryNetworkAddressActivityRequestMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PrimaryNetworkAddressActivityRequestMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PrimaryNetworkAddressActivityRequestMetadata' from JSON`,
  );
}

/** @internal */
export const PrimaryNetworkAddressActivityRequest$inboundSchema: z.ZodType<
  PrimaryNetworkAddressActivityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  eventType: PrimaryNetworkAddressActivityRequestEventType$inboundSchema,
  url: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  network: PrimaryNetworkType$inboundSchema,
  chainId: z.string(),
  metadata: PrimaryNetworkAddressActivityMetadata$inboundSchema,
});

/** @internal */
export type PrimaryNetworkAddressActivityRequest$Outbound = {
  eventType: string;
  url: string;
  name?: string | undefined;
  description?: string | undefined;
  network: string;
  chainId: string;
  metadata: PrimaryNetworkAddressActivityMetadata$Outbound;
};

/** @internal */
export const PrimaryNetworkAddressActivityRequest$outboundSchema: z.ZodType<
  PrimaryNetworkAddressActivityRequest$Outbound,
  z.ZodTypeDef,
  PrimaryNetworkAddressActivityRequest
> = z.object({
  eventType: PrimaryNetworkAddressActivityRequestEventType$outboundSchema,
  url: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  network: PrimaryNetworkType$outboundSchema,
  chainId: z.string(),
  metadata: PrimaryNetworkAddressActivityMetadata$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkAddressActivityRequest$ {
  /** @deprecated use `PrimaryNetworkAddressActivityRequest$inboundSchema` instead. */
  export const inboundSchema =
    PrimaryNetworkAddressActivityRequest$inboundSchema;
  /** @deprecated use `PrimaryNetworkAddressActivityRequest$outboundSchema` instead. */
  export const outboundSchema =
    PrimaryNetworkAddressActivityRequest$outboundSchema;
  /** @deprecated use `PrimaryNetworkAddressActivityRequest$Outbound` instead. */
  export type Outbound = PrimaryNetworkAddressActivityRequest$Outbound;
}

export function primaryNetworkAddressActivityRequestToJSON(
  primaryNetworkAddressActivityRequest: PrimaryNetworkAddressActivityRequest,
): string {
  return JSON.stringify(
    PrimaryNetworkAddressActivityRequest$outboundSchema.parse(
      primaryNetworkAddressActivityRequest,
    ),
  );
}

export function primaryNetworkAddressActivityRequestFromJSON(
  jsonString: string,
): SafeParseResult<PrimaryNetworkAddressActivityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PrimaryNetworkAddressActivityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PrimaryNetworkAddressActivityRequest' from JSON`,
  );
}
