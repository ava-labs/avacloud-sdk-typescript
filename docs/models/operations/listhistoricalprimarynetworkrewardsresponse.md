# ListHistoricalPrimaryNetworkRewardsResponse

## Example Usage

```typescript
import { ListHistoricalPrimaryNetworkRewardsResponse } from "@avalabs/avalanche-sdk/models/operations";

let value: ListHistoricalPrimaryNetworkRewardsResponse = {
    result: {
        historicalRewards: [
            {
                addresses: ["avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg"],
                txHash: "<value>",
                amountStaked: "<value>",
                nodeId: "<value>",
                startTimestamp: 8326.2,
                endTimestamp: 9571.56,
                rewardType: "VALIDATOR_FEE",
                utxoId: "<value>",
                outputIndex: 1403.5,
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