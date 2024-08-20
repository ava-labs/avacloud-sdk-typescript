/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The error is returned for certain routes on a particular
 *
 * @remarks
 *     Subnet. This indicates an internal problem with our Subnet node, and may
 *     not necessarily mean the Subnet is down or affected.
 */
export type ServiceUnavailableData = {
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
 * The error is returned for certain routes on a particular
 *
 * @remarks
 *     Subnet. This indicates an internal problem with our Subnet node, and may
 *     not necessarily mean the Subnet is down or affected.
 */
export class ServiceUnavailable extends Error {
    /**
     * The HTTP status code of the response
     */
    statusCode: number;
    /**
     * The type of error
     */
    error: string;

    /** The original data that was passed to this error instance. */
    data$: ServiceUnavailableData;

    constructor(err: ServiceUnavailableData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.statusCode = err.statusCode;
        this.error = err.error;

        this.name = "ServiceUnavailable";
    }
}

/** @internal */
export const ServiceUnavailable$inboundSchema: z.ZodType<
    ServiceUnavailable,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        message: z.array(z.string()),
        statusCode: z.number(),
        error: z.string(),
    })
    .transform((v) => {
        return new ServiceUnavailable(v);
    });

/** @internal */
export type ServiceUnavailable$Outbound = {
    message: Array<string>;
    statusCode: number;
    error: string;
};

/** @internal */
export const ServiceUnavailable$outboundSchema: z.ZodType<
    ServiceUnavailable$Outbound,
    z.ZodTypeDef,
    ServiceUnavailable
> = z
    .instanceof(ServiceUnavailable)
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
export namespace ServiceUnavailable$ {
    /** @deprecated use `ServiceUnavailable$inboundSchema` instead. */
    export const inboundSchema = ServiceUnavailable$inboundSchema;
    /** @deprecated use `ServiceUnavailable$outboundSchema` instead. */
    export const outboundSchema = ServiceUnavailable$outboundSchema;
    /** @deprecated use `ServiceUnavailable$Outbound` instead. */
    export type Outbound = ServiceUnavailable$Outbound;
}
