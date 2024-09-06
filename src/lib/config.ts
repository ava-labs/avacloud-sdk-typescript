/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { pathToFunc } from "./url.js";

export type SDKOptions = {
    apiKey?: string | (() => Promise<string>);

    /**
     * Allows setting the chainId parameter for all supported operations
     */
    chainId?: string | undefined;

    /**
     * Allows setting the network parameter for all supported operations
     */
    network?: components.GlobalParamNetwork | undefined;

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
    sdkVersion: "0.4.1",
    genVersion: "2.411.5",
    userAgent: "speakeasy-sdk/typescript 0.4.1 2.411.5 Beta @avalabs/avacloud-sdk",
} as const;
