/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The error message describing the reason for the exception
 */
export type TooManyRequestsMessage = string | Array<string>;

/**
 * This error is returned when the client has sent too many,
 *
 * @remarks
 *     and has hit the rate limit.
 */
export type TooManyRequestsData = {
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
 * This error is returned when the client has sent too many,
 *
 * @remarks
 *     and has hit the rate limit.
 */
export class TooManyRequests extends Error {
    /**
     * The HTTP status code of the response
     */
    statusCode: number;
    /**
     * The type of error
     */
    error: string;

    /** The original data that was passed to this error instance. */
    data$: TooManyRequestsData;

    constructor(err: TooManyRequestsData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.statusCode = err.statusCode;
        this.error = err.error;

        this.name = "TooManyRequests";
    }
}

/** @internal */
export const TooManyRequestsMessage$inboundSchema: z.ZodType<
    TooManyRequestsMessage,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type TooManyRequestsMessage$Outbound = string | Array<string>;

/** @internal */
export const TooManyRequestsMessage$outboundSchema: z.ZodType<
    TooManyRequestsMessage$Outbound,
    z.ZodTypeDef,
    TooManyRequestsMessage
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TooManyRequestsMessage$ {
    /** @deprecated use `TooManyRequestsMessage$inboundSchema` instead. */
    export const inboundSchema = TooManyRequestsMessage$inboundSchema;
    /** @deprecated use `TooManyRequestsMessage$outboundSchema` instead. */
    export const outboundSchema = TooManyRequestsMessage$outboundSchema;
    /** @deprecated use `TooManyRequestsMessage$Outbound` instead. */
    export type Outbound = TooManyRequestsMessage$Outbound;
}

/** @internal */
export const TooManyRequests$inboundSchema: z.ZodType<TooManyRequests, z.ZodTypeDef, unknown> = z
    .object({
        message: z.union([z.string(), z.array(z.string())]),
        statusCode: z.number(),
        error: z.string(),
    })
    .transform((v) => {
        return new TooManyRequests(v);
    });

/** @internal */
export type TooManyRequests$Outbound = {
    message: string | Array<string>;
    statusCode: number;
    error: string;
};

/** @internal */
export const TooManyRequests$outboundSchema: z.ZodType<
    TooManyRequests$Outbound,
    z.ZodTypeDef,
    TooManyRequests
> = z
    .instanceof(TooManyRequests)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            message: z.union([z.string(), z.array(z.string())]),
            statusCode: z.number(),
            error: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TooManyRequests$ {
    /** @deprecated use `TooManyRequests$inboundSchema` instead. */
    export const inboundSchema = TooManyRequests$inboundSchema;
    /** @deprecated use `TooManyRequests$outboundSchema` instead. */
    export const outboundSchema = TooManyRequests$outboundSchema;
    /** @deprecated use `TooManyRequests$Outbound` instead. */
    export type Outbound = TooManyRequests$Outbound;
}