/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkTransactionsGetTxByHash } from "../funcs/dataPrimaryNetworkTransactionsGetTxByHash.js";
import { dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions } from "../funcs/dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions.js";
import { dataPrimaryNetworkTransactionsListAssetTransactions } from "../funcs/dataPrimaryNetworkTransactionsListAssetTransactions.js";
import { dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions } from "../funcs/dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Transactions extends ClientSDK {
  /**
   * Get transaction
   *
   * @remarks
   * Gets the details of a single transaction on one of the Primary Network chains.
   */
  async getTxByHash(
    request: operations.GetTxByHashRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<operations.GetTxByHashResponseBody> {
    return unwrapAsync(dataPrimaryNetworkTransactionsGetTxByHash(
      this,
      request,
      options,
    ));
  }

  /**
   * List latest transactions
   *
   * @remarks
   * Lists the latest transactions on one of the Primary Network chains.
   *
   * Transactions are filterable by addresses, txTypes, and timestamps. When querying for latest transactions without an address parameter, filtering by txTypes and timestamps is not supported. An address filter must be provided to utilize txTypes and timestamp filters.
   *
   * Given that each transaction may return a large number of UTXO objects, bounded only by the maximum transaction size, the query may return less transactions than the provided page size. The result will contain less results than the page size if the number of utxos contained in the resulting transactions reach a performance threshold.
   */
  async listLatestPrimaryNetworkTransactions(
    request: operations.ListLatestPrimaryNetworkTransactionsRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<
    PageIterator<operations.ListLatestPrimaryNetworkTransactionsResponse>
  > {
    return unwrapResultIterator(
      dataPrimaryNetworkTransactionsListLatestPrimaryNetworkTransactions(
        this,
        request,
        options,
      ),
    );
  }

  /**
   * List staking transactions
   *
   * @remarks
   * Lists active staking transactions on the P-Chain for the supplied addresses.
   */
  async listActivePrimaryNetworkStakingTransactions(
    request: operations.ListActivePrimaryNetworkStakingTransactionsRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<
    PageIterator<operations.ListActivePrimaryNetworkStakingTransactionsResponse>
  > {
    return unwrapResultIterator(
      dataPrimaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions(
        this,
        request,
        options,
      ),
    );
  }

  /**
   * List asset transactions
   *
   * @remarks
   * Lists asset transactions corresponding to the given asset id on the X-Chain.
   */
  async listAssetTransactions(
    request: operations.ListAssetTransactionsRequest,
    options?: RequestOptions & { serverURL?: string },
  ): Promise<PageIterator<operations.ListAssetTransactionsResponse>> {
    return unwrapResultIterator(
      dataPrimaryNetworkTransactionsListAssetTransactions(
        this,
        request,
        options,
      ),
    );
  }
}
