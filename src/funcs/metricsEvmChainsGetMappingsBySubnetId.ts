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
import { GetMappingsBySubnetIdServerList } from "../models/operations/getmappingsbysubnetid.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import { createPageIterator, haltIterator, PageIterator, Paginator } from "../types/operations.js";

/**
 * Subnet ID to EVM Chain ID mappings
 *
 * @remarks
 * Get a Popsicle API supported mapping by subnet ID.
 */
export async function metricsEvmChainsGetMappingsBySubnetId(
    client$: AvalancheSDKCore,
    request: operations.GetMappingsBySubnetIdRequest,
    options?: RequestOptions & { serverURL?: string }
): Promise<
    PageIterator<
        Result<
            operations.GetMappingsBySubnetIdResponse,
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
        (value$) => operations.GetMappingsBySubnetIdRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const baseURL$ =
        options?.serverURL ||
        pathToFunc(GetMappingsBySubnetIdServerList[0], { charEncoding: "percent" })();

    const pathParams$ = {
        subnetID: encodeSimple$("subnetID", payload$.subnetID, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v1/mapping/{subnetID}")(pathParams$);

    const query$ = encodeFormQuery$({
        from: payload$.from,
        startKey: payload$.startKey,
        to: payload$.to,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = {
        operationID: "getMappingsBySubnetId",
        oAuth2Scopes: [],
        securitySource: null,
    };

    const requestRes = client$.createRequest$(
        context,
        {
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
        operations.GetMappingsBySubnetIdResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.GetMappingsBySubnetIdResponse$inboundSchema, { key: "Result" }),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return haltIterator(result$);
    }

    const nextFunc = (
        responseData: unknown
    ): Paginator<
        Result<
            operations.GetMappingsBySubnetIdResponse,
            | SDKError
            | SDKValidationError
            | UnexpectedClientError
            | InvalidRequestError
            | RequestAbortedError
            | RequestTimeoutError
            | ConnectionError
        >
    > => {
        const nextCursor = dlv(responseData, "nextPageStartKey");

        if (nextCursor == null) {
            return () => null;
        }

        return () =>
            metricsEvmChainsGetMappingsBySubnetId(
                client$,
                {
                    ...input$,
                    startKey: nextCursor,
                },
                options
            );
    };

    const page$ = { ...result$, next: nextFunc(raw$) };
    return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}