/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

export type GetVertexByHeightRequest = {
    /**
     * The height of a vertex.
     */
    vertexHeight: number;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string | undefined;
    /**
     * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
     */
    pageSize?: number | undefined;
    /**
     * A primary network blockchain id or alias.
     */
    blockchainId: components.XChainId;
    /**
     * Either mainnet or a testnet.
     */
    network: components.Network;
    /**
     * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
     */
    sortOrder?: components.SortOrder | undefined;
};

/** @internal */
export const GetVertexByHeightRequest$inboundSchema: z.ZodType<
    GetVertexByHeightRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    vertexHeight: z.number().int(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.XChainId$inboundSchema,
    network: components.Network$inboundSchema,
    sortOrder: components.SortOrder$inboundSchema.optional(),
});

/** @internal */
export type GetVertexByHeightRequest$Outbound = {
    vertexHeight: number;
    pageToken?: string | undefined;
    pageSize: number;
    blockchainId: string;
    network: string;
    sortOrder?: string | undefined;
};

/** @internal */
export const GetVertexByHeightRequest$outboundSchema: z.ZodType<
    GetVertexByHeightRequest$Outbound,
    z.ZodTypeDef,
    GetVertexByHeightRequest
> = z.object({
    vertexHeight: z.number().int(),
    pageToken: z.string().optional(),
    pageSize: z.number().int().default(10),
    blockchainId: components.XChainId$outboundSchema,
    network: components.Network$outboundSchema,
    sortOrder: components.SortOrder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVertexByHeightRequest$ {
    /** @deprecated use `GetVertexByHeightRequest$inboundSchema` instead. */
    export const inboundSchema = GetVertexByHeightRequest$inboundSchema;
    /** @deprecated use `GetVertexByHeightRequest$outboundSchema` instead. */
    export const outboundSchema = GetVertexByHeightRequest$outboundSchema;
    /** @deprecated use `GetVertexByHeightRequest$Outbound` instead. */
    export type Outbound = GetVertexByHeightRequest$Outbound;
}
