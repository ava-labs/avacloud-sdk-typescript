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
import * as operations from "../models/operations/index.js";
import { ListCollectibleBalancesServerList } from "../models/operations/listcollectiblebalances.js";
import { Result } from "../types/fp.js";
import { createPageIterator, haltIterator, PageIterator, Paginator } from "../types/operations.js";

/**
 * List collectible (ERC-721/ERC-1155) balances
 *
 * @remarks
 * Lists ERC-721 and ERC-1155 token balances of a wallet address.
 *
 * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
 */
export async function glacierEvmBalancesListCollectibleBalances(
    client$: AvalancheSDKCore,
    request: operations.ListCollectibleBalancesRequest,
    options?: RequestOptions & { serverURL?: string }
): Promise<
    PageIterator<
        Result<
            operations.ListCollectibleBalancesResponse,
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
        (value$) => operations.ListCollectibleBalancesRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const baseURL$ =
        options?.serverURL ||
        pathToFunc(ListCollectibleBalancesServerList[0], { charEncoding: "percent" })();

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

    const path$ = pathToFunc("/v1/chains/{chainId}/addresses/{address}/balances:listCollectibles")(
        pathParams$
    );

    const query$ = encodeFormQuery$({
        contractAddress: payload$.contractAddress,
        pageSize: payload$.pageSize,
        pageToken: payload$.pageToken,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = {
        operationID: "listCollectibleBalances",
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
        operations.ListCollectibleBalancesResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ListCollectibleBalancesResponse$inboundSchema, { key: "Result" }),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return haltIterator(result$);
    }

    const nextFunc = (
        responseData: unknown
    ): Paginator<
        Result<
            operations.ListCollectibleBalancesResponse,
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
            glacierEvmBalancesListCollectibleBalances(
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
