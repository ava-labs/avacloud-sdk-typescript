# ListCollectibleBalancesResponse

## Example Usage

```typescript
import { ListCollectibleBalancesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListCollectibleBalancesResponse = {
  collectibleBalances: [
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      name: "Wrapped AVAX",
      symbol: "WAVAX",
      ercType: "ERC-721",
      tokenId: "<id>",
      tokenUri: "https://functional-entry.biz",
      metadata: {
        indexStatus: "INDEXED",
      },
      ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      chainId: "43114",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `collectibleBalances`                                                                                                                  | *components.CollectibleBalances*[]                                                                                                     | :heavy_check_mark:                                                                                                                     | The list of ERC-721 and ERC-1155 token balances for the address.                                                                       |