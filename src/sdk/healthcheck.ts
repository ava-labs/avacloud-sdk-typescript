/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsHealthCheckMetricsHealthCheck } from "../funcs/metricsHealthCheckMetricsHealthCheck.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class HealthCheck extends ClientSDK {
    /**
     * Get the health of the service
     */
    async metricsHealthCheck(
        options?: RequestOptions & { serverURL?: string }
    ): Promise<operations.MetricsHealthCheckResponseBody> {
        return unwrapAsync(metricsHealthCheckMetricsHealthCheck(this, options));
    }
}
