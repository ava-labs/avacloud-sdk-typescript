/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GlacierSDKCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * List blocks proposed by node
 *
 * @remarks
 * Lists the latest blocks proposed by a given NodeID on one of the Primary Network chains.
 */
export async function primaryNetworkBlocksListPrimaryNetworkBlocksByNodeId(
    client$: GlacierSDKCore,
    request: operations.ListPrimaryNetworkBlocksByNodeIdRequest,
    options?: RequestOptions
): Promise<
    Result<
        components.ListPrimaryNetworkBlocksResponse,
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
        (value$) => operations.ListPrimaryNetworkBlocksByNodeIdRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
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
        nodeId: encodeSimple$("nodeId", payload$.nodeId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc(
        "/v1/networks/{network}/blockchains/{blockchainId}/nodes/{nodeId}/blocks"
    )(pathParams$);

    const query$ = encodeFormQuery$({
        pageSize: payload$.pageSize,
        pageToken: payload$.pageToken,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = {
        operationID: "listPrimaryNetworkBlocksByNodeId",
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
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        components.ListPrimaryNetworkBlocksResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, components.ListPrimaryNetworkBlocksResponse$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
