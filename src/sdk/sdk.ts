/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Data } from "./data.js";
import { Metrics } from "./metrics.js";

export class AvaCloudSDK extends ClientSDK {
  private _metrics?: Metrics;
  get metrics(): Metrics {
    return (this._metrics ??= new Metrics(this._options));
  }

  private _data?: Data;
  get data(): Data {
    return (this._data ??= new Data(this._options));
  }
}
