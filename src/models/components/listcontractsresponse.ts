/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Erc1155Contract,
  Erc1155Contract$inboundSchema,
  Erc1155Contract$Outbound,
  Erc1155Contract$outboundSchema,
} from "./erc1155contract.js";
import {
  Erc20Contract,
  Erc20Contract$inboundSchema,
  Erc20Contract$Outbound,
  Erc20Contract$outboundSchema,
} from "./erc20contract.js";
import {
  Erc721Contract,
  Erc721Contract$inboundSchema,
  Erc721Contract$Outbound,
  Erc721Contract$outboundSchema,
} from "./erc721contract.js";
import {
  UnknownContract,
  UnknownContract$inboundSchema,
  UnknownContract$Outbound,
  UnknownContract$outboundSchema,
} from "./unknowncontract.js";

export type Contracts =
  | (Erc20Contract & { ercType: "ERC-20" })
  | (Erc721Contract & { ercType: "ERC-721" })
  | (Erc1155Contract & { ercType: "ERC-1155" })
  | (UnknownContract & { ercType: "UNKNOWN" });

export type ListContractsResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  contracts: Array<
    | (Erc20Contract & { ercType: "ERC-20" })
    | (Erc721Contract & { ercType: "ERC-721" })
    | (Erc1155Contract & { ercType: "ERC-1155" })
    | (UnknownContract & { ercType: "UNKNOWN" })
  >;
};

/** @internal */
export const Contracts$inboundSchema: z.ZodType<
  Contracts,
  z.ZodTypeDef,
  unknown
> = z.union([
  Erc20Contract$inboundSchema.and(
    z.object({ ercType: z.literal("ERC-20") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
  Erc721Contract$inboundSchema.and(
    z.object({ ercType: z.literal("ERC-721") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
  Erc1155Contract$inboundSchema.and(
    z.object({ ercType: z.literal("ERC-1155") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
  UnknownContract$inboundSchema.and(
    z.object({ ercType: z.literal("UNKNOWN") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
]);

/** @internal */
export type Contracts$Outbound =
  | (Erc20Contract$Outbound & { ercType: "ERC-20" })
  | (Erc721Contract$Outbound & { ercType: "ERC-721" })
  | (Erc1155Contract$Outbound & { ercType: "ERC-1155" })
  | (UnknownContract$Outbound & { ercType: "UNKNOWN" });

/** @internal */
export const Contracts$outboundSchema: z.ZodType<
  Contracts$Outbound,
  z.ZodTypeDef,
  Contracts
> = z.union([
  Erc20Contract$outboundSchema.and(
    z.object({ ercType: z.literal("ERC-20") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
  Erc721Contract$outboundSchema.and(
    z.object({ ercType: z.literal("ERC-721") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
  Erc1155Contract$outboundSchema.and(
    z.object({ ercType: z.literal("ERC-1155") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
  UnknownContract$outboundSchema.and(
    z.object({ ercType: z.literal("UNKNOWN") }).transform((v) => ({
      ercType: v.ercType,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Contracts$ {
  /** @deprecated use `Contracts$inboundSchema` instead. */
  export const inboundSchema = Contracts$inboundSchema;
  /** @deprecated use `Contracts$outboundSchema` instead. */
  export const outboundSchema = Contracts$outboundSchema;
  /** @deprecated use `Contracts$Outbound` instead. */
  export type Outbound = Contracts$Outbound;
}

export function contractsToJSON(contracts: Contracts): string {
  return JSON.stringify(Contracts$outboundSchema.parse(contracts));
}

export function contractsFromJSON(
  jsonString: string,
): SafeParseResult<Contracts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Contracts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Contracts' from JSON`,
  );
}

/** @internal */
export const ListContractsResponse$inboundSchema: z.ZodType<
  ListContractsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  contracts: z.array(
    z.union([
      Erc20Contract$inboundSchema.and(
        z.object({ ercType: z.literal("ERC-20") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
      Erc721Contract$inboundSchema.and(
        z.object({ ercType: z.literal("ERC-721") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
      Erc1155Contract$inboundSchema.and(
        z.object({ ercType: z.literal("ERC-1155") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
      UnknownContract$inboundSchema.and(
        z.object({ ercType: z.literal("UNKNOWN") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
    ]),
  ),
});

/** @internal */
export type ListContractsResponse$Outbound = {
  nextPageToken?: string | undefined;
  contracts: Array<
    | (Erc20Contract$Outbound & { ercType: "ERC-20" })
    | (Erc721Contract$Outbound & { ercType: "ERC-721" })
    | (Erc1155Contract$Outbound & { ercType: "ERC-1155" })
    | (UnknownContract$Outbound & { ercType: "UNKNOWN" })
  >;
};

/** @internal */
export const ListContractsResponse$outboundSchema: z.ZodType<
  ListContractsResponse$Outbound,
  z.ZodTypeDef,
  ListContractsResponse
> = z.object({
  nextPageToken: z.string().optional(),
  contracts: z.array(
    z.union([
      Erc20Contract$outboundSchema.and(
        z.object({ ercType: z.literal("ERC-20") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
      Erc721Contract$outboundSchema.and(
        z.object({ ercType: z.literal("ERC-721") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
      Erc1155Contract$outboundSchema.and(
        z.object({ ercType: z.literal("ERC-1155") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
      UnknownContract$outboundSchema.and(
        z.object({ ercType: z.literal("UNKNOWN") }).transform((v) => ({
          ercType: v.ercType,
        })),
      ),
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListContractsResponse$ {
  /** @deprecated use `ListContractsResponse$inboundSchema` instead. */
  export const inboundSchema = ListContractsResponse$inboundSchema;
  /** @deprecated use `ListContractsResponse$outboundSchema` instead. */
  export const outboundSchema = ListContractsResponse$outboundSchema;
  /** @deprecated use `ListContractsResponse$Outbound` instead. */
  export type Outbound = ListContractsResponse$Outbound;
}

export function listContractsResponseToJSON(
  listContractsResponse: ListContractsResponse,
): string {
  return JSON.stringify(
    ListContractsResponse$outboundSchema.parse(listContractsResponse),
  );
}

export function listContractsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListContractsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListContractsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListContractsResponse' from JSON`,
  );
}
