/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

export type SDKOptions = {
    /**
     * Allows setting the chainId parameter for all supported operations
     */
    chainId?: string | undefined;

    /**
     * Allows setting the network parameter for all supported operations
     */
    network?: string | undefined;

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    const serverURL = options.serverURL;

    if (!serverURL) {
        return null;
    }

    const params: Record<string, string | undefined> = {};

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "Beta",
    sdkVersion: "0.0.1",
    genVersion: "2.396.0",
    userAgent: "speakeasy-sdk/typescript 0.0.1 2.396.0 Beta @avalabs/avalanche-sdk",
} as const;
