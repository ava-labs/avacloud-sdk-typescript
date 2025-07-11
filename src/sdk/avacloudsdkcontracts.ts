/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmAddressContractsListDeployments } from "../funcs/dataEvmAddressContractsListDeployments.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class AvaCloudSDKContracts extends ClientSDK {
  /**
   * List deployed contracts
   *
   * @remarks
   * Lists all contracts deployed by the given address.
   */
  async listDeployments(
    request: operations.ListContractDeploymentsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListContractDeploymentsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataEvmAddressContractsListDeployments(
      this,
      request,
      options,
    ));
  }
}
