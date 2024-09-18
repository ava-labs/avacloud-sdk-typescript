/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PrimaryNetworkOperationType = {
  TransactionExportPrimaryNetwork: "TRANSACTION_EXPORT_PRIMARY_NETWORK",
  TransactionExportPrimaryNetworkStaking:
    "TRANSACTION_EXPORT_PRIMARY_NETWORK_STAKING",
  TransactionExportPrimaryNetworkSimple:
    "TRANSACTION_EXPORT_PRIMARY_NETWORK_SIMPLE",
} as const;
export type PrimaryNetworkOperationType = ClosedEnum<
  typeof PrimaryNetworkOperationType
>;

/** @internal */
export const PrimaryNetworkOperationType$inboundSchema: z.ZodNativeEnum<
  typeof PrimaryNetworkOperationType
> = z.nativeEnum(PrimaryNetworkOperationType);

/** @internal */
export const PrimaryNetworkOperationType$outboundSchema: z.ZodNativeEnum<
  typeof PrimaryNetworkOperationType
> = PrimaryNetworkOperationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryNetworkOperationType$ {
  /** @deprecated use `PrimaryNetworkOperationType$inboundSchema` instead. */
  export const inboundSchema = PrimaryNetworkOperationType$inboundSchema;
  /** @deprecated use `PrimaryNetworkOperationType$outboundSchema` instead. */
  export const outboundSchema = PrimaryNetworkOperationType$outboundSchema;
}
