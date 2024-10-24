# ListDelegatorsResponse

## Example Usage

```typescript
import { ListDelegatorsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListDelegatorsResponse = {
  result: {
    delegators: [
      {
        txHash: "<value>",
        nodeId: "<id>",
        rewardAddresses: [
          "<value>",
        ],
        amountDelegated: "<value>",
        delegationFee: "<value>",
        startTimestamp: 4014.28,
        endTimestamp: 4166.92,
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