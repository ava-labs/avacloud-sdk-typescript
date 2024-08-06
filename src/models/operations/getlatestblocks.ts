/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLatestBlocksRequest = {
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
};

/** @internal */
export const GetLatestBlocksRequest$inboundSchema: z.ZodType<
    GetLatestBlocksRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
});

/** @internal */
export type GetLatestBlocksRequest$Outbound = {
    pageToken?: string | undefined;
    pageSize: number;
    chainId: string;
};

/** @internal */
export const GetLatestBlocksRequest$outboundSchema: z.ZodType<
    GetLatestBlocksRequest$Outbound,
    z.ZodTypeDef,
    GetLatestBlocksRequest
> = z.object({
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    chainId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestBlocksRequest$ {
    /** @deprecated use `GetLatestBlocksRequest$inboundSchema` instead. */
    export const inboundSchema = GetLatestBlocksRequest$inboundSchema;
    /** @deprecated use `GetLatestBlocksRequest$outboundSchema` instead. */
    export const outboundSchema = GetLatestBlocksRequest$outboundSchema;
    /** @deprecated use `GetLatestBlocksRequest$Outbound` instead. */
    export type Outbound = GetLatestBlocksRequest$Outbound;
}
