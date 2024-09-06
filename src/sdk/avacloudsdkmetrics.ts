/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsChainMetricsGetEvmChainMetrics } from "../funcs/metricsChainMetricsGetEvmChainMetrics.js";
import { metricsChainMetricsGetEvmChainRollingWindowMetrics } from "../funcs/metricsChainMetricsGetEvmChainRollingWindowMetrics.js";
import { metricsChainMetricsGetStakingMetrics } from "../funcs/metricsChainMetricsGetStakingMetrics.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class AvaCloudSDKMetrics extends ClientSDK {
    /**
     * Get metrics for EVM chains
     *
     * @remarks
     * Gets metrics for an EVM chain over a specified time interval aggregated at the specified time-interval granularity.
     */
    async getEvmChainMetrics(
        request: operations.GetEvmChainMetricsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.GetEvmChainMetricsResponse>> {
        return unwrapResultIterator(metricsChainMetricsGetEvmChainMetrics(this, request, options));
    }

    /**
     * Get rolling window metrics for EVM chains
     *
     * @remarks
     * Gets the rolling window metrics for an EVM chain for the last hour, day, month, year, and all time.
     */
    async getEvmChainRollingWindowMetrics(
        request: operations.GetEvmChainRollingWindowMetricsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.RollingWindowMetricsApiResponse> {
        return unwrapAsync(
            metricsChainMetricsGetEvmChainRollingWindowMetrics(this, request, options)
        );
    }

    /**
     * Get staking metrics for a given subnet
     *
     * @remarks
     * Gets staking metrics for a given subnet.
     */
    async getStakingMetrics(
        request: operations.GetStakingMetricsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.GetStakingMetricsResponse>> {
        return unwrapResultIterator(metricsChainMetricsGetStakingMetrics(this, request, options));
    }
}