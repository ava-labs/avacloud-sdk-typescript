# ListErc721BalancesResponse

## Example Usage

```typescript
import { ListErc721BalancesResponse } from "@avalabs/avacloud-sdk/models/components";

let value: ListErc721BalancesResponse = {
  erc721TokenBalances: [
    {
      address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      name: "Wrapped AVAX",
      symbol: "WAVAX",
      ercType: "ERC-721",
      tokenId: "<id>",
      tokenUri: "https://posh-synergy.name/",
      metadata: {
        indexStatus: "MISSING_TOKEN",
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
| `erc721TokenBalances`                                                                                                                  | [components.Erc721TokenBalance](../../models/components/erc721tokenbalance.md)[]                                                       | :heavy_check_mark:                                                                                                                     | The list of ERC-721 token balances for the address.                                                                                    |