/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { glacierEvmBalancesGetNativeBalance } from "../funcs/glacierEvmBalancesGetNativeBalance.js";
import { glacierEvmBalancesListCollectibleBalances } from "../funcs/glacierEvmBalancesListCollectibleBalances.js";
import { glacierEvmBalancesListErc1155Balances } from "../funcs/glacierEvmBalancesListErc1155Balances.js";
import { glacierEvmBalancesListErc20Balances } from "../funcs/glacierEvmBalancesListErc20Balances.js";
import { glacierEvmBalancesListErc721Balances } from "../funcs/glacierEvmBalancesListErc721Balances.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class AvaCloudSDKBalances extends ClientSDK {
    /**
     * Get native token balance
     *
     * @remarks
     * Gets native token balance of a wallet address.
     *
     * Balance at a given block can be retrieved with the `blockNumber` parameter.
     */
    async getNativeBalance(
        request: operations.GetNativeBalanceRequest,
        options?: RequestOptions
    ): Promise<components.GetNativeBalanceResponse> {
        return unwrapAsync(glacierEvmBalancesGetNativeBalance(this, request, options));
    }

    /**
     * List ERC-20 balances
     *
     * @remarks
     * Lists ERC-20 token balances of a wallet address.
     *
     * Balance at a given block can be retrieved with the `blockNumber` parameter.
     *
     * Balance for specific contracts can be retrieved with the `contractAddresses` parameter.
     */
    async listErc20Balances(
        request: operations.ListErc20BalancesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListErc20BalancesResponse>> {
        return unwrapResultIterator(glacierEvmBalancesListErc20Balances(this, request, options));
    }

    /**
     * List ERC-721 balances
     *
     * @remarks
     * Lists ERC-721 token balances of a wallet address.
     *
     * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
     */
    async listErc721Balances(
        request: operations.ListErc721BalancesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListErc721BalancesResponse>> {
        return unwrapResultIterator(glacierEvmBalancesListErc721Balances(this, request, options));
    }

    /**
     * List ERC-1155 balances
     *
     * @remarks
     * Lists ERC-1155 token balances of a wallet address.
     *
     * Balance at a given block can be retrieved with the `blockNumber` parameter.
     *
     * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
     */
    async listErc1155Balances(
        request: operations.ListErc1155BalancesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListErc1155BalancesResponse>> {
        return unwrapResultIterator(glacierEvmBalancesListErc1155Balances(this, request, options));
    }

    /**
     * List collectible (ERC-721/ERC-1155) balances
     *
     * @remarks
     * Lists ERC-721 and ERC-1155 token balances of a wallet address.
     *
     * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
     */
    async listCollectibleBalances(
        request: operations.ListCollectibleBalancesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListCollectibleBalancesResponse>> {
        return unwrapResultIterator(
            glacierEvmBalancesListCollectibleBalances(this, request, options)
        );
    }
}
