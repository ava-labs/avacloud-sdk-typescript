/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NftTokenMetadataStatus,
  NftTokenMetadataStatus$inboundSchema,
  NftTokenMetadataStatus$outboundSchema,
} from "./nfttokenmetadatastatus.js";

export type Erc1155TokenMetadata = {
  /**
   * The metadata indexing status of the nft.
   */
  indexStatus: NftTokenMetadataStatus;
  metadataLastUpdatedTimestamp?: number | undefined;
  name?: string | undefined;
  symbol?: string | undefined;
  imageUri?: string | undefined;
  description?: string | undefined;
  animationUri?: string | undefined;
  externalUrl?: string | undefined;
  background?: string | undefined;
  decimals?: number | undefined;
  properties?: string | undefined;
};

/** @internal */
export const Erc1155TokenMetadata$inboundSchema: z.ZodType<
  Erc1155TokenMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  indexStatus: NftTokenMetadataStatus$inboundSchema,
  metadataLastUpdatedTimestamp: z.number().optional(),
  name: z.string().optional(),
  symbol: z.string().optional(),
  imageUri: z.string().optional(),
  description: z.string().optional(),
  animationUri: z.string().optional(),
  externalUrl: z.string().optional(),
  background: z.string().optional(),
  decimals: z.number().optional(),
  properties: z.string().optional(),
});

/** @internal */
export type Erc1155TokenMetadata$Outbound = {
  indexStatus: string;
  metadataLastUpdatedTimestamp?: number | undefined;
  name?: string | undefined;
  symbol?: string | undefined;
  imageUri?: string | undefined;
  description?: string | undefined;
  animationUri?: string | undefined;
  externalUrl?: string | undefined;
  background?: string | undefined;
  decimals?: number | undefined;
  properties?: string | undefined;
};

/** @internal */
export const Erc1155TokenMetadata$outboundSchema: z.ZodType<
  Erc1155TokenMetadata$Outbound,
  z.ZodTypeDef,
  Erc1155TokenMetadata
> = z.object({
  indexStatus: NftTokenMetadataStatus$outboundSchema,
  metadataLastUpdatedTimestamp: z.number().optional(),
  name: z.string().optional(),
  symbol: z.string().optional(),
  imageUri: z.string().optional(),
  description: z.string().optional(),
  animationUri: z.string().optional(),
  externalUrl: z.string().optional(),
  background: z.string().optional(),
  decimals: z.number().optional(),
  properties: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Erc1155TokenMetadata$ {
  /** @deprecated use `Erc1155TokenMetadata$inboundSchema` instead. */
  export const inboundSchema = Erc1155TokenMetadata$inboundSchema;
  /** @deprecated use `Erc1155TokenMetadata$outboundSchema` instead. */
  export const outboundSchema = Erc1155TokenMetadata$outboundSchema;
  /** @deprecated use `Erc1155TokenMetadata$Outbound` instead. */
  export type Outbound = Erc1155TokenMetadata$Outbound;
}

export function erc1155TokenMetadataToJSON(
  erc1155TokenMetadata: Erc1155TokenMetadata,
): string {
  return JSON.stringify(
    Erc1155TokenMetadata$outboundSchema.parse(erc1155TokenMetadata),
  );
}

export function erc1155TokenMetadataFromJSON(
  jsonString: string,
): SafeParseResult<Erc1155TokenMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Erc1155TokenMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Erc1155TokenMetadata' from JSON`,
  );
}
