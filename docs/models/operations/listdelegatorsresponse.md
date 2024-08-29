# ListDelegatorsResponse

## Example Usage

```typescript
import { ListDelegatorsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListDelegatorsResponse = {
    result: {
        delegators: [
            {
                txHash: "<value>",
                nodeId: "<value>",
                rewardAddresses: ["<value>"],
                amountDelegated: "<value>",
                delegationFee: "<value>",
                startTimestamp: 5365.79,
                endTimestamp: 6070.45,
                grossReward: "<value>",
                netReward: "<value>",
                delegationStatus: "completed",
            },
        ],
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListDelegatorDetailsResponse](../../models/components/listdelegatordetailsresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |