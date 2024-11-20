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
export type UnauthorizedMessage = string | Array<string>;

export type UnauthorizedData = {
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

export class Unauthorized extends Error {
  /**
   * The HTTP status code of the response
   */
  statusCode: number;
  /**
   * The type of error
   */
  error: string;

  /** The original data that was passed to this error instance. */
  data$: UnauthorizedData;

  constructor(err: UnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.error = err.error;

    this.name = "Unauthorized";
  }
}

/** @internal */
export const UnauthorizedMessage$inboundSchema: z.ZodType<
  UnauthorizedMessage,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UnauthorizedMessage$Outbound = string | Array<string>;

/** @internal */
export const UnauthorizedMessage$outboundSchema: z.ZodType<
  UnauthorizedMessage$Outbound,
  z.ZodTypeDef,
  UnauthorizedMessage
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedMessage$ {
  /** @deprecated use `UnauthorizedMessage$inboundSchema` instead. */
  export const inboundSchema = UnauthorizedMessage$inboundSchema;
  /** @deprecated use `UnauthorizedMessage$outboundSchema` instead. */
  export const outboundSchema = UnauthorizedMessage$outboundSchema;
  /** @deprecated use `UnauthorizedMessage$Outbound` instead. */
  export type Outbound = UnauthorizedMessage$Outbound;
}

export function unauthorizedMessageToJSON(
  unauthorizedMessage: UnauthorizedMessage,
): string {
  return JSON.stringify(
    UnauthorizedMessage$outboundSchema.parse(unauthorizedMessage),
  );
}

export function unauthorizedMessageFromJSON(
  jsonString: string,
): SafeParseResult<UnauthorizedMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnauthorizedMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnauthorizedMessage' from JSON`,
  );
}

/** @internal */
export const Unauthorized$inboundSchema: z.ZodType<
  Unauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.union([z.string(), z.array(z.string())]),
  statusCode: z.number(),
  error: z.string(),
})
  .transform((v) => {
    return new Unauthorized(v);
  });

/** @internal */
export type Unauthorized$Outbound = {
  message: string | Array<string>;
  statusCode: number;
  error: string;
};

/** @internal */
export const Unauthorized$outboundSchema: z.ZodType<
  Unauthorized$Outbound,
  z.ZodTypeDef,
  Unauthorized
> = z.instanceof(Unauthorized)
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
export namespace Unauthorized$ {
  /** @deprecated use `Unauthorized$inboundSchema` instead. */
  export const inboundSchema = Unauthorized$inboundSchema;
  /** @deprecated use `Unauthorized$outboundSchema` instead. */
  export const outboundSchema = Unauthorized$outboundSchema;
  /** @deprecated use `Unauthorized$Outbound` instead. */
  export type Outbound = Unauthorized$Outbound;
}
