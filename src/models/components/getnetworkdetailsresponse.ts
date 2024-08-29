/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

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
import * as z from "zod";

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
