/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkRewardsListPendingRewards } from "../../funcs/dataPrimaryNetworkRewardsListPendingRewards.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListPendingPrimaryNetworkRewardsRequest$inboundSchema,
};

export const tool$dataPrimaryNetworkRewardsListPendingRewards: ToolDefinition<
  typeof args
> = {
  name: "data-primary-network-rewards-list-pending-rewards",
  description: `List pending rewards

Lists pending rewards on the Primary Network for the supplied addresses.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataPrimaryNetworkRewardsListPendingRewards(
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
