/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataHealthCheckDataHealthCheck } from "../../funcs/dataHealthCheckDataHealthCheck.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$dataHealthCheckDataHealthCheck: ToolDefinition = {
  name: "data-health-check_data-health-check",
  description: `Get the health of the service

Check the health of the service.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await dataHealthCheckDataHealthCheck(
      client,
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
