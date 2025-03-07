/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsEvmChainsGetChain } from "../../funcs/metricsEvmChainsGetChain.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetChainRequest$inboundSchema,
};

export const tool$metricsEvmChainsGetChain: ToolDefinition<typeof args> = {
  name: "metrics-evm-chains_get-chain",
  description: `Get chain information for supported blockchain

Get chain information for Metrics API supported blockchain.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metricsEvmChainsGetChain(
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
