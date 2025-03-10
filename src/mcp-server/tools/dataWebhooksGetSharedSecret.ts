/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataWebhooksGetSharedSecret } from "../../funcs/dataWebhooksGetSharedSecret.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$dataWebhooksGetSharedSecret: ToolDefinition = {
  name: "data-webhooks_get-shared-secret",
  description: `Get a shared secret

Get a previously generated shared secret.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await dataWebhooksGetSharedSecret(
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
