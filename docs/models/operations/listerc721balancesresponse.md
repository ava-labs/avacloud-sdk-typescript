# ListErc721BalancesResponse

## Example Usage

```typescript
import { ListErc721BalancesResponse } from "@avalabs/avacloud-sdk/models/operations";

let value: ListErc721BalancesResponse = {
  result: {
    nativeTokenBalance: {
      name: "Wrapped AVAX",
      symbol: "WAVAX",
      decimals: 18,
      logoUri:
        "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
      chainId: "43114",
      price: {
        currencyCode: "usd",
        value: 42.42,
      },
      balance: "2000000000000000000",
      balanceValue: {
        currencyCode: "usd",
        value: 42.42,
      },
    },
    erc721TokenBalances: [],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListErc721BalancesResponse](../../models/components/listerc721balancesresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |