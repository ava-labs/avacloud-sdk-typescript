/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsChainsGet } from "../funcs/metricsChainsGet.js";
import { metricsChainsGetMetrics } from "../funcs/metricsChainsGetMetrics.js";
import { metricsChainsGetRollingWindowMetrics } from "../funcs/metricsChainsGetRollingWindowMetrics.js";
import { metricsChainsGetTeleporterMetrics } from "../funcs/metricsChainsGetTeleporterMetrics.js";
import { metricsChainsList } from "../funcs/metricsChainsList.js";
import { metricsChainsListBTCbBridgersAboveThreshold } from "../funcs/metricsChainsListBTCbBridgersAboveThreshold.js";
import { metricsChainsListNftHolders } from "../funcs/metricsChainsListNftHolders.js";
import { metricsChainsListTokenHoldersAboveThreshold } from "../funcs/metricsChainsListTokenHoldersAboveThreshold.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Chains extends ClientSDK {
  /**
   * Get a list of supported blockchains
   *
   * @remarks
   * Get a list of Metrics API supported blockchains.  This endpoint is paginated and supports a maximum page size of 10000.
   */
  async list(
    request: operations.ListChainsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListChainsResponse, { cursor: string }>> {
    return unwrapResultIterator(metricsChainsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get chain information for supported blockchain
   *
   * @remarks
   * Get chain information for Metrics API supported blockchain.
   */
  async get(
    request: operations.GetChainRequest,
    options?: RequestOptions,
  ): Promise<components.Chain> {
    return unwrapAsync(metricsChainsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get metrics for EVM chains
   *
   * @remarks
   * EVM chain metrics are available for all Avalanche L1s on _Mainnet_ and _Fuji_ (testnet). You can request metrics by EVM chain ID. See the `/chains` endpoint for all supported chains.
   *
   * All metrics are updated several times every hour. Each metric data point has a `value` and `timestamp` (Unix timestamp in seconds). All metric values include data within the duration of the associated timestamp plus the requested `timeInterval`. All timestamps are fixed to the hour. When requesting a timeInterval of **day**, **week**, or **month**, the timestamp will be 0:00 UTC of the day, Monday of the week, or first day of the month, respectively. The latest data point in any response may change on each update.
   *
   * ### Metrics
   *
   * <ins>activeAddresses</ins>: The number of distinct addresses seen within the selected `timeInterval` starting at the timestamp. Addresses counted are those that appear in the “from” and “to” fields of a transaction or ERC20/ERC721/ERC1155 transfer log event.
   *
   * <ins>activeSenders</ins>: This metric follows the same structure as activeAddresses, but instead only counts addresses that appear in the “from” field of the respective transaction or transfer log event.
   *
   * <ins>cumulativeTxCount</ins>: The cumulative transaction count from genesis up until 24 hours after the timestamp. This aggregation can be considered a “rolling sum” of the transaction count metric (txCount). Only `timeInterval=day` supported.
   *
   * <ins>cumulativeAddresses</ins>: The cumulative count of unique addresses from genesis up until 24 hours after the timestamp. Addresses counted are those that appear in the “from” and “to” fields of a transaction or ERC20/ERC721/ERC1155 transfer log event. Only `timeInterval=day` supported.
   *
   * <ins>cumulativeContracts</ins>: The cumulative count of contracts created from genesis up until the timestamp.  Contracts are counted by looking for the CREATE, CREATE2, and CREATE3 call types in all transaction traces (aka internal transactions). Only `timeInterval=day` supported.
   *
   * <ins>cumulativeDeployers</ins>: The cumulative count of unique contract deployers from genesis up until 24 hours after the timestamp. Deployers counted are those that appear in the “from” field of transaction traces with the CREATE, CREATE2, and CREATE3 call types. Only `timeInterval=day` supported.
   *
   * <ins>gasUsed</ins>: The amount of gas used by transactions within the requested timeInterval starting at the timestamp.
   *
   * <ins>txCount</ins>: The amount of transactions within the requested timeInterval starting at the timestamp.
   *
   * <ins>avgGps</ins>: The average Gas used Per Second (GPS) within the day beginning at the timestamp.  The average is calculated by taking the sum of gas used by all blocks within the day and dividing it by the time interval between the last block of the previous day and the last block of the day that begins at the timestamp.  Only `timeInterval=day` supported.
   *
   * <ins>maxGps</ins>: The max Gas used Per Second (GPS)  measured within the day beginning at the timestamp. Each GPS data point is calculated using the gas used in a single block divided by the time since the last block. Only `timeInterval=day` supported.
   *
   * <ins>avgTps</ins>: The average Transactions Per Second (TPS) within the day beginning at the timestamp. The average is calculated by taking the sum of transactions within the day and dividing it by the time interval between the last block of the previous day and the last block of the day that begins at the timestamp. Only `timeInterval=day` supported.
   *
   * <ins>maxTps</ins>: The max Transactions Per Second (TPS) measured within the day beginning at the timestamp. Each TPS data point is calculated by taking the number of transactions in a single block and dividing it by the time since the last block. Only `timeInterval=day` supported.
   *
   * <ins>avgGasPrice</ins>: The average gas price within the day beginning at the timestamp. The gas price used is the price reported in transaction receipts. Only `timeInterval=day` supported.
   *
   * <ins>maxGasPrice</ins>: The max gas price seen within the day beginning at the timestamp. The gas price used is the price reported in transaction receipts. Only `timeInterval=day` supported.
   *
   * <ins>feesPaid</ins>: The sum of transaction fees paid within the day beginning at the timestamp. The fee is calculated as the gas used multiplied by the gas price as reported in all transaction receipts. Only `timeInterval=day` supported.
   */
  async getMetrics(
    request: operations.GetEvmChainMetricsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetEvmChainMetricsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(metricsChainsGetMetrics(
      this,
      request,
      options,
    ));
  }

  /**
   * Get teleporter metrics for EVM chains
   *
   * @remarks
   * Gets teleporter metrics for an EVM chain.
   */
  async getTeleporterMetrics(
    request: operations.GetTeleporterMetricsByChainRequest,
    options?: RequestOptions,
  ): Promise<components.TeleporterChainMetricsApiResponse> {
    return unwrapAsync(metricsChainsGetTeleporterMetrics(
      this,
      request,
      options,
    ));
  }

  /**
   * Get rolling window metrics for EVM chains
   *
   * @remarks
   * Gets the rolling window metrics for an EVM chain for the last hour, day, month, year, and all time.
   */
  async getRollingWindowMetrics(
    request: operations.GetEvmChainRollingWindowMetricsRequest,
    options?: RequestOptions,
  ): Promise<components.RollingWindowMetricsApiResponse> {
    return unwrapAsync(metricsChainsGetRollingWindowMetrics(
      this,
      request,
      options,
    ));
  }

  /**
   * Get NFT holders by contract address
   *
   * @remarks
   * Get list of NFT holders and number of NFTs held by contract address.
   */
  async listNftHolders(
    request: operations.GetNftHoldersByContractAddressRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetNftHoldersByContractAddressResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(metricsChainsListNftHolders(
      this,
      request,
      options,
    ));
  }

  /**
   * Get addresses by balance over time
   *
   * @remarks
   * Get list of addresses and their latest balances that have held more than a certain threshold of a given token during the specified time frame.
   */
  async listTokenHoldersAboveThreshold(
    request: operations.GetAddressesByBalanceOverTimeRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetAddressesByBalanceOverTimeResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(metricsChainsListTokenHoldersAboveThreshold(
      this,
      request,
      options,
    ));
  }

  /**
   * Get addresses by BTCb bridged balance
   *
   * @remarks
   * Get list of addresses and their net bridged amounts that have bridged more than a certain threshold.
   */
  async listBTCbBridgersAboveThreshold(
    request: operations.GetAddressesByBtcbBridgedRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetAddressesByBtcbBridgedResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(metricsChainsListBTCbBridgersAboveThreshold(
      this,
      request,
      options,
    ));
  }
}
