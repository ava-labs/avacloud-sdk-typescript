/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvalancheSDKCore } from "../core.js";
import * as m$ from "../lib/matchers.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
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
export async function glacierWebhooksGenerateSharedSecret(
    client$: AvalancheSDKCore,
    options?: RequestOptions & { serverURL?: string }
): Promise<
    Result<
        components.SharedSecretsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const baseURL$ =
        options?.serverURL ||
        pathToFunc(GenerateSharedSecretServerList[0], { charEncoding: "percent" })();

    const path$ = pathToFunc("/v1/webhooks:generateOrRotateSharedSecret")();

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = { operationID: "generateSharedSecret", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "POST",
            baseURL: baseURL$,
            path: path$,
            headers: headers$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries ||
            client$.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            },
        retryCodes: options?.retryCodes || ["5XX"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        components.SharedSecretsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, components.SharedSecretsResponse$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}