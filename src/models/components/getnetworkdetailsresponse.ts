/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DelegatorsDetails,
  DelegatorsDetails$inboundSchema,
  DelegatorsDetails$Outbound,
  DelegatorsDetails$outboundSchema,
} from "./delegatorsdetails.js";
import {
  ValidatorsDetails,
  ValidatorsDetails$inboundSchema,
  ValidatorsDetails$Outbound,
  ValidatorsDetails$outboundSchema,
} from "./validatorsdetails.js";

export type GetNetworkDetailsResponse = {
  validatorDetails: ValidatorsDetails;
  delegatorDetails: DelegatorsDetails;
};

/** @internal */
export const GetNetworkDetailsResponse$inboundSchema: z.ZodType<
  GetNetworkDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  validatorDetails: ValidatorsDetails$inboundSchema,
  delegatorDetails: DelegatorsDetails$inboundSchema,
});

/** @internal */
export type GetNetworkDetailsResponse$Outbound = {
  validatorDetails: ValidatorsDetails$Outbound;
  delegatorDetails: DelegatorsDetails$Outbound;
};

/** @internal */
export const GetNetworkDetailsResponse$outboundSchema: z.ZodType<
  GetNetworkDetailsResponse$Outbound,
  z.ZodTypeDef,
  GetNetworkDetailsResponse
> = z.object({
  validatorDetails: ValidatorsDetails$outboundSchema,
  delegatorDetails: DelegatorsDetails$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNetworkDetailsResponse$ {
  /** @deprecated use `GetNetworkDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = GetNetworkDetailsResponse$inboundSchema;
  /** @deprecated use `GetNetworkDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = GetNetworkDetailsResponse$outboundSchema;
  /** @deprecated use `GetNetworkDetailsResponse$Outbound` instead. */
  export type Outbound = GetNetworkDetailsResponse$Outbound;
}

export function getNetworkDetailsResponseToJSON(
  getNetworkDetailsResponse: GetNetworkDetailsResponse,
): string {
  return JSON.stringify(
    GetNetworkDetailsResponse$outboundSchema.parse(getNetworkDetailsResponse),
  );
}

export function getNetworkDetailsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetNetworkDetailsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetNetworkDetailsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNetworkDetailsResponse' from JSON`,
  );
}
