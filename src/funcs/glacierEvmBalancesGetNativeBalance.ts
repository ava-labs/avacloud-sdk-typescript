/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvalancheSDKCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
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
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Get native token balance
 *
 * @remarks
 * Gets native token balance of a wallet address.
 *
 * Balance at a given block can be retrieved with the `blockNumber` parameter.
 */
export async function glacierEvmBalancesGetNativeBalance(
    client$: AvalancheSDKCore,
    request: operations.GetNativeBalanceRequest,
    options?: RequestOptions
): Promise<
    Result<
        components.GetNativeBalanceResponse,
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
        (value$) => operations.GetNativeBalanceRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        address: encodeSimple$("address", payload$.address, {
            explode: false,
            charEncoding: "percent",
        }),
        chainId: encodeSimple$("chainId", payload$.chainId ?? client$.options$.chainId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v1/chains/{chainId}/addresses/{address}/balances:getNative")(
        pathParams$
    );

    const query$ = encodeFormQuery$({
        blockNumber: payload$.blockNumber,
        currency: payload$.currency,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const glacierApiKey$ = await extractSecurity(client$.options$.glacierApiKey);
    const security$ = glacierApiKey$ == null ? {} : { glacierApiKey: glacierApiKey$ };
    const context = {
        operationID: "getNativeBalance",
        oAuth2Scopes: [],
        securitySource: client$.options$.glacierApiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
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
        errorCodes: ["400", "401", "403", "404", "429", "4XX", "500", "502", "503", "5XX"],
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

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        components.GetNativeBalanceResponse,
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
        m$.json(200, components.GetNativeBalanceResponse$inboundSchema),
        m$.jsonErr(400, errors.BadRequest$inboundSchema),
        m$.jsonErr(401, errors.Unauthorized$inboundSchema),
        m$.jsonErr(403, errors.Forbidden$inboundSchema),
        m$.jsonErr(404, errors.NotFound$inboundSchema),
        m$.jsonErr(429, errors.TooManyRequests$inboundSchema),
        m$.jsonErr(500, errors.InternalServerError$inboundSchema),
        m$.jsonErr(502, errors.BadGateway$inboundSchema),
        m$.jsonErr(503, errors.ServiceUnavailable$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
