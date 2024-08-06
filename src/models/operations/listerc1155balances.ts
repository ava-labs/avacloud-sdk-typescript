/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ListErc1155BalancesRequest = {
    /**
     * The block number, if not defined the block number will be the latest block.
     */
    blockNumber?: string | undefined;
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
    /**
     * A contract addresses to filter by.
     */
    contractAddress?: string | undefined;
};

/** @internal */
export const ListErc1155BalancesRequest$inboundSchema: z.ZodType<
    ListErc1155BalancesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    blockNumber: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    address: z.string(),
    contractAddress: z.string().optional(),
});

/** @internal */
export type ListErc1155BalancesRequest$Outbound = {
    blockNumber?: string | undefined;
    pageToken?: string | undefined;
    pageSize: number;
    chainId: string;
    address: string;
    contractAddress?: string | undefined;
};

/** @internal */
export const ListErc1155BalancesRequest$outboundSchema: z.ZodType<
    ListErc1155BalancesRequest$Outbound,
    z.ZodTypeDef,
    ListErc1155BalancesRequest
> = z.object({
    blockNumber: z.string().optional(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
    address: z.string(),
    contractAddress: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListErc1155BalancesRequest$ {
    /** @deprecated use `ListErc1155BalancesRequest$inboundSchema` instead. */
    export const inboundSchema = ListErc1155BalancesRequest$inboundSchema;
    /** @deprecated use `ListErc1155BalancesRequest$outboundSchema` instead. */
    export const outboundSchema = ListErc1155BalancesRequest$outboundSchema;
    /** @deprecated use `ListErc1155BalancesRequest$Outbound` instead. */
    export type Outbound = ListErc1155BalancesRequest$Outbound;
}
