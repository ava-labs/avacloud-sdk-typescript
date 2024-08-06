/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateContractInfoRequest = {
    /**
     * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
     */
    chainId: string;
    /**
     * Contract address on the relevant chain.
     */
    address: string;
    contractSubmissionBody: components.ContractSubmissionBody;
};

/** @internal */
export const UpdateContractInfoRequest$inboundSchema: z.ZodType<
    UpdateContractInfoRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        chainId: z.string(),
        address: z.string(),
        ContractSubmissionBody: components.ContractSubmissionBody$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            ContractSubmissionBody: "contractSubmissionBody",
        });
    });

/** @internal */
export type UpdateContractInfoRequest$Outbound = {
    chainId: string;
    address: string;
    ContractSubmissionBody: components.ContractSubmissionBody$Outbound;
};

/** @internal */
export const UpdateContractInfoRequest$outboundSchema: z.ZodType<
    UpdateContractInfoRequest$Outbound,
    z.ZodTypeDef,
    UpdateContractInfoRequest
> = z
    .object({
        chainId: z.string(),
        address: z.string(),
        contractSubmissionBody: components.ContractSubmissionBody$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            contractSubmissionBody: "ContractSubmissionBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateContractInfoRequest$ {
    /** @deprecated use `UpdateContractInfoRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateContractInfoRequest$inboundSchema;
    /** @deprecated use `UpdateContractInfoRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateContractInfoRequest$outboundSchema;
    /** @deprecated use `UpdateContractInfoRequest$Outbound` instead. */
    export type Outbound = UpdateContractInfoRequest$Outbound;
}
