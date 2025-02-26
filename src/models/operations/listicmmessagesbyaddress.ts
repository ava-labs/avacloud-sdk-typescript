/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListIcmMessagesByAddressServerList = [
  "https://glacier-api.avax.network",
] as const;

export type ListIcmMessagesByAddressRequest = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
   */
  pageSize?: number | undefined;
  /**
   * An EVM address.
   */
  address: string;
  /**
   * Either mainnet or testnet/fuji.
   */
  network?: components.Network | undefined;
};

/** @internal */
export const ListIcmMessagesByAddressRequest$inboundSchema: z.ZodType<
  ListIcmMessagesByAddressRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  address: z.string(),
  network: components.Network$inboundSchema.optional(),
});

/** @internal */
export type ListIcmMessagesByAddressRequest$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  address: string;
  network?: string | undefined;
};

/** @internal */
export const ListIcmMessagesByAddressRequest$outboundSchema: z.ZodType<
  ListIcmMessagesByAddressRequest$Outbound,
  z.ZodTypeDef,
  ListIcmMessagesByAddressRequest
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(10),
  address: z.string(),
  network: components.Network$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIcmMessagesByAddressRequest$ {
  /** @deprecated use `ListIcmMessagesByAddressRequest$inboundSchema` instead. */
  export const inboundSchema = ListIcmMessagesByAddressRequest$inboundSchema;
  /** @deprecated use `ListIcmMessagesByAddressRequest$outboundSchema` instead. */
  export const outboundSchema = ListIcmMessagesByAddressRequest$outboundSchema;
  /** @deprecated use `ListIcmMessagesByAddressRequest$Outbound` instead. */
  export type Outbound = ListIcmMessagesByAddressRequest$Outbound;
}

export function listIcmMessagesByAddressRequestToJSON(
  listIcmMessagesByAddressRequest: ListIcmMessagesByAddressRequest,
): string {
  return JSON.stringify(
    ListIcmMessagesByAddressRequest$outboundSchema.parse(
      listIcmMessagesByAddressRequest,
    ),
  );
}

export function listIcmMessagesByAddressRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIcmMessagesByAddressRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIcmMessagesByAddressRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIcmMessagesByAddressRequest' from JSON`,
  );
}
