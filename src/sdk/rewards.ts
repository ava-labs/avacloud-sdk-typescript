/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards } from "../funcs/glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards.js";
import { glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards } from "../funcs/glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Rewards extends ClientSDK {
    /**
     * List pending rewards
     *
     * @remarks
     * Lists pending rewards on the Primary Network for the supplied addresses.
     */
    async listPendingPrimaryNetworkRewards(
        request: operations.ListPendingPrimaryNetworkRewardsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListPendingPrimaryNetworkRewardsResponse>> {
        return unwrapResultIterator(
            glacierPrimaryNetworkRewardsListPendingPrimaryNetworkRewards(this, request, options)
        );
    }

    /**
     * List historical rewards
     *
     * @remarks
     * Lists historical rewards on the Primary Network for the supplied addresses.
     */
    async listHistoricalPrimaryNetworkRewards(
        request: operations.ListHistoricalPrimaryNetworkRewardsRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListHistoricalPrimaryNetworkRewardsResponse>> {
        return unwrapResultIterator(
            glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(this, request, options)
        );
    }
}
