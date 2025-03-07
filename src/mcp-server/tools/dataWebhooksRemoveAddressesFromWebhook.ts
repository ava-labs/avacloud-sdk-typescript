/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataWebhooksRemoveAddressesFromWebhook } from "../../funcs/dataWebhooksRemoveAddressesFromWebhook.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveAddressesFromWebhookRequest$inboundSchema,
};

export const tool$dataWebhooksRemoveAddressesFromWebhook: ToolDefinition<
  typeof args
> = {
  name: "data-webhooks_remove-addresses-from-webhook",
  description: `Remove addresses from webhook

Remove addresses from webhook.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataWebhooksRemoveAddressesFromWebhook(
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
