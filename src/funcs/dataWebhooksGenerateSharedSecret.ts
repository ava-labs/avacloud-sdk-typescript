/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvaCloudSDKCore } from "../core.js";
import * as M from "../lib/matchers.js";
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
import { GenerateSharedSecretServerList } from "../models/operations/generatesharedsecret.js";
import { Result } from "../types/fp.js";

/**
 * Generate a shared secret
 *
 * @remarks
 * Generates a new shared secret.
 */
export async function dataWebhooksGenerateSharedSecret(
  client: AvaCloudSDKCore,
  options?: RequestOptions,
): Promise<
  Result<
    components.SharedSecretsResponse,
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
  const baseURL = options?.serverURL
    || pathToFunc(GenerateSharedSecretServerList[0], {
      charEncoding: "percent",
    })();

  const path = pathToFunc("/v1/webhooks:generateOrRotateSharedSecret")();

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "generateSharedSecret",
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
    method: "POST",
    baseURL: baseURL,
    path: path,
    headers: headers,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
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
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.SharedSecretsResponse,
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
    M.json(201, components.SharedSecretsResponse$inboundSchema),
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
    return result;
  }

  return result;
}
