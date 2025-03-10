/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataEvmTransactionsGetTransaction } from "../../funcs/dataEvmTransactionsGetTransaction.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTransactionRequest$inboundSchema,
};

export const tool$dataEvmTransactionsGetTransaction: ToolDefinition<
  typeof args
> = {
  name: "data-evm-transactions_get-transaction",
  description: `Get transaction

Gets the details of a single transaction.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataEvmTransactionsGetTransaction(
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
