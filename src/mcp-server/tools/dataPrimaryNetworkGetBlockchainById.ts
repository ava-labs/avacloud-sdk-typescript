/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkGetBlockchainById } from "../../funcs/dataPrimaryNetworkGetBlockchainById.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetBlockchainByIdRequest$inboundSchema,
};

export const tool$dataPrimaryNetworkGetBlockchainById: ToolDefinition<
  typeof args
> = {
  name: "data-primary-network-get-blockchain-by-id",
  description: `Get blockchain details by ID

Get details of the blockchain registered on the network.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataPrimaryNetworkGetBlockchainById(
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
