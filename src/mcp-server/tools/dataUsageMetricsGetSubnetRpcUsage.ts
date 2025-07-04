/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataUsageMetricsGetSubnetRpcUsage } from "../../funcs/dataUsageMetricsGetSubnetRpcUsage.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetSubnetRpcUsageMetricsRequest$inboundSchema,
};

export const tool$dataUsageMetricsGetSubnetRpcUsage: ToolDefinition<
  typeof args
> = {
  name: "data-usage-metrics-get-subnet-rpc-usage",
  description: `Get usage metrics for the Subnet RPC

Gets metrics for public Subnet RPC usage over a specified time interval aggregated at the specified time-duration granularity.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataUsageMetricsGetSubnetRpcUsage(
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
