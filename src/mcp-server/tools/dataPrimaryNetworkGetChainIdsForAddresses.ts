/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkGetChainIdsForAddresses } from "../../funcs/dataPrimaryNetworkGetChainIdsForAddresses.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetChainIdsForAddressesRequest$inboundSchema,
};

export const tool$dataPrimaryNetworkGetChainIdsForAddresses: ToolDefinition<
  typeof args
> = {
  name: "data-primary-network-get-chain-ids-for-addresses",
  description: `Get chain interactions for addresses

Returns Primary Network chains that each address has touched in the form of an address mapped array. If an address has had any on-chain interaction for a chain, that chain's chain id will be returned.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataPrimaryNetworkGetChainIdsForAddresses(
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
