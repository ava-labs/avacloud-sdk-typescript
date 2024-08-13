/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { glacierPrimaryNetworkBalancesGetBalancesByAddresses } from "../funcs/glacierPrimaryNetworkBalancesGetBalancesByAddresses.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Balances extends ClientSDK {
    /**
     * Get balances
     *
     * @remarks
     * Gets primary network balances for one of the Primary Network chains for the supplied addresses.
     *
     * C-Chain balances returned are only the shared atomic memory balance. For EVM balance, use the `/v1/chains/:chainId/addresses/:addressId/balances:getNative` endpoint.
     */
    async getBalancesByAddresses(
        request: operations.GetBalancesByAddressesRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<operations.GetBalancesByAddressesResponseBody> {
        return unwrapAsync(
            glacierPrimaryNetworkBalancesGetBalancesByAddresses(this, request, options)
        );
    }
}