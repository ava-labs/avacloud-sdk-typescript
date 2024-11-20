/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * The error message describing the reason for the exception
 */
export type ForbiddenMessage = string | Array<string>;

export type ForbiddenData = {
  /**
   * The error message describing the reason for the exception
   */
  message: string | Array<string>;
  /**
   * The HTTP status code of the response
   */
  statusCode: number;
  /**
   * The type of error
   */
  error: string;
};

export class Forbidden extends Error {
  /**
   * The HTTP status code of the response
   */
  statusCode: number;
  /**
   * The type of error
   */
  error: string;

  /** The original data that was passed to this error instance. */
  data$: ForbiddenData;

  constructor(err: ForbiddenData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.error = err.error;

    this.name = "Forbidden";
  }
}

/** @internal */
export const ForbiddenMessage$inboundSchema: z.ZodType<
  ForbiddenMessage,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ForbiddenMessage$Outbound = string | Array<string>;

/** @internal */
export const ForbiddenMessage$outboundSchema: z.ZodType<
  ForbiddenMessage$Outbound,
  z.ZodTypeDef,
  ForbiddenMessage
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenMessage$ {
  /** @deprecated use `ForbiddenMessage$inboundSchema` instead. */
  export const inboundSchema = ForbiddenMessage$inboundSchema;
  /** @deprecated use `ForbiddenMessage$outboundSchema` instead. */
  export const outboundSchema = ForbiddenMessage$outboundSchema;
  /** @deprecated use `ForbiddenMessage$Outbound` instead. */
  export type Outbound = ForbiddenMessage$Outbound;
}

export function forbiddenMessageToJSON(
  forbiddenMessage: ForbiddenMessage,
): string {
  return JSON.stringify(
    ForbiddenMessage$outboundSchema.parse(forbiddenMessage),
  );
}

export function forbiddenMessageFromJSON(
  jsonString: string,
): SafeParseResult<ForbiddenMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ForbiddenMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ForbiddenMessage' from JSON`,
  );
}

/** @internal */
export const Forbidden$inboundSchema: z.ZodType<
  Forbidden,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.union([z.string(), z.array(z.string())]),
  statusCode: z.number(),
  error: z.string(),
})
  .transform((v) => {
    return new Forbidden(v);
  });

/** @internal */
export type Forbidden$Outbound = {
  message: string | Array<string>;
  statusCode: number;
  error: string;
};

/** @internal */
export const Forbidden$outboundSchema: z.ZodType<
  Forbidden$Outbound,
  z.ZodTypeDef,
  Forbidden
> = z.instanceof(Forbidden)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.union([z.string(), z.array(z.string())]),
    statusCode: z.number(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Forbidden$ {
  /** @deprecated use `Forbidden$inboundSchema` instead. */
  export const inboundSchema = Forbidden$inboundSchema;
  /** @deprecated use `Forbidden$outboundSchema` instead. */
  export const outboundSchema = Forbidden$outboundSchema;
  /** @deprecated use `Forbidden$Outbound` instead. */
  export type Outbound = Forbidden$Outbound;
}
