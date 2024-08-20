/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * When a client attempts to access resources that require
 *
 * @remarks
 *     authorization credentials but the client lacks proper authentication
 *     in the request, the server responds with 401.
 */
export type UnauthorizedData = {
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
 * When a client attempts to access resources that require
 *
 * @remarks
 *     authorization credentials but the client lacks proper authentication
 *     in the request, the server responds with 401.
 */
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
        const message =
            "message" in err && typeof err.message === "string"
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
export const Unauthorized$inboundSchema: z.ZodType<Unauthorized, z.ZodTypeDef, unknown> = z
    .object({
        message: z.array(z.string()),
        statusCode: z.number(),
        error: z.string(),
    })
    .transform((v) => {
        return new Unauthorized(v);
    });

/** @internal */
export type Unauthorized$Outbound = {
    message: Array<string>;
    statusCode: number;
    error: string;
};

/** @internal */
export const Unauthorized$outboundSchema: z.ZodType<
    Unauthorized$Outbound,
    z.ZodTypeDef,
    Unauthorized
> = z
    .instanceof(Unauthorized)
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
export namespace Unauthorized$ {
    /** @deprecated use `Unauthorized$inboundSchema` instead. */
    export const inboundSchema = Unauthorized$inboundSchema;
    /** @deprecated use `Unauthorized$outboundSchema` instead. */
    export const outboundSchema = Unauthorized$outboundSchema;
    /** @deprecated use `Unauthorized$Outbound` instead. */
    export type Outbound = Unauthorized$Outbound;
}
