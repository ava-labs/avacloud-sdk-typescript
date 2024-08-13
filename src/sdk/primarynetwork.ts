/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { glacierPrimaryNetworkGetAssetDetails } from "../funcs/glacierPrimaryNetworkGetAssetDetails.js";
import { glacierPrimaryNetworkGetChainIdsForAddresses } from "../funcs/glacierPrimaryNetworkGetChainIdsForAddresses.js";
import { glacierPrimaryNetworkGetNetworkDetails } from "../funcs/glacierPrimaryNetworkGetNetworkDetails.js";
import { glacierPrimaryNetworkGetSingleValidatorDetails } from "../funcs/glacierPrimaryNetworkGetSingleValidatorDetails.js";
import { glacierPrimaryNetworkListBlockchains } from "../funcs/glacierPrimaryNetworkListBlockchains.js";
import { glacierPrimaryNetworkListDelegators } from "../funcs/glacierPrimaryNetworkListDelegators.js";
import { glacierPrimaryNetworkListSubnets } from "../funcs/glacierPrimaryNetworkListSubnets.js";
import { glacierPrimaryNetworkListValidators } from "../funcs/glacierPrimaryNetworkListValidators.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";
import { Balances } from "./balances.js";
import { Blocks } from "./blocks.js";
import { Rewards } from "./rewards.js";
import { Transactions } from "./transactions.js";
import { Utxos } from "./utxos.js";
import { Vertices } from "./vertices.js";

export class PrimaryNetwork extends ClientSDK {
    private _transactions?: Transactions;
    get transactions(): Transactions {
        return (this._transactions ??= new Transactions(this.options$));
    }

    private _rewards?: Rewards;
    get rewards(): Rewards {
        return (this._rewards ??= new Rewards(this.options$));
    }

    private _utxos?: Utxos;
    get utxos(): Utxos {
        return (this._utxos ??= new Utxos(this.options$));
    }

    private _balances?: Balances;
    get balances(): Balances {
        return (this._balances ??= new Balances(this.options$));
    }

    private _blocks?: Blocks;
    get blocks(): Blocks {
        return (this._blocks ??= new Blocks(this.options$));
    }

    private _vertices?: Vertices;
    get vertices(): Vertices {
        return (this._vertices ??= new Vertices(this.options$));
    }

    /**
     * Get asset details
     *
     * @remarks
     * Gets asset details corresponding to the given asset id on the X-Chain.
     */
    async getAssetDetails(
        request: operations.GetAssetDetailsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.XChainAssetDetails> {
        return unwrapAsync(glacierPrimaryNetworkGetAssetDetails(this, request, options));
    }

    /**
     * Get chain interactions for addresses
     *
     * @remarks
     * Returns Primary Network chains that each address has touched in the form of an address mapped array. If an address has had any on-chain interaction for a chain, that chain's chain id will be returned.
     */
    async getChainIdsForAddresses(
        request: operations.GetChainIdsForAddressesRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.ChainAddressChainIdMapListResponse> {
        return unwrapAsync(glacierPrimaryNetworkGetChainIdsForAddresses(this, request, options));
    }

    /**
     * Get network details
     *
     * @remarks
     * Gets network details such as validator and delegator stats.
     */
    async getNetworkDetails(
        request: operations.GetNetworkDetailsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<components.GetNetworkDetailsResponse> {
        return unwrapAsync(glacierPrimaryNetworkGetNetworkDetails(this, request, options));
    }

    /**
     * List blockchains
     *
     * @remarks
     * Lists all blockchains registered on the network.
     */
    async listBlockchains(
        request: operations.ListBlockchainsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.ListBlockchainsResponse>> {
        return unwrapResultIterator(glacierPrimaryNetworkListBlockchains(this, request, options));
    }

    /**
     * List subnets
     *
     * @remarks
     * Lists all subnets registered on the network.
     */
    async listSubnets(
        request: operations.ListSubnetsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.ListSubnetsResponse>> {
        return unwrapResultIterator(glacierPrimaryNetworkListSubnets(this, request, options));
    }

    /**
     * List validators
     *
     * @remarks
     * Lists details for validators. By default, returns details for all validators. Filterable by validator node ids and minimum delegation capacity.
     */
    async listValidators(
        request: operations.ListValidatorsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.ListValidatorsResponse>> {
        return unwrapResultIterator(glacierPrimaryNetworkListValidators(this, request, options));
    }

    /**
     * Get single validator details
     *
     * @remarks
     * List validator details for a single validator.  Filterable by validation status.
     */
    async getSingleValidatorDetails(
        request: operations.GetSingleValidatorDetailsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.GetSingleValidatorDetailsResponse>> {
        return unwrapResultIterator(
            glacierPrimaryNetworkGetSingleValidatorDetails(this, request, options)
        );
    }

    /**
     * List delegators
     *
     * @remarks
     * Lists details for delegators.
     */
    async listDelegators(
        request: operations.ListDelegatorsRequest,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<PageIterator<operations.ListDelegatorsResponse>> {
        return unwrapResultIterator(glacierPrimaryNetworkListDelegators(this, request, options));
    }
}
