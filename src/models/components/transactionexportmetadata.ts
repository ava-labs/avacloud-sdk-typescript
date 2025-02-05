/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OperationStatusCode,
  OperationStatusCode$inboundSchema,
  OperationStatusCode$outboundSchema,
} from "./operationstatuscode.js";

export type TransactionExportMetadata = {
  code?: OperationStatusCode | undefined;
  /**
   * File download URL. Provided only for COMPLETED and COMPLETED_WITH_WARNING operations.
   */
  downloadUrl?: string | undefined;
  /**
   * The next date (YYYY-MM-DD) to use as the firstDate in follow up requests if a request results in a transaction history exceeding the max size and has been reported as `COMPLETED_WITH_WARNING` with the warning 'WarnTruncatedExport'.
   */
  nextDate?: string | undefined;
};

/** @internal */
export const TransactionExportMetadata$inboundSchema: z.ZodType<
  TransactionExportMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: OperationStatusCode$inboundSchema.optional(),
  downloadUrl: z.string().optional(),
  nextDate: z.string().optional(),
});

/** @internal */
export type TransactionExportMetadata$Outbound = {
  code?: string | undefined;
  downloadUrl?: string | undefined;
  nextDate?: string | undefined;
};

/** @internal */
export const TransactionExportMetadata$outboundSchema: z.ZodType<
  TransactionExportMetadata$Outbound,
  z.ZodTypeDef,
  TransactionExportMetadata
> = z.object({
  code: OperationStatusCode$outboundSchema.optional(),
  downloadUrl: z.string().optional(),
  nextDate: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionExportMetadata$ {
  /** @deprecated use `TransactionExportMetadata$inboundSchema` instead. */
  export const inboundSchema = TransactionExportMetadata$inboundSchema;
  /** @deprecated use `TransactionExportMetadata$outboundSchema` instead. */
  export const outboundSchema = TransactionExportMetadata$outboundSchema;
  /** @deprecated use `TransactionExportMetadata$Outbound` instead. */
  export type Outbound = TransactionExportMetadata$Outbound;
}

export function transactionExportMetadataToJSON(
  transactionExportMetadata: TransactionExportMetadata,
): string {
  return JSON.stringify(
    TransactionExportMetadata$outboundSchema.parse(transactionExportMetadata),
  );
}

export function transactionExportMetadataFromJSON(
  jsonString: string,
): SafeParseResult<TransactionExportMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionExportMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionExportMetadata' from JSON`,
  );
}
