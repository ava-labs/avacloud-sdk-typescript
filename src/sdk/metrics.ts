/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { AvalancheSDKEvm } from "./avalanchesdkevm.js";
import { Chain } from "./chain.js";
import { HealthCheck } from "./healthcheck.js";
import { LookingGlass } from "./lookingglass.js";
import { StakingInformation } from "./stakinginformation.js";

export class Metrics extends ClientSDK {
    private _healthCheck?: HealthCheck;
    get healthCheck(): HealthCheck {
        return (this._healthCheck ??= new HealthCheck(this.options$));
    }

    private _evm?: AvalancheSDKEvm;
    get evm(): AvalancheSDKEvm {
        return (this._evm ??= new AvalancheSDKEvm(this.options$));
    }

    private _chain?: Chain;
    get chain(): Chain {
        return (this._chain ??= new Chain(this.options$));
    }

    private _lookingGlass?: LookingGlass;
    get lookingGlass(): LookingGlass {
        return (this._lookingGlass ??= new LookingGlass(this.options$));
    }

    private _stakingInformation?: StakingInformation;
    get stakingInformation(): StakingInformation {
        return (this._stakingInformation ??= new StakingInformation(this.options$));
    }
}