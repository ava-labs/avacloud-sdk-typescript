/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmTransactionsListLatestTransactionsAllChains } from "../../funcs/dataEvmTransactionsListLatestTransactionsAllChains.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListLatestTransactionsAllChainsRequest$inboundSchema,
};

export const tool$dataEvmTransactionsListLatestTransactionsAllChains:
  ToolDefinition<typeof args> = {
    name: "data-evm-transactions_list-latest-transactions-all-chains",
    description: `List the latest transactions across all supported EVM chains

Lists the most recent transactions from all supported EVM-compatible  chains. The results can be filtered based on transaction status.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await dataEvmTransactionsListLatestTransactionsAllChains(
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
