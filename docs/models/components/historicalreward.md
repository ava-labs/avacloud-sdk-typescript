# HistoricalReward

## Example Usage

```typescript
import { HistoricalReward } from "@avalabs/avalanche-sdk/models/components";

let value: HistoricalReward = {
    addresses: ["avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg"],
    txHash: "<value>",
    amountStaked: "<value>",
    nodeId: "<value>",
    startTimestamp: 9840.43,
    endTimestamp: 8919.24,
    rewardType: "VALIDATOR",
    utxoId: "<value>",
    outputIndex: 8061.94,
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `addresses`                                                                    | *string*[]                                                                     | :heavy_check_mark:                                                             | An array of P-Chain wallet addresses.                                          | [<br/>"avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg"<br/>]                      |
| `txHash`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `amountStaked`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `nodeId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `startTimestamp`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `endTimestamp`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `rewardType`                                                                   | [components.RewardType](../../models/components/rewardtype.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `utxoId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `outputIndex`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `reward`                                                                       | [components.AssetWithPriceInfo](../../models/components/assetwithpriceinfo.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `rewardTxHash`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |