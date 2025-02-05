/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Erc721TokenMetadata,
  Erc721TokenMetadata$inboundSchema,
  Erc721TokenMetadata$Outbound,
  Erc721TokenMetadata$outboundSchema,
} from "./erc721tokenmetadata.js";

export const Erc721TokenBalanceErcType = {
  Erc721: "ERC-721",
} as const;
export type Erc721TokenBalanceErcType = ClosedEnum<
  typeof Erc721TokenBalanceErcType
>;

export type Erc721TokenBalance = {
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
  ercType: Erc721TokenBalanceErcType;
  tokenId: string;
  tokenUri: string;
  metadata: Erc721TokenMetadata;
  /**
   * A wallet or contract address in mixed-case checksum encoding.
   */
  ownerAddress?: string | undefined;
  /**
   * The evm chain id.
   */
  chainId: string;
};

/** @internal */
export const Erc721TokenBalanceErcType$inboundSchema: z.ZodNativeEnum<
  typeof Erc721TokenBalanceErcType
> = z.nativeEnum(Erc721TokenBalanceErcType);

/** @internal */
export const Erc721TokenBalanceErcType$outboundSchema: z.ZodNativeEnum<
  typeof Erc721TokenBalanceErcType
> = Erc721TokenBalanceErcType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc721TokenBalanceErcType$ {
  /** @deprecated use `Erc721TokenBalanceErcType$inboundSchema` instead. */
  export const inboundSchema = Erc721TokenBalanceErcType$inboundSchema;
  /** @deprecated use `Erc721TokenBalanceErcType$outboundSchema` instead. */
  export const outboundSchema = Erc721TokenBalanceErcType$outboundSchema;
}

/** @internal */
export const Erc721TokenBalance$inboundSchema: z.ZodType<
  Erc721TokenBalance,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  ercType: Erc721TokenBalanceErcType$inboundSchema,
  tokenId: z.string(),
  tokenUri: z.string(),
  metadata: Erc721TokenMetadata$inboundSchema,
  ownerAddress: z.string().optional(),
  chainId: z.string(),
});

/** @internal */
export type Erc721TokenBalance$Outbound = {
  address: string;
  name: string;
  symbol: string;
  ercType: string;
  tokenId: string;
  tokenUri: string;
  metadata: Erc721TokenMetadata$Outbound;
  ownerAddress?: string | undefined;
  chainId: string;
};

/** @internal */
export const Erc721TokenBalance$outboundSchema: z.ZodType<
  Erc721TokenBalance$Outbound,
  z.ZodTypeDef,
  Erc721TokenBalance
> = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  ercType: Erc721TokenBalanceErcType$outboundSchema,
  tokenId: z.string(),
  tokenUri: z.string(),
  metadata: Erc721TokenMetadata$outboundSchema,
  ownerAddress: z.string().optional(),
  chainId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc721TokenBalance$ {
  /** @deprecated use `Erc721TokenBalance$inboundSchema` instead. */
  export const inboundSchema = Erc721TokenBalance$inboundSchema;
  /** @deprecated use `Erc721TokenBalance$outboundSchema` instead. */
  export const outboundSchema = Erc721TokenBalance$outboundSchema;
  /** @deprecated use `Erc721TokenBalance$Outbound` instead. */
  export type Outbound = Erc721TokenBalance$Outbound;
}

export function erc721TokenBalanceToJSON(
  erc721TokenBalance: Erc721TokenBalance,
): string {
  return JSON.stringify(
    Erc721TokenBalance$outboundSchema.parse(erc721TokenBalance),
  );
}

export function erc721TokenBalanceFromJSON(
  jsonString: string,
): SafeParseResult<Erc721TokenBalance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Erc721TokenBalance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Erc721TokenBalance' from JSON`,
  );
}
