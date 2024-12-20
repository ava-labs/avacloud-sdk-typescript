# ListErc721BalancesResponse

## Example Usage

```typescript
import { ListErc721BalancesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListErc721BalancesResponse = {
  result: {
    erc721TokenBalances: [
      {
        address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        ercType: "ERC-721",
        tokenId: "<id>",
        tokenUri: "https://self-reliant-translation.name/",
        metadata: {
          indexStatus: "UNREACHABLE_TOKEN_URI",
        },
        ownerAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        chainId: "43114",
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListErc721BalancesResponse](../../models/components/listerc721balancesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |