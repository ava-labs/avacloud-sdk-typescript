/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkBlocksGetBlockById } from "../funcs/dataPrimaryNetworkBlocksGetBlockById.js";
import { dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks } from "../funcs/dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks.js";
import { dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId } from "../funcs/dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Blocks extends ClientSDK {
    /**
     * Get block
     *
     * @remarks
     * Gets a block by block height or block hash on one of the Primary Network chains.
     */
    async getBlockById(
        request: operations.GetBlockByIdRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.GetPrimaryNetworkBlockResponse> {
        return unwrapAsync(dataPrimaryNetworkBlocksGetBlockById(this, request, options));
    }

    /**
     * List blocks proposed by node
     *
     * @remarks
     * Lists the latest blocks proposed by a given NodeID on one of the Primary Network chains.
     */
    async listPrimaryNetworkBlocksByNodeId(
        request: operations.ListPrimaryNetworkBlocksByNodeIdRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.ListPrimaryNetworkBlocksByNodeIdResponse>> {
        return unwrapResultIterator(
            dataPrimaryNetworkBlocksListPrimaryNetworkBlocksByNodeId(this, request, options)
        );
    }

    /**
     * List latest blocks
     *
     * @remarks
     * Lists latest blocks on one of the Primary Network chains.
     */
    async listLatestPrimaryNetworkBlocks(
        request: operations.ListLatestPrimaryNetworkBlocksRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.ListLatestPrimaryNetworkBlocksResponse>> {
        return unwrapResultIterator(
            dataPrimaryNetworkBlocksListLatestPrimaryNetworkBlocks(this, request, options)
        );
    }
}
