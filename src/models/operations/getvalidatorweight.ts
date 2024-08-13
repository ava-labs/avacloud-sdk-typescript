/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export const GetValidatorWeightServerList = ["http://localhost:3001"] as const;

export type GetValidatorWeightRequest = {
    /**
     * From date in UNIX Timestamp.
     */
    from?: string | undefined;
    /**
     * To date in UNIX Timestamp.
     */
    to?: string | undefined;
    /**
     * For paginated responses. Value will be provided in the [nextPageStartKey] field in the response if the query has more than one page.
     */
    startKey?: string | undefined;
    /**
     * Network type
     */
    network: components.LegacyNetworks;
    /**
     * alpha-numeric subnetID
     */
    subnetID: string;
};

export type GetValidatorWeightResponse = {
    result: components.StakingInformationResponse;
};

/** @internal */
export const GetValidatorWeightRequest$inboundSchema: z.ZodType<
    GetValidatorWeightRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    startKey: z.string().optional(),
    network: components.LegacyNetworks$inboundSchema,
    subnetID: z.string(),
});

/** @internal */
export type GetValidatorWeightRequest$Outbound = {
    from?: string | undefined;
    to?: string | undefined;
    startKey?: string | undefined;
    network: string;
    subnetID: string;
};

/** @internal */
export const GetValidatorWeightRequest$outboundSchema: z.ZodType<
    GetValidatorWeightRequest$Outbound,
    z.ZodTypeDef,
    GetValidatorWeightRequest
> = z.object({
    from: z.string().optional(),
    to: z.string().optional(),
    startKey: z.string().optional(),
    network: components.LegacyNetworks$outboundSchema,
    subnetID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetValidatorWeightRequest$ {
    /** @deprecated use `GetValidatorWeightRequest$inboundSchema` instead. */
    export const inboundSchema = GetValidatorWeightRequest$inboundSchema;
    /** @deprecated use `GetValidatorWeightRequest$outboundSchema` instead. */
    export const outboundSchema = GetValidatorWeightRequest$outboundSchema;
    /** @deprecated use `GetValidatorWeightRequest$Outbound` instead. */
    export type Outbound = GetValidatorWeightRequest$Outbound;
}

/** @internal */
export const GetValidatorWeightResponse$inboundSchema: z.ZodType<
    GetValidatorWeightResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.StakingInformationResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type GetValidatorWeightResponse$Outbound = {
    Result: components.StakingInformationResponse$Outbound;
};

/** @internal */
export const GetValidatorWeightResponse$outboundSchema: z.ZodType<
    GetValidatorWeightResponse$Outbound,
    z.ZodTypeDef,
    GetValidatorWeightResponse
> = z
    .object({
        result: components.StakingInformationResponse$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetValidatorWeightResponse$ {
    /** @deprecated use `GetValidatorWeightResponse$inboundSchema` instead. */
    export const inboundSchema = GetValidatorWeightResponse$inboundSchema;
    /** @deprecated use `GetValidatorWeightResponse$outboundSchema` instead. */
    export const outboundSchema = GetValidatorWeightResponse$outboundSchema;
    /** @deprecated use `GetValidatorWeightResponse$Outbound` instead. */
    export type Outbound = GetValidatorWeightResponse$Outbound;
}