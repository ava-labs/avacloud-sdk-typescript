/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataWebhooksCreateWebhook } from "../../funcs/dataWebhooksCreateWebhook.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.CreateWebhookRequest$inboundSchema,
};

export const tool$dataWebhooksCreateWebhook: ToolDefinition<typeof args> = {
  name: "data-webhooks_create-webhook",
  description: `Create a webhook

Create a new webhook.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataWebhooksCreateWebhook(
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
