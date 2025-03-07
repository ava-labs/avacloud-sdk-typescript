/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WebhookResponse,
  WebhookResponse$inboundSchema,
  WebhookResponse$Outbound,
  WebhookResponse$outboundSchema,
} from "./webhookresponse.js";

export type ListWebhooksResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  webhooks: Array<WebhookResponse>;
};

/** @internal */
export const ListWebhooksResponse$inboundSchema: z.ZodType<
  ListWebhooksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  webhooks: z.array(WebhookResponse$inboundSchema),
});

/** @internal */
export type ListWebhooksResponse$Outbound = {
  nextPageToken?: string | undefined;
  webhooks: Array<WebhookResponse$Outbound>;
};

/** @internal */
export const ListWebhooksResponse$outboundSchema: z.ZodType<
  ListWebhooksResponse$Outbound,
  z.ZodTypeDef,
  ListWebhooksResponse
> = z.object({
  nextPageToken: z.string().optional(),
  webhooks: z.array(WebhookResponse$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksResponse$ {
  /** @deprecated use `ListWebhooksResponse$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksResponse$inboundSchema;
  /** @deprecated use `ListWebhooksResponse$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksResponse$outboundSchema;
  /** @deprecated use `ListWebhooksResponse$Outbound` instead. */
  export type Outbound = ListWebhooksResponse$Outbound;
}

export function listWebhooksResponseToJSON(
  listWebhooksResponse: ListWebhooksResponse,
): string {
  return JSON.stringify(
    ListWebhooksResponse$outboundSchema.parse(listWebhooksResponse),
  );
}

export function listWebhooksResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksResponse' from JSON`,
  );
}
