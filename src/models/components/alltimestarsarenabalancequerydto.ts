/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DateRangeStarsArenaMinBalanceParam,
  DateRangeStarsArenaMinBalanceParam$inboundSchema,
  DateRangeStarsArenaMinBalanceParam$Outbound,
  DateRangeStarsArenaMinBalanceParam$outboundSchema,
} from "./daterangestarsarenaminbalanceparam.js";

export const AllTimeStarsArenaBalanceQueryDtoType = {
  AllTimeStarsArenaBalance: "AllTimeStarsArenaBalance",
} as const;
export type AllTimeStarsArenaBalanceQueryDtoType = ClosedEnum<
  typeof AllTimeStarsArenaBalanceQueryDtoType
>;

export type AllTimeStarsArenaBalanceQueryDto = {
  id: string;
  type: AllTimeStarsArenaBalanceQueryDtoType;
  params: DateRangeStarsArenaMinBalanceParam;
};

/** @internal */
export const AllTimeStarsArenaBalanceQueryDtoType$inboundSchema:
  z.ZodNativeEnum<typeof AllTimeStarsArenaBalanceQueryDtoType> = z.nativeEnum(
    AllTimeStarsArenaBalanceQueryDtoType,
  );

/** @internal */
export const AllTimeStarsArenaBalanceQueryDtoType$outboundSchema:
  z.ZodNativeEnum<typeof AllTimeStarsArenaBalanceQueryDtoType> =
    AllTimeStarsArenaBalanceQueryDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllTimeStarsArenaBalanceQueryDtoType$ {
  /** @deprecated use `AllTimeStarsArenaBalanceQueryDtoType$inboundSchema` instead. */
  export const inboundSchema =
    AllTimeStarsArenaBalanceQueryDtoType$inboundSchema;
  /** @deprecated use `AllTimeStarsArenaBalanceQueryDtoType$outboundSchema` instead. */
  export const outboundSchema =
    AllTimeStarsArenaBalanceQueryDtoType$outboundSchema;
}

/** @internal */
export const AllTimeStarsArenaBalanceQueryDto$inboundSchema: z.ZodType<
  AllTimeStarsArenaBalanceQueryDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: AllTimeStarsArenaBalanceQueryDtoType$inboundSchema,
  params: DateRangeStarsArenaMinBalanceParam$inboundSchema,
});

/** @internal */
export type AllTimeStarsArenaBalanceQueryDto$Outbound = {
  id: string;
  type: string;
  params: DateRangeStarsArenaMinBalanceParam$Outbound;
};

/** @internal */
export const AllTimeStarsArenaBalanceQueryDto$outboundSchema: z.ZodType<
  AllTimeStarsArenaBalanceQueryDto$Outbound,
  z.ZodTypeDef,
  AllTimeStarsArenaBalanceQueryDto
> = z.object({
  id: z.string(),
  type: AllTimeStarsArenaBalanceQueryDtoType$outboundSchema,
  params: DateRangeStarsArenaMinBalanceParam$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllTimeStarsArenaBalanceQueryDto$ {
  /** @deprecated use `AllTimeStarsArenaBalanceQueryDto$inboundSchema` instead. */
  export const inboundSchema = AllTimeStarsArenaBalanceQueryDto$inboundSchema;
  /** @deprecated use `AllTimeStarsArenaBalanceQueryDto$outboundSchema` instead. */
  export const outboundSchema = AllTimeStarsArenaBalanceQueryDto$outboundSchema;
  /** @deprecated use `AllTimeStarsArenaBalanceQueryDto$Outbound` instead. */
  export type Outbound = AllTimeStarsArenaBalanceQueryDto$Outbound;
}

export function allTimeStarsArenaBalanceQueryDtoToJSON(
  allTimeStarsArenaBalanceQueryDto: AllTimeStarsArenaBalanceQueryDto,
): string {
  return JSON.stringify(
    AllTimeStarsArenaBalanceQueryDto$outboundSchema.parse(
      allTimeStarsArenaBalanceQueryDto,
    ),
  );
}

export function allTimeStarsArenaBalanceQueryDtoFromJSON(
  jsonString: string,
): SafeParseResult<AllTimeStarsArenaBalanceQueryDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AllTimeStarsArenaBalanceQueryDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AllTimeStarsArenaBalanceQueryDto' from JSON`,
  );
}
