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
import { Result } from "../types/fp.js";
import { createPageIterator, haltIterator, PageIterator, Paginator } from "../types/operations.js";

/**
 * List staking transactions
 *
 * @remarks
 * Lists active staking transactions on the P-Chain for the supplied addresses.
 */
export async function primaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions(
    client$: AvalancheSDKCore,
    request: operations.ListActivePrimaryNetworkStakingTransactionsRequest,
    options?: RequestOptions
): Promise<
    PageIterator<
        Result<
            operations.ListActivePrimaryNetworkStakingTransactionsResponse,
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
            operations.ListActivePrimaryNetworkStakingTransactionsRequest$outboundSchema.parse(
                value$
            ),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        blockchainId: encodeSimple$("blockchainId", payload$.blockchainId, {
            explode: false,
            charEncoding: "percent",
        }),
        network: encodeSimple$("network", payload$.network, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc(
        "/v1/networks/{network}/blockchains/{blockchainId}/transactions:listStaking"
    )(pathParams$);

    const query$ = encodeFormQuery$({
        addresses: payload$.addresses,
        endTimestamp: payload$.endTimestamp,
        pageSize: payload$.pageSize,
        pageToken: payload$.pageToken,
        sortOrder: payload$.sortOrder,
        startTimestamp: payload$.startTimestamp,
        txTypes: payload$.txTypes,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = {
        operationID: "listActivePrimaryNetworkStakingTransactions",
        oAuth2Scopes: [],
        securitySource: null,
    };

    const requestRes = client$.createRequest$(
        context,
        {
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
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return haltIterator(doResult);
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$, raw$] = await m$.match<
        operations.ListActivePrimaryNetworkStakingTransactionsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ListActivePrimaryNetworkStakingTransactionsResponse$inboundSchema, {
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
            operations.ListActivePrimaryNetworkStakingTransactionsResponse,
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
            primaryNetworkTransactionsListActivePrimaryNetworkStakingTransactions(
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
