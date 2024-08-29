/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PrimaryNetworkChainInfo,
    PrimaryNetworkChainInfo$inboundSchema,
    PrimaryNetworkChainInfo$Outbound,
    PrimaryNetworkChainInfo$outboundSchema,
} from "./primarynetworkchaininfo.js";
import {
    XChainBalances,
    XChainBalances$inboundSchema,
    XChainBalances$Outbound,
    XChainBalances$outboundSchema,
} from "./xchainbalances.js";
import * as z from "zod";

export type ListXChainBalancesResponse = {
    balances: XChainBalances;
    chainInfo: PrimaryNetworkChainInfo;
};

/** @internal */
export const ListXChainBalancesResponse$inboundSchema: z.ZodType<
    ListXChainBalancesResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    balances: XChainBalances$inboundSchema,
    chainInfo: PrimaryNetworkChainInfo$inboundSchema,
});

/** @internal */
export type ListXChainBalancesResponse$Outbound = {
    balances: XChainBalances$Outbound;
    chainInfo: PrimaryNetworkChainInfo$Outbound;
};

/** @internal */
export const ListXChainBalancesResponse$outboundSchema: z.ZodType<
    ListXChainBalancesResponse$Outbound,
    z.ZodTypeDef,
    ListXChainBalancesResponse
> = z.object({
    balances: XChainBalances$outboundSchema,
    chainInfo: PrimaryNetworkChainInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListXChainBalancesResponse$ {
    /** @deprecated use `ListXChainBalancesResponse$inboundSchema` instead. */
    export const inboundSchema = ListXChainBalancesResponse$inboundSchema;
    /** @deprecated use `ListXChainBalancesResponse$outboundSchema` instead. */
    export const outboundSchema = ListXChainBalancesResponse$outboundSchema;
    /** @deprecated use `ListXChainBalancesResponse$Outbound` instead. */
    export type Outbound = ListXChainBalancesResponse$Outbound;
}
