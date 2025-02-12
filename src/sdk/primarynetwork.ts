/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkGetAssetDetails } from "../funcs/dataPrimaryNetworkGetAssetDetails.js";
import { dataPrimaryNetworkGetChainIdsForAddresses } from "../funcs/dataPrimaryNetworkGetChainIdsForAddresses.js";
import { dataPrimaryNetworkGetNetworkDetails } from "../funcs/dataPrimaryNetworkGetNetworkDetails.js";
import { dataPrimaryNetworkGetSingleValidatorDetails } from "../funcs/dataPrimaryNetworkGetSingleValidatorDetails.js";
import { dataPrimaryNetworkGetSubnetById } from "../funcs/dataPrimaryNetworkGetSubnetById.js";
import { dataPrimaryNetworkListBlockchains } from "../funcs/dataPrimaryNetworkListBlockchains.js";
import { dataPrimaryNetworkListDelegators } from "../funcs/dataPrimaryNetworkListDelegators.js";
import { dataPrimaryNetworkListL1Validators } from "../funcs/dataPrimaryNetworkListL1Validators.js";
import { dataPrimaryNetworkListSubnets } from "../funcs/dataPrimaryNetworkListSubnets.js";
import { dataPrimaryNetworkListValidators } from "../funcs/dataPrimaryNetworkListValidators.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";
import { AvaCloudSDKBlocks } from "./avacloudsdkblocks.js";
import { AvaCloudSDKTransactions } from "./avacloudsdktransactions.js";
import { Balances } from "./balances.js";
import { Rewards } from "./rewards.js";
import { Utxos } from "./utxos.js";
import { Vertices } from "./vertices.js";

export class PrimaryNetwork extends ClientSDK {
  private _transactions?: AvaCloudSDKTransactions;
  get transactions(): AvaCloudSDKTransactions {
    return (this._transactions ??= new AvaCloudSDKTransactions(this._options));
  }

  private _rewards?: Rewards;
  get rewards(): Rewards {
    return (this._rewards ??= new Rewards(this._options));
  }

  private _utxos?: Utxos;
  get utxos(): Utxos {
    return (this._utxos ??= new Utxos(this._options));
  }

  private _balances?: Balances;
  get balances(): Balances {
    return (this._balances ??= new Balances(this._options));
  }

  private _blocks?: AvaCloudSDKBlocks;
  get blocks(): AvaCloudSDKBlocks {
    return (this._blocks ??= new AvaCloudSDKBlocks(this._options));
  }

  private _vertices?: Vertices;
  get vertices(): Vertices {
    return (this._vertices ??= new Vertices(this._options));
  }

  /**
   * Get asset details
   *
   * @remarks
   * Gets asset details corresponding to the given asset id on the X-Chain.
   */
  async getAssetDetails(
    request: operations.GetAssetDetailsRequest,
    options?: RequestOptions,
  ): Promise<components.XChainAssetDetails> {
    return unwrapAsync(dataPrimaryNetworkGetAssetDetails(
      this,
      request,
      options,
    ));
  }

  /**
   * Get chain interactions for addresses
   *
   * @remarks
   * Returns Primary Network chains that each address has touched in the form of an address mapped array. If an address has had any on-chain interaction for a chain, that chain's chain id will be returned.
   */
  async getChainIdsForAddresses(
    request: operations.GetChainIdsForAddressesRequest,
    options?: RequestOptions,
  ): Promise<components.ChainAddressChainIdMapListResponse> {
    return unwrapAsync(dataPrimaryNetworkGetChainIdsForAddresses(
      this,
      request,
      options,
    ));
  }

  /**
   * Get network details
   *
   * @remarks
   * Gets network details such as validator and delegator stats.
   */
  async getNetworkDetails(
    request: operations.GetNetworkDetailsRequest,
    options?: RequestOptions,
  ): Promise<components.GetNetworkDetailsResponse> {
    return unwrapAsync(dataPrimaryNetworkGetNetworkDetails(
      this,
      request,
      options,
    ));
  }

  /**
   * List blockchains
   *
   * @remarks
   * Lists all blockchains registered on the network.
   */
  async listBlockchains(
    request: operations.ListBlockchainsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListBlockchainsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataPrimaryNetworkListBlockchains(
      this,
      request,
      options,
    ));
  }

  /**
   * List subnets
   *
   * @remarks
   * Lists all subnets registered on the network.
   */
  async listSubnets(
    request: operations.ListSubnetsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListSubnetsResponse, { cursor: string }>> {
    return unwrapResultIterator(dataPrimaryNetworkListSubnets(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Subnet details by ID
   *
   * @remarks
   * Get details of the Subnet registered on the network.
   */
  async getSubnetById(
    request: operations.GetSubnetByIdRequest,
    options?: RequestOptions,
  ): Promise<components.Subnet> {
    return unwrapAsync(dataPrimaryNetworkGetSubnetById(
      this,
      request,
      options,
    ));
  }

  /**
   * List validators
   *
   * @remarks
   * Lists details for validators. By default, returns details for all validators. Filterable by validator node ids and minimum delegation capacity.
   */
  async listValidators(
    request: operations.ListValidatorsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListValidatorsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataPrimaryNetworkListValidators(
      this,
      request,
      options,
    ));
  }

  /**
   * Get single validator details
   *
   * @remarks
   * List validator details for a single validator.  Filterable by validation status.
   */
  async getSingleValidatorDetails(
    request: operations.GetSingleValidatorDetailsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetSingleValidatorDetailsResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(dataPrimaryNetworkGetSingleValidatorDetails(
      this,
      request,
      options,
    ));
  }

  /**
   * List delegators
   *
   * @remarks
   * Lists details for delegators.
   */
  async listDelegators(
    request: operations.ListDelegatorsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListDelegatorsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataPrimaryNetworkListDelegators(
      this,
      request,
      options,
    ));
  }

  /**
   * List L1 validators
   *
   * @remarks
   * Lists details for L1 validators. By default, returns details for all active L1 validators. Filterable by validator node ids, subnet id, and validation id.
   */
  async listL1Validators(
    request: operations.ListL1ValidatorsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListL1ValidatorsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(dataPrimaryNetworkListL1Validators(
      this,
      request,
      options,
    ));
  }
}
