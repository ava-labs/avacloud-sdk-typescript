/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsL1ValidatorsGetMetricsByValidationId } from "../../funcs/metricsL1ValidatorsGetMetricsByValidationId.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetMetricsByValidationIdRequest$inboundSchema,
};

export const tool$metricsL1ValidatorsGetMetricsByValidationId: ToolDefinition<
  typeof args
> = {
  name: "metrics-l1-validators-get-metrics-by-validation-id",
  description: `Get metric values with given validation id and timestamp range

Get given metric values for a given validation id with or without a timestamp range.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metricsL1ValidatorsGetMetricsByValidationId(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
