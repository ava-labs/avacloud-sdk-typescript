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

export const Erc20TokenBalanceErcType = {
  Erc20: "ERC-20",
} as const;
export type Erc20TokenBalanceErcType = ClosedEnum<
  typeof Erc20TokenBalanceErcType
>;

/**
 * Indicates the reputation of the token based on a security analysis. 'Benign' suggests the token is likely safe, while 'Malicious' indicates potential security risks. This field is nullable and is only populated for tokens on the C-Chain. Possible values are 'Benign', 'Malicious', or null if the reputation is unknown.
 */
export const TokenReputation = {
  Malicious: "Malicious",
  Benign: "Benign",
} as const;
/**
 * Indicates the reputation of the token based on a security analysis. 'Benign' suggests the token is likely safe, while 'Malicious' indicates potential security risks. This field is nullable and is only populated for tokens on the C-Chain. Possible values are 'Benign', 'Malicious', or null if the reputation is unknown.
 */
export type TokenReputation = ClosedEnum<typeof TokenReputation>;

export type Erc20TokenBalance = {
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
  ercType: Erc20TokenBalanceErcType;
  /**
   * The token price, if available.
   */
  price?: Money | undefined;
  /**
   * The evm chain id.
   */
  chainId: string;
  /**
   * The address balance for the token, in units specified by the `decimals` value for the contract.
   */
  balance: string;
  /**
   * The monetary value of the balance, if a price is available for the token.
   */
  balanceValue?: Money | undefined;
  /**
   * Indicates the reputation of the token based on a security analysis. 'Benign' suggests the token is likely safe, while 'Malicious' indicates potential security risks. This field is nullable and is only populated for tokens on the C-Chain. Possible values are 'Benign', 'Malicious', or null if the reputation is unknown.
   */
  tokenReputation: TokenReputation | null;
};

/** @internal */
export const Erc20TokenBalanceErcType$inboundSchema: z.ZodNativeEnum<
  typeof Erc20TokenBalanceErcType
> = z.nativeEnum(Erc20TokenBalanceErcType);

/** @internal */
export const Erc20TokenBalanceErcType$outboundSchema: z.ZodNativeEnum<
  typeof Erc20TokenBalanceErcType
> = Erc20TokenBalanceErcType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc20TokenBalanceErcType$ {
  /** @deprecated use `Erc20TokenBalanceErcType$inboundSchema` instead. */
  export const inboundSchema = Erc20TokenBalanceErcType$inboundSchema;
  /** @deprecated use `Erc20TokenBalanceErcType$outboundSchema` instead. */
  export const outboundSchema = Erc20TokenBalanceErcType$outboundSchema;
}

/** @internal */
export const TokenReputation$inboundSchema: z.ZodNativeEnum<
  typeof TokenReputation
> = z.nativeEnum(TokenReputation);

/** @internal */
export const TokenReputation$outboundSchema: z.ZodNativeEnum<
  typeof TokenReputation
> = TokenReputation$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TokenReputation$ {
  /** @deprecated use `TokenReputation$inboundSchema` instead. */
  export const inboundSchema = TokenReputation$inboundSchema;
  /** @deprecated use `TokenReputation$outboundSchema` instead. */
  export const outboundSchema = TokenReputation$outboundSchema;
}

/** @internal */
export const Erc20TokenBalance$inboundSchema: z.ZodType<
  Erc20TokenBalance,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoUri: z.string().optional(),
  ercType: Erc20TokenBalanceErcType$inboundSchema,
  price: Money$inboundSchema.optional(),
  chainId: z.string(),
  balance: z.string(),
  balanceValue: Money$inboundSchema.optional(),
  tokenReputation: z.nullable(TokenReputation$inboundSchema),
});

/** @internal */
export type Erc20TokenBalance$Outbound = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoUri?: string | undefined;
  ercType: string;
  price?: Money$Outbound | undefined;
  chainId: string;
  balance: string;
  balanceValue?: Money$Outbound | undefined;
  tokenReputation: string | null;
};

/** @internal */
export const Erc20TokenBalance$outboundSchema: z.ZodType<
  Erc20TokenBalance$Outbound,
  z.ZodTypeDef,
  Erc20TokenBalance
> = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoUri: z.string().optional(),
  ercType: Erc20TokenBalanceErcType$outboundSchema,
  price: Money$outboundSchema.optional(),
  chainId: z.string(),
  balance: z.string(),
  balanceValue: Money$outboundSchema.optional(),
  tokenReputation: z.nullable(TokenReputation$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc20TokenBalance$ {
  /** @deprecated use `Erc20TokenBalance$inboundSchema` instead. */
  export const inboundSchema = Erc20TokenBalance$inboundSchema;
  /** @deprecated use `Erc20TokenBalance$outboundSchema` instead. */
  export const outboundSchema = Erc20TokenBalance$outboundSchema;
  /** @deprecated use `Erc20TokenBalance$Outbound` instead. */
  export type Outbound = Erc20TokenBalance$Outbound;
}

export function erc20TokenBalanceToJSON(
  erc20TokenBalance: Erc20TokenBalance,
): string {
  return JSON.stringify(
    Erc20TokenBalance$outboundSchema.parse(erc20TokenBalance),
  );
}

export function erc20TokenBalanceFromJSON(
  jsonString: string,
): SafeParseResult<Erc20TokenBalance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Erc20TokenBalance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Erc20TokenBalance' from JSON`,
  );
}
