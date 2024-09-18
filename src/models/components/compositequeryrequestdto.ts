/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AllTimeErc20BalanceQueryDto,
  AllTimeErc20BalanceQueryDto$inboundSchema,
  AllTimeErc20BalanceQueryDto$Outbound,
  AllTimeErc20BalanceQueryDto$outboundSchema,
} from "./alltimeerc20balancequerydto.js";
import {
  AllTimeNativeBalanceQueryDto,
  AllTimeNativeBalanceQueryDto$inboundSchema,
  AllTimeNativeBalanceQueryDto$Outbound,
  AllTimeNativeBalanceQueryDto$outboundSchema,
} from "./alltimenativebalancequerydto.js";
import {
  AllTimeNftHoldersQueryDto,
  AllTimeNftHoldersQueryDto$inboundSchema,
  AllTimeNftHoldersQueryDto$Outbound,
  AllTimeNftHoldersQueryDto$outboundSchema,
} from "./alltimenftholdersquerydto.js";
import {
  AllTimeStarsArenaBalanceQueryDto,
  AllTimeStarsArenaBalanceQueryDto$inboundSchema,
  AllTimeStarsArenaBalanceQueryDto$Outbound,
  AllTimeStarsArenaBalanceQueryDto$outboundSchema,
} from "./alltimestarsarenabalancequerydto.js";
import {
  AnyTimeErc20BalanceQueryDto,
  AnyTimeErc20BalanceQueryDto$inboundSchema,
  AnyTimeErc20BalanceQueryDto$Outbound,
  AnyTimeErc20BalanceQueryDto$outboundSchema,
} from "./anytimeerc20balancequerydto.js";
import {
  AnyTimeNativeBalanceQueryDto,
  AnyTimeNativeBalanceQueryDto$inboundSchema,
  AnyTimeNativeBalanceQueryDto$Outbound,
  AnyTimeNativeBalanceQueryDto$outboundSchema,
} from "./anytimenativebalancequerydto.js";
import {
  AnyTimeNftHoldersQueryDto,
  AnyTimeNftHoldersQueryDto$inboundSchema,
  AnyTimeNftHoldersQueryDto$Outbound,
  AnyTimeNftHoldersQueryDto$outboundSchema,
} from "./anytimenftholdersquerydto.js";
import {
  AnyTimeStarsArenaBalanceQueryDto,
  AnyTimeStarsArenaBalanceQueryDto$inboundSchema,
  AnyTimeStarsArenaBalanceQueryDto$Outbound,
  AnyTimeStarsArenaBalanceQueryDto$outboundSchema,
} from "./anytimestarsarenabalancequerydto.js";
import {
  LatestBalanceQueryDto,
  LatestBalanceQueryDto$inboundSchema,
  LatestBalanceQueryDto$Outbound,
  LatestBalanceQueryDto$outboundSchema,
} from "./latestbalancequerydto.js";
import {
  LatestStarsArenaBalanceQueryDto,
  LatestStarsArenaBalanceQueryDto$inboundSchema,
  LatestStarsArenaBalanceQueryDto$Outbound,
  LatestStarsArenaBalanceQueryDto$outboundSchema,
} from "./lateststarsarenabalancequerydto.js";
import {
  Operator,
  Operator$inboundSchema,
  Operator$outboundSchema,
} from "./operator.js";

export type Queries =
  | (AllTimeNativeBalanceQueryDto & { type: "AllTimeNativeBalance" })
  | (AnyTimeNativeBalanceQueryDto & { type: "AnyTimeNativeBalance" })
  | (AllTimeErc20BalanceQueryDto & { type: "AllTimeErc20Balance" })
  | (AnyTimeErc20BalanceQueryDto & { type: "AnyTimeErc20Balance" })
  | (AllTimeNftHoldersQueryDto & { type: "AllTimeNftHolders" })
  | (AnyTimeNftHoldersQueryDto & { type: "AnyTimeNftHolders" })
  | (LatestBalanceQueryDto & { type: "LatestBalance" })
  | (AllTimeStarsArenaBalanceQueryDto & { type: "AllTimeStarsArenaBalance" })
  | (AnyTimeStarsArenaBalanceQueryDto & { type: "AnyTimeStarsArenaBalance" })
  | (LatestStarsArenaBalanceQueryDto & { type: "LatestBalanceStarsArena" });

