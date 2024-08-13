/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { collectExtraKeys as collectExtraKeys$ } from "../../lib/schemas.js";
import * as z from "zod";

export const HealthCheckV2ServerList = ["http://localhost:3001"] as const;

export type HealthCheckV2Info = {
    status?: string | undefined;
    additionalProperties: { [k: string]: string };
};

export type HealthCheckV2Error = {
    status?: string | undefined;
    additionalProperties: { [k: string]: string };
};

export type HealthCheckV2Details = {
    status?: string | undefined;
    additionalProperties: { [k: string]: string };
};

/**
 * The Health Check is successful
 */
export type HealthCheckV2ResponseBody = {
    status?: string | undefined;
    info?: { [k: string]: HealthCheckV2Info } | null | undefined;
    error?: { [k: string]: HealthCheckV2Error } | null | undefined;
    details?: { [k: string]: HealthCheckV2Details } | undefined;
};

/** @internal */
export const HealthCheckV2Info$inboundSchema: z.ZodType<HealthCheckV2Info, z.ZodTypeDef, unknown> =
    collectExtraKeys$(
        z
            .object({
                status: z.string().optional(),
            })
            .catchall(z.string()),
        "additionalProperties"
    );

/** @internal */
export type HealthCheckV2Info$Outbound = {
    status?: string | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const HealthCheckV2Info$outboundSchema: z.ZodType<
    HealthCheckV2Info$Outbound,
    z.ZodTypeDef,
    HealthCheckV2Info
> = z
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
export namespace HealthCheckV2Info$ {
    /** @deprecated use `HealthCheckV2Info$inboundSchema` instead. */
    export const inboundSchema = HealthCheckV2Info$inboundSchema;
    /** @deprecated use `HealthCheckV2Info$outboundSchema` instead. */
    export const outboundSchema = HealthCheckV2Info$outboundSchema;
    /** @deprecated use `HealthCheckV2Info$Outbound` instead. */
    export type Outbound = HealthCheckV2Info$Outbound;
}

/** @internal */
export const HealthCheckV2Error$inboundSchema: z.ZodType<
    HealthCheckV2Error,
    z.ZodTypeDef,
    unknown
> = collectExtraKeys$(
    z
        .object({
            status: z.string().optional(),
        })
        .catchall(z.string()),
    "additionalProperties"
);

/** @internal */
export type HealthCheckV2Error$Outbound = {
    status?: string | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const HealthCheckV2Error$outboundSchema: z.ZodType<
    HealthCheckV2Error$Outbound,
    z.ZodTypeDef,
    HealthCheckV2Error
> = z
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
export namespace HealthCheckV2Error$ {
    /** @deprecated use `HealthCheckV2Error$inboundSchema` instead. */
    export const inboundSchema = HealthCheckV2Error$inboundSchema;
    /** @deprecated use `HealthCheckV2Error$outboundSchema` instead. */
    export const outboundSchema = HealthCheckV2Error$outboundSchema;
    /** @deprecated use `HealthCheckV2Error$Outbound` instead. */
    export type Outbound = HealthCheckV2Error$Outbound;
}

/** @internal */
export const HealthCheckV2Details$inboundSchema: z.ZodType<
    HealthCheckV2Details,
    z.ZodTypeDef,
    unknown
> = collectExtraKeys$(
    z
        .object({
            status: z.string().optional(),
        })
        .catchall(z.string()),
    "additionalProperties"
);

/** @internal */
export type HealthCheckV2Details$Outbound = {
    status?: string | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const HealthCheckV2Details$outboundSchema: z.ZodType<
    HealthCheckV2Details$Outbound,
    z.ZodTypeDef,
    HealthCheckV2Details
> = z
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
export namespace HealthCheckV2Details$ {
    /** @deprecated use `HealthCheckV2Details$inboundSchema` instead. */
    export const inboundSchema = HealthCheckV2Details$inboundSchema;
    /** @deprecated use `HealthCheckV2Details$outboundSchema` instead. */
    export const outboundSchema = HealthCheckV2Details$outboundSchema;
    /** @deprecated use `HealthCheckV2Details$Outbound` instead. */
    export type Outbound = HealthCheckV2Details$Outbound;
}

/** @internal */
export const HealthCheckV2ResponseBody$inboundSchema: z.ZodType<
    HealthCheckV2ResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    status: z.string().optional(),
    info: z.nullable(z.record(z.lazy(() => HealthCheckV2Info$inboundSchema))).optional(),
    error: z.nullable(z.record(z.lazy(() => HealthCheckV2Error$inboundSchema))).optional(),
    details: z.record(z.lazy(() => HealthCheckV2Details$inboundSchema)).optional(),
});

/** @internal */
export type HealthCheckV2ResponseBody$Outbound = {
    status?: string | undefined;
    info?: { [k: string]: HealthCheckV2Info$Outbound } | null | undefined;
    error?: { [k: string]: HealthCheckV2Error$Outbound } | null | undefined;
    details?: { [k: string]: HealthCheckV2Details$Outbound } | undefined;
};

/** @internal */
export const HealthCheckV2ResponseBody$outboundSchema: z.ZodType<
    HealthCheckV2ResponseBody$Outbound,
    z.ZodTypeDef,
    HealthCheckV2ResponseBody
> = z.object({
    status: z.string().optional(),
    info: z.nullable(z.record(z.lazy(() => HealthCheckV2Info$outboundSchema))).optional(),
    error: z.nullable(z.record(z.lazy(() => HealthCheckV2Error$outboundSchema))).optional(),
    details: z.record(z.lazy(() => HealthCheckV2Details$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HealthCheckV2ResponseBody$ {
    /** @deprecated use `HealthCheckV2ResponseBody$inboundSchema` instead. */
    export const inboundSchema = HealthCheckV2ResponseBody$inboundSchema;
    /** @deprecated use `HealthCheckV2ResponseBody$outboundSchema` instead. */
    export const outboundSchema = HealthCheckV2ResponseBody$outboundSchema;
    /** @deprecated use `HealthCheckV2ResponseBody$Outbound` instead. */
    export type Outbound = HealthCheckV2ResponseBody$Outbound;
}