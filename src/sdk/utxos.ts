/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { glacierPrimaryNetworkUtxosGetUtxosByAddresses } from "../funcs/glacierPrimaryNetworkUtxosGetUtxosByAddresses.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Utxos extends ClientSDK {
    /**
     * List UTXOs
     *
     * @remarks
     * Lists UTXOs on one of the Primary Network chains for the supplied addresses.
     */
    async getUtxosByAddresses(
        request: operations.GetUtxosByAddressesRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetUtxosByAddressesResponse>> {
        return unwrapResultIterator(
            glacierPrimaryNetworkUtxosGetUtxosByAddresses(this, request, options)
        );
    }
}
