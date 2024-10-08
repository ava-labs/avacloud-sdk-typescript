/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BlockchainInfo,
  BlockchainInfo$inboundSchema,
  BlockchainInfo$Outbound,
  BlockchainInfo$outboundSchema,
} from "./blockchaininfo.js";
import {
  SubnetOwnershipInfo,
  SubnetOwnershipInfo$inboundSchema,
  SubnetOwnershipInfo$Outbound,
  SubnetOwnershipInfo$outboundSchema,
} from "./subnetownershipinfo.js";

export type Subnet = {
  createBlockTimestamp: number;
  createBlockIndex: string;
  subnetId: string;
  /**
   * This field is deprecated. Use subnetOwnershipInfo instead.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  ownerAddresses: Array<string>;
  /**
   * This field is deprecated. Use subnetOwnershipInfo instead.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  threshold: number;
  /**
   * This field is deprecated. Use subnetOwnershipInfo instead.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  locktime: number;
  /**
   * Latest subnet owner details for this Subnet.
   */
  subnetOwnershipInfo: SubnetOwnershipInfo;
  blockchains: Array<BlockchainInfo>;
};

/** @internal */
export const Subnet$inboundSchema: z.ZodType<Subnet, z.ZodTypeDef, unknown> = z
  .object({
    createBlockTimestamp: z.number(),
    createBlockIndex: z.string(),
    subnetId: z.string(),
    ownerAddresses: z.array(z.string()),
    threshold: z.number(),
    locktime: z.number(),
    subnetOwnershipInfo: SubnetOwnershipInfo$inboundSchema,
    blockchains: z.array(BlockchainInfo$inboundSchema),
  });

/** @internal */
export type Subnet$Outbound = {
  createBlockTimestamp: number;
  createBlockIndex: string;
  subnetId: string;
  ownerAddresses: Array<string>;
  threshold: number;
  locktime: number;
  subnetOwnershipInfo: SubnetOwnershipInfo$Outbound;
  blockchains: Array<BlockchainInfo$Outbound>;
};

/** @internal */
export const Subnet$outboundSchema: z.ZodType<
  Subnet$Outbound,
  z.ZodTypeDef,
  Subnet
> = z.object({
  createBlockTimestamp: z.number(),
  createBlockIndex: z.string(),
  subnetId: z.string(),
  ownerAddresses: z.array(z.string()),
  threshold: z.number(),
  locktime: z.number(),
  subnetOwnershipInfo: SubnetOwnershipInfo$outboundSchema,
  blockchains: z.array(BlockchainInfo$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Subnet$ {
  /** @deprecated use `Subnet$inboundSchema` instead. */
  export const inboundSchema = Subnet$inboundSchema;
  /** @deprecated use `Subnet$outboundSchema` instead. */
  export const outboundSchema = Subnet$outboundSchema;
  /** @deprecated use `Subnet$Outbound` instead. */
  export type Outbound = Subnet$Outbound;
}
