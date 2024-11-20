/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NativeTokenBalance,
  NativeTokenBalance$inboundSchema,
  NativeTokenBalance$Outbound,
  NativeTokenBalance$outboundSchema,
} from "./nativetokenbalance.js";

export type GetNativeBalanceResponse = {
  /**
   * The native token balance for the address.
   */
  nativeTokenBalance: NativeTokenBalance;
};

/** @internal */
export const GetNativeBalanceResponse$inboundSchema: z.ZodType<
  GetNativeBalanceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nativeTokenBalance: NativeTokenBalance$inboundSchema,
});

/** @internal */
export type GetNativeBalanceResponse$Outbound = {
  nativeTokenBalance: NativeTokenBalance$Outbound;
};

/** @internal */
export const GetNativeBalanceResponse$outboundSchema: z.ZodType<
  GetNativeBalanceResponse$Outbound,
  z.ZodTypeDef,
  GetNativeBalanceResponse
> = z.object({
  nativeTokenBalance: NativeTokenBalance$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNativeBalanceResponse$ {
  /** @deprecated use `GetNativeBalanceResponse$inboundSchema` instead. */
  export const inboundSchema = GetNativeBalanceResponse$inboundSchema;
  /** @deprecated use `GetNativeBalanceResponse$outboundSchema` instead. */
  export const outboundSchema = GetNativeBalanceResponse$outboundSchema;
  /** @deprecated use `GetNativeBalanceResponse$Outbound` instead. */
  export type Outbound = GetNativeBalanceResponse$Outbound;
}

export function getNativeBalanceResponseToJSON(
  getNativeBalanceResponse: GetNativeBalanceResponse,
): string {
  return JSON.stringify(
    GetNativeBalanceResponse$outboundSchema.parse(getNativeBalanceResponse),
  );
}

export function getNativeBalanceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetNativeBalanceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetNativeBalanceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNativeBalanceResponse' from JSON`,
  );
}
