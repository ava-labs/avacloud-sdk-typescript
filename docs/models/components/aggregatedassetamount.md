# AggregatedAssetAmount

## Example Usage

```typescript
import { AggregatedAssetAmount } from "@avalabs/avacloud-sdk/models/components";

let value: AggregatedAssetAmount = {
  assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
  name: "Avalanche",
  symbol: "AVAX",
  denomination: 9,
  type: "nft",
  amount: "5001000",
  utxoCount: 1,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `assetId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique ID for an asset.                                                                  | th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof                                        |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | Name of this asset.                                                                      | Avalanche                                                                                |
| `symbol`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | Symbol for this asset (max 4 characters).                                                | AVAX                                                                                     |
| `denomination`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | Denomination of this asset to represent fungibility.                                     | 9                                                                                        |
| `type`                                                                                   | [components.PrimaryNetworkAssetType](../../models/components/primarynetworkassettype.md) | :heavy_check_mark:                                                                       | Type of asset like SECP256K1 or NFT.                                                     |                                                                                          |
| `amount`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | Amount of the asset.                                                                     | 5001000                                                                                  |
| `utxoCount`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 1                                                                                        |