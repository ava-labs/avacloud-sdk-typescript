/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export const UpdateWebhookServerList = ["https://glacier-api.avax.network"] as const;

export type UpdateWebhookRequest = {
    /**
     * The webhook identifier.
     */
    id: string;
    updateWebhookRequest: components.UpdateWebhookRequest;
};

/** @internal */
export const UpdateWebhookRequest$inboundSchema: z.ZodType<
    UpdateWebhookRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        UpdateWebhookRequest: components.UpdateWebhookRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            UpdateWebhookRequest: "updateWebhookRequest",
        });
    });

/** @internal */
export type UpdateWebhookRequest$Outbound = {
    id: string;
    UpdateWebhookRequest: components.UpdateWebhookRequest$Outbound;
};

/** @internal */
export const UpdateWebhookRequest$outboundSchema: z.ZodType<
    UpdateWebhookRequest$Outbound,
    z.ZodTypeDef,
    UpdateWebhookRequest
> = z
    .object({
        id: z.string(),
        updateWebhookRequest: components.UpdateWebhookRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            updateWebhookRequest: "UpdateWebhookRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookRequest$ {
    /** @deprecated use `UpdateWebhookRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateWebhookRequest$inboundSchema;
    /** @deprecated use `UpdateWebhookRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateWebhookRequest$outboundSchema;
    /** @deprecated use `UpdateWebhookRequest$Outbound` instead. */
    export type Outbound = UpdateWebhookRequest$Outbound;
}
