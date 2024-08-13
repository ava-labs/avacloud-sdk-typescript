/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { glacierEvmBlocksGetBlock } from "../funcs/glacierEvmBlocksGetBlock.js";
import { glacierEvmBlocksGetLatestBlocks } from "../funcs/glacierEvmBlocksGetLatestBlocks.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class AvalancheSDKBlocks extends ClientSDK {
    /**
     * List latest blocks
     *
     * @remarks
     * Lists the latest indexed blocks on the EVM-compatible chain sorted in descending order by block timestamp.
     */
    async getLatestBlocks(
        request: operations.GetLatestBlocksRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.GetLatestBlocksResponse>> {
        return unwrapResultIterator(glacierEvmBlocksGetLatestBlocks(this, request, options));
    }

    /**
     * Get block
     *
     * @remarks
     * Gets the details of an individual block on the EVM-compatible chain.
     */
    async getBlock(
        request: operations.GetBlockRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.GetEvmBlockResponse> {
        return unwrapAsync(glacierEvmBlocksGetBlock(this, request, options));
    }
}