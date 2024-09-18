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
      nodeId: "<value>",
      startTimestamp: 46.95,
      endTimestamp: 1464.41,
      rewardType: "VALIDATOR_FEE",
      progress: 5696.18,
      estimatedReward: {
        assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
        name: "Avalanche",
        symbol: "AVAX",
        denomination: 9,
        type: "secp256k1",
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