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
                startTimestamp: 8802.98,
                endTimestamp: 2539.41,
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