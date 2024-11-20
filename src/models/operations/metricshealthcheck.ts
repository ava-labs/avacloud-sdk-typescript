/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  collectExtraKeys as collectExtraKeys$,
  safeParse,
} from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const MetricsHealthCheckServerList = [
  "https://metrics.avax.network",
] as const;

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
 * The Health Check is successful
 */
export type MetricsHealthCheckResponseBody = {
  status?: string | undefined;
  info?: { [k: string]: Info } | null | undefined;
  error?: { [k: string]: ErrorT } | null | undefined;
  details?: { [k: string]: Details } | undefined;
};

/** @internal */
export const Info$inboundSchema: z.ZodType<Info, z.ZodTypeDef, unknown> =
  collectExtraKeys$(
    z.object({
      status: z.string().optional(),
    }).catchall(z.string()),
    "additionalProperties",
  );

/** @internal */
export type Info$Outbound = {
  status?: string | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const Info$outboundSchema: z.ZodType<Info$Outbound, z.ZodTypeDef, Info> =
  z.object({
    status: z.string().optional(),
    additionalProperties: z.record(z.string()),
  }).transform((v) => {
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

export function infoToJSON(info: Info): string {
  return JSON.stringify(Info$outboundSchema.parse(info));
}

export function infoFromJSON(
  jsonString: string,
): SafeParseResult<Info, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Info$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Info' from JSON`,
  );
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> =
  collectExtraKeys$(
    z.object({
      status: z.string().optional(),
    }).catchall(z.string()),
    "additionalProperties",
  );

/** @internal */
export type ErrorT$Outbound = {
  status?: string | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  status: z.string().optional(),
  additionalProperties: z.record(z.string()),
}).transform((v) => {
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

export function errorTToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorTFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown> =
  collectExtraKeys$(
    z.object({
      status: z.string().optional(),
    }).catchall(z.string()),
    "additionalProperties",
  );

/** @internal */
export type Details$Outbound = {
  status?: string | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const Details$outboundSchema: z.ZodType<
  Details$Outbound,
  z.ZodTypeDef,
  Details
> = z.object({
  status: z.string().optional(),
  additionalProperties: z.record(z.string()),
}).transform((v) => {
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

export function detailsToJSON(details: Details): string {
  return JSON.stringify(Details$outboundSchema.parse(details));
}

export function detailsFromJSON(
  jsonString: string,
): SafeParseResult<Details, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Details$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Details' from JSON`,
  );
}

/** @internal */
export const MetricsHealthCheckResponseBody$inboundSchema: z.ZodType<
  MetricsHealthCheckResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string().optional(),
  info: z.nullable(z.record(z.lazy(() => Info$inboundSchema))).optional(),
  error: z.nullable(z.record(z.lazy(() => ErrorT$inboundSchema))).optional(),
  details: z.record(z.lazy(() => Details$inboundSchema)).optional(),
});

/** @internal */
export type MetricsHealthCheckResponseBody$Outbound = {
  status?: string | undefined;
  info?: { [k: string]: Info$Outbound } | null | undefined;
  error?: { [k: string]: ErrorT$Outbound } | null | undefined;
  details?: { [k: string]: Details$Outbound } | undefined;
};

/** @internal */
export const MetricsHealthCheckResponseBody$outboundSchema: z.ZodType<
  MetricsHealthCheckResponseBody$Outbound,
  z.ZodTypeDef,
  MetricsHealthCheckResponseBody
> = z.object({
  status: z.string().optional(),
  info: z.nullable(z.record(z.lazy(() => Info$outboundSchema))).optional(),
  error: z.nullable(z.record(z.lazy(() => ErrorT$outboundSchema))).optional(),
  details: z.record(z.lazy(() => Details$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsHealthCheckResponseBody$ {
  /** @deprecated use `MetricsHealthCheckResponseBody$inboundSchema` instead. */
  export const inboundSchema = MetricsHealthCheckResponseBody$inboundSchema;
  /** @deprecated use `MetricsHealthCheckResponseBody$outboundSchema` instead. */
  export const outboundSchema = MetricsHealthCheckResponseBody$outboundSchema;
  /** @deprecated use `MetricsHealthCheckResponseBody$Outbound` instead. */
  export type Outbound = MetricsHealthCheckResponseBody$Outbound;
}

export function metricsHealthCheckResponseBodyToJSON(
  metricsHealthCheckResponseBody: MetricsHealthCheckResponseBody,
): string {
  return JSON.stringify(
    MetricsHealthCheckResponseBody$outboundSchema.parse(
      metricsHealthCheckResponseBody,
    ),
  );
}

export function metricsHealthCheckResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<MetricsHealthCheckResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsHealthCheckResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsHealthCheckResponseBody' from JSON`,
  );
}
