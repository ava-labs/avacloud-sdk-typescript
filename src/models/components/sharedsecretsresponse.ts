/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SharedSecretsResponse = {
  secret: string;
};

/** @internal */
export const SharedSecretsResponse$inboundSchema: z.ZodType<
  SharedSecretsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  secret: z.string(),
});

/** @internal */
export type SharedSecretsResponse$Outbound = {
  secret: string;
};

/** @internal */
export const SharedSecretsResponse$outboundSchema: z.ZodType<
  SharedSecretsResponse$Outbound,
  z.ZodTypeDef,
  SharedSecretsResponse
> = z.object({
  secret: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SharedSecretsResponse$ {
  /** @deprecated use `SharedSecretsResponse$inboundSchema` instead. */
  export const inboundSchema = SharedSecretsResponse$inboundSchema;
  /** @deprecated use `SharedSecretsResponse$outboundSchema` instead. */
  export const outboundSchema = SharedSecretsResponse$outboundSchema;
  /** @deprecated use `SharedSecretsResponse$Outbound` instead. */
  export type Outbound = SharedSecretsResponse$Outbound;
}
