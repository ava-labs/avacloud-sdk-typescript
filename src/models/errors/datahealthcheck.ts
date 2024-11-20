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
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DataHealthCheckInfo = {
  status?: string | undefined;
  additionalProperties: { [k: string]: string };
};

export type DataHealthCheckError = {
  status?: string | undefined;
  additionalProperties: { [k: string]: string };
};

export type DataHealthCheckDetails = {
  status?: string | undefined;
  additionalProperties: { [k: string]: string };
};

/**
 * The Health Check is not successful
 */
export type DataHealthCheckResponseBodyData = {
  status?: string | undefined;
  info?: { [k: string]: DataHealthCheckInfo } | null | undefined;
  error?: { [k: string]: DataHealthCheckError } | null | undefined;
  details?: { [k: string]: DataHealthCheckDetails } | undefined;
};

/**
 * The Health Check is not successful
 */
export class DataHealthCheckResponseBody extends Error {
  status?: string | undefined;
  info?: { [k: string]: DataHealthCheckInfo } | null | undefined;
  error?: { [k: string]: DataHealthCheckError } | null | undefined;
  details?: { [k: string]: DataHealthCheckDetails } | undefined;

  /** The original data that was passed to this error instance. */
  data$: DataHealthCheckResponseBodyData;

  constructor(err: DataHealthCheckResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.status != null) this.status = err.status;
    if (err.info != null) this.info = err.info;
    if (err.error != null) this.error = err.error;
    if (err.details != null) this.details = err.details;

    this.name = "DataHealthCheckResponseBody";
  }
}

/** @internal */
export const DataHealthCheckInfo$inboundSchema: z.ZodType<
  DataHealthCheckInfo,
  z.ZodTypeDef,
  unknown
> = collectExtraKeys$(
  z.object({
    status: z.string().optional(),
  }).catchall(z.string()),
  "additionalProperties",
);

/** @internal */
export type DataHealthCheckInfo$Outbound = {
  status?: string | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const DataHealthCheckInfo$outboundSchema: z.ZodType<
  DataHealthCheckInfo$Outbound,
  z.ZodTypeDef,
  DataHealthCheckInfo
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
export namespace DataHealthCheckInfo$ {
  /** @deprecated use `DataHealthCheckInfo$inboundSchema` instead. */
  export const inboundSchema = DataHealthCheckInfo$inboundSchema;
  /** @deprecated use `DataHealthCheckInfo$outboundSchema` instead. */
  export const outboundSchema = DataHealthCheckInfo$outboundSchema;
  /** @deprecated use `DataHealthCheckInfo$Outbound` instead. */
  export type Outbound = DataHealthCheckInfo$Outbound;
}

export function dataHealthCheckInfoToJSON(
  dataHealthCheckInfo: DataHealthCheckInfo,
): string {
  return JSON.stringify(
    DataHealthCheckInfo$outboundSchema.parse(dataHealthCheckInfo),
  );
}

export function dataHealthCheckInfoFromJSON(
  jsonString: string,
): SafeParseResult<DataHealthCheckInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataHealthCheckInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataHealthCheckInfo' from JSON`,
  );
}

/** @internal */
export const DataHealthCheckError$inboundSchema: z.ZodType<
  DataHealthCheckError,
  z.ZodTypeDef,
  unknown
> = collectExtraKeys$(
  z.object({
    status: z.string().optional(),
  }).catchall(z.string()),
  "additionalProperties",
);

/** @internal */
export type DataHealthCheckError$Outbound = {
  status?: string | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const DataHealthCheckError$outboundSchema: z.ZodType<
  DataHealthCheckError$Outbound,
  z.ZodTypeDef,
  DataHealthCheckError
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
export namespace DataHealthCheckError$ {
  /** @deprecated use `DataHealthCheckError$inboundSchema` instead. */
  export const inboundSchema = DataHealthCheckError$inboundSchema;
  /** @deprecated use `DataHealthCheckError$outboundSchema` instead. */
  export const outboundSchema = DataHealthCheckError$outboundSchema;
  /** @deprecated use `DataHealthCheckError$Outbound` instead. */
  export type Outbound = DataHealthCheckError$Outbound;
}

export function dataHealthCheckErrorToJSON(
  dataHealthCheckError: DataHealthCheckError,
): string {
  return JSON.stringify(
    DataHealthCheckError$outboundSchema.parse(dataHealthCheckError),
  );
}

export function dataHealthCheckErrorFromJSON(
  jsonString: string,
): SafeParseResult<DataHealthCheckError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataHealthCheckError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataHealthCheckError' from JSON`,
  );
}

