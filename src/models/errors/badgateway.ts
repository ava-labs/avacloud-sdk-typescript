/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The error message describing the reason for the exception
 */
export type BadGatewayMessage = string | Array<string>;

/**
 * This is an internal error indicating invalid response
 *
 * @remarks
 *       received by the client-facing proxy or gateway from the upstream server.
 */
export type BadGatewayData = {
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

/**
 * This is an internal error indicating invalid response
 *
 * @remarks
 *       received by the client-facing proxy or gateway from the upstream server.
 */
export class BadGateway extends Error {
  /**
   * The HTTP status code of the response
   */
  statusCode: number;
  /**
   * The type of error
   */
  error: string;

  /** The original data that was passed to this error instance. */
  data$: BadGatewayData;

  constructor(err: BadGatewayData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.error = err.error;

    this.name = "BadGateway";
  }
}

/** @internal */
export const BadGatewayMessage$inboundSchema: z.ZodType<
  BadGatewayMessage,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type BadGatewayMessage$Outbound = string | Array<string>;

/** @internal */
export const BadGatewayMessage$outboundSchema: z.ZodType<
  BadGatewayMessage$Outbound,
  z.ZodTypeDef,
  BadGatewayMessage
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadGatewayMessage$ {
  /** @deprecated use `BadGatewayMessage$inboundSchema` instead. */
  export const inboundSchema = BadGatewayMessage$inboundSchema;
  /** @deprecated use `BadGatewayMessage$outboundSchema` instead. */
  export const outboundSchema = BadGatewayMessage$outboundSchema;
  /** @deprecated use `BadGatewayMessage$Outbound` instead. */
  export type Outbound = BadGatewayMessage$Outbound;
}

/** @internal */
export const BadGateway$inboundSchema: z.ZodType<
  BadGateway,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.union([z.string(), z.array(z.string())]),
  statusCode: z.number(),
  error: z.string(),
})
  .transform((v) => {
    return new BadGateway(v);
  });

/** @internal */
export type BadGateway$Outbound = {
  message: string | Array<string>;
  statusCode: number;
  error: string;
};

/** @internal */
export const BadGateway$outboundSchema: z.ZodType<
  BadGateway$Outbound,
  z.ZodTypeDef,
  BadGateway
> = z.instanceof(BadGateway)
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
export namespace BadGateway$ {
  /** @deprecated use `BadGateway$inboundSchema` instead. */
  export const inboundSchema = BadGateway$inboundSchema;
  /** @deprecated use `BadGateway$outboundSchema` instead. */
  export const outboundSchema = BadGateway$outboundSchema;
  /** @deprecated use `BadGateway$Outbound` instead. */
  export type Outbound = BadGateway$Outbound;
}
