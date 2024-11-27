/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WebhookStatusType,
  WebhookStatusType$inboundSchema,
  WebhookStatusType$outboundSchema,
} from "./webhookstatustype.js";

export type UpdateWebhookRequest = {
  name?: string | undefined;
  description?: string | undefined;
  url?: string | undefined;
  status?: WebhookStatusType | undefined;
  /**
   * Whether to include traces in the webhook payload. Traces are only available for C-Chain on chainId 43113 and 43114.
   */
  includeInternalTxs?: boolean | undefined;
  includeLogs?: boolean | undefined;
};

/** @internal */
export const UpdateWebhookRequest$inboundSchema: z.ZodType<
  UpdateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  status: WebhookStatusType$inboundSchema.optional(),
  includeInternalTxs: z.boolean().optional(),
  includeLogs: z.boolean().optional(),
});

/** @internal */
export type UpdateWebhookRequest$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
  url?: string | undefined;
  status?: string | undefined;
  includeInternalTxs?: boolean | undefined;
  includeLogs?: boolean | undefined;
};

/** @internal */
export const UpdateWebhookRequest$outboundSchema: z.ZodType<
  UpdateWebhookRequest$Outbound,
  z.ZodTypeDef,
  UpdateWebhookRequest
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  status: WebhookStatusType$outboundSchema.optional(),
  includeInternalTxs: z.boolean().optional(),
  includeLogs: z.boolean().optional(),
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

export function updateWebhookRequestToJSON(
  updateWebhookRequest: UpdateWebhookRequest,
): string {
  return JSON.stringify(
    UpdateWebhookRequest$outboundSchema.parse(updateWebhookRequest),
  );
}

export function updateWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookRequest' from JSON`,
  );
}
