/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DateRangeErc20MinBalanceParam = {
  firstDate: string;
  lastDate: string;
  minBalance: string;
  evmChainId: string;
  contractAddress: string;
};

/** @internal */
export const DateRangeErc20MinBalanceParam$inboundSchema: z.ZodType<
  DateRangeErc20MinBalanceParam,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstDate: z.string(),
  lastDate: z.string(),
  minBalance: z.string(),
  evmChainId: z.string(),
  contractAddress: z.string(),
});

/** @internal */
export type DateRangeErc20MinBalanceParam$Outbound = {
  firstDate: string;
  lastDate: string;
  minBalance: string;
  evmChainId: string;
  contractAddress: string;
};

/** @internal */
export const DateRangeErc20MinBalanceParam$outboundSchema: z.ZodType<
  DateRangeErc20MinBalanceParam$Outbound,
  z.ZodTypeDef,
  DateRangeErc20MinBalanceParam
> = z.object({
  firstDate: z.string(),
  lastDate: z.string(),
  minBalance: z.string(),
  evmChainId: z.string(),
  contractAddress: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DateRangeErc20MinBalanceParam$ {
  /** @deprecated use `DateRangeErc20MinBalanceParam$inboundSchema` instead. */
  export const inboundSchema = DateRangeErc20MinBalanceParam$inboundSchema;
  /** @deprecated use `DateRangeErc20MinBalanceParam$outboundSchema` instead. */
  export const outboundSchema = DateRangeErc20MinBalanceParam$outboundSchema;
  /** @deprecated use `DateRangeErc20MinBalanceParam$Outbound` instead. */
  export type Outbound = DateRangeErc20MinBalanceParam$Outbound;
}

export function dateRangeErc20MinBalanceParamToJSON(
  dateRangeErc20MinBalanceParam: DateRangeErc20MinBalanceParam,
): string {
  return JSON.stringify(
    DateRangeErc20MinBalanceParam$outboundSchema.parse(
      dateRangeErc20MinBalanceParam,
    ),
  );
}

export function dateRangeErc20MinBalanceParamFromJSON(
  jsonString: string,
): SafeParseResult<DateRangeErc20MinBalanceParam, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DateRangeErc20MinBalanceParam$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DateRangeErc20MinBalanceParam' from JSON`,
  );
}
