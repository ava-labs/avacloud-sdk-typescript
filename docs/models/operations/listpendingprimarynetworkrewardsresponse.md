# ListPendingPrimaryNetworkRewardsResponse

## Example Usage

```typescript
import { ListPendingPrimaryNetworkRewardsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListPendingPrimaryNetworkRewardsResponse = {
  result: {
    pendingRewards: [
      {
        addresses: [
          "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
        ],
        txHash: "<value>",
        amountStaked: "<value>",
        nodeId: "<id>",
        startTimestamp: 2327.73,
        endTimestamp: 3106.29,
        rewardType: "VALIDATOR_FEE",
        progress: 7151.43,
        estimatedReward: {
          assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
          name: "Avalanche",
          symbol: "AVAX",
          denomination: 9,
          type: "nft",
          amount: "5001000",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListPendingRewardsResponse](../../models/components/listpendingrewardsresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |