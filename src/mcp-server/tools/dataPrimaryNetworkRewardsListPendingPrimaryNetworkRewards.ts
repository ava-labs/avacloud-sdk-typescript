/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards } from "../../funcs/dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListPendingPrimaryNetworkRewardsRequest$inboundSchema,
};

export const tool$dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards:
  ToolDefinition<typeof args> = {
    name: "data-primary-network-rewards_list-pending-primary-network-rewards",
    description: `List pending rewards

Lists pending rewards on the Primary Network for the supplied addresses.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await dataPrimaryNetworkRewardsListPendingPrimaryNetworkRewards(
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
