/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AddressDetails,
    AddressDetails$inboundSchema,
    AddressDetails$Outbound,
    AddressDetails$outboundSchema,
} from "./addressdetails.js";
import * as z from "zod";

export type LookingGlassResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
    /**
     * List of addresses that match provided criteria.
     */
    addresses: AddressDetails;
};

/** @internal */
export const LookingGlassResponse$inboundSchema: z.ZodType<
    LookingGlassResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    nextPageToken: z.string().optional(),
    addresses: AddressDetails$inboundSchema,
});

/** @internal */
export type LookingGlassResponse$Outbound = {
    nextPageToken?: string | undefined;
    addresses: AddressDetails$Outbound;
};

/** @internal */
export const LookingGlassResponse$outboundSchema: z.ZodType<
    LookingGlassResponse$Outbound,
    z.ZodTypeDef,
    LookingGlassResponse
> = z.object({
    nextPageToken: z.string().optional(),
    addresses: AddressDetails$outboundSchema,
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
