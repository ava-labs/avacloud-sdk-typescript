/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AddressActivityMetadata,
    AddressActivityMetadata$inboundSchema,
    AddressActivityMetadata$Outbound,
    AddressActivityMetadata$outboundSchema,
} from "./addressactivitymetadata.js";
import { EventType, EventType$inboundSchema, EventType$outboundSchema } from "./eventtype.js";
import * as z from "zod";

export type CreateWebhookRequestMetadata = AddressActivityMetadata;

export type CreateWebhookRequest = {
    url: string;
    chainId: string;
    eventType: EventType;
    metadata: AddressActivityMetadata;
    name?: string | undefined;
    description?: string | undefined;
    /**
     * Whether to include traces in the webhook payload.
     */
    includeInternalTxs?: boolean | undefined;
    /**
     * Whether to include logs in the webhook payload.
     */
    includeLogs?: boolean | undefined;
};

/** @internal */
export const CreateWebhookRequestMetadata$inboundSchema: z.ZodType<
    CreateWebhookRequestMetadata,
    z.ZodTypeDef,
    unknown
> = AddressActivityMetadata$inboundSchema;

/** @internal */
export type CreateWebhookRequestMetadata$Outbound = AddressActivityMetadata$Outbound;

/** @internal */
export const CreateWebhookRequestMetadata$outboundSchema: z.ZodType<
    CreateWebhookRequestMetadata$Outbound,
    z.ZodTypeDef,
    CreateWebhookRequestMetadata
> = AddressActivityMetadata$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequestMetadata$ {
    /** @deprecated use `CreateWebhookRequestMetadata$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookRequestMetadata$inboundSchema;
    /** @deprecated use `CreateWebhookRequestMetadata$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookRequestMetadata$outboundSchema;
    /** @deprecated use `CreateWebhookRequestMetadata$Outbound` instead. */
    export type Outbound = CreateWebhookRequestMetadata$Outbound;
}

/** @internal */
export const CreateWebhookRequest$inboundSchema: z.ZodType<
    CreateWebhookRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
    chainId: z.string(),
    eventType: EventType$inboundSchema,
    metadata: AddressActivityMetadata$inboundSchema,
    name: z.string().optional(),
    description: z.string().optional(),
    includeInternalTxs: z.boolean().optional(),
    includeLogs: z.boolean().optional(),
});

/** @internal */
export type CreateWebhookRequest$Outbound = {
    url: string;
    chainId: string;
    eventType: string;
    metadata: AddressActivityMetadata$Outbound;
    name?: string | undefined;
    description?: string | undefined;
    includeInternalTxs?: boolean | undefined;
    includeLogs?: boolean | undefined;
};

/** @internal */
export const CreateWebhookRequest$outboundSchema: z.ZodType<
    CreateWebhookRequest$Outbound,
    z.ZodTypeDef,
    CreateWebhookRequest
> = z.object({
    url: z.string(),
    chainId: z.string(),
    eventType: EventType$outboundSchema,
    metadata: AddressActivityMetadata$outboundSchema,
    name: z.string().optional(),
    description: z.string().optional(),
    includeInternalTxs: z.boolean().optional(),
    includeLogs: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequest$ {
    /** @deprecated use `CreateWebhookRequest$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookRequest$inboundSchema;
    /** @deprecated use `CreateWebhookRequest$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookRequest$outboundSchema;
    /** @deprecated use `CreateWebhookRequest$Outbound` instead. */
    export type Outbound = CreateWebhookRequest$Outbound;
}
