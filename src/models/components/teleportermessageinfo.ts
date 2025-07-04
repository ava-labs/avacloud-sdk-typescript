/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TransactionDirectionType,
  TransactionDirectionType$inboundSchema,
  TransactionDirectionType$outboundSchema,
} from "./transactiondirectiontype.js";

export type TeleporterMessageInfo = {
  teleporterMessageId: string;
  direction: TransactionDirectionType;
  /**
   * chain id of the source chain. valid only for destination transactions
   */
  sourceChainId?: string | undefined;
  /**
   * chain id of the destination chain. valid only for source transactions
   */
  destinationChainId?: string | undefined;
};

/** @internal */
export const TeleporterMessageInfo$inboundSchema: z.ZodType<
  TeleporterMessageInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  teleporterMessageId: z.string(),
  direction: TransactionDirectionType$inboundSchema,
  sourceChainId: z.string().optional(),
  destinationChainId: z.string().optional(),
});

/** @internal */
export type TeleporterMessageInfo$Outbound = {
  teleporterMessageId: string;
  direction: string;
  sourceChainId?: string | undefined;
  destinationChainId?: string | undefined;
};

/** @internal */
export const TeleporterMessageInfo$outboundSchema: z.ZodType<
  TeleporterMessageInfo$Outbound,
  z.ZodTypeDef,
  TeleporterMessageInfo
> = z.object({
  teleporterMessageId: z.string(),
  direction: TransactionDirectionType$outboundSchema,
  sourceChainId: z.string().optional(),
  destinationChainId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeleporterMessageInfo$ {
  /** @deprecated use `TeleporterMessageInfo$inboundSchema` instead. */
  export const inboundSchema = TeleporterMessageInfo$inboundSchema;
  /** @deprecated use `TeleporterMessageInfo$outboundSchema` instead. */
  export const outboundSchema = TeleporterMessageInfo$outboundSchema;
  /** @deprecated use `TeleporterMessageInfo$Outbound` instead. */
  export type Outbound = TeleporterMessageInfo$Outbound;
}

export function teleporterMessageInfoToJSON(
  teleporterMessageInfo: TeleporterMessageInfo,
): string {
  return JSON.stringify(
    TeleporterMessageInfo$outboundSchema.parse(teleporterMessageInfo),
  );
}

export function teleporterMessageInfoFromJSON(
  jsonString: string,
): SafeParseResult<TeleporterMessageInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TeleporterMessageInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TeleporterMessageInfo' from JSON`,
  );
}
