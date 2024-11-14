# PendingReward

## Example Usage

```typescript
import { PendingReward } from "@avalabs/avacloud-sdk/models/components";

let value: PendingReward = {
  addresses: [
    "avax1h2ccj9f5ay5acl6tyn9mwmw32p8wref8vl8ctg",
  ],
  txHash: "<value>",
  amountStaked: "<value>",
  nodeId: "<id>",
  startTimestamp: 8621.92,
  endTimestamp: 9729.19,
  rewardType: "VALIDATOR_FEE",
  progress: 9065.55,
  estimatedReward: {
    assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
    name: "Avalanche",
    symbol: "AVAX",
    denomination: 9,
    type: "nft",
    amount: "5001000",
  },
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
| `progress`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `estimatedReward`                                                              | [components.AssetAmount](../../models/components/assetamount.md)               | :heavy_check_mark:                                                             | An object containing P-chain Asset basic info and the amount of that Asset ID. |                                                                                |