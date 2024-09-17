/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PrimaryNetworkTxType = {
  AddValidatorTx: "AddValidatorTx",
  AddSubnetValidatorTx: "AddSubnetValidatorTx",
  AddDelegatorTx: "AddDelegatorTx",
  CreateChainTx: "CreateChainTx",
  CreateSubnetTx: "CreateSubnetTx",
  ImportTx: "ImportTx",
  ExportTx: "ExportTx",
  AdvanceTimeTx: "AdvanceTimeTx",
  RewardValidatorTx: "RewardValidatorTx",
  RemoveSubnetValidatorTx: "RemoveSubnetValidatorTx",
  TransformSubnetTx: "TransformSubnetTx",
  AddPermissionlessValidatorTx: "AddPermissionlessValidatorTx",
  AddPermissionlessDelegatorTx: "AddPermissionlessDelegatorTx",
  BaseTx: "BaseTx",
  TransferSubnetOwnershipTx: "TransferSubnetOwnershipTx",
  Unknown: "UNKNOWN",
  CreateAssetTx: "CreateAssetTx",
  OperationTx: "OperationTx",
} as const;
export type PrimaryNetworkTxType = ClosedEnum<typeof PrimaryNetworkTxType>;

/** @internal */
export const PrimaryNetworkTxType$inboundSchema: z.ZodNativeEnum<
  typeof PrimaryNetworkTxType
> = z.nativeEnum(PrimaryNetworkTxType);

/** @internal */
export const PrimaryNetworkTxType$outboundSchema: z.ZodNativeEnum<
  typeof PrimaryNetworkTxType
> = PrimaryNetworkTxType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkTxType$ {
  /** @deprecated use `PrimaryNetworkTxType$inboundSchema` instead. */
  export const inboundSchema = PrimaryNetworkTxType$inboundSchema;
  /** @deprecated use `PrimaryNetworkTxType$outboundSchema` instead. */
  export const outboundSchema = PrimaryNetworkTxType$outboundSchema;
}
