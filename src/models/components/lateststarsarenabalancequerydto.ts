/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  LatestStarsArenaBalanceParams,
  LatestStarsArenaBalanceParams$inboundSchema,
  LatestStarsArenaBalanceParams$Outbound,
  LatestStarsArenaBalanceParams$outboundSchema,
} from "./lateststarsarenabalanceparams.js";

export const LatestStarsArenaBalanceQueryDtoType = {
  LatestBalanceStarsArena: "LatestBalanceStarsArena",
} as const;
export type LatestStarsArenaBalanceQueryDtoType = ClosedEnum<
  typeof LatestStarsArenaBalanceQueryDtoType
>;

export type LatestStarsArenaBalanceQueryDto = {
  id: string;
  type: LatestStarsArenaBalanceQueryDtoType;
  params: LatestStarsArenaBalanceParams;
};

/** @internal */
export const LatestStarsArenaBalanceQueryDtoType$inboundSchema: z.ZodNativeEnum<
  typeof LatestStarsArenaBalanceQueryDtoType
> = z.nativeEnum(LatestStarsArenaBalanceQueryDtoType);

/** @internal */
export const LatestStarsArenaBalanceQueryDtoType$outboundSchema:
  z.ZodNativeEnum<typeof LatestStarsArenaBalanceQueryDtoType> =
    LatestStarsArenaBalanceQueryDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LatestStarsArenaBalanceQueryDtoType$ {
  /** @deprecated use `LatestStarsArenaBalanceQueryDtoType$inboundSchema` instead. */
  export const inboundSchema =
    LatestStarsArenaBalanceQueryDtoType$inboundSchema;
  /** @deprecated use `LatestStarsArenaBalanceQueryDtoType$outboundSchema` instead. */
  export const outboundSchema =
    LatestStarsArenaBalanceQueryDtoType$outboundSchema;
}

/** @internal */
export const LatestStarsArenaBalanceQueryDto$inboundSchema: z.ZodType<
  LatestStarsArenaBalanceQueryDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: LatestStarsArenaBalanceQueryDtoType$inboundSchema,
  params: LatestStarsArenaBalanceParams$inboundSchema,
});

/** @internal */
export type LatestStarsArenaBalanceQueryDto$Outbound = {
  id: string;
  type: string;
  params: LatestStarsArenaBalanceParams$Outbound;
};

/** @internal */
export const LatestStarsArenaBalanceQueryDto$outboundSchema: z.ZodType<
  LatestStarsArenaBalanceQueryDto$Outbound,
  z.ZodTypeDef,
  LatestStarsArenaBalanceQueryDto
> = z.object({
  id: z.string(),
  type: LatestStarsArenaBalanceQueryDtoType$outboundSchema,
  params: LatestStarsArenaBalanceParams$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LatestStarsArenaBalanceQueryDto$ {
  /** @deprecated use `LatestStarsArenaBalanceQueryDto$inboundSchema` instead. */
  export const inboundSchema = LatestStarsArenaBalanceQueryDto$inboundSchema;
  /** @deprecated use `LatestStarsArenaBalanceQueryDto$outboundSchema` instead. */
  export const outboundSchema = LatestStarsArenaBalanceQueryDto$outboundSchema;
  /** @deprecated use `LatestStarsArenaBalanceQueryDto$Outbound` instead. */
  export type Outbound = LatestStarsArenaBalanceQueryDto$Outbound;
}
