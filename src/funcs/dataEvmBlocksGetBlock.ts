/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvaCloudSDKCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetBlockServerList } from "../models/operations/getblock.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Get block
 *
 * @remarks
 * Gets the details of an individual block on the EVM-compatible chain.
 */
export async function dataEvmBlocksGetBlock(
  client$: AvaCloudSDKCore,
  request: operations.GetBlockRequest,
  options?: RequestOptions & { serverURL?: string },
): Promise<
  Result<
    components.GetEvmBlockResponse,
    | errors.BadRequest
    | errors.Unauthorized
    | errors.Forbidden
    | errors.NotFound
    | errors.TooManyRequests
    | errors.InternalServerError
    | errors.BadGateway
    | errors.ServiceUnavailable
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.GetBlockRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const baseURL$ = options?.serverURL
    || pathToFunc(GetBlockServerList[0], { charEncoding: "percent" })();

  const pathParams$ = {
    blockId: encodeSimple$("blockId", payload$.blockId, {
      explode: false,
      charEncoding: "percent",
    }),
    chainId: encodeSimple$(
      "chainId",
      payload$.chainId ?? client$.options$.chainId,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path$ = pathToFunc("/v1/chains/{chainId}/blocks/{blockId}")(
    pathParams$,
  );

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const apiKey$ = await extractSecurity(client$.options$.apiKey);
  const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
  const context = {
    operationID: "getBlock",
    oAuth2Scopes: [],
    securitySource: client$.options$.apiKey,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    baseURL: baseURL$,
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "429",
      "4XX",
      "500",
      "502",
      "503",
      "5XX",
    ],
    retryConfig: options?.retries
      || client$.options$.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 120000,
        },
        retryConnectionErrors: true,
      },
    retryCodes: options?.retryCodes || ["5XX"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$] = await m$.match<
    components.GetEvmBlockResponse,
    | errors.BadRequest
    | errors.Unauthorized
    | errors.Forbidden
    | errors.NotFound
    | errors.TooManyRequests
    | errors.InternalServerError
    | errors.BadGateway
    | errors.ServiceUnavailable
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, components.GetEvmBlockResponse$inboundSchema),
    m$.jsonErr(400, errors.BadRequest$inboundSchema),
    m$.jsonErr(401, errors.Unauthorized$inboundSchema),
    m$.jsonErr(403, errors.Forbidden$inboundSchema),
    m$.jsonErr(404, errors.NotFound$inboundSchema),
    m$.jsonErr(429, errors.TooManyRequests$inboundSchema),
    m$.jsonErr(500, errors.InternalServerError$inboundSchema),
    m$.jsonErr(502, errors.BadGateway$inboundSchema),
    m$.jsonErr(503, errors.ServiceUnavailable$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
