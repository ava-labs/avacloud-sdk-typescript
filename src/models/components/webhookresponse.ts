/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressActivityMetadata,
  AddressActivityMetadata$inboundSchema,
  AddressActivityMetadata$Outbound,
  AddressActivityMetadata$outboundSchema,
} from "./addressactivitymetadata.js";
import {
  EventType,
  EventType$inboundSchema,
  EventType$outboundSchema,
} from "./eventtype.js";
import {
  WebhookStatusType,
  WebhookStatusType$inboundSchema,
  WebhookStatusType$outboundSchema,
} from "./webhookstatustype.js";

export type WebhookResponseMetadata = AddressActivityMetadata;

export type WebhookResponse = {
  id: string;
  eventType: EventType;
  metadata: AddressActivityMetadata;
  /**
   * Whether to include traces in the webhook payload.
   */
  includeInternalTxs?: boolean | undefined;
  /**
   * Whether to include logs in the webhook payload.
   */
  includeLogs?: boolean | undefined;
  url: string;
  chainId: string;
  status: WebhookStatusType;
  createdAt: number;
  name: string;
  description: string;
};

/** @internal */
export const WebhookResponseMetadata$inboundSchema: z.ZodType<
  WebhookResponseMetadata,
  z.ZodTypeDef,
  unknown
> = AddressActivityMetadata$inboundSchema;

/** @internal */
export type WebhookResponseMetadata$Outbound = AddressActivityMetadata$Outbound;

/** @internal */
export const WebhookResponseMetadata$outboundSchema: z.ZodType<
  WebhookResponseMetadata$Outbound,
  z.ZodTypeDef,
  WebhookResponseMetadata
> = AddressActivityMetadata$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookResponseMetadata$ {
  /** @deprecated use `WebhookResponseMetadata$inboundSchema` instead. */
  export const inboundSchema = WebhookResponseMetadata$inboundSchema;
  /** @deprecated use `WebhookResponseMetadata$outboundSchema` instead. */
  export const outboundSchema = WebhookResponseMetadata$outboundSchema;
  /** @deprecated use `WebhookResponseMetadata$Outbound` instead. */
  export type Outbound = WebhookResponseMetadata$Outbound;
}

export function webhookResponseMetadataToJSON(
  webhookResponseMetadata: WebhookResponseMetadata,
): string {
  return JSON.stringify(
    WebhookResponseMetadata$outboundSchema.parse(webhookResponseMetadata),
  );
}

export function webhookResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<WebhookResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookResponseMetadata' from JSON`,
  );
}

/** @internal */
export const WebhookResponse$inboundSchema: z.ZodType<
  WebhookResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  eventType: EventType$inboundSchema,
  metadata: AddressActivityMetadata$inboundSchema,
  includeInternalTxs: z.boolean().optional(),
  includeLogs: z.boolean().optional(),
  url: z.string(),
  chainId: z.string(),
  status: WebhookStatusType$inboundSchema,
  createdAt: z.number(),
  name: z.string(),
  description: z.string(),
});

/** @internal */
export type WebhookResponse$Outbound = {
  id: string;
  eventType: string;
  metadata: AddressActivityMetadata$Outbound;
  includeInternalTxs?: boolean | undefined;
  includeLogs?: boolean | undefined;
  url: string;
  chainId: string;
  status: string;
  createdAt: number;
  name: string;
  description: string;
};

/** @internal */
export const WebhookResponse$outboundSchema: z.ZodType<
  WebhookResponse$Outbound,
  z.ZodTypeDef,
  WebhookResponse
> = z.object({
  id: z.string(),
  eventType: EventType$outboundSchema,
  metadata: AddressActivityMetadata$outboundSchema,
  includeInternalTxs: z.boolean().optional(),
  includeLogs: z.boolean().optional(),
  url: z.string(),
  chainId: z.string(),
  status: WebhookStatusType$outboundSchema,
  createdAt: z.number(),
  name: z.string(),
  description: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookResponse$ {
  /** @deprecated use `WebhookResponse$inboundSchema` instead. */
  export const inboundSchema = WebhookResponse$inboundSchema;
  /** @deprecated use `WebhookResponse$outboundSchema` instead. */
  export const outboundSchema = WebhookResponse$outboundSchema;
  /** @deprecated use `WebhookResponse$Outbound` instead. */
  export type Outbound = WebhookResponse$Outbound;
}

export function webhookResponseToJSON(
  webhookResponse: WebhookResponse,
): string {
  return JSON.stringify(WebhookResponse$outboundSchema.parse(webhookResponse));
}

export function webhookResponseFromJSON(
  jsonString: string,
): SafeParseResult<WebhookResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookResponse' from JSON`,
  );
}
