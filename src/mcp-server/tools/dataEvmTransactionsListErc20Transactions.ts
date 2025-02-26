/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmTransactionsListErc20Transactions } from "../../funcs/dataEvmTransactionsListErc20Transactions.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListErc20TransactionsRequest$inboundSchema,
};

export const tool$dataEvmTransactionsListErc20Transactions: ToolDefinition<
  typeof args
> = {
  name: "data-evm-transactions_list-erc20-transactions",
  description: `List ERC-20 transfers

Lists ERC-20 transfers for an address. Filterable by block range.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataEvmTransactionsListErc20Transactions(
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
