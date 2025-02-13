/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TeleporterDestinationTransaction,
  TeleporterDestinationTransaction$inboundSchema,
  TeleporterDestinationTransaction$Outbound,
  TeleporterDestinationTransaction$outboundSchema,
} from "./teleporterdestinationtransaction.js";
import {
  TeleporterReceipt,
  TeleporterReceipt$inboundSchema,
  TeleporterReceipt$Outbound,
  TeleporterReceipt$outboundSchema,
} from "./teleporterreceipt.js";
import {
  TeleporterRewardDetails,
  TeleporterRewardDetails$inboundSchema,
  TeleporterRewardDetails$Outbound,
  TeleporterRewardDetails$outboundSchema,
} from "./teleporterrewarddetails.js";

export const DeliveredSourceNotIndexedTeleporterMessageStatus = {
  DeliveredSourceNotIndexed: "delivered_source_not_indexed",
} as const;
export type DeliveredSourceNotIndexedTeleporterMessageStatus = ClosedEnum<
  typeof DeliveredSourceNotIndexedTeleporterMessageStatus
>;

export type DeliveredSourceNotIndexedTeleporterMessage = {
  messageId: string;
  teleporterContractAddress: string;
  sourceBlockchainId: string;
  destinationBlockchainId: string;
  sourceEvmChainId: string;
  destinationEvmChainId: string;
  messageNonce: string;
  from: string;
  to: string;
  data?: string | undefined;
  messageExecuted: boolean;
  receipts: Array<TeleporterReceipt>;
  receiptDelivered: boolean;
  rewardDetails: TeleporterRewardDetails;
  destinationTransaction: TeleporterDestinationTransaction;
  status: DeliveredSourceNotIndexedTeleporterMessageStatus;
};

/** @internal */
export const DeliveredSourceNotIndexedTeleporterMessageStatus$inboundSchema:
  z.ZodNativeEnum<typeof DeliveredSourceNotIndexedTeleporterMessageStatus> = z
    .nativeEnum(DeliveredSourceNotIndexedTeleporterMessageStatus);

/** @internal */
export const DeliveredSourceNotIndexedTeleporterMessageStatus$outboundSchema:
  z.ZodNativeEnum<typeof DeliveredSourceNotIndexedTeleporterMessageStatus> =
    DeliveredSourceNotIndexedTeleporterMessageStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliveredSourceNotIndexedTeleporterMessageStatus$ {
  /** @deprecated use `DeliveredSourceNotIndexedTeleporterMessageStatus$inboundSchema` instead. */
  export const inboundSchema =
    DeliveredSourceNotIndexedTeleporterMessageStatus$inboundSchema;
  /** @deprecated use `DeliveredSourceNotIndexedTeleporterMessageStatus$outboundSchema` instead. */
  export const outboundSchema =
    DeliveredSourceNotIndexedTeleporterMessageStatus$outboundSchema;
}

/** @internal */
export const DeliveredSourceNotIndexedTeleporterMessage$inboundSchema:
  z.ZodType<DeliveredSourceNotIndexedTeleporterMessage, z.ZodTypeDef, unknown> =
    z.object({
      messageId: z.string(),
      teleporterContractAddress: z.string(),
      sourceBlockchainId: z.string(),
      destinationBlockchainId: z.string(),
      sourceEvmChainId: z.string(),
      destinationEvmChainId: z.string(),
      messageNonce: z.string(),
      from: z.string(),
      to: z.string(),
      data: z.string().optional(),
      messageExecuted: z.boolean(),
      receipts: z.array(TeleporterReceipt$inboundSchema),
      receiptDelivered: z.boolean(),
      rewardDetails: TeleporterRewardDetails$inboundSchema,
      destinationTransaction: TeleporterDestinationTransaction$inboundSchema,
      status: DeliveredSourceNotIndexedTeleporterMessageStatus$inboundSchema,
    });

/** @internal */
export type DeliveredSourceNotIndexedTeleporterMessage$Outbound = {
  messageId: string;
  teleporterContractAddress: string;
  sourceBlockchainId: string;
  destinationBlockchainId: string;
  sourceEvmChainId: string;
  destinationEvmChainId: string;
  messageNonce: string;
  from: string;
  to: string;
  data?: string | undefined;
  messageExecuted: boolean;
  receipts: Array<TeleporterReceipt$Outbound>;
  receiptDelivered: boolean;
  rewardDetails: TeleporterRewardDetails$Outbound;
  destinationTransaction: TeleporterDestinationTransaction$Outbound;
  status: string;
};

/** @internal */
export const DeliveredSourceNotIndexedTeleporterMessage$outboundSchema:
  z.ZodType<
    DeliveredSourceNotIndexedTeleporterMessage$Outbound,
    z.ZodTypeDef,
    DeliveredSourceNotIndexedTeleporterMessage
  > = z.object({
    messageId: z.string(),
    teleporterContractAddress: z.string(),
    sourceBlockchainId: z.string(),
    destinationBlockchainId: z.string(),
    sourceEvmChainId: z.string(),
    destinationEvmChainId: z.string(),
    messageNonce: z.string(),
    from: z.string(),
    to: z.string(),
    data: z.string().optional(),
    messageExecuted: z.boolean(),
    receipts: z.array(TeleporterReceipt$outboundSchema),
    receiptDelivered: z.boolean(),
    rewardDetails: TeleporterRewardDetails$outboundSchema,
    destinationTransaction: TeleporterDestinationTransaction$outboundSchema,
    status: DeliveredSourceNotIndexedTeleporterMessageStatus$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliveredSourceNotIndexedTeleporterMessage$ {
  /** @deprecated use `DeliveredSourceNotIndexedTeleporterMessage$inboundSchema` instead. */
  export const inboundSchema =
    DeliveredSourceNotIndexedTeleporterMessage$inboundSchema;
  /** @deprecated use `DeliveredSourceNotIndexedTeleporterMessage$outboundSchema` instead. */
  export const outboundSchema =
    DeliveredSourceNotIndexedTeleporterMessage$outboundSchema;
  /** @deprecated use `DeliveredSourceNotIndexedTeleporterMessage$Outbound` instead. */
  export type Outbound = DeliveredSourceNotIndexedTeleporterMessage$Outbound;
}

export function deliveredSourceNotIndexedTeleporterMessageToJSON(
  deliveredSourceNotIndexedTeleporterMessage:
    DeliveredSourceNotIndexedTeleporterMessage,
): string {
  return JSON.stringify(
    DeliveredSourceNotIndexedTeleporterMessage$outboundSchema.parse(
      deliveredSourceNotIndexedTeleporterMessage,
    ),
  );
}

export function deliveredSourceNotIndexedTeleporterMessageFromJSON(
  jsonString: string,
): SafeParseResult<
  DeliveredSourceNotIndexedTeleporterMessage,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeliveredSourceNotIndexedTeleporterMessage$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeliveredSourceNotIndexedTeleporterMessage' from JSON`,
  );
}
