/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    ContractDeploymentDetails,
    ContractDeploymentDetails$inboundSchema,
    ContractDeploymentDetails$Outbound,
    ContractDeploymentDetails$outboundSchema,
} from "./contractdeploymentdetails.js";
import {
    ImageAsset,
    ImageAsset$inboundSchema,
    ImageAsset$Outbound,
    ImageAsset$outboundSchema,
} from "./imageasset.js";
import {
    PricingProviders,
    PricingProviders$inboundSchema,
    PricingProviders$Outbound,
    PricingProviders$outboundSchema,
} from "./pricingproviders.js";
import {
    ResourceLink,
    ResourceLink$inboundSchema,
    ResourceLink$Outbound,
    ResourceLink$outboundSchema,
} from "./resourcelink.js";
import * as z from "zod";

export const Erc20ContractErcType = {
    Erc20: "ERC-20",
} as const;
export type Erc20ContractErcType = ClosedEnum<typeof Erc20ContractErcType>;

export type Erc20Contract = {
    /**
     * The contract name.
     */
    name?: string | undefined;
    description?: string | undefined;
    officialSite?: string | undefined;
    email?: string | undefined;
    logoAsset?: ImageAsset | undefined;
    bannerAsset?: ImageAsset | undefined;
    color?: string | undefined;
    resourceLinks?: Array<ResourceLink> | undefined;
    tags?: Array<string> | undefined;
    /**
     * A wallet or contract address in mixed-case checksum encoding.
     */
    address: string;
    deploymentDetails: ContractDeploymentDetails;
    ercType: Erc20ContractErcType;
    /**
     * The contract symbol.
     */
    symbol?: string | undefined;
    /**
     * The number of decimals the token uses. For example `6`, means to divide the token amount by `1000000` to get its user representation.
     */
    decimals: number;
    pricingProviders?: PricingProviders | undefined;
};

/** @internal */
export const Erc20ContractErcType$inboundSchema: z.ZodNativeEnum<typeof Erc20ContractErcType> =
    z.nativeEnum(Erc20ContractErcType);

/** @internal */
export const Erc20ContractErcType$outboundSchema: z.ZodNativeEnum<typeof Erc20ContractErcType> =
    Erc20ContractErcType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc20ContractErcType$ {
    /** @deprecated use `Erc20ContractErcType$inboundSchema` instead. */
    export const inboundSchema = Erc20ContractErcType$inboundSchema;
    /** @deprecated use `Erc20ContractErcType$outboundSchema` instead. */
    export const outboundSchema = Erc20ContractErcType$outboundSchema;
}

/** @internal */
export const Erc20Contract$inboundSchema: z.ZodType<Erc20Contract, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        officialSite: z.string().optional(),
        email: z.string().optional(),
        logoAsset: ImageAsset$inboundSchema.optional(),
        bannerAsset: ImageAsset$inboundSchema.optional(),
        color: z.string().optional(),
        resourceLinks: z.array(ResourceLink$inboundSchema).optional(),
        tags: z.array(z.string()).optional(),
        address: z.string(),
        deploymentDetails: ContractDeploymentDetails$inboundSchema,
        ercType: Erc20ContractErcType$inboundSchema,
        symbol: z.string().optional(),
        decimals: z.number(),
        pricingProviders: PricingProviders$inboundSchema.optional(),
    });

/** @internal */
export type Erc20Contract$Outbound = {
    name?: string | undefined;
    description?: string | undefined;
    officialSite?: string | undefined;
    email?: string | undefined;
    logoAsset?: ImageAsset$Outbound | undefined;
    bannerAsset?: ImageAsset$Outbound | undefined;
    color?: string | undefined;
    resourceLinks?: Array<ResourceLink$Outbound> | undefined;
    tags?: Array<string> | undefined;
    address: string;
    deploymentDetails: ContractDeploymentDetails$Outbound;
    ercType: string;
    symbol?: string | undefined;
    decimals: number;
    pricingProviders?: PricingProviders$Outbound | undefined;
};

/** @internal */
export const Erc20Contract$outboundSchema: z.ZodType<
    Erc20Contract$Outbound,
    z.ZodTypeDef,
    Erc20Contract
> = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    officialSite: z.string().optional(),
    email: z.string().optional(),
    logoAsset: ImageAsset$outboundSchema.optional(),
    bannerAsset: ImageAsset$outboundSchema.optional(),
    color: z.string().optional(),
    resourceLinks: z.array(ResourceLink$outboundSchema).optional(),
    tags: z.array(z.string()).optional(),
    address: z.string(),
    deploymentDetails: ContractDeploymentDetails$outboundSchema,
    ercType: Erc20ContractErcType$outboundSchema,
    symbol: z.string().optional(),
    decimals: z.number(),
    pricingProviders: PricingProviders$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc20Contract$ {
    /** @deprecated use `Erc20Contract$inboundSchema` instead. */
    export const inboundSchema = Erc20Contract$inboundSchema;
    /** @deprecated use `Erc20Contract$outboundSchema` instead. */
    export const outboundSchema = Erc20Contract$outboundSchema;
    /** @deprecated use `Erc20Contract$Outbound` instead. */
    export type Outbound = Erc20Contract$Outbound;
}
