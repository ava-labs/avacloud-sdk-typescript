/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export const SupportedChainsServerList = ["http://localhost:3000"] as const;

export type SupportedChainsRequest = {
    /**
     * mainnet or testnet.
     */
    network?: components.NetworkType | undefined;
    /**
     * Filter by feature.
     */
    feature?: components.GlacierApiFeature | undefined;
};

/** @internal */
export const SupportedChainsRequest$inboundSchema: z.ZodType<
    SupportedChainsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    network: components.NetworkType$inboundSchema.optional(),
    feature: components.GlacierApiFeature$inboundSchema.optional(),
});

/** @internal */
export type SupportedChainsRequest$Outbound = {
    network?: string | undefined;
    feature?: string | undefined;
};

/** @internal */
export const SupportedChainsRequest$outboundSchema: z.ZodType<
    SupportedChainsRequest$Outbound,
    z.ZodTypeDef,
    SupportedChainsRequest
> = z.object({
    network: components.NetworkType$outboundSchema.optional(),
    feature: components.GlacierApiFeature$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupportedChainsRequest$ {
    /** @deprecated use `SupportedChainsRequest$inboundSchema` instead. */
    export const inboundSchema = SupportedChainsRequest$inboundSchema;
    /** @deprecated use `SupportedChainsRequest$outboundSchema` instead. */
    export const outboundSchema = SupportedChainsRequest$outboundSchema;
    /** @deprecated use `SupportedChainsRequest$Outbound` instead. */
    export type Outbound = SupportedChainsRequest$Outbound;
}
