/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsLookingGlassCompositeQuery } from "../funcs/metricsLookingGlassCompositeQuery.js";
import { metricsLookingGlassGetAddressesByBalanceOverTime } from "../funcs/metricsLookingGlassGetAddressesByBalanceOverTime.js";
import { metricsLookingGlassGetAddressesByBtcbBridged } from "../funcs/metricsLookingGlassGetAddressesByBtcbBridged.js";
import { metricsLookingGlassGetNftHoldersByContractAddress } from "../funcs/metricsLookingGlassGetNftHoldersByContractAddress.js";
import { metricsLookingGlassGetValidatorsByDateRange } from "../funcs/metricsLookingGlassGetValidatorsByDateRange.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class LookingGlass extends ClientSDK {
  /**
   * Get NFT holders by contract address
   *
   * @remarks
   * Get list of NFT holders and number of NFTs held by contract address.
   */
  async getNftHoldersByContractAddress(
    request: operations.GetNftHoldersByContractAddressRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<PageIterator<operations.GetNftHoldersByContractAddressResponse>> {
    return unwrapResultIterator(
      metricsLookingGlassGetNftHoldersByContractAddress(
        this,
        request,
        options,
      ),
    );
  }

  /**
   * Get addresses by balance over time
   *
   * @remarks
   * Get list of addresses and their latest balances that have held more than a certain threshold of a given token during the specified time frame.
   */
  async getAddressesByBalanceOverTime(
    request: operations.GetAddressesByBalanceOverTimeRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<PageIterator<operations.GetAddressesByBalanceOverTimeResponse>> {
    return unwrapResultIterator(
      metricsLookingGlassGetAddressesByBalanceOverTime(
        this,
        request,
        options,
      ),
    );
  }

  /**
   * Get addresses by BTCb bridged balance
   *
   * @remarks
   * Get list of addresses and their net bridged amounts that have bridged more than a certain threshold.
   */
  async getAddressesByBtcbBridged(
    request: operations.GetAddressesByBtcbBridgedRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<PageIterator<operations.GetAddressesByBtcbBridgedResponse>> {
    return unwrapResultIterator(metricsLookingGlassGetAddressesByBtcbBridged(
      this,
      request,
      options,
    ));
  }

  /**
   * Get addresses running validators during a given time frame
   *
   * @remarks
   * Get list of addresses and AddValidatorTx timestamps set to receive awards for validation periods during the specified time frame.
   */
  async getValidatorsByDateRange(
    request: operations.GetValidatorsByDateRangeRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<PageIterator<operations.GetValidatorsByDateRangeResponse>> {
    return unwrapResultIterator(metricsLookingGlassGetValidatorsByDateRange(
      this,
      request,
      options,
    ));
  }

  /**
   * Composite query
   *
   * @remarks
   * Composite query to get list of addresses from multiple subqueries.
   */
  async compositeQuery(
    request: components.CompositeQueryRequestDto,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<components.CompositeQueryResponse> {
    return unwrapAsync(metricsLookingGlassCompositeQuery(
      this,
      request,
      options,
    ));
  }
}
