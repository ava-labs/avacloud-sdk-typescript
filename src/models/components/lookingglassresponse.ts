/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressDetails,
  AddressDetails$inboundSchema,
  AddressDetails$Outbound,
  AddressDetails$outboundSchema,
} from "./addressdetails.js";

export type LookingGlassResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  /**
   * List of addresses that match provided criteria.
   */
  addresses: Array<AddressDetails>;
};

/** @internal */
export const LookingGlassResponse$inboundSchema: z.ZodType<
  LookingGlassResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  addresses: z.array(AddressDetails$inboundSchema),
});

/** @internal */
export type LookingGlassResponse$Outbound = {
  nextPageToken?: string | undefined;
  addresses: Array<AddressDetails$Outbound>;
};

/** @internal */
export const LookingGlassResponse$outboundSchema: z.ZodType<
  LookingGlassResponse$Outbound,
  z.ZodTypeDef,
  LookingGlassResponse
> = z.object({
  nextPageToken: z.string().optional(),
  addresses: z.array(AddressDetails$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LookingGlassResponse$ {
  /** @deprecated use `LookingGlassResponse$inboundSchema` instead. */
  export const inboundSchema = LookingGlassResponse$inboundSchema;
  /** @deprecated use `LookingGlassResponse$outboundSchema` instead. */
  export const outboundSchema = LookingGlassResponse$outboundSchema;
  /** @deprecated use `LookingGlassResponse$Outbound` instead. */
  export type Outbound = LookingGlassResponse$Outbound;
}

export function lookingGlassResponseToJSON(
  lookingGlassResponse: LookingGlassResponse,
): string {
  return JSON.stringify(
    LookingGlassResponse$outboundSchema.parse(lookingGlassResponse),
  );
}

export function lookingGlassResponseFromJSON(
  jsonString: string,
): SafeParseResult<LookingGlassResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LookingGlassResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LookingGlassResponse' from JSON`,
  );
}