export type CompositeQueryRequestDto = {
  /**
   * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
   */
  pageToken?: string | undefined;
  /**
   * The maximum number of items to return.
   */
  pageSize?: number | undefined;
  queries: Array<
    | (AllTimeNativeBalanceQueryDto & { type: "AllTimeNativeBalance" })
    | (AnyTimeNativeBalanceQueryDto & { type: "AnyTimeNativeBalance" })
    | (AllTimeErc20BalanceQueryDto & { type: "AllTimeErc20Balance" })
    | (AnyTimeErc20BalanceQueryDto & { type: "AnyTimeErc20Balance" })
    | (AllTimeNftHoldersQueryDto & { type: "AllTimeNftHolders" })
    | (AnyTimeNftHoldersQueryDto & { type: "AnyTimeNftHolders" })
    | (LatestBalanceQueryDto & { type: "LatestBalance" })
    | (AllTimeStarsArenaBalanceQueryDto & { type: "AllTimeStarsArenaBalance" })
    | (AnyTimeStarsArenaBalanceQueryDto & { type: "AnyTimeStarsArenaBalance" })
    | (LatestStarsArenaBalanceQueryDto & { type: "LatestBalanceStarsArena" })
  >;
  operator: Operator;
};

/** @internal */
export const Queries$inboundSchema: z.ZodType<Queries, z.ZodTypeDef, unknown> =
  z.union([
    AllTimeNativeBalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AllTimeNativeBalance") }).transform((v) => ({
        type: v.type,
      })),
    ),
    AnyTimeNativeBalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AnyTimeNativeBalance") }).transform((v) => ({
        type: v.type,
      })),
    ),
    AllTimeErc20BalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AllTimeErc20Balance") }).transform((v) => ({
        type: v.type,
      })),
    ),
    AnyTimeErc20BalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AnyTimeErc20Balance") }).transform((v) => ({
        type: v.type,
      })),
    ),
    AllTimeNftHoldersQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AllTimeNftHolders") }).transform((v) => ({
        type: v.type,
      })),
    ),
    AnyTimeNftHoldersQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AnyTimeNftHolders") }).transform((v) => ({
        type: v.type,
      })),
    ),
    LatestBalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("LatestBalance") }).transform((v) => ({
        type: v.type,
      })),
    ),
    AllTimeStarsArenaBalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AllTimeStarsArenaBalance") }).transform((
        v,
      ) => ({ type: v.type })),
    ),
    AnyTimeStarsArenaBalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("AnyTimeStarsArenaBalance") }).transform((
        v,
      ) => ({ type: v.type })),
    ),
    LatestStarsArenaBalanceQueryDto$inboundSchema.and(
      z.object({ type: z.literal("LatestBalanceStarsArena") }).transform((
        v,
      ) => ({ type: v.type })),
    ),
  ]);

/** @internal */
export type Queries$Outbound =
  | (AllTimeNativeBalanceQueryDto$Outbound & { type: "AllTimeNativeBalance" })
  | (AnyTimeNativeBalanceQueryDto$Outbound & { type: "AnyTimeNativeBalance" })
  | (AllTimeErc20BalanceQueryDto$Outbound & { type: "AllTimeErc20Balance" })
  | (AnyTimeErc20BalanceQueryDto$Outbound & { type: "AnyTimeErc20Balance" })
  | (AllTimeNftHoldersQueryDto$Outbound & { type: "AllTimeNftHolders" })
  | (AnyTimeNftHoldersQueryDto$Outbound & { type: "AnyTimeNftHolders" })
  | (LatestBalanceQueryDto$Outbound & { type: "LatestBalance" })
  | (AllTimeStarsArenaBalanceQueryDto$Outbound & {
    type: "AllTimeStarsArenaBalance";
  })
  | (AnyTimeStarsArenaBalanceQueryDto$Outbound & {
    type: "AnyTimeStarsArenaBalance";
  })
  | (LatestStarsArenaBalanceQueryDto$Outbound & {
    type: "LatestBalanceStarsArena";
  });

/** @internal */
export const Queries$outboundSchema: z.ZodType<
  Queries$Outbound,
  z.ZodTypeDef,
  Queries
