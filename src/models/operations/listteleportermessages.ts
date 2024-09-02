/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export const ListTeleporterMessagesServerList = ["https://glacier-api.avax.network"] as const;

export type ListTeleporterMessagesRequest = {
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
     */
    pageSize?: number | undefined;
    /**
     * The base58 encoded blockchain ID or evm chain ID of the source chain that the teleporter message was sent from.
     */
    sourceBlockchainId?: string | undefined;
    /**
     * The base58 encoded blockchain ID or evm chain ID of the destination chain that the teleporter message was sent to.
     */
    destinationBlockchainId?: string | undefined;
    /**
     * The base58 encoded blockchain ID of either source or destination chain that one teleporter message interacts with.
     */
    blockchainId?: string | undefined;
    /**
     * The address of the recipient of the teleporter message.
     */
    to?: string | undefined;
    /**
     * The address of the sender of the teleporter message.
     */
    from?: string | undefined;
    /**
     * mainnet or testnet.
     */
    network?: components.NetworkType | undefined;
};

export type ListTeleporterMessagesResponse = {
    result: components.ListTeleporterMessagesResponse;
};

/** @internal */
export const ListTeleporterMessagesRequest$inboundSchema: z.ZodType<
    ListTeleporterMessagesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    sourceBlockchainId: z.string().optional(),
    destinationBlockchainId: z.string().optional(),
    blockchainId: z.string().optional(),
    to: z.string().optional(),
    from: z.string().optional(),
    network: components.NetworkType$inboundSchema.optional(),
});

/** @internal */
export type ListTeleporterMessagesRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    sourceBlockchainId?: string | undefined;
    destinationBlockchainId?: string | undefined;
    blockchainId?: string | undefined;
    to?: string | undefined;
    from?: string | undefined;
    network?: string | undefined;
};

/** @internal */
export const ListTeleporterMessagesRequest$outboundSchema: z.ZodType<
    ListTeleporterMessagesRequest$Outbound,
    z.ZodTypeDef,
    ListTeleporterMessagesRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    sourceBlockchainId: z.string().optional(),
    destinationBlockchainId: z.string().optional(),
    blockchainId: z.string().optional(),
    to: z.string().optional(),
    from: z.string().optional(),
    network: components.NetworkType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTeleporterMessagesRequest$ {
    /** @deprecated use `ListTeleporterMessagesRequest$inboundSchema` instead. */
    export const inboundSchema = ListTeleporterMessagesRequest$inboundSchema;
    /** @deprecated use `ListTeleporterMessagesRequest$outboundSchema` instead. */
    export const outboundSchema = ListTeleporterMessagesRequest$outboundSchema;
    /** @deprecated use `ListTeleporterMessagesRequest$Outbound` instead. */
    export type Outbound = ListTeleporterMessagesRequest$Outbound;
}

/** @internal */
export const ListTeleporterMessagesResponse$inboundSchema: z.ZodType<
    ListTeleporterMessagesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListTeleporterMessagesResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListTeleporterMessagesResponse$Outbound = {
    Result: components.ListTeleporterMessagesResponse$Outbound;
};

/** @internal */
export const ListTeleporterMessagesResponse$outboundSchema: z.ZodType<
    ListTeleporterMessagesResponse$Outbound,
    z.ZodTypeDef,
    ListTeleporterMessagesResponse
> = z
    .object({
        result: components.ListTeleporterMessagesResponse$outboundSchema,
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
export namespace ListTeleporterMessagesResponse$ {
    /** @deprecated use `ListTeleporterMessagesResponse$inboundSchema` instead. */
    export const inboundSchema = ListTeleporterMessagesResponse$inboundSchema;
    /** @deprecated use `ListTeleporterMessagesResponse$outboundSchema` instead. */
    export const outboundSchema = ListTeleporterMessagesResponse$outboundSchema;
    /** @deprecated use `ListTeleporterMessagesResponse$Outbound` instead. */
    export type Outbound = ListTeleporterMessagesResponse$Outbound;
}
