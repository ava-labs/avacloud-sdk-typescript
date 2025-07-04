/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EVMAddressActivityResponse,
  EVMAddressActivityResponse$inboundSchema,
  EVMAddressActivityResponse$Outbound,
  EVMAddressActivityResponse$outboundSchema,
} from "./evmaddressactivityresponse.js";
import {
  PlatformActivityResponse,
  PlatformActivityResponse$inboundSchema,
  PlatformActivityResponse$Outbound,
  PlatformActivityResponse$outboundSchema,
} from "./platformactivityresponse.js";

export type Webhooks = EVMAddressActivityResponse | PlatformActivityResponse;

export type ListWebhooksResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  webhooks: Array<EVMAddressActivityResponse | PlatformActivityResponse>;
};

/** @internal */
export const Webhooks$inboundSchema: z.ZodType<
  Webhooks,
  z.ZodTypeDef,
  unknown
> = z.union([
  EVMAddressActivityResponse$inboundSchema,
  PlatformActivityResponse$inboundSchema,
]);

/** @internal */
export type Webhooks$Outbound =
  | EVMAddressActivityResponse$Outbound
  | PlatformActivityResponse$Outbound;

/** @internal */
export const Webhooks$outboundSchema: z.ZodType<
  Webhooks$Outbound,
  z.ZodTypeDef,
  Webhooks
> = z.union([
  EVMAddressActivityResponse$outboundSchema,
  PlatformActivityResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Webhooks$ {
  /** @deprecated use `Webhooks$inboundSchema` instead. */
  export const inboundSchema = Webhooks$inboundSchema;
  /** @deprecated use `Webhooks$outboundSchema` instead. */
  export const outboundSchema = Webhooks$outboundSchema;
  /** @deprecated use `Webhooks$Outbound` instead. */
  export type Outbound = Webhooks$Outbound;
}

export function webhooksToJSON(webhooks: Webhooks): string {
  return JSON.stringify(Webhooks$outboundSchema.parse(webhooks));
}

export function webhooksFromJSON(
  jsonString: string,
): SafeParseResult<Webhooks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Webhooks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Webhooks' from JSON`,
  );
}

/** @internal */
export const ListWebhooksResponse$inboundSchema: z.ZodType<
  ListWebhooksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  webhooks: z.array(
    z.union([
      EVMAddressActivityResponse$inboundSchema,
      PlatformActivityResponse$inboundSchema,
    ]),
  ),
});

/** @internal */
export type ListWebhooksResponse$Outbound = {
  nextPageToken?: string | undefined;
  webhooks: Array<
    EVMAddressActivityResponse$Outbound | PlatformActivityResponse$Outbound
  >;
};

/** @internal */
export const ListWebhooksResponse$outboundSchema: z.ZodType<
  ListWebhooksResponse$Outbound,
  z.ZodTypeDef,
  ListWebhooksResponse
> = z.object({
  nextPageToken: z.string().optional(),
  webhooks: z.array(
    z.union([
      EVMAddressActivityResponse$outboundSchema,
      PlatformActivityResponse$outboundSchema,
    ]),
  ),
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
