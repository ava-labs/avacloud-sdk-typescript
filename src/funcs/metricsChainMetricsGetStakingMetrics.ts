/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvaCloudSDKCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
import { GetStakingMetricsServerList } from "../models/operations/getstakingmetrics.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import { createPageIterator, haltIterator, PageIterator, Paginator } from "../types/operations.js";

/**
 * Get staking metrics for a given subnet
 *
 * @remarks
 * Gets staking metrics for a given subnet.
 */
export async function metricsChainMetricsGetStakingMetrics(
    client$: AvaCloudSDKCore,
    request: operations.GetStakingMetricsRequest,
    options?: RequestOptions & { serverURL?: string }
): Promise<
    PageIterator<
        Result<
            operations.GetStakingMetricsResponse,
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
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetStakingMetricsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const baseURL$ =
        options?.serverURL ||
        pathToFunc(GetStakingMetricsServerList[0], { charEncoding: "percent" })();

    const pathParams$ = {
        metric: encodeSimple$("metric", payload$.metric, {
            explode: false,
            charEncoding: "percent",
        }),
        network: encodeSimple$("network", payload$.network ?? client$.options$.network, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v2/networks/{network}/metrics/{metric}")(pathParams$);

    const query$ = encodeFormQuery$({
        endTimestamp: payload$.endTimestamp,
        pageSize: payload$.pageSize,
        pageToken: payload$.pageToken,
        startTimestamp: payload$.startTimestamp,
        subnetId: payload$.subnetId,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "getStakingMetrics",
        oAuth2Scopes: [],
        securitySource: client$.options$.apiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            baseURL: baseURL$,
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return haltIterator(requestRes);
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

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$, raw$] = await m$.match<
        operations.GetStakingMetricsResponse,
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
        m$.json(200, operations.GetStakingMetricsResponse$inboundSchema, { key: "Result" }),
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
        return haltIterator(result$);
    }

    const nextFunc = (
        responseData: unknown
    ): Paginator<
        Result<
            operations.GetStakingMetricsResponse,
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
            metricsChainMetricsGetStakingMetrics(
                client$,
                {
                    ...input$,
                    pageToken: nextCursor,
                },
                options
            );
    };

    const page$ = { ...result$, next: nextFunc(raw$) };
    return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}