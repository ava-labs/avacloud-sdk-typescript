# XChainAssetDetails

## Example Usage

```typescript
import { XChainAssetDetails } from "@avalabs/avacloud-sdk/models/components";

let value: XChainAssetDetails = {
    assetId: "th5aLdWLi32yS9ED6uLGoMMubqHjzMsXhKWwzP6yZTYQKYzof",
    name: "Avalanche",
    symbol: "AVAX",
    denomination: 9,
    type: "nft",
    createdAtTimestamp: 1675444720,
    cap: "fixed",
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
| `createdAtTimestamp`                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | Timestamp in seconds this asset was created on.                                          | 1675444720                                                                               |
| `cap`                                                                                    | [components.PrimaryNetworkAssetCap](../../models/components/primarynetworkassetcap.md)   | :heavy_check_mark:                                                                       | Cap represents if an asset is a variable or fixed cap asset.                             |                                                                                          |