/** @internal */
export const DataHealthCheckDetails$inboundSchema: z.ZodType<
  DataHealthCheckDetails,
  z.ZodTypeDef,
  unknown
> = collectExtraKeys$(
  z.object({
    status: z.string().optional(),
  }).catchall(z.string()),
  "additionalProperties",
);

/** @internal */
export type DataHealthCheckDetails$Outbound = {
  status?: string | undefined;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const DataHealthCheckDetails$outboundSchema: z.ZodType<
  DataHealthCheckDetails$Outbound,
  z.ZodTypeDef,
  DataHealthCheckDetails
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
export namespace DataHealthCheckDetails$ {
  /** @deprecated use `DataHealthCheckDetails$inboundSchema` instead. */
  export const inboundSchema = DataHealthCheckDetails$inboundSchema;
  /** @deprecated use `DataHealthCheckDetails$outboundSchema` instead. */
  export const outboundSchema = DataHealthCheckDetails$outboundSchema;
  /** @deprecated use `DataHealthCheckDetails$Outbound` instead. */
  export type Outbound = DataHealthCheckDetails$Outbound;
}

export function dataHealthCheckDetailsToJSON(
  dataHealthCheckDetails: DataHealthCheckDetails,
): string {
  return JSON.stringify(
    DataHealthCheckDetails$outboundSchema.parse(dataHealthCheckDetails),
  );
}

export function dataHealthCheckDetailsFromJSON(
  jsonString: string,
): SafeParseResult<DataHealthCheckDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataHealthCheckDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataHealthCheckDetails' from JSON`,
  );
}

/** @internal */
export const DataHealthCheckResponseBody$inboundSchema: z.ZodType<
  DataHealthCheckResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string().optional(),
  info: z.nullable(z.record(z.lazy(() => DataHealthCheckInfo$inboundSchema)))
    .optional(),
  error: z.nullable(z.record(z.lazy(() => DataHealthCheckError$inboundSchema)))
    .optional(),
  details: z.record(z.lazy(() => DataHealthCheckDetails$inboundSchema))
    .optional(),
})
  .transform((v) => {
    return new DataHealthCheckResponseBody(v);
  });

/** @internal */
export type DataHealthCheckResponseBody$Outbound = {
  status?: string | undefined;
  info?: { [k: string]: DataHealthCheckInfo$Outbound } | null | undefined;
  error?: { [k: string]: DataHealthCheckError$Outbound } | null | undefined;
  details?: { [k: string]: DataHealthCheckDetails$Outbound } | undefined;
};

/** @internal */
export const DataHealthCheckResponseBody$outboundSchema: z.ZodType<
  DataHealthCheckResponseBody$Outbound,
  z.ZodTypeDef,
  DataHealthCheckResponseBody
> = z.instanceof(DataHealthCheckResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    status: z.string().optional(),
    info: z.nullable(z.record(z.lazy(() => DataHealthCheckInfo$outboundSchema)))
      .optional(),
    error: z.nullable(
      z.record(z.lazy(() => DataHealthCheckError$outboundSchema)),
    ).optional(),
    details: z.record(z.lazy(() => DataHealthCheckDetails$outboundSchema))
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataHealthCheckResponseBody$ {
  /** @deprecated use `DataHealthCheckResponseBody$inboundSchema` instead. */
  export const inboundSchema = DataHealthCheckResponseBody$inboundSchema;
  /** @deprecated use `DataHealthCheckResponseBody$outboundSchema` instead. */
  export const outboundSchema = DataHealthCheckResponseBody$outboundSchema;
  /** @deprecated use `DataHealthCheckResponseBody$Outbound` instead. */
  export type Outbound = DataHealthCheckResponseBody$Outbound;
}
