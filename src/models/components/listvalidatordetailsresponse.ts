/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ActiveValidatorDetails,
  ActiveValidatorDetails$inboundSchema,
  ActiveValidatorDetails$Outbound,
  ActiveValidatorDetails$outboundSchema,
} from "./activevalidatordetails.js";
import {
  CompletedValidatorDetails,
  CompletedValidatorDetails$inboundSchema,
  CompletedValidatorDetails$Outbound,
  CompletedValidatorDetails$outboundSchema,
} from "./completedvalidatordetails.js";
import {
  PendingValidatorDetails,
  PendingValidatorDetails$inboundSchema,
  PendingValidatorDetails$Outbound,
  PendingValidatorDetails$outboundSchema,
} from "./pendingvalidatordetails.js";
import {
  RemovedValidatorDetails,
  RemovedValidatorDetails$inboundSchema,
  RemovedValidatorDetails$Outbound,
  RemovedValidatorDetails$outboundSchema,
} from "./removedvalidatordetails.js";

export type Validators =
  | (PendingValidatorDetails & { validationStatus: "pending" })
  | (CompletedValidatorDetails & { validationStatus: "completed" })
  | (RemovedValidatorDetails & { validationStatus: "removed" })
  | (ActiveValidatorDetails & { validationStatus: "active" });

export type ListValidatorDetailsResponse = {
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  /**
   * The list of validator Details.
   */
  validators: Array<
    | (PendingValidatorDetails & { validationStatus: "pending" })
    | (CompletedValidatorDetails & { validationStatus: "completed" })
    | (RemovedValidatorDetails & { validationStatus: "removed" })
    | (ActiveValidatorDetails & { validationStatus: "active" })
  >;
};

/** @internal */
export const Validators$inboundSchema: z.ZodType<
  Validators,
  z.ZodTypeDef,
  unknown
> = z.union([
  PendingValidatorDetails$inboundSchema.and(
    z.object({ validationStatus: z.literal("pending") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
  CompletedValidatorDetails$inboundSchema.and(
    z.object({ validationStatus: z.literal("completed") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
  RemovedValidatorDetails$inboundSchema.and(
    z.object({ validationStatus: z.literal("removed") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
  ActiveValidatorDetails$inboundSchema.and(
    z.object({ validationStatus: z.literal("active") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
]);

/** @internal */
export type Validators$Outbound =
  | (PendingValidatorDetails$Outbound & { validationStatus: "pending" })
  | (CompletedValidatorDetails$Outbound & { validationStatus: "completed" })
  | (RemovedValidatorDetails$Outbound & { validationStatus: "removed" })
  | (ActiveValidatorDetails$Outbound & { validationStatus: "active" });

/** @internal */
export const Validators$outboundSchema: z.ZodType<
  Validators$Outbound,
  z.ZodTypeDef,
  Validators
> = z.union([
  PendingValidatorDetails$outboundSchema.and(
    z.object({ validationStatus: z.literal("pending") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
  CompletedValidatorDetails$outboundSchema.and(
    z.object({ validationStatus: z.literal("completed") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
  RemovedValidatorDetails$outboundSchema.and(
    z.object({ validationStatus: z.literal("removed") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
  ActiveValidatorDetails$outboundSchema.and(
    z.object({ validationStatus: z.literal("active") }).transform((v) => ({
      validationStatus: v.validationStatus,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Validators$ {
  /** @deprecated use `Validators$inboundSchema` instead. */
  export const inboundSchema = Validators$inboundSchema;
  /** @deprecated use `Validators$outboundSchema` instead. */
  export const outboundSchema = Validators$outboundSchema;
  /** @deprecated use `Validators$Outbound` instead. */
  export type Outbound = Validators$Outbound;
}

/** @internal */
export const ListValidatorDetailsResponse$inboundSchema: z.ZodType<
  ListValidatorDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  nextPageToken: z.string().optional(),
  validators: z.array(
    z.union([
      PendingValidatorDetails$inboundSchema.and(
        z.object({ validationStatus: z.literal("pending") }).transform((v) => ({
          validationStatus: v.validationStatus,
        })),
      ),
      CompletedValidatorDetails$inboundSchema.and(
        z.object({ validationStatus: z.literal("completed") }).transform((
          v,
        ) => ({ validationStatus: v.validationStatus })),
      ),
      RemovedValidatorDetails$inboundSchema.and(
        z.object({ validationStatus: z.literal("removed") }).transform((v) => ({
          validationStatus: v.validationStatus,
        })),
      ),
      ActiveValidatorDetails$inboundSchema.and(
        z.object({ validationStatus: z.literal("active") }).transform((v) => ({
          validationStatus: v.validationStatus,
        })),
      ),
    ]),
  ),
});

/** @internal */
export type ListValidatorDetailsResponse$Outbound = {
  nextPageToken?: string | undefined;
  validators: Array<
    | (PendingValidatorDetails$Outbound & { validationStatus: "pending" })
    | (CompletedValidatorDetails$Outbound & { validationStatus: "completed" })
    | (RemovedValidatorDetails$Outbound & { validationStatus: "removed" })
    | (ActiveValidatorDetails$Outbound & { validationStatus: "active" })
  >;
};

/** @internal */
export const ListValidatorDetailsResponse$outboundSchema: z.ZodType<
  ListValidatorDetailsResponse$Outbound,
  z.ZodTypeDef,
  ListValidatorDetailsResponse
> = z.object({
  nextPageToken: z.string().optional(),
  validators: z.array(
    z.union([
      PendingValidatorDetails$outboundSchema.and(
        z.object({ validationStatus: z.literal("pending") }).transform((v) => ({
          validationStatus: v.validationStatus,
        })),
      ),
      CompletedValidatorDetails$outboundSchema.and(
        z.object({ validationStatus: z.literal("completed") }).transform((
          v,
        ) => ({ validationStatus: v.validationStatus })),
      ),
      RemovedValidatorDetails$outboundSchema.and(
        z.object({ validationStatus: z.literal("removed") }).transform((v) => ({
          validationStatus: v.validationStatus,
        })),
      ),
      ActiveValidatorDetails$outboundSchema.and(
        z.object({ validationStatus: z.literal("active") }).transform((v) => ({
          validationStatus: v.validationStatus,
        })),
      ),
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListValidatorDetailsResponse$ {
  /** @deprecated use `ListValidatorDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = ListValidatorDetailsResponse$inboundSchema;
  /** @deprecated use `ListValidatorDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = ListValidatorDetailsResponse$outboundSchema;
  /** @deprecated use `ListValidatorDetailsResponse$Outbound` instead. */
  export type Outbound = ListValidatorDetailsResponse$Outbound;
}
