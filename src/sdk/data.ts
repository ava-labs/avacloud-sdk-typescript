/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataHealthCheck } from "../funcs/dataHealthCheck.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Evm } from "./evm.js";
import { Icm } from "./icm.js";
import { Nfts } from "./nfts.js";
import { Operations } from "./operations.js";
import { PrimaryNetwork } from "./primarynetwork.js";
import { SignatureAggregator } from "./signatureaggregator.js";
import { Teleporter } from "./teleporter.js";
import { UsageMetrics } from "./usagemetrics.js";

export class Data extends ClientSDK {
  private _evm?: Evm;
  get evm(): Evm {
    return (this._evm ??= new Evm(this._options));
  }

  private _nfts?: Nfts;
  get nfts(): Nfts {
    return (this._nfts ??= new Nfts(this._options));
  }

  private _operations?: Operations;
  get operations(): Operations {
    return (this._operations ??= new Operations(this._options));
  }

  private _primaryNetwork?: PrimaryNetwork;
  get primaryNetwork(): PrimaryNetwork {
    return (this._primaryNetwork ??= new PrimaryNetwork(this._options));
  }

  private _teleporter?: Teleporter;
  get teleporter(): Teleporter {
    return (this._teleporter ??= new Teleporter(this._options));
  }

  private _icm?: Icm;
  get icm(): Icm {
    return (this._icm ??= new Icm(this._options));
  }

  private _usageMetrics?: UsageMetrics;
  get usageMetrics(): UsageMetrics {
    return (this._usageMetrics ??= new UsageMetrics(this._options));
  }

  private _signatureAggregator?: SignatureAggregator;
  get signatureAggregator(): SignatureAggregator {
    return (this._signatureAggregator ??= new SignatureAggregator(
      this._options,
    ));
  }

  /**
   * Get the health of the service
   *
   * @remarks
   * Check the health of the service.
   */
  async healthCheck(
    options?: RequestOptions,
  ): Promise<components.HealthCheckResultDto> {
    return unwrapAsync(dataHealthCheck(
      this,
      options,
    ));
  }
}
