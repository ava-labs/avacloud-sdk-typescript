/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmBlocksGetBlock } from "../../funcs/dataEvmBlocksGetBlock.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetBlockRequest$inboundSchema,
};

export const tool$dataEvmBlocksGetBlock: ToolDefinition<typeof args> = {
  name: "data-evm-blocks_get-block",
  description: `Get block

Gets the details of an individual block on the EVM-compatible chain.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataEvmBlocksGetBlock(
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
