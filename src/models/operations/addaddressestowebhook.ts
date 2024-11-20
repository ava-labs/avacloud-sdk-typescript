/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AddAddressesToWebhookServerList = [
  "https://glacier-api.avax.network",
] as const;

export type AddAddressesToWebhookRequest = {
  /**
   * The webhook identifier.
   */
  id: string;
  addressesChangeRequest: components.AddressesChangeRequest;
};

/** @internal */
export const AddAddressesToWebhookRequest$inboundSchema: z.ZodType<
  AddAddressesToWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  AddressesChangeRequest: components.AddressesChangeRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AddressesChangeRequest": "addressesChangeRequest",
  });
});

/** @internal */
export type AddAddressesToWebhookRequest$Outbound = {
  id: string;
  AddressesChangeRequest: components.AddressesChangeRequest$Outbound;
};

/** @internal */
export const AddAddressesToWebhookRequest$outboundSchema: z.ZodType<
  AddAddressesToWebhookRequest$Outbound,
  z.ZodTypeDef,
  AddAddressesToWebhookRequest
> = z.object({
  id: z.string(),
  addressesChangeRequest: components.AddressesChangeRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    addressesChangeRequest: "AddressesChangeRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddAddressesToWebhookRequest$ {
  /** @deprecated use `AddAddressesToWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = AddAddressesToWebhookRequest$inboundSchema;
  /** @deprecated use `AddAddressesToWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = AddAddressesToWebhookRequest$outboundSchema;
  /** @deprecated use `AddAddressesToWebhookRequest$Outbound` instead. */
  export type Outbound = AddAddressesToWebhookRequest$Outbound;
}

export function addAddressesToWebhookRequestToJSON(
  addAddressesToWebhookRequest: AddAddressesToWebhookRequest,
): string {
  return JSON.stringify(
    AddAddressesToWebhookRequest$outboundSchema.parse(
      addAddressesToWebhookRequest,
    ),
  );
}

export function addAddressesToWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddAddressesToWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddAddressesToWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddAddressesToWebhookRequest' from JSON`,
  );
}
