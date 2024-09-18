/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ContractDeploymentDetails = {
  txHash: string;
  /**
   * The address that initiated the transaction which deployed this contract.
   */
  deployerAddress: string;
  /**
   * The contract address which deployed this contract via smart contract. This field is only populated when the contract was deployed as part of smart contract execution.
   */
  deployerContractAddress?: string | undefined;
};

/** @internal */
export const ContractDeploymentDetails$inboundSchema: z.ZodType<
  ContractDeploymentDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  txHash: z.string(),
  deployerAddress: z.string(),
  deployerContractAddress: z.string().optional(),
});

/** @internal */
export type ContractDeploymentDetails$Outbound = {
  txHash: string;
  deployerAddress: string;
  deployerContractAddress?: string | undefined;
};

/** @internal */
export const ContractDeploymentDetails$outboundSchema: z.ZodType<
  ContractDeploymentDetails$Outbound,
  z.ZodTypeDef,
  ContractDeploymentDetails
> = z.object({
  txHash: z.string(),
  deployerAddress: z.string(),
  deployerContractAddress: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContractDeploymentDetails$ {
  /** @deprecated use `ContractDeploymentDetails$inboundSchema` instead. */
  export const inboundSchema = ContractDeploymentDetails$inboundSchema;
  /** @deprecated use `ContractDeploymentDetails$outboundSchema` instead. */
  export const outboundSchema = ContractDeploymentDetails$outboundSchema;
  /** @deprecated use `ContractDeploymentDetails$Outbound` instead. */
  export type Outbound = ContractDeploymentDetails$Outbound;
}
