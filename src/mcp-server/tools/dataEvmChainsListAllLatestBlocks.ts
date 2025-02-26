/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmChainsListAllLatestBlocks } from "../../funcs/dataEvmChainsListAllLatestBlocks.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAllLatestBlocksRequest$inboundSchema,
};

export const tool$dataEvmChainsListAllLatestBlocks: ToolDefinition<
  typeof args
> = {
  name: "data-evm-chains_list-all-latest-blocks",
  description:
    `**[Deprecated]** Lists the latest blocks for all supported EVM chains. Filterable by network.

⚠️ **This operation will be removed in a future release.  Please use /v1/blocks endpoint instead** .`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataEvmChainsListAllLatestBlocks(
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

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
