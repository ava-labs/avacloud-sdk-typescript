/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { primaryNetworkRewardsListHistoricalPrimaryNetworkRewards } from "../funcs/primaryNetworkRewardsListHistoricalPrimaryNetworkRewards.js";
import { primaryNetworkRewardsListPendingPrimaryNetworkRewards } from "../funcs/primaryNetworkRewardsListPendingPrimaryNetworkRewards.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PrimaryNetworkRewards extends ClientSDK {
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
            primaryNetworkRewardsListPendingPrimaryNetworkRewards(this, request, options)
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
            primaryNetworkRewardsListHistoricalPrimaryNetworkRewards(this, request, options)
        );
    }
}