> = z.union([
  AllTimeNativeBalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AllTimeNativeBalance") }).transform((v) => ({
      type: v.type,
    })),
  ),
  AnyTimeNativeBalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AnyTimeNativeBalance") }).transform((v) => ({
      type: v.type,
    })),
  ),
  AllTimeErc20BalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AllTimeErc20Balance") }).transform((v) => ({
      type: v.type,
    })),
  ),
  AnyTimeErc20BalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AnyTimeErc20Balance") }).transform((v) => ({
      type: v.type,
    })),
  ),
  AllTimeNftHoldersQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AllTimeNftHolders") }).transform((v) => ({
      type: v.type,
    })),
  ),
  AnyTimeNftHoldersQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AnyTimeNftHolders") }).transform((v) => ({
      type: v.type,
    })),
  ),
  LatestBalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("LatestBalance") }).transform((v) => ({
      type: v.type,
    })),
  ),
  AllTimeStarsArenaBalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AllTimeStarsArenaBalance") }).transform((
      v,
    ) => ({ type: v.type })),
  ),
  AnyTimeStarsArenaBalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("AnyTimeStarsArenaBalance") }).transform((
      v,
    ) => ({ type: v.type })),
  ),
  LatestStarsArenaBalanceQueryDto$outboundSchema.and(
    z.object({ type: z.literal("LatestBalanceStarsArena") }).transform((v) => ({
      type: v.type,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Queries$ {
  /** @deprecated use `Queries$inboundSchema` instead. */
  export const inboundSchema = Queries$inboundSchema;
  /** @deprecated use `Queries$outboundSchema` instead. */
  export const outboundSchema = Queries$outboundSchema;
  /** @deprecated use `Queries$Outbound` instead. */
  export type Outbound = Queries$Outbound;
}

/** @internal */
export const CompositeQueryRequestDto$inboundSchema: z.ZodType<
  CompositeQueryRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  queries: z.array(
    z.union([
      AllTimeNativeBalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AllTimeNativeBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      AnyTimeNativeBalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AnyTimeNativeBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      AllTimeErc20BalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AllTimeErc20Balance") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AnyTimeErc20BalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AnyTimeErc20Balance") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AllTimeNftHoldersQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AllTimeNftHolders") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AnyTimeNftHoldersQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AnyTimeNftHolders") }).transform((v) => ({
          type: v.type,
        })),
      ),
      LatestBalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("LatestBalance") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AllTimeStarsArenaBalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AllTimeStarsArenaBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      AnyTimeStarsArenaBalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("AnyTimeStarsArenaBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      LatestStarsArenaBalanceQueryDto$inboundSchema.and(
        z.object({ type: z.literal("LatestBalanceStarsArena") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
    ]),
  ),
  operator: Operator$inboundSchema,
});

/** @internal */
export type CompositeQueryRequestDto$Outbound = {
  pageToken?: string | undefined;
  pageSize: number;
  queries: Array<
    | (AllTimeNativeBalanceQueryDto$Outbound & { type: "AllTimeNativeBalance" })
    | (AnyTimeNativeBalanceQueryDto$Outbound & { type: "AnyTimeNativeBalance" })
    | (AllTimeErc20BalanceQueryDto$Outbound & { type: "AllTimeErc20Balance" })
    | (AnyTimeErc20BalanceQueryDto$Outbound & { type: "AnyTimeErc20Balance" })
    | (AllTimeNftHoldersQueryDto$Outbound & { type: "AllTimeNftHolders" })
    | (AnyTimeNftHoldersQueryDto$Outbound & { type: "AnyTimeNftHolders" })
    | (LatestBalanceQueryDto$Outbound & { type: "LatestBalance" })
    | (AllTimeStarsArenaBalanceQueryDto$Outbound & {
      type: "AllTimeStarsArenaBalance";
    })
    | (AnyTimeStarsArenaBalanceQueryDto$Outbound & {
      type: "AnyTimeStarsArenaBalance";
    })
    | (LatestStarsArenaBalanceQueryDto$Outbound & {
      type: "LatestBalanceStarsArena";
    })
  >;
  operator: string;
};

/** @internal */
export const CompositeQueryRequestDto$outboundSchema: z.ZodType<
  CompositeQueryRequestDto$Outbound,
  z.ZodTypeDef,
  CompositeQueryRequestDto
> = z.object({
  pageToken: z.string().optional(),
  pageSize: z.number().int().default(1000),
  queries: z.array(
    z.union([
      AllTimeNativeBalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AllTimeNativeBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      AnyTimeNativeBalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AnyTimeNativeBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      AllTimeErc20BalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AllTimeErc20Balance") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AnyTimeErc20BalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AnyTimeErc20Balance") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AllTimeNftHoldersQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AllTimeNftHolders") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AnyTimeNftHoldersQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AnyTimeNftHolders") }).transform((v) => ({
          type: v.type,
        })),
      ),
      LatestBalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("LatestBalance") }).transform((v) => ({
          type: v.type,
        })),
      ),
      AllTimeStarsArenaBalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AllTimeStarsArenaBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      AnyTimeStarsArenaBalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("AnyTimeStarsArenaBalance") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
      LatestStarsArenaBalanceQueryDto$outboundSchema.and(
        z.object({ type: z.literal("LatestBalanceStarsArena") }).transform((
          v,
        ) => ({ type: v.type })),
      ),
    ]),
  ),
  operator: Operator$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompositeQueryRequestDto$ {
  /** @deprecated use `CompositeQueryRequestDto$inboundSchema` instead. */
  export const inboundSchema = CompositeQueryRequestDto$inboundSchema;
  /** @deprecated use `CompositeQueryRequestDto$outboundSchema` instead. */
  export const outboundSchema = CompositeQueryRequestDto$outboundSchema;
  /** @deprecated use `CompositeQueryRequestDto$Outbound` instead. */
  export type Outbound = CompositeQueryRequestDto$Outbound;
}
