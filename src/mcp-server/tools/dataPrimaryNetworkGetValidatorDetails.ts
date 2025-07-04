/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataPrimaryNetworkGetValidatorDetails } from "../../funcs/dataPrimaryNetworkGetValidatorDetails.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetSingleValidatorDetailsRequest$inboundSchema,
};

export const tool$dataPrimaryNetworkGetValidatorDetails: ToolDefinition<
  typeof args
> = {
  name: "data-primary-network-get-validator-details",
  description: `Get single validator details

List validator details for a single validator.  Filterable by validation status.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await dataPrimaryNetworkGetValidatorDetails(
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
