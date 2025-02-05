# ListPendingRewardsResponse

## Example Usage

```typescript
import { ListPendingRewardsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListPendingRewardsResponse = {
  pendingRewards: [
    {
      addresses: [
        "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
      ],
      txHash: "<value>",
      amountStaked: "<value>",
      nodeId: "<id>",
      startTimestamp: 8817.21,
      endTimestamp: 2724.37,
      rewardType: "DELEGATOR",
      progress: 3742.96,
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `pendingRewards`                                                                                                                       | [components.PendingReward](../../models/components/pendingreward.md)[]                                                                 | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |