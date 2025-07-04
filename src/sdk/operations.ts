/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataOperationsExportTransactions } from "../funcs/dataOperationsExportTransactions.js";
import { dataOperationsGetResult } from "../funcs/dataOperationsGetResult.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Operations extends ClientSDK {
  /**
   * Get operation
   *
   * @remarks
   * Gets operation details for the given operation id.
   */
  async getResult(
    request: operations.GetOperationResultRequest,
    options?: RequestOptions,
  ): Promise<components.OperationStatusResponse> {
    return unwrapAsync(dataOperationsGetResult(
      this,
      request,
      options,
    ));
  }

  /**
   * Create transaction export operation
   *
   * @remarks
   * Trigger a transaction export operation with given parameters.
   *
   * The transaction export operation runs asynchronously in the background. The status of the job can be retrieved from the `/v1/operations/:operationId` endpoint using the `operationId` returned from this endpoint.
   */
  async exportTransactions(
    request: operations.PostTransactionExportJobRequestBody,
    options?: RequestOptions,
  ): Promise<components.OperationStatusResponse> {
    return unwrapAsync(dataOperationsExportTransactions(
      this,
      request,
      options,
    ));
  }
}
