# ListErc1155BalancesResponse

## Example Usage

```typescript
import { ListErc1155BalancesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListErc1155BalancesResponse = {
  result: {
    erc1155TokenBalances: [
      {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        ercType: "ERC-1155",
        tokenId: "<id>",
        tokenUri: "https://glittering-underpants.org/",
        metadata: {
          indexStatus: "UNREACHABLE_TOKEN_URI",
        },
        chainId: "43114",
        balance: "2000000000000000000",
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [components.ListErc1155BalancesResponse](../../models/components/listerc1155balancesresponse.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |