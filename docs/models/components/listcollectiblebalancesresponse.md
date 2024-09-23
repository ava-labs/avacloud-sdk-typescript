# ListCollectibleBalancesResponse

## Example Usage

```typescript
import { ListCollectibleBalancesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListCollectibleBalancesResponse = {
  collectibleBalances: [
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      ercType: "ERC-1155",
      tokenId: "<value>",
      tokenUri: "<value>",
      metadata: {
        indexStatus: "INVALID_TOKEN_URI",
      },
      chainId: "43114",
      balance: "2000000000000000000",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages. |
| `collectibleBalances`                                                                                                                  | *components.CollectibleBalances*[]                                                                                                     | :heavy_check_mark:                                                                                                                     | The list of ERC-721 and ERC-1155 token balances for the address.                                                                       |