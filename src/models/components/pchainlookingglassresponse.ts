/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PChainAddressDetails,
  PChainAddressDetails$inboundSchema,
  PChainAddressDetails$Outbound,
  PChainAddressDetails$outboundSchema,
} from "./pchainaddressdetails.js";

export type PChainLookingGlassResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  /**
   * List of addresses that match provided criteria.
   */
  addresses: Array<PChainAddressDetails>;
};

/** @internal */
export const PChainLookingGlassResponse$inboundSchema: z.ZodType<
  PChainLookingGlassResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  addresses: z.array(PChainAddressDetails$inboundSchema),
});

/** @internal */
export type PChainLookingGlassResponse$Outbound = {
  nextPageToken?: string | undefined;
  addresses: Array<PChainAddressDetails$Outbound>;
};

/** @internal */
export const PChainLookingGlassResponse$outboundSchema: z.ZodType<
  PChainLookingGlassResponse$Outbound,
  z.ZodTypeDef,
  PChainLookingGlassResponse
> = z.object({
  nextPageToken: z.string().optional(),
  addresses: z.array(PChainAddressDetails$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PChainLookingGlassResponse$ {
  /** @deprecated use `PChainLookingGlassResponse$inboundSchema` instead. */
  export const inboundSchema = PChainLookingGlassResponse$inboundSchema;
  /** @deprecated use `PChainLookingGlassResponse$outboundSchema` instead. */
  export const outboundSchema = PChainLookingGlassResponse$outboundSchema;
  /** @deprecated use `PChainLookingGlassResponse$Outbound` instead. */
  export type Outbound = PChainLookingGlassResponse$Outbound;
}

export function pChainLookingGlassResponseToJSON(
  pChainLookingGlassResponse: PChainLookingGlassResponse,
): string {
  return JSON.stringify(
    PChainLookingGlassResponse$outboundSchema.parse(pChainLookingGlassResponse),
  );
}

export function pChainLookingGlassResponseFromJSON(
  jsonString: string,
): SafeParseResult<PChainLookingGlassResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PChainLookingGlassResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PChainLookingGlassResponse' from JSON`,
  );
}
