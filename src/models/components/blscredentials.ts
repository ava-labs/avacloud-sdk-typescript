/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BlsCredentials = {
    publicKey: string;
    proofOfPossession: string;
};

/** @internal */
export const BlsCredentials$inboundSchema: z.ZodType<BlsCredentials, z.ZodTypeDef, unknown> =
    z.object({
        publicKey: z.string(),
        proofOfPossession: z.string(),
    });

/** @internal */
export type BlsCredentials$Outbound = {
    publicKey: string;
    proofOfPossession: string;
};

/** @internal */
export const BlsCredentials$outboundSchema: z.ZodType<
    BlsCredentials$Outbound,
    z.ZodTypeDef,
    BlsCredentials
> = z.object({
    publicKey: z.string(),
    proofOfPossession: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BlsCredentials$ {
    /** @deprecated use `BlsCredentials$inboundSchema` instead. */
    export const inboundSchema = BlsCredentials$inboundSchema;
    /** @deprecated use `BlsCredentials$outboundSchema` instead. */
    export const outboundSchema = BlsCredentials$outboundSchema;
    /** @deprecated use `BlsCredentials$Outbound` instead. */
    export type Outbound = BlsCredentials$Outbound;
}
