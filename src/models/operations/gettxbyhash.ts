/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetTxByHashRequest = {
    /**
     * A primary network blockchain id or alias.
     */
    blockchainId: components.BlockchainId;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
    /**
     * A primary network (P or X chain) transaction hash.
     */
    txHash: string;
};

/**
 * Successful response
 */
export type GetTxByHashResponseBody =
    | components.CChainExportTransaction
    | components.CChainImportTransaction
    | components.XChainNonLinearTransaction
    | components.XChainLinearTransaction
    | components.PChainTransaction;

/** @internal */
export const GetTxByHashRequest$inboundSchema: z.ZodType<
    GetTxByHashRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    blockchainId: components.BlockchainId$inboundSchema,
    network: components.Network$inboundSchema,
    txHash: z.string(),
});

/** @internal */
export type GetTxByHashRequest$Outbound = {
    blockchainId: string;
    network: string;
    txHash: string;
};

/** @internal */
export const GetTxByHashRequest$outboundSchema: z.ZodType<
    GetTxByHashRequest$Outbound,
    z.ZodTypeDef,
    GetTxByHashRequest
> = z.object({
    blockchainId: components.BlockchainId$outboundSchema,
    network: components.Network$outboundSchema,
    txHash: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTxByHashRequest$ {
    /** @deprecated use `GetTxByHashRequest$inboundSchema` instead. */
    export const inboundSchema = GetTxByHashRequest$inboundSchema;
    /** @deprecated use `GetTxByHashRequest$outboundSchema` instead. */
    export const outboundSchema = GetTxByHashRequest$outboundSchema;
    /** @deprecated use `GetTxByHashRequest$Outbound` instead. */
    export type Outbound = GetTxByHashRequest$Outbound;
}

/** @internal */
export const GetTxByHashResponseBody$inboundSchema: z.ZodType<
    GetTxByHashResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.CChainExportTransaction$inboundSchema,
    components.CChainImportTransaction$inboundSchema,
    components.XChainNonLinearTransaction$inboundSchema,
    components.XChainLinearTransaction$inboundSchema,
    components.PChainTransaction$inboundSchema,
]);

/** @internal */
export type GetTxByHashResponseBody$Outbound =
    | components.CChainExportTransaction$Outbound
    | components.CChainImportTransaction$Outbound
    | components.XChainNonLinearTransaction$Outbound
    | components.XChainLinearTransaction$Outbound
    | components.PChainTransaction$Outbound;

/** @internal */
export const GetTxByHashResponseBody$outboundSchema: z.ZodType<
    GetTxByHashResponseBody$Outbound,
    z.ZodTypeDef,
    GetTxByHashResponseBody
> = z.union([
    components.CChainExportTransaction$outboundSchema,
    components.CChainImportTransaction$outboundSchema,
    components.XChainNonLinearTransaction$outboundSchema,
    components.XChainLinearTransaction$outboundSchema,
    components.PChainTransaction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTxByHashResponseBody$ {
    /** @deprecated use `GetTxByHashResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetTxByHashResponseBody$inboundSchema;
    /** @deprecated use `GetTxByHashResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetTxByHashResponseBody$outboundSchema;
    /** @deprecated use `GetTxByHashResponseBody$Outbound` instead. */
    export type Outbound = GetTxByHashResponseBody$Outbound;
}
