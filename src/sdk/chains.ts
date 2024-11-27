/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsEvmChainsGetChain } from "../funcs/metricsEvmChainsGetChain.js";
import { metricsEvmChainsListChains } from "../funcs/metricsEvmChainsListChains.js";
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
   * Get a list of Metrics API supported blockchains.
   */
  async listChains(
    request: operations.ListChainsRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<PageIterator<operations.ListChainsResponse, { cursor: string }>> {
    return unwrapResultIterator(metricsEvmChainsListChains(
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
  async getChain(
    request: operations.GetChainRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<components.Chain> {
    return unwrapAsync(metricsEvmChainsGetChain(
      this,
      request,
      options,
    ));
  }
}
