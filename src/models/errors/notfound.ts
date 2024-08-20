/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The error is mostly returned when the client requests
 *
 * @remarks
 *     with either mistyped URL, or the passed resource is moved or deleted,
 *     or the resource doesn't exist.
 */
export type NotFoundData = {
    /**
     * The error message describing the reason for the exception
     */
    message: Array<string>;
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
 * The error is mostly returned when the client requests
 *
 * @remarks
 *     with either mistyped URL, or the passed resource is moved or deleted,
 *     or the resource doesn't exist.
 */
export class NotFound extends Error {
    /**
     * The HTTP status code of the response
     */
    statusCode: number;
    /**
     * The type of error
     */
    error: string;

    /** The original data that was passed to this error instance. */
    data$: NotFoundData;

    constructor(err: NotFoundData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.statusCode = err.statusCode;
        this.error = err.error;

        this.name = "NotFound";
    }
}

/** @internal */
export const NotFound$inboundSchema: z.ZodType<NotFound, z.ZodTypeDef, unknown> = z
    .object({
        message: z.array(z.string()),
        statusCode: z.number(),
        error: z.string(),
    })
    .transform((v) => {
        return new NotFound(v);
    });

/** @internal */
export type NotFound$Outbound = {
    message: Array<string>;
    statusCode: number;
    error: string;
};

/** @internal */
export const NotFound$outboundSchema: z.ZodType<NotFound$Outbound, z.ZodTypeDef, NotFound> = z
    .instanceof(NotFound)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            message: z.array(z.string()),
            statusCode: z.number(),
            error: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFound$ {
    /** @deprecated use `NotFound$inboundSchema` instead. */
    export const inboundSchema = NotFound$inboundSchema;
    /** @deprecated use `NotFound$outboundSchema` instead. */
    export const outboundSchema = NotFound$outboundSchema;
    /** @deprecated use `NotFound$Outbound` instead. */
    export type Outbound = NotFound$Outbound;
}
