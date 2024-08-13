/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Evm } from "./evm.js";
import { Nfts } from "./nfts.js";
import { Operations } from "./operations.js";
import { PrimaryNetwork } from "./primarynetwork.js";
import { Teleporter } from "./teleporter.js";
import { Webhooks } from "./webhooks.js";

export class Glacier extends ClientSDK {
    private _nfts?: Nfts;
    get nfts(): Nfts {
        return (this._nfts ??= new Nfts(this.options$));
    }

    private _operations?: Operations;
    get operations(): Operations {
        return (this._operations ??= new Operations(this.options$));
    }

    private _primaryNetwork?: PrimaryNetwork;
    get primaryNetwork(): PrimaryNetwork {
        return (this._primaryNetwork ??= new PrimaryNetwork(this.options$));
    }

    private _webhooks?: Webhooks;
    get webhooks(): Webhooks {
        return (this._webhooks ??= new Webhooks(this.options$));
    }

    private _teleporter?: Teleporter;
    get teleporter(): Teleporter {
        return (this._teleporter ??= new Teleporter(this.options$));
    }

    private _evm?: Evm;
    get evm(): Evm {
        return (this._evm ??= new Evm(this.options$));
    }
}