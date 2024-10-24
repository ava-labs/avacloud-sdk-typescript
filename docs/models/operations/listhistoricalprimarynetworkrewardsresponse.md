# ListHistoricalPrimaryNetworkRewardsResponse

## Example Usage

```typescript
import { ListHistoricalPrimaryNetworkRewardsResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListHistoricalPrimaryNetworkRewardsResponse = {
  result: {
    historicalRewards: [
      {
        addresses: [
          "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
        ],
        txHash: "<value>",
        amountStaked: "<value>",
        nodeId: "<id>",
        startTimestamp: 4116.16,
        endTimestamp: 4894.59,
        rewardType: "VALIDATOR",
        utxoId: "<id>",
        outputIndex: 5886.39,
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
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [components.ListHistoricalRewardsResponse](../../models/components/listhistoricalrewardsresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |