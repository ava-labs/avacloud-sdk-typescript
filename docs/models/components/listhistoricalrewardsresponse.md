# ListHistoricalRewardsResponse

## Example Usage

```typescript
import { ListHistoricalRewardsResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListHistoricalRewardsResponse = {
  historicalRewards: [
    {
      addresses: [
        "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
      ],
      txHash: "<value>",
      amountStaked: "<value>",
      nodeId: "<value>",
      startTimestamp: 1448.48,
      endTimestamp: 4880.56,
      rewardType: "DELEGATOR",
      utxoId: "<value>",
      outputIndex: 9404.32,
      reward: {
        assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
        name: "Avalanche",
        symbol: "AVAX",
        denomination: 9,
        type: "nft",
        amount: "5001000",
        historicalPrice: {
          currencyCode: "usd",
          value: 42.42,
        },
      },
      rewardTxHash: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `historicalRewards`                                                                                                                    | [components.HistoricalReward](../../models/components/historicalreward.md)[]                                                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |