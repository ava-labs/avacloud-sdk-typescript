/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvaCloudSDKCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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
import { ListErc1155BalancesServerList } from "../models/operations/listerc1155balances.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * List ERC-1155 balances
 *
 * @remarks
 * Lists ERC-1155 token balances of a wallet address.
 *
 * Balance at a given block can be retrieved with the `blockNumber` parameter.
 *
 * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
 */
export async function dataEvmBalancesListErc1155Balances(
  client: AvaCloudSDKCore,
  request: operations.ListErc1155BalancesRequest,
  options?: RequestOptions & { serverURL?: string },
): Promise<
  PageIterator<
    Result<
      operations.ListErc1155BalancesResponse,
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
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ListErc1155BalancesRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const baseURL = options?.serverURL
    || pathToFunc(ListErc1155BalancesServerList[0], {
      charEncoding: "percent",
    })();

  const pathParams = {
    address: encodeSimple("address", payload.address, {
      explode: false,
      charEncoding: "percent",
    }),
    chainId: encodeSimple(
      "chainId",
      payload.chainId ?? client._options.chainId,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/v1/chains/{chainId}/addresses/{address}/balances:listErc1155",
  )(pathParams);

  const query = encodeFormQuery({
    "blockNumber": payload.blockNumber,
    "contractAddress": payload.contractAddress,
    "pageSize": payload.pageSize,
    "pageToken": payload.pageToken,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const context = {
    operationID: "listErc1155Balances",
    oAuth2Scopes: [],
    securitySource: client._options.apiKey,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

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
    return haltIterator(requestRes);
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
      },
    retryCodes: options?.retryCodes || ["5XX"],
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.ListErc1155BalancesResponse,
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
    M.json(200, operations.ListErc1155BalancesResponse$inboundSchema, {
      key: "Result",
    }),
    M.jsonErr(400, errors.BadRequest$inboundSchema),
    M.jsonErr(401, errors.Unauthorized$inboundSchema),
    M.jsonErr(403, errors.Forbidden$inboundSchema),
    M.jsonErr(404, errors.NotFound$inboundSchema),
    M.jsonErr(429, errors.TooManyRequests$inboundSchema),
    M.jsonErr(500, errors.InternalServerError$inboundSchema),
    M.jsonErr(502, errors.BadGateway$inboundSchema),
    M.jsonErr(503, errors.ServiceUnavailable$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): Paginator<
    Result<
      operations.ListErc1155BalancesResponse,
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
  > => {
    const nextCursor = dlv(responseData, "nextPageToken");
    if (nextCursor == null) {
      return () => null;
    }

    return () =>
      dataEvmBalancesListErc1155Balances(
        client,
        {
          ...request,
          pageToken: nextCursor,
        },
        options,
      );
  };

  const page = { ...result, next: nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
