/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsCumulativeGetCumulativeAddresses } from "../funcs/metricsCumulativeGetCumulativeAddresses.js";
import { metricsCumulativeGetCumulativeContracts } from "../funcs/metricsCumulativeGetCumulativeContracts.js";
import { metricsCumulativeGetCumulativeDeployers } from "../funcs/metricsCumulativeGetCumulativeDeployers.js";
import { metricsCumulativeGetCumulativeTxCount } from "../funcs/metricsCumulativeGetCumulativeTxCount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Cumulative extends ClientSDK {
    /**
     * Cumulative number of addresses
     *
     * @remarks
     * Get the cumulative number of addresses.
     */
    async getCumulativeAddresses(
        request: operations.GetCumulativeAddressesRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.LegacyEvmMetricsResponse> {
        return unwrapAsync(metricsCumulativeGetCumulativeAddresses(this, request, options));
    }

    /**
     * Cumulative number of contracts
     *
     * @remarks
     * Get the cumulative number of contracts.
     */
    async getCumulativeContracts(
        request: operations.GetCumulativeContractsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.LegacyEvmMetricsResponse> {
        return unwrapAsync(metricsCumulativeGetCumulativeContracts(this, request, options));
    }

    /**
     * Cumulative transaction count
     *
     * @remarks
     * Get the cumulative number of transactions.
     */
    async getCumulativeTxCount(
        request: operations.GetCumulativeTxCountRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.LegacyEvmMetricsResponse> {
        return unwrapAsync(metricsCumulativeGetCumulativeTxCount(this, request, options));
    }

    /**
     * Cumulative number of deployers
     *
     * @remarks
     * Get the cumulative number of deployers.
     */
    async getCumulativeDeployers(
        request: operations.GetCumulativeDeployersRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.LegacyEvmMetricsResponse> {
        return unwrapAsync(metricsCumulativeGetCumulativeDeployers(this, request, options));
    }
}