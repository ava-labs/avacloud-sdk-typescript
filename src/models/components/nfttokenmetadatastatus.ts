/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The metadata indexing status of the nft.
 */
export const NftTokenMetadataStatus = {
    Unknown: "UNKNOWN",
    MissingToken: "MISSING_TOKEN",
    InvalidTokenUri: "INVALID_TOKEN_URI",
    InvalidTokenUriScheme: "INVALID_TOKEN_URI_SCHEME",
    UnreachableTokenUri: "UNREACHABLE_TOKEN_URI",
    ThrottledTokenUri: "THROTTLED_TOKEN_URI",
    MetadataContentTooLarge: "METADATA_CONTENT_TOO_LARGE",
    InvalidMetadata: "INVALID_METADATA",
    InvalidMetadataJson: "INVALID_METADATA_JSON",
    Indexed: "INDEXED",
    Unindexed: "UNINDEXED",
} as const;
/**
 * The metadata indexing status of the nft.
 */
export type NftTokenMetadataStatus = ClosedEnum<typeof NftTokenMetadataStatus>;

/** @internal */
export const NftTokenMetadataStatus$inboundSchema: z.ZodNativeEnum<typeof NftTokenMetadataStatus> =
    z.nativeEnum(NftTokenMetadataStatus);

/** @internal */
export const NftTokenMetadataStatus$outboundSchema: z.ZodNativeEnum<typeof NftTokenMetadataStatus> =
    NftTokenMetadataStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NftTokenMetadataStatus$ {
    /** @deprecated use `NftTokenMetadataStatus$inboundSchema` instead. */
    export const inboundSchema = NftTokenMetadataStatus$inboundSchema;
    /** @deprecated use `NftTokenMetadataStatus$outboundSchema` instead. */
    export const outboundSchema = NftTokenMetadataStatus$outboundSchema;
}
