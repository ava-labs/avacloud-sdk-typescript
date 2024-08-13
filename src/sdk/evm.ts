/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { AvalancheSDKBalances } from "./avalanchesdkbalances.js";
import { AvalancheSDKBlocks } from "./avalanchesdkblocks.js";
import { AvalancheSDKTransactions } from "./avalanchesdktransactions.js";
import { Chains } from "./chains.js";
import { Contracts } from "./contracts.js";

export class Evm extends ClientSDK {
    private _balances?: AvalancheSDKBalances;
    get balances(): AvalancheSDKBalances {
        return (this._balances ??= new AvalancheSDKBalances(this.options$));
    }

    private _blocks?: AvalancheSDKBlocks;
    get blocks(): AvalancheSDKBlocks {
        return (this._blocks ??= new AvalancheSDKBlocks(this.options$));
    }

    private _transactions?: AvalancheSDKTransactions;
    get transactions(): AvalancheSDKTransactions {
        return (this._transactions ??= new AvalancheSDKTransactions(this.options$));
    }

    private _contracts?: Contracts;
    get contracts(): Contracts {
        return (this._contracts ??= new Contracts(this.options$));
    }

    private _chains?: Chains;
    get chains(): Chains {
        return (this._chains ??= new Chains(this.options$));
    }
}