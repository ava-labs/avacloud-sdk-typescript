# ListErc1155BalancesResponse

## Example Usage

```typescript
import { ListErc1155BalancesResponse } from "@avalabs/avalanche-sdk/models/components";

let value: ListErc1155BalancesResponse = {
    erc1155TokenBalances: [
        {
            address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
            ercType: "ERC-1155",
            tokenId: "<value>",
            tokenUri: "<value>",
            metadata: {
                indexStatus: "INDEXED",
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
| `erc1155TokenBalances`                                                                                                                 | [components.Erc1155TokenBalance](../../models/components/erc1155tokenbalance.md)[]                                                     | :heavy_check_mark:                                                                                                                     | The list of ERC-1155 token balances for the address.                                                                                   |