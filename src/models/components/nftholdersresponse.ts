/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressDetails,
  AddressDetails$inboundSchema,
  AddressDetails$Outbound,
  AddressDetails$outboundSchema,
} from "./addressdetails.js";

export type NftHoldersResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  /**
   * List of addresses that match provided criteria.
   */
  addresses: Array<AddressDetails>;
  /**
   * NFT project name.
   */
  nftCollectionName?: Array<string> | undefined;
  /**
   * NFT symbol.
   */
  nftSymbol?: Array<string> | undefined;
  /**
   * Total number of holders of a given NFT project.
   */
  totalHolders: number;
  /**
   * Total number of tokens of a given NFT project.
   */
  totalTokens: number;
};

/** @internal */
export const NftHoldersResponse$inboundSchema: z.ZodType<
  NftHoldersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  addresses: z.array(AddressDetails$inboundSchema),
  nftCollectionName: z.array(z.string()).optional(),
  nftSymbol: z.array(z.string()).optional(),
  totalHolders: z.number(),
  totalTokens: z.number(),
});

/** @internal */
export type NftHoldersResponse$Outbound = {
  nextPageToken?: string | undefined;
  addresses: Array<AddressDetails$Outbound>;
  nftCollectionName?: Array<string> | undefined;
  nftSymbol?: Array<string> | undefined;
  totalHolders: number;
  totalTokens: number;
};

/** @internal */
export const NftHoldersResponse$outboundSchema: z.ZodType<
  NftHoldersResponse$Outbound,
  z.ZodTypeDef,
  NftHoldersResponse
> = z.object({
  nextPageToken: z.string().optional(),
  addresses: z.array(AddressDetails$outboundSchema),
  nftCollectionName: z.array(z.string()).optional(),
  nftSymbol: z.array(z.string()).optional(),
  totalHolders: z.number(),
  totalTokens: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NftHoldersResponse$ {
  /** @deprecated use `NftHoldersResponse$inboundSchema` instead. */
  export const inboundSchema = NftHoldersResponse$inboundSchema;
  /** @deprecated use `NftHoldersResponse$outboundSchema` instead. */
  export const outboundSchema = NftHoldersResponse$outboundSchema;
  /** @deprecated use `NftHoldersResponse$Outbound` instead. */
  export type Outbound = NftHoldersResponse$Outbound;
}

export function nftHoldersResponseToJSON(
  nftHoldersResponse: NftHoldersResponse,
): string {
  return JSON.stringify(
    NftHoldersResponse$outboundSchema.parse(nftHoldersResponse),
  );
}

export function nftHoldersResponseFromJSON(
  jsonString: string,
): SafeParseResult<NftHoldersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NftHoldersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NftHoldersResponse' from JSON`,
  );
}
