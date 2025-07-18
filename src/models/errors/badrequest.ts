/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { AvaCloudSDKError } from "./avacloudsdkerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * The error message describing the reason for the exception
 */
export type Message = string | Array<string>;

export type BadRequestData = {
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

export class BadRequest extends AvaCloudSDKError {
  /**
   * The type of error
   */
  error: string;

  /** The original data that was passed to this error instance. */
  data$: BadRequestData;

  constructor(
    err: BadRequestData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "BadRequest";
  }
}

/** @internal */
export const Message$inboundSchema: z.ZodType<Message, z.ZodTypeDef, unknown> =
  z.union([z.string(), z.array(z.string())]);

/** @internal */
export type Message$Outbound = string | Array<string>;

/** @internal */
export const Message$outboundSchema: z.ZodType<
  Message$Outbound,
  z.ZodTypeDef,
  Message
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Message$ {
  /** @deprecated use `Message$inboundSchema` instead. */
  export const inboundSchema = Message$inboundSchema;
  /** @deprecated use `Message$outboundSchema` instead. */
  export const outboundSchema = Message$outboundSchema;
  /** @deprecated use `Message$Outbound` instead. */
  export type Outbound = Message$Outbound;
}

export function messageToJSON(message: Message): string {
  return JSON.stringify(Message$outboundSchema.parse(message));
}

export function messageFromJSON(
  jsonString: string,
): SafeParseResult<Message, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Message$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Message' from JSON`,
  );
}

/** @internal */
export const BadRequest$inboundSchema: z.ZodType<
  BadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.union([z.string(), z.array(z.string())]),
  statusCode: z.number(),
  error: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new BadRequest(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type BadRequest$Outbound = {
  message: string | Array<string>;
  statusCode: number;
  error: string;
};

/** @internal */
export const BadRequest$outboundSchema: z.ZodType<
  BadRequest$Outbound,
  z.ZodTypeDef,
  BadRequest
> = z.instanceof(BadRequest)
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
export namespace BadRequest$ {
  /** @deprecated use `BadRequest$inboundSchema` instead. */
  export const inboundSchema = BadRequest$inboundSchema;
  /** @deprecated use `BadRequest$outboundSchema` instead. */
  export const outboundSchema = BadRequest$outboundSchema;
  /** @deprecated use `BadRequest$Outbound` instead. */
  export type Outbound = BadRequest$Outbound;
}
