/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvaCloudSDKCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
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
import * as operations from "../models/operations/index.js";
import { ListHistoricalPrimaryNetworkRewardsServerList } from "../models/operations/listhistoricalprimarynetworkrewards.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * List historical rewards
 *
 * @remarks
 * Lists historical rewards on the Primary Network for the supplied addresses.
 */
export function dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(
  client: AvaCloudSDKCore,
  request: operations.ListHistoricalPrimaryNetworkRewardsRequest,
  options?: RequestOptions,
): APIPromise<
  PageIterator<
    Result<
      operations.ListHistoricalPrimaryNetworkRewardsResponse,
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
    >,
    { cursor: string }
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: AvaCloudSDKCore,
  request: operations.ListHistoricalPrimaryNetworkRewardsRequest,
  options?: RequestOptions,
): Promise<
  [
    PageIterator<
      Result<
        operations.ListHistoricalPrimaryNetworkRewardsResponse,
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
      >,
      { cursor: string }
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [haltIterator(parsed), { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const baseURL = options?.serverURL
    || pathToFunc(ListHistoricalPrimaryNetworkRewardsServerList[0], {
      charEncoding: "percent",
    })();

  const pathParams = {
    network: encodeSimple(
      "network",
      payload.network ?? client._options.network,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc("/v1/networks/{network}/rewards")(pathParams);

  const query = encodeFormQuery({
    "addresses": payload.addresses,
    "currency": payload.currency,
    "nodeIds": payload.nodeIds,
    "pageSize": payload.pageSize,
    "pageToken": payload.pageToken,
    "sortOrder": payload.sortOrder,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: baseURL ?? "",
    operationID: "listHistoricalPrimaryNetworkRewards",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 120000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: baseURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [haltIterator(requestRes), { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
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
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [haltIterator(doResult), { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.ListHistoricalPrimaryNetworkRewardsResponse,
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
    M.json(
      200,
      operations.ListHistoricalPrimaryNetworkRewardsResponse$inboundSchema,
      { key: "Result" },
    ),
    M.jsonErr(400, errors.BadRequest$inboundSchema),
    M.jsonErr(401, errors.Unauthorized$inboundSchema),
    M.jsonErr(403, errors.Forbidden$inboundSchema),
    M.jsonErr(404, errors.NotFound$inboundSchema),
    M.jsonErr(429, errors.TooManyRequests$inboundSchema),
    M.jsonErr(500, errors.InternalServerError$inboundSchema),
    M.jsonErr(502, errors.BadGateway$inboundSchema),
    M.jsonErr(503, errors.ServiceUnavailable$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [haltIterator(result), {
      status: "complete",
      request: req,
      response,
    }];
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.ListHistoricalPrimaryNetworkRewardsResponse,
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
    >;
    "~next"?: { cursor: string };
  } => {
    const nextCursor = dlv(responseData, "nextPageToken");
    if (nextCursor == null) {
      return { next: () => null };
    }

    const nextVal = () =>
      dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(
        client,
        {
          ...request,
          pageToken: nextCursor,
        },
        options,
      );

    return { next: nextVal, "~next": { cursor: nextCursor } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return [{ ...page, ...createPageIterator(page, (v) => !v.ok) }, {
    status: "complete",
    request: req,
    response,
  }];
}
