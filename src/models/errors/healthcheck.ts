/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { collectExtraKeys as collectExtraKeys$ } from "../../lib/schemas.js";
import * as z from "zod";

export type Info = {
    status?: string | undefined;
    additionalProperties: { [k: string]: string };
};

export type ErrorT = {
    status?: string | undefined;
    additionalProperties: { [k: string]: string };
};

export type Details = {
    status?: string | undefined;
    additionalProperties: { [k: string]: string };
};

/**
 * The Health Check is not successful
 */
export type HealthCheckResponseBodyData = {
    status?: string | undefined;
    info?: { [k: string]: Info } | null | undefined;
    error?: { [k: string]: ErrorT } | null | undefined;
    details?: { [k: string]: Details } | undefined;
};

/**
 * The Health Check is not successful
 */
export class HealthCheckResponseBody extends Error {
    status?: string | undefined;
    info?: { [k: string]: Info } | null | undefined;
    error?: { [k: string]: ErrorT } | null | undefined;
    details?: { [k: string]: Details } | undefined;

    /** The original data that was passed to this error instance. */
    data$: HealthCheckResponseBodyData;

    constructor(err: HealthCheckResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.status != null) {
            this.status = err.status;
        }
        if (err.info != null) {
            this.info = err.info;
        }
        if (err.error != null) {
            this.error = err.error;
        }
        if (err.details != null) {
            this.details = err.details;
        }

        this.name = "HealthCheckResponseBody";
    }
}

/** @internal */
export const Info$inboundSchema: z.ZodType<Info, z.ZodTypeDef, unknown> = collectExtraKeys$(
    z
        .object({
            status: z.string().optional(),
        })
        .catchall(z.string()),
    "additionalProperties"
);

/** @internal */
export type Info$Outbound = {
    status?: string | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const Info$outboundSchema: z.ZodType<Info$Outbound, z.ZodTypeDef, Info> = z
    .object({
        status: z.string().optional(),
        additionalProperties: z.record(z.string()),
    })
    .transform((v) => {
        return {
            ...v.additionalProperties,
            ...remap$(v, {
                additionalProperties: null,
            }),
        };
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Info$ {
    /** @deprecated use `Info$inboundSchema` instead. */
    export const inboundSchema = Info$inboundSchema;
    /** @deprecated use `Info$outboundSchema` instead. */
    export const outboundSchema = Info$outboundSchema;
    /** @deprecated use `Info$Outbound` instead. */
    export type Outbound = Info$Outbound;
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = collectExtraKeys$(
    z
        .object({
            status: z.string().optional(),
        })
        .catchall(z.string()),
    "additionalProperties"
);

/** @internal */
export type ErrorT$Outbound = {
    status?: string | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT> = z
    .object({
        status: z.string().optional(),
        additionalProperties: z.record(z.string()),
    })
    .transform((v) => {
        return {
            ...v.additionalProperties,
            ...remap$(v, {
                additionalProperties: null,
            }),
        };
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    export const inboundSchema = ErrorT$inboundSchema;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    export const outboundSchema = ErrorT$outboundSchema;
    /** @deprecated use `ErrorT$Outbound` instead. */
    export type Outbound = ErrorT$Outbound;
}

/** @internal */
export const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown> = collectExtraKeys$(
    z
        .object({
            status: z.string().optional(),
        })
        .catchall(z.string()),
    "additionalProperties"
);

/** @internal */
export type Details$Outbound = {
    status?: string | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const Details$outboundSchema: z.ZodType<Details$Outbound, z.ZodTypeDef, Details> = z
    .object({
        status: z.string().optional(),
        additionalProperties: z.record(z.string()),
    })
    .transform((v) => {
        return {
            ...v.additionalProperties,
            ...remap$(v, {
                additionalProperties: null,
            }),
        };
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Details$ {
    /** @deprecated use `Details$inboundSchema` instead. */
    export const inboundSchema = Details$inboundSchema;
    /** @deprecated use `Details$outboundSchema` instead. */
    export const outboundSchema = Details$outboundSchema;
    /** @deprecated use `Details$Outbound` instead. */
    export type Outbound = Details$Outbound;
}

/** @internal */
export const HealthCheckResponseBody$inboundSchema: z.ZodType<
    HealthCheckResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        status: z.string().optional(),
        info: z.nullable(z.record(z.lazy(() => Info$inboundSchema))).optional(),
        error: z.nullable(z.record(z.lazy(() => ErrorT$inboundSchema))).optional(),
        details: z.record(z.lazy(() => Details$inboundSchema)).optional(),
    })
    .transform((v) => {
        return new HealthCheckResponseBody(v);
    });

/** @internal */
export type HealthCheckResponseBody$Outbound = {
    status?: string | undefined;
    info?: { [k: string]: Info$Outbound } | null | undefined;
    error?: { [k: string]: ErrorT$Outbound } | null | undefined;
    details?: { [k: string]: Details$Outbound } | undefined;
};

/** @internal */
export const HealthCheckResponseBody$outboundSchema: z.ZodType<
    HealthCheckResponseBody$Outbound,
    z.ZodTypeDef,
    HealthCheckResponseBody
> = z
    .instanceof(HealthCheckResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            status: z.string().optional(),
            info: z.nullable(z.record(z.lazy(() => Info$outboundSchema))).optional(),
            error: z.nullable(z.record(z.lazy(() => ErrorT$outboundSchema))).optional(),
            details: z.record(z.lazy(() => Details$outboundSchema)).optional(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HealthCheckResponseBody$ {
    /** @deprecated use `HealthCheckResponseBody$inboundSchema` instead. */
    export const inboundSchema = HealthCheckResponseBody$inboundSchema;
    /** @deprecated use `HealthCheckResponseBody$outboundSchema` instead. */
    export const outboundSchema = HealthCheckResponseBody$outboundSchema;
    /** @deprecated use `HealthCheckResponseBody$Outbound` instead. */
    export type Outbound = HealthCheckResponseBody$Outbound;
}
