/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AvalancheSDKCore } from "../core.js";
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
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import { createPageIterator, haltIterator, PageIterator, Paginator } from "../types/operations.js";

/**
 * List historical rewards
 *
 * @remarks
 * Lists historical rewards on the Primary Network for the supplied addresses.
 */
export async function glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(
    client$: AvalancheSDKCore,
    request: operations.ListHistoricalPrimaryNetworkRewardsRequest,
    options?: RequestOptions
): Promise<
    PageIterator<
        Result<
            operations.ListHistoricalPrimaryNetworkRewardsResponse,
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
        (value$) =>
            operations.ListHistoricalPrimaryNetworkRewardsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        network: encodeSimple$("network", payload$.network, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v1/networks/{network}/rewards")(pathParams$);

    const query$ = encodeFormQuery$({
        addresses: payload$.addresses,
        currency: payload$.currency,
        nodeIds: payload$.nodeIds,
        pageSize: payload$.pageSize,
        pageToken: payload$.pageToken,
        sortOrder: payload$.sortOrder,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const glacierApiKey$ = await extractSecurity(client$.options$.glacierApiKey);
    const security$ = glacierApiKey$ == null ? {} : { glacierApiKey: glacierApiKey$ };
    const context = {
        operationID: "listHistoricalPrimaryNetworkRewards",
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
        return haltIterator(requestRes);
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
        return haltIterator(doResult);
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$, raw$] = await m$.match<
        operations.ListHistoricalPrimaryNetworkRewardsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ListHistoricalPrimaryNetworkRewardsResponse$inboundSchema, {
            key: "Result",
        }),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return haltIterator(result$);
    }

    const nextFunc = (
        responseData: unknown
    ): Paginator<
        Result<
            operations.ListHistoricalPrimaryNetworkRewardsResponse,
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
            glacierPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(
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
