/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NetworkToken = {
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
  description?: string | undefined;
};

/** @internal */
export const NetworkToken$inboundSchema: z.ZodType<
  NetworkToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoUri: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type NetworkToken$Outbound = {
  name: string;
  symbol: string;
  decimals: number;
  logoUri?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const NetworkToken$outboundSchema: z.ZodType<
  NetworkToken$Outbound,
  z.ZodTypeDef,
  NetworkToken
> = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoUri: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NetworkToken$ {
  /** @deprecated use `NetworkToken$inboundSchema` instead. */
  export const inboundSchema = NetworkToken$inboundSchema;
  /** @deprecated use `NetworkToken$outboundSchema` instead. */
  export const outboundSchema = NetworkToken$outboundSchema;
  /** @deprecated use `NetworkToken$Outbound` instead. */
  export type Outbound = NetworkToken$Outbound;
}
