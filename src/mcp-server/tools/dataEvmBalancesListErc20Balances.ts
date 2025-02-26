/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmBalancesListErc20Balances } from "../../funcs/dataEvmBalancesListErc20Balances.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListErc20BalancesRequest$inboundSchema,
};

export const tool$dataEvmBalancesListErc20Balances: ToolDefinition<
  typeof args
> = {
  name: "data-evm-balances_list-erc20-balances",
  description: `List ERC-20 balances

Lists ERC-20 token balances of a wallet address.

Balance at a given block can be retrieved with the \`blockNumber\` parameter.

Balance for specific contracts can be retrieved with the \`contractAddresses\` parameter.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataEvmBalancesListErc20Balances(
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
