/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmTransactionsGetDeploymentTransaction } from "../funcs/dataEvmTransactionsGetDeploymentTransaction.js";
import { dataEvmTransactionsGetTransaction } from "../funcs/dataEvmTransactionsGetTransaction.js";
import { dataEvmTransactionsGetTransactionsForBlock } from "../funcs/dataEvmTransactionsGetTransactionsForBlock.js";
import { dataEvmTransactionsListContractDeployments } from "../funcs/dataEvmTransactionsListContractDeployments.js";
import { dataEvmTransactionsListErc1155Transactions } from "../funcs/dataEvmTransactionsListErc1155Transactions.js";
import { dataEvmTransactionsListErc20Transactions } from "../funcs/dataEvmTransactionsListErc20Transactions.js";
import { dataEvmTransactionsListErc721Transactions } from "../funcs/dataEvmTransactionsListErc721Transactions.js";
import { dataEvmTransactionsListInternalTransactions } from "../funcs/dataEvmTransactionsListInternalTransactions.js";
import { dataEvmTransactionsListLatestTransactions } from "../funcs/dataEvmTransactionsListLatestTransactions.js";
import { dataEvmTransactionsListLatestTransactionsAllChains } from "../funcs/dataEvmTransactionsListLatestTransactionsAllChains.js";
import { dataEvmTransactionsListNativeTransactions } from "../funcs/dataEvmTransactionsListNativeTransactions.js";
import { dataEvmTransactionsListTransactions } from "../funcs/dataEvmTransactionsListTransactions.js";
import { dataEvmTransactionsListTransfers } from "../funcs/dataEvmTransactionsListTransfers.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Transactions extends ClientSDK {
  /**
   * List the latest transactions across all supported EVM chains
   *
   * @remarks
   * Lists the most recent transactions from all supported EVM-compatible  chains. The results can be filtered based on transaction status.
   */
  async listLatestTransactionsAllChains(
    request: operations.ListLatestTransactionsAllChainsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ListLatestTransactionsAllChainsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(
      dataEvmTransactionsListLatestTransactionsAllChains(
        this,
        request,
        options,
      ),
    );
  }

  /**
   * Get deployment transaction
   *
   * @remarks
   * If the address is a smart contract, returns the transaction in which it was deployed.
   */
  async getDeploymentTransaction(
    request: operations.GetDeploymentTransactionRequest,
    options?: RequestOptions,
  ): Promise<components.GetTransactionResponse> {
    return unwrapAsync(dataEvmTransactionsGetDeploymentTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * List deployed contracts
   *
   * @remarks
   * Lists all contracts deployed by the given address.
   */
  async listContractDeployments(
    request: operations.ListContractDeploymentsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListContractDeploymentsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListContractDeployments(
      this,
      request,
      options,
    ));
  }

  /**
   * List ERC transfers
   *
   * @remarks
   * Lists ERC transfers for an ERC-20, ERC-721, or ERC-1155 contract address.
   */
  async listTransfers(
    request: operations.ListTransfersRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListTransfersResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListTransfers(
      this,
      request,
      options,
    ));
  }

  /**
   * List transactions
   *
   * @remarks
   * Returns a list of transactions where the given wallet address had an on-chain interaction for the given chain. The ERC-20 transfers, ERC-721 transfers, ERC-1155, and internal transactions returned are only those where the input address had an interaction. Specifically, those lists only inlcude entries where the input address was the sender (`from` field) or the receiver (`to` field) for the sub-transaction. Therefore the transactions returned from this list may not be complete representations of the on-chain data. For a complete view of a transaction use the `/chains/:chainId/transactions/:txHash` endpoint.
   *
   * Filterable by block ranges.
   */
  async listTransactions(
    request: operations.ListTransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListTransactionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * List native transactions
   *
   * @remarks
   * Lists native transactions for an address. Filterable by block range.
   */
  async listNativeTransactions(
    request: operations.ListNativeTransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListNativeTransactionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListNativeTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * List ERC-20 transfers
   *
   * @remarks
   * Lists ERC-20 transfers for an address. Filterable by block range.
   */
  async listErc20Transactions(
    request: operations.ListErc20TransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListErc20TransactionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListErc20Transactions(
      this,
      request,
      options,
    ));
  }

  /**
   * List ERC-721 transfers
   *
   * @remarks
   * Lists ERC-721 transfers for an address. Filterable by block range.
   */
  async listErc721Transactions(
    request: operations.ListErc721TransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListErc721TransactionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListErc721Transactions(
      this,
      request,
      options,
    ));
  }

  /**
   * List ERC-1155 transfers
   *
   * @remarks
   * Lists ERC-1155 transfers for an address. Filterable by block range.
   */
  async listErc1155Transactions(
    request: operations.ListErc1155TransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListErc1155TransactionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListErc1155Transactions(
      this,
      request,
      options,
    ));
  }

  /**
   * List internal transactions
   *
   * @remarks
   * Returns a list of internal transactions for an address and chain. Filterable by block range.
   *
   * Note that the internal transactions list only contains `CALL` or `CALLCODE` transactions with a non-zero value and `CREATE`/`CREATE2` transactions. To get a complete list of internal transactions use the `debug_` prefixed RPC methods on an archive node.
   */
  async listInternalTransactions(
    request: operations.ListInternalTransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ListInternalTransactionsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(dataEvmTransactionsListInternalTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Get transaction
   *
   * @remarks
   * Gets the details of a single transaction.
   */
  async getTransaction(
    request: operations.GetTransactionRequest,
    options?: RequestOptions,
  ): Promise<components.GetTransactionResponse> {
    return unwrapAsync(dataEvmTransactionsGetTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * List transactions for a block
   *
   * @remarks
   * Lists the transactions that occured in a given block.
   */
  async getTransactionsForBlock(
    request: operations.GetTransactionsForBlockRequest,
    options?: RequestOptions,
  ): Promise<components.ListNativeTransactionsResponse> {
    return unwrapAsync(dataEvmTransactionsGetTransactionsForBlock(
      this,
      request,
      options,
    ));
  }

  /**
   * List latest transactions
   *
   * @remarks
   * Lists the latest transactions. Filterable by status.
   */
  async listLatestTransactions(
    request: operations.ListLatestTransactionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListLatestTransactionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmTransactionsListLatestTransactions(
      this,
      request,
      options,
    ));
  }
}
