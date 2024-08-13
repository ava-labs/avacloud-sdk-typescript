/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const LegacyInterval = {
    Hour: "hour",
    Day: "day",
    Week: "week",
    Month: "month",
} as const;
export type LegacyInterval = ClosedEnum<typeof LegacyInterval>;

/** @internal */
export const LegacyInterval$inboundSchema: z.ZodNativeEnum<typeof LegacyInterval> =
    z.nativeEnum(LegacyInterval);

/** @internal */
export const LegacyInterval$outboundSchema: z.ZodNativeEnum<typeof LegacyInterval> =
    LegacyInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LegacyInterval$ {
    /** @deprecated use `LegacyInterval$inboundSchema` instead. */
    export const inboundSchema = LegacyInterval$inboundSchema;
    /** @deprecated use `LegacyInterval$outboundSchema` instead. */
    export const outboundSchema = LegacyInterval$outboundSchema;
}