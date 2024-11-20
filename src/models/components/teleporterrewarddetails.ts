/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Money,
  Money$inboundSchema,
  Money$Outbound,
  Money$outboundSchema,
} from "./money.js";

export const TeleporterRewardDetailsErcType = {
  Erc20: "ERC-20",
} as const;
export type TeleporterRewardDetailsErcType = ClosedEnum<
  typeof TeleporterRewardDetailsErcType
>;

export type TeleporterRewardDetails = {
  /**
   * A wallet or contract address in mixed-case checksum encoding.
   */
  address: string;
  /**
   * The contract name.
   */
  name: string;
  /**
   * The contract symbol.
   */
  symbol: string;
  /**
   * The number of decimals the token uses. For example `6`, means to divide the token amount by `1000000` to get its user representation.
   */
  decimals: number;
  /**
   * The logo uri for the address.
   */
  logoUri?: string | undefined;
  ercType: TeleporterRewardDetailsErcType;
  /**
   * The token price, if available.
   */
  price?: Money | undefined;
  value: string;
};

/** @internal */
export const TeleporterRewardDetailsErcType$inboundSchema: z.ZodNativeEnum<
  typeof TeleporterRewardDetailsErcType
> = z.nativeEnum(TeleporterRewardDetailsErcType);

/** @internal */
export const TeleporterRewardDetailsErcType$outboundSchema: z.ZodNativeEnum<
  typeof TeleporterRewardDetailsErcType
> = TeleporterRewardDetailsErcType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeleporterRewardDetailsErcType$ {
  /** @deprecated use `TeleporterRewardDetailsErcType$inboundSchema` instead. */
  export const inboundSchema = TeleporterRewardDetailsErcType$inboundSchema;
  /** @deprecated use `TeleporterRewardDetailsErcType$outboundSchema` instead. */
  export const outboundSchema = TeleporterRewardDetailsErcType$outboundSchema;
}

/** @internal */
export const TeleporterRewardDetails$inboundSchema: z.ZodType<
  TeleporterRewardDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoUri: z.string().optional(),
  ercType: TeleporterRewardDetailsErcType$inboundSchema,
  price: Money$inboundSchema.optional(),
  value: z.string(),
});

/** @internal */
export type TeleporterRewardDetails$Outbound = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoUri?: string | undefined;
  ercType: string;
  price?: Money$Outbound | undefined;
  value: string;
};

/** @internal */
export const TeleporterRewardDetails$outboundSchema: z.ZodType<
  TeleporterRewardDetails$Outbound,
  z.ZodTypeDef,
  TeleporterRewardDetails
> = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoUri: z.string().optional(),
  ercType: TeleporterRewardDetailsErcType$outboundSchema,
  price: Money$outboundSchema.optional(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeleporterRewardDetails$ {
  /** @deprecated use `TeleporterRewardDetails$inboundSchema` instead. */
  export const inboundSchema = TeleporterRewardDetails$inboundSchema;
  /** @deprecated use `TeleporterRewardDetails$outboundSchema` instead. */
  export const outboundSchema = TeleporterRewardDetails$outboundSchema;
  /** @deprecated use `TeleporterRewardDetails$Outbound` instead. */
  export type Outbound = TeleporterRewardDetails$Outbound;
}

export function teleporterRewardDetailsToJSON(
  teleporterRewardDetails: TeleporterRewardDetails,
): string {
  return JSON.stringify(
    TeleporterRewardDetails$outboundSchema.parse(teleporterRewardDetails),
  );
}

export function teleporterRewardDetailsFromJSON(
  jsonString: string,
): SafeParseResult<TeleporterRewardDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TeleporterRewardDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TeleporterRewardDetails' from JSON`,
  );
}
