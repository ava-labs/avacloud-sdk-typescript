/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const SortOrder = {
    Asc: "asc",
    Desc: "desc",
} as const;
export type SortOrder = ClosedEnum<typeof SortOrder>;

/** @internal */
export const SortOrder$inboundSchema: z.ZodNativeEnum<typeof SortOrder> = z.nativeEnum(SortOrder);

/** @internal */
export const SortOrder$outboundSchema: z.ZodNativeEnum<typeof SortOrder> = SortOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SortOrder$ {
    /** @deprecated use `SortOrder$inboundSchema` instead. */
    export const inboundSchema = SortOrder$inboundSchema;
    /** @deprecated use `SortOrder$outboundSchema` instead. */
    export const outboundSchema = SortOrder$outboundSchema;
}
