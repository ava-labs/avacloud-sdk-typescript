/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksAddressesAdd } from "../../funcs/webhooksAddressesAdd.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.AddAddressesToWebhookRequest$inboundSchema,
};

export const tool$webhooksAddressesAdd: ToolDefinition<typeof args> = {
  name: "webhooks-addresses-add",
  description: `Add addresses to EVM activity webhook

Add addresses to webhook. Only valid for EVM activity webhooks.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await webhooksAddressesAdd(
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
