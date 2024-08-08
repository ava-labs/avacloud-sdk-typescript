/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListErc1155TransactionsRequest = {
    /**
     * The block range start number, inclusive. If endBlock is not defined when startBlock is defined, the end of the range will be the most recent block.
     */
    startBlock?: number | undefined;
    /**
     * The block range end number, exclusive. If startBlock is not defined when endBlock is defined, the start of the range will be the genesis block.
     */
    endBlock?: number | undefined;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
     */
    pageSize?: number | undefined;
    /**
     * A supported evm chain id, chain alias or blockchain id. Use the `/chains` endpoint to get a list of supported chain ids.
     */
    chainId: string;
    /**
     * A wallet address.
     */
    address: string;
};

export type ListErc1155TransactionsResponse = {
    result: components.ListErc1155TransactionsResponse;
};

/** @internal */
export const ListErc1155TransactionsRequest$inboundSchema: z.ZodType<
    ListErc1155TransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    startBlock: z.number().optional(),
    endBlock: z.number().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    address: z.string(),
});

/** @internal */
export type ListErc1155TransactionsRequest$Outbound = {
    startBlock?: number | undefined;
    endBlock?: number | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    chainId: string;
    address: string;
};

/** @internal */
export const ListErc1155TransactionsRequest$outboundSchema: z.ZodType<
    ListErc1155TransactionsRequest$Outbound,
    z.ZodTypeDef,
    ListErc1155TransactionsRequest
> = z.object({
    startBlock: z.number().optional(),
    endBlock: z.number().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    address: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErc1155TransactionsRequest$ {
    /** @deprecated use `ListErc1155TransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListErc1155TransactionsRequest$inboundSchema;
    /** @deprecated use `ListErc1155TransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListErc1155TransactionsRequest$outboundSchema;
    /** @deprecated use `ListErc1155TransactionsRequest$Outbound` instead. */
    export type Outbound = ListErc1155TransactionsRequest$Outbound;
}

/** @internal */
export const ListErc1155TransactionsResponse$inboundSchema: z.ZodType<
    ListErc1155TransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListErc1155TransactionsResponse$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type ListErc1155TransactionsResponse$Outbound = {
    Result: components.ListErc1155TransactionsResponse$Outbound;
};

/** @internal */
export const ListErc1155TransactionsResponse$outboundSchema: z.ZodType<
    ListErc1155TransactionsResponse$Outbound,
    z.ZodTypeDef,
    ListErc1155TransactionsResponse
> = z
    .object({
        result: components.ListErc1155TransactionsResponse$outboundSchema,
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
export namespace ListErc1155TransactionsResponse$ {
    /** @deprecated use `ListErc1155TransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = ListErc1155TransactionsResponse$inboundSchema;
    /** @deprecated use `ListErc1155TransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = ListErc1155TransactionsResponse$outboundSchema;
    /** @deprecated use `ListErc1155TransactionsResponse$Outbound` instead. */
    export type Outbound = ListErc1155TransactionsResponse$Outbound;
}
