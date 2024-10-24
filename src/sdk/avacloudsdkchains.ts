/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmChainsGetAddressChains } from "../funcs/dataEvmChainsGetAddressChains.js";
import { dataEvmChainsGetChainInfo } from "../funcs/dataEvmChainsGetChainInfo.js";
import { dataEvmChainsSupportedChains } from "../funcs/dataEvmChainsSupportedChains.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AvaCloudSDKChains extends ClientSDK {
  /**
   * List chains
   *
   * @remarks
   * Lists the supported EVM-compatible chains. Filterable by network.
   */
  async supportedChains(
    request: operations.SupportedChainsRequest,
    options?: RequestOptions & { serverURL?: string },
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
    options?: RequestOptions & { serverURL?: string },
  ): Promise<components.GetChainResponse> {
    return unwrapAsync(dataEvmChainsGetChainInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Get chains for address
   *
   * @remarks
   * Gets the list of chains an address has interacted with.
   */
  async getAddressChains(
    request: operations.GetAddressChainsRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<components.DataListChainsResponse> {
    return unwrapAsync(dataEvmChainsGetAddressChains(
      this,
      request,
      options,
    ));
  }
}
