/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { primaryNetworkUTXOsGetUtxosByAddresses } from "../funcs/primaryNetworkUTXOsGetUtxosByAddresses.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class PrimaryNetworkUTXOs extends ClientSDK {
    /**
     * List UTXOs
     *
     * @remarks
     * Lists UTXOs on one of the Primary Network chains for the supplied addresses.
     */
    async getUtxosByAddresses(
        request: operations.GetUtxosByAddressesRequest,
        options?: RequestOptions
    ): Promise<operations.GetUtxosByAddressesResponseBody> {
        return unwrapAsync(primaryNetworkUTXOsGetUtxosByAddresses(this, request, options));
    }
}
