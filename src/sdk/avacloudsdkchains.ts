/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmChainsGetAddressChains } from "../funcs/dataEvmChainsGetAddressChains.js";
import { dataEvmChainsGetChainInfo } from "../funcs/dataEvmChainsGetChainInfo.js";
import { dataEvmChainsListAllLatestBlocks } from "../funcs/dataEvmChainsListAllLatestBlocks.js";
import { dataEvmChainsListAllLatestTransactions } from "../funcs/dataEvmChainsListAllLatestTransactions.js";
import { dataEvmChainsSupportedChains } from "../funcs/dataEvmChainsSupportedChains.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class AvaCloudSDKChains extends ClientSDK {
  /**
   * List chains
   *
   * @remarks
   * Lists the supported EVM-compatible chains. Filterable by network.
   */
  async supportedChains(
    request: operations.SupportedChainsRequest,
    options?: RequestOptions,
  ): Promise<components.DataListChainsResponse> {
    return unwrapAsync(dataEvmChainsSupportedChains(
      this,
      request,
      options,
    ));
  }

  /**
   * Get chain information
   *
   * @remarks
   * Gets chain information for the EVM-compatible chain if supported by the api.
   */
  async getChainInfo(
    request: operations.GetChainInfoRequest,
    options?: RequestOptions,
  ): Promise<components.GetChainResponse> {
    return unwrapAsync(dataEvmChainsGetChainInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Gets a list of all chains where the address was either a sender or receiver in a transaction or ERC transfer. The list is currently updated every 15 minutes.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getAddressChains(
    request: operations.GetAddressChainsRequest,
    options?: RequestOptions,
  ): Promise<components.ListAddressChainsResponse> {
    return unwrapAsync(dataEvmChainsGetAddressChains(
      this,
      request,
      options,
    ));
  }

  /**
   * Lists the latest transactions for all supported EVM chains. Filterable by status.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listAllLatestTransactions(
    request: operations.ListAllLatestTransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ListAllLatestTransactionsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(dataEvmChainsListAllLatestTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Lists the latest blocks for all supported EVM chains. Filterable by network.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listAllLatestBlocks(
    request: operations.ListAllLatestBlocksRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListAllLatestBlocksResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmChainsListAllLatestBlocks(
      this,
      request,
      options,
    ));
  }
}
