/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AssetAmount,
    AssetAmount$inboundSchema,
    AssetAmount$Outbound,
    AssetAmount$outboundSchema,
} from "./assetamount.js";
import {
    UtxoCredential,
    UtxoCredential$inboundSchema,
    UtxoCredential$Outbound,
    UtxoCredential$outboundSchema,
} from "./utxocredential.js";
import * as z from "zod";

export type EVMInput = {
    /**
     * EVM address from which the asset is exported in ExportTx.
     */
    fromAddress: string;
    /**
     * AssetAmount details for the asset being transferred.
     */
    asset: AssetAmount;
    /**
     * Credentials that signed this transaction.
     */
    credentials: Array<UtxoCredential>;
};

/** @internal */
export const EVMInput$inboundSchema: z.ZodType<EVMInput, z.ZodTypeDef, unknown> = z.object({
    fromAddress: z.string(),
    asset: AssetAmount$inboundSchema,
    credentials: z.array(UtxoCredential$inboundSchema),
});

/** @internal */
export type EVMInput$Outbound = {
    fromAddress: string;
    asset: AssetAmount$Outbound;
    credentials: Array<UtxoCredential$Outbound>;
};

/** @internal */
export const EVMInput$outboundSchema: z.ZodType<EVMInput$Outbound, z.ZodTypeDef, EVMInput> =
    z.object({
        fromAddress: z.string(),
        asset: AssetAmount$outboundSchema,
        credentials: z.array(UtxoCredential$outboundSchema),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EVMInput$ {
    /** @deprecated use `EVMInput$inboundSchema` instead. */
    export const inboundSchema = EVMInput$inboundSchema;
    /** @deprecated use `EVMInput$outboundSchema` instead. */
    export const outboundSchema = EVMInput$outboundSchema;
    /** @deprecated use `EVMInput$Outbound` instead. */
    export type Outbound = EVMInput$Outbound;
}
