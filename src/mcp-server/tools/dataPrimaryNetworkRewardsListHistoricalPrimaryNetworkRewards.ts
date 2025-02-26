/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards } from "../../funcs/dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListHistoricalPrimaryNetworkRewardsRequest$inboundSchema,
};

export const tool$dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards:
  ToolDefinition<typeof args> = {
    name:
      "data-primary-network-rewards_list-historical-primary-network-rewards",
    description: `List historical rewards

Lists historical rewards on the Primary Network for the supplied addresses.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await dataPrimaryNetworkRewardsListHistoricalPrimaryNetworkRewards(
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
