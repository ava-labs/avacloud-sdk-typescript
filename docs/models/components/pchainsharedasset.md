# PChainSharedAsset

## Example Usage

```typescript
import { PChainSharedAsset } from "@avalabs/avalanche-sdk/models/components";

let value: PChainSharedAsset = {
    assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
    name: "Avalanche",
    symbol: "AVAX",
    denomination: 9,
    type: "nft",
    amount: "5001000",
    utxoCount: 1,
    sharedWithChainId: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
    status: "<value>",
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
| `sharedWithChainId`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM                                       |
| `status`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |