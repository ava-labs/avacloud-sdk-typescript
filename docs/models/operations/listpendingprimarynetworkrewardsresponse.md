# ListPendingPrimaryNetworkRewardsResponse

## Example Usage

```typescript
import { ListPendingPrimaryNetworkRewardsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListPendingPrimaryNetworkRewardsResponse = {
    result: {
        pendingRewards: [
            {
                addresses: ["avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg"],
                txHash: "<value>",
                amountStaked: "<value>",
                nodeId: "<value>",
                startTimestamp: 246.78,
                endTimestamp: 8546.14,
                rewardType: "VALIDATOR",
                progress: 7438.35,
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