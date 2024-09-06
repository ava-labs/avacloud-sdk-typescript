/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    DateRangeMinBalanceParam,
    DateRangeMinBalanceParam$inboundSchema,
    DateRangeMinBalanceParam$Outbound,
    DateRangeMinBalanceParam$outboundSchema,
} from "./daterangeminbalanceparam.js";
import * as z from "zod";

export const AnyTimeNativeBalanceQueryDtoType = {
    AnyTimeNativeBalance: "AnyTimeNativeBalance",
} as const;
export type AnyTimeNativeBalanceQueryDtoType = ClosedEnum<typeof AnyTimeNativeBalanceQueryDtoType>;

export type AnyTimeNativeBalanceQueryDto = {
    id: string;
    type: AnyTimeNativeBalanceQueryDtoType;
    params: DateRangeMinBalanceParam;
};

/** @internal */
export const AnyTimeNativeBalanceQueryDtoType$inboundSchema: z.ZodNativeEnum<
    typeof AnyTimeNativeBalanceQueryDtoType
> = z.nativeEnum(AnyTimeNativeBalanceQueryDtoType);

/** @internal */
export const AnyTimeNativeBalanceQueryDtoType$outboundSchema: z.ZodNativeEnum<
    typeof AnyTimeNativeBalanceQueryDtoType
> = AnyTimeNativeBalanceQueryDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnyTimeNativeBalanceQueryDtoType$ {
    /** @deprecated use `AnyTimeNativeBalanceQueryDtoType$inboundSchema` instead. */
    export const inboundSchema = AnyTimeNativeBalanceQueryDtoType$inboundSchema;
    /** @deprecated use `AnyTimeNativeBalanceQueryDtoType$outboundSchema` instead. */
    export const outboundSchema = AnyTimeNativeBalanceQueryDtoType$outboundSchema;
}

/** @internal */
export const AnyTimeNativeBalanceQueryDto$inboundSchema: z.ZodType<
    AnyTimeNativeBalanceQueryDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    type: AnyTimeNativeBalanceQueryDtoType$inboundSchema,
    params: DateRangeMinBalanceParam$inboundSchema,
});

/** @internal */
export type AnyTimeNativeBalanceQueryDto$Outbound = {
    id: string;
    type: string;
    params: DateRangeMinBalanceParam$Outbound;
};

/** @internal */
export const AnyTimeNativeBalanceQueryDto$outboundSchema: z.ZodType<
    AnyTimeNativeBalanceQueryDto$Outbound,
    z.ZodTypeDef,
    AnyTimeNativeBalanceQueryDto
> = z.object({
    id: z.string(),
    type: AnyTimeNativeBalanceQueryDtoType$outboundSchema,
    params: DateRangeMinBalanceParam$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnyTimeNativeBalanceQueryDto$ {
    /** @deprecated use `AnyTimeNativeBalanceQueryDto$inboundSchema` instead. */
    export const inboundSchema = AnyTimeNativeBalanceQueryDto$inboundSchema;
    /** @deprecated use `AnyTimeNativeBalanceQueryDto$outboundSchema` instead. */
    export const outboundSchema = AnyTimeNativeBalanceQueryDto$outboundSchema;
    /** @deprecated use `AnyTimeNativeBalanceQueryDto$Outbound` instead. */
    export type Outbound = AnyTimeNativeBalanceQueryDto$Outbound;
}