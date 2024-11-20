/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChainInfo,
  ChainInfo$inboundSchema,
  ChainInfo$Outbound,
  ChainInfo$outboundSchema,
} from "./chaininfo.js";

export type DataListChainsResponse = {
  chains: Array<ChainInfo>;
};

/** @internal */
export const DataListChainsResponse$inboundSchema: z.ZodType<
  DataListChainsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  chains: z.array(ChainInfo$inboundSchema),
});

/** @internal */
export type DataListChainsResponse$Outbound = {
  chains: Array<ChainInfo$Outbound>;
};

/** @internal */
export const DataListChainsResponse$outboundSchema: z.ZodType<
  DataListChainsResponse$Outbound,
  z.ZodTypeDef,
  DataListChainsResponse
> = z.object({
  chains: z.array(ChainInfo$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataListChainsResponse$ {
  /** @deprecated use `DataListChainsResponse$inboundSchema` instead. */
  export const inboundSchema = DataListChainsResponse$inboundSchema;
  /** @deprecated use `DataListChainsResponse$outboundSchema` instead. */
  export const outboundSchema = DataListChainsResponse$outboundSchema;
  /** @deprecated use `DataListChainsResponse$Outbound` instead. */
  export type Outbound = DataListChainsResponse$Outbound;
}

export function dataListChainsResponseToJSON(
  dataListChainsResponse: DataListChainsResponse,
): string {
  return JSON.stringify(
    DataListChainsResponse$outboundSchema.parse(dataListChainsResponse),
  );
}

export function dataListChainsResponseFromJSON(
  jsonString: string,
): SafeParseResult<DataListChainsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataListChainsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataListChainsResponse' from JSON`,
  );
}
