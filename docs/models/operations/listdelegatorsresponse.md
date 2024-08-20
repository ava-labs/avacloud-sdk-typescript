# ListDelegatorsResponse

## Example Usage

```typescript
import { ListDelegatorsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListDelegatorsResponse = {
    result: {
        delegators: [
            {
                txHash: "<value>",
                nodeId: "<value>",
                rewardAddresses: ["<value>"],
                amountDelegated: "<value>",
                delegationFee: "<value>",
                startTimestamp: 6235.64,
                endTimestamp: 6458.94,
                estimatedGrossReward: "<value>",
                estimatedNetReward: "<value>",
                delegationStatus: "pending",
            },
        ],
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListDelegatorDetailsResponse](../../models/components/listdelegatordetailsresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |