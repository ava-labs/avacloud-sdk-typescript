/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { GlacierSDKCore } from "../core.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
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
 * List teleporter messages
 *
 * @remarks
 * Lists teleporter messages. Ordered by timestamp in descending order.
 */
export async function teleporterListTeleporterMessages(
    client$: GlacierSDKCore,
    request: operations.ListTeleporterMessagesRequest,
    options?: RequestOptions
): Promise<
    Result<
        components.ListTeleporterMessagesResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = typeof request === "undefined" ? {} : request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.ListTeleporterMessagesRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/v1/teleporter/messages")();

    const query$ = encodeFormQuery$({
        destinationBlockchainId: payload$.destinationBlockchainId,
        from: payload$.from,
        network: payload$.network,
        pageSize: payload$.pageSize,
        pageToken: payload$.pageToken,
        sourceBlockchainId: payload$.sourceBlockchainId,
        to: payload$.to,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = {
        operationID: "listTeleporterMessages",
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
        components.ListTeleporterMessagesResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, components.ListTeleporterMessagesResponse$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